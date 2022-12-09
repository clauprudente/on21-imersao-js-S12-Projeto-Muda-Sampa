class User {
  name;
  loginUser;
  #password;
  adoptedPlants = [];

  constructor(name, login, password) {
    if (name && login && password) {
      this.name = name;
      this.loginUser = login;
      this.password = password;
    } else {
      throw new Error('Erro no cadastro, dados inválidos');
    }
  }
}

module.exports = User;
