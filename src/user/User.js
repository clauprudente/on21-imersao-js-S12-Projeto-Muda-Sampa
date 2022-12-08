export default class User {
  name;
  loginUser;
  #password;
  adoptedPlants = [];

  constructor(name, login, password) {
    if (name && login && password) {
      this.name = name;
      this.loginUser = login;
      this.password = password;
      return 'Cliente cadastrado';
    } else {
      throw new Error('Erro no cadastro, dados inválidos');
    }
  }
}
