const YupTechnology = new Company(
  "Yup Technology LLC",
  "Azerbaijan",
  "123456789"
);
const AddDataBtn = document.getElementsByClassName("add-data")[0];
const EditDataBtn = document.getElementsByClassName("edit-data")[0];

onload = () => {
  ViewData();
  ViewTable();
};

const ViewData = () => {
  document.getElementsByClassName(
    "title"
  )[0].innerHTML = `${YupTechnology.name} - (${YupTechnology.branch})`;
};

const ViewTable = () => {
  const emp = YupTechnology.viewEmp;
  let data = `
    <tr>
        <th>S/N</th>
        <th>Ad Soyad</th>
        <th>Vəzifə</th>
        <th>Maaş</th>
        <th>Əməliyyatlar</th>
    </tr>
    `;

  for (let i = 0; i < emp.name.length; i++) {
    data += `
            <tr>
                <td>${i + 1}</td>
                <td>${emp.name[i]}</td>
                <td>${emp.position[i]}</td>
                <td>${emp.salary[i]} AZN</td>
                <td>
                    <button onclick="delEmp(${i})" class="btn btn-outline-danger btn-sm">Sil</button>
                    <button onclick="editView(${i})" data-toggle="modal" data-target="#editEmp" class="btn btn-outline-success btn-sm">Redaktə Et</button>
                </td>
            </tr>
        `;
  }
  document.getElementsByClassName("table")[0].innerHTML = data;
};

AddDataBtn.addEventListener("click", function () {
  const name = document.getElementById("user-name").value;
  const position = document.getElementById("user-position").value;
  const salary = document.getElementById("user-salary").value;
  const error = document.getElementsByClassName("alert-danger")[0];

  if (name.length >= 5 && position.length >= 2 && salary >= 250) {
    error.style.display = "none";
    YupTechnology.addEmp(name, position, salary);
    $("#addEmp").modal("hide");
    ViewTable();
  } else {
    error.style.display = "block";
  }
});

const delEmp = (id) => {
  swal({
    title: "Diqqət!",
    text: "Sildiyiniz informasiya geri qaytarılmır!",
    icon: "warning",
    buttons: ["Silmə", "Sil"],
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      YupTechnology.deleteEmp(id);
      ViewTable();

      swal("Əməliyyat uğurla başa çatdı!", {
        icon: "success",
      });
    } else {
      swal("Əməliyyatdan imtina edildi!");
    }
  });
};

const editView = (id) => {
  const data = YupTechnology.editView(id);

  document.getElementById("edit-user-name").value = data.name;
  document.getElementById("edit-user-position").value = data.position;
  document.getElementById("edit-user-salary").value = data.salary;
  document.getElementById("edit-id").value = id;
  $("#editEmp").modal("show");
};


EditDataBtn.addEventListener("click", function () {
  const name = document.getElementById("edit-user-name").value;
  const position = document.getElementById("edit-user-position").value;
  const salary = document.getElementById("edit-user-salary").value;
  const id = document.getElementById("edit-id").value;
  const error = document.getElementsByClassName("alert-danger")[1];

  if (name.length >= 5 && position.length >= 2 && salary >= 250) {
    error.style.display = "none";
    YupTechnology.updateEmp(id,name, position, salary);
    $("#editEmp").modal("hide");
    ViewTable();
    swal({
      title: "Uğurlu!",
      text: "Əməliyyat uğurla icra edildi!",
      icon: "success",
      button: "Ok!",
    });
  } else {
    error.style.display = "block";
  }
});