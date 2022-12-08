import UserVolunteer from '../user/UserVolunteer.js';

export default class Plant {
  name;
  quantity;
  userVolunteer;

  constructor(name, quantity, userVolunteer) {
    if (userVolunteer instanceof UserVolunteer) {
      this.name = name;
      this.quantity = quantity;
      this.userVolunteer = userVolunteer;

      this.constructor.createdPlants.push({
        name: name,
        quantity: quantity,
        userVolunteer: userVolunteer,
      });
    } else {
      throw new Error('Erro no cadastro, usuário não permitido para realizar operação');
    }
  }
  set name(newVal) {
    this.name = newVal;
    // this.constructor.createdPlants.find(plant);
  }

  set quantity(newVal) {
    this.quantity = newVal;
  }

  static createdPlants = [];
}
