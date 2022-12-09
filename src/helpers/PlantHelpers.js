const Plant = require('../models/Plant');
const readlineSync = require('readline-sync');

module.exports = {
  choicePlant(plant) {
    return new Promise((resolve, reject) => {
      const findIndexPlant = Plant.createdPlants.findIndex((p) => p.name === plant.name);
      Plant.createdPlants[findIndexPlant].quantity--;
      resolve();
    });
  },
  addPlant(user) {
    return new Promise((resolve, reject) => {
      console.clear();
      console.log(`----- Bem-vinde ${user.name}!\n Cadastro de doação de uma nova mudinha:`);
      const name = readlineSync.question('Nome da mudinha: ');
      const quantity = readlineSync.question('Quantidade de mudinhas: ');
      const address = readlineSync.question('Endereço de retirada: ');
      const plant = new Plant(name, quantity, address);
      resolve(plant);
    });
  },
  adoptPlant() {
    return new Promise((resolve, reject) => {
      console.clear();
      console.log('Abaixo as mudinhas disponíveis para doação: ');
      console.table(Plant.createdPlants);

      const indexPlant = readlineSync.question('Digite o index de uma mudinha: ');
      const selectedPlant = Plant.createdPlants[indexPlant];
      console.log(`Você selecionou ${selectedPlant.name}? \n1- Sim\n2- Não\nOpção escolhida: `);
      const checkSelectedPlant = readlineSync.question();
      switch (checkSelectedPlant) {
        case '1':
          resolve(selectedPlant);
          break;
        case '2':
          adoptPlant();
          break;
        default:
          console.log('Planta não existe.');
          adoptPlant();
          break;
      }
    });
  },
};
