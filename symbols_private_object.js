// Create a User object with a private username & password private field, using symbols
const _username = Symbol("_username");
const _password = Symbol("_password");

const user = {
  [_username]: "zarmaaprod",
  [_password]: "admin123",
  age: 27,
};

console.log(user._password);
console.log(user._username);
console.log(user.age);
