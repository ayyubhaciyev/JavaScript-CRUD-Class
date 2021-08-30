class Company{

     emp = {
        name: ["Ülvi Soltanlı","Teymur Əhmədov","Vahid Əliyev","Kənan Mirzəyev"],
        position: ["Cyber Security","Software Developer","BackEnd Developer","BackEnd Developer"],
        salary: [8500,3500,2000,2000],
     };

    constructor(name,branch,taxNumber){
        this.name = name;
        this.branch = branch;
        this.taxNumber = taxNumber;
    }


    get viewEmp(){
        return this.emp;
    }

    addEmp(name,position,salary){
        this.emp.name.push(name);
        this.emp.position.push(position);
        this.emp.salary.push(salary);
    }

    deleteEmp(id){
        this.emp.name.splice(id,1);
        this.emp.position.splice(id,1);
        this.emp.salary.splice(id,1);
    }

    editView(id){
        return {
            name: this.emp.name[id],
            position: this.emp.position[id],
            salary: this.emp.salary[id],
         };
    }

    updateEmp(id,name,position,salary){
        this.emp.name[id] = name
        this.emp.position[id] = position
        this.emp.salary[id] = salary
    }

}