const data = require('./data.js');
console.log(data);

// 1. Imprime el salario promedio de todos los empleados que trabajan en Amazon
const averageSalary = (employees, company) => {
    let salario = employees.filter(e => e.company === company).map(e => e.salary);
    let resultado = salario.reduce((siguiente, acumulador) => siguiente + acumulador, 0) / salario.length;
    return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(resultado);
};
console.log(`Salario promedio de los empleados de Amazon: ${averageSalary(data, 'Amazon')}`);

// 2. Imprime la lista de empleados que trabajan en el departamento de Ventas (Sales) de Facebook
const getEmployeesFrom = (employees, company, department) => {
    return employees.filter(e => e.company === company && e.department === department).map(e => e.name);
};
console.log('Empleados que trabajan en el departamento de Ventas de Facebook:');
console.log(getEmployeesFrom(data, 'Facebook', 'Sales'));

// 3. Imprime un valor booleano indicando si existe o no algún empleado de Google que gane más de USD10k 
const existEmployeesFrom = (employees, company, salary) => {
    return employees.some(e => e.company === company && e.salary > salary);
};
console.log(existEmployeesFrom(data, 'Google', 10000));

// 4. Imprime la lista de los empleados (nombre, email y fecha de nacimiento) que trabajen en Datagen
//? Pendiente. 
const printEmployeesFrom = (employees, company) => {
    let listado =  employees.filter(e => e.company === company).map(e => ({
        nombre: e.name.first,
        email: e.email,
        fecha_nacimiento: e.dob
    }));
    console.log(listado);
};

printEmployeesFrom(data, 'Datagen');

// 5. Imprime la lista de empleados nacidos antes de 1990 y que trabajan en Google o Amazon
// Ordena la lista mostrando primero aquellos que ganan más
const getOlderEmployeesFrom = (employees, company1, company2) => {
    return employees.filter(e => (e.company === company1 || e.company === company2) && new Date(e.dob).getFullYear()<1990).sort((a,b) => b.salary - a.salary);
};
console.log('Empleados nacidos antes de 1990 y que trabajan en Google o Amazon, ordenados en forma descendente bajo el criterio del salario:');
console.log(getOlderEmployeesFrom(data, 'Google', 'Amazon'));
