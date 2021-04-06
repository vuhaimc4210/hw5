//Bai 4

let nhanviens = [
    {
        name: "Huy",
        age: 25,
        salary: 500,
        position: "staff",
    },
    {
        name: "Hoang",
        age: 39,
        salary: 2000,
        position: "manager",
    },
    {
        name: "Hung",
        age: 26,
        salary: 700,
        position: "staff",
    },
]
let todo;
let i = 0;
while(i < 1){
    todo =  prompt("Nhập kí tự C/R/U/D/E").toLowerCase(); // nên đảo chữ đã nhập thành chữ thường
    if (todo === "c"){
        let newName = prompt("Name");
        let newAge = Number(prompt("Age"));
        let newSalary = Number(prompt("Salary"));
        let newPosition = prompt("Position");
        nhanviens.push({
            name: newName,
            age: newAge,
            salary: newSalary,
            position: newPosition,
        });
    }
    else if (todo === "r"){
        console.log(nhanviens);
    }
    else if (todo === "u"){
        let Up = Number(prompt("Update position"));
        nhanviens[Up - 1].name = prompt("Name");
        nhanviens[Up - 1].age = Number(prompt("Age"));
        nhanviens[Up - 1].salary = Number(prompt("Salary"));
        nhanviens[Up - 1].position = prompt("Position");
        console.log(nhanviens);
    }
    else if (todo === "d"){
        let De = Number(prompt("Delete position"));
        nhanviens.splice(De, 1);
        console.log(nhanviens);
    }
    else if (todo === "e"){
        console.log("Dừng chương trình");
        i = 1;
    }
}