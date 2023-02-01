const Manager = require("../lib/manager");
const manager = new Manager("Sean","1","Sallen19@gmail.com","821");

test('test to see if I can access getRole()', () => {
    expect(manager.getRole()).toBe('Manager');
});

test('test to tsee if I can access getOfficeNumber()', () => {
    expect(manager.getOfficeNumber()).toBe('821')
})