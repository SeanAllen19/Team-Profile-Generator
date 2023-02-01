const Engineer = require("../lib/engineer");
const engineer = new Engineer("Sean","1","Sallen19@gmail.com","SeanAllen19");

test('test to see if I can access getRole()', () => {
    expect(engineer.getRole()).toBe('Engineer');
});

test('test to tsee if I can access getGithub()', () => {
    expect(engineer.getGithub()).toBe('SeanAllen19');
});