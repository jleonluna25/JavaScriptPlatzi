const salarys= colombia.map(lista=> lista.salary);
/*salarys.push({salary: 1200});
salarys.push({salary: 1500});
salarys.push({salary: 2500});
salarys.push({salary: 2800});
salarys.push({salary: 2800});
salarys.push({salary: 2800});
salarys.push({salary: 1700});
salarys.push({salary: 1200});
salarys.push({salary: 25000});
salarys.push({salary: 1700});
salarys.push({salary: 1800});*/

/*const sortedSalarys= salarys.sort(
    function(salary1, salary2){return salary1 - salary2;}
);
*/
const sortedSalarys= salarys.sort((salary1, salary2)=>salary1 - salary2);

function isPair(lista){
    return lista.length % 2 === 0;
}
function getMediana(lista){
    if(lista.length % 2 === 0){
        var salary1= lista[parseInt(lista.length / 2)];
        var salary2= lista[parseInt(lista.length / 2)-1];
        var mediana= (salary1+salary2)/2;
        return mediana;
    }else{
        var mediana= lista[parseInt(lista.length / 2)];
        return mediana;
    }
}

//Cálculo del salario mensual (demo de práctica).

function newEmployee(employees, employeeName, bSalary){//método para crear un nuevo empleado y agregarlo a una lista, con nombre y salario pasados como parametro
    employees.push({
        name: employeeName,
        basicSalary: bSalary
    });
}

const salarys1= nominaColombia.map(lista=> lista.salary);//arreglo con los salarios básicos de cada empleado en la lista.

function totalPay(days, employeesList){
    //let totalDeducted = employeesList.map(lista=> (lista.basicSalary*this.days)*.04);
    var l = employeesList.map(
        function (){
            const totalEarned = employeesList.basicSalary*days;
            const totalDeducted = (employeesList.basicSalary*days)*.04 + (employeesList.basicSalary*days)*.04;
            const netPay = totalEarned - totalDeducted;
            console.log(employeesList.basicSalary);
            return netPay;
        }
    );
    return l;
}