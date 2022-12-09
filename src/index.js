const PlantHelpers = require('./helpers/PlantHelpers');
const Plant = require('./models/Plant');
const UserVolunteerHelpers = require('./helpers/UserVolunteerHelpers');
const readlineSync = require('readline-sync');

new Plant('Orquídea', 4, 'Rua das Orquideas, 80 - São Paulo, SP');
new Plant('Rosa', 8, 'Rua dos Espinhos, 1 - São Paulo, SP');

const initMudaSampa = async () => {
  console.clear();
  console.log('----- Bem-vinde ao Muda Sampa =) \n \n ');
  console.log(
    '1. Adotar uma mudinha \n2. Doar uma nova mudinha \n3. Cadastrar usuário\n4. Sair \nOpção escolhida: '
  );

  const optionLogin = readlineSync.question();

  switch (optionLogin) {
    case '1':
      const selectedPlant = await PlantHelpers.adoptPlant();
      await PlantHelpers.choicePlant(selectedPlant);
      console.log(`Planta adotada com sucesso. Endereço de retirada: ${selectedPlant.address}`);

      setTimeout(() => {
        initMudaSampa();
      }, 5000);
      break;
    case '2':
      const user = await UserVolunteerHelpers.login();
      const plant = await PlantHelpers.addPlant(user);
      console.log(`Planta ${plant.name} criada com sucesso`);
      initMudaSampa();
      break;
    case '3':
      await UserVolunteerHelpers.createUser();
      initMudaSampa();
      break;
    case '4':
      console.log('Até logo =)');
      break;
    default:
      console.log('Opção inválida. Tente novamente.');
      initMudaSampa();
      break;
  }
};
initMudaSampa();

module.exports = { initMudaSampa };
