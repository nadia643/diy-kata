const getEmployerRole = (employeeName, employees) => {
    const employee = employees.find(employeesRole => employees.name === employeeName)
    return employees.role;
}

module.exports = getEmployerRole
