const Employee = require("../lib/employee");
const employee = new Employee("Sean","1","Sallen19@gmail.com","821");

test('test to see if I can access getRole()', () => {
    expect(employee.getRole()).toBe('Employee');
});

test('test to tsee if I can access getOfficeNumber()', () => {
    expect(employee.getName()).toBe('Sean')
});