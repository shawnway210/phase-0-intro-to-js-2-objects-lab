const employee = {
    name : "Bob",
    streetAddress : "1234 wordStreet"
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee= {...employee}
    newEmployee[key] = value;
    return newEmployee
    } 
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee
  }
  function deleteFromEmployeeByKey(employee, key){
    const newEmployee={...employee}
    delete newEmployee[key]
    return newEmployee
    console.log(newEmployee)
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return  employee
    console.log(employee)  
}

