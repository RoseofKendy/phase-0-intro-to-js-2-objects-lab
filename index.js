const employee = {
    name: "Sam",
    streetAddress: "11 Broadway",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Create a shallow copy
    delete newEmployee[key]; // Delete key from the new copy
    return newEmployee; // Return the new copy, original remains unchanged
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Directly modify the original object
    return employee;
  }
  