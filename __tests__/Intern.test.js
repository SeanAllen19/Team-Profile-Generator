const Intern = require("../lib/intern");
const intern = new Intern("Sean","1","Sallen19@gmail.com","Mars");

test('test to see if I can access getRole()', () => {
    expect(intern.getRole()).toBe('Intern');
});

test('test to tsee if I can access getSchool()', () => {
    expect(intern.getSchool()).toBe('Mars')
})