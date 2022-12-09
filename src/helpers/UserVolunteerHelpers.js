const UserVolunteer = require('../models/UserVolunteer');
const index = require('../index');
const PlantHelpers = require('./PlantHelpers');
const readlineSync = require('readline-sync');

module.exports = {
  createUser() {
    return new Promise((resolve, reject) => {
      console.clear();
      console.log('----------------- Criação de usuário.');
      const name = readlineSync.question('Nome: ');
      const login = readlineSync.question('Login do usuario: ');
      const password = readlineSync.question('Senha: ');

      const findUser = UserVolunteer.createdVolunteerUsers.find((user) => user.login === login);

      if (findUser) {
        console.log('Usuário já cadastrado.');
        resolve();
      } else {
        new UserVolunteer(name, login, password);
        console.log('\nUsuário criado com sucesso');
        resolve();
      }
    });
  },
  login() {
    return new Promise((resolve, reject) => {
      console.clear();
      console.log('----------------- Login de usuário.');
      const loginUser = readlineSync.question('Login: ');
      const password = readlineSync.question('Senha: ');
      const findUser = UserVolunteer.createdVolunteerUsers.find((user) => user.login === loginUser);

      if (findUser && findUser.password === password) {
        console.clear();
        resolve(findUser);
      } else {
        console.log('Ocorreu um erro no login. Tente novamente.');
        login();
      }
    });
  },
};
