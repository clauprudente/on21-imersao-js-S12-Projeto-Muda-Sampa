const User = require('./user/User.js');

const readlineSync = require('readline-sync');

const loginUser = () => {
  const optionLogin = readlineSync.question(
    '1. Entrar como usuário normal \n2. Entrar como admin \n3. Sair \nOpção escolhida: '
  );
  switch (optionLogin) {
    case '1':
      const loginUser = readlineSync.question('Login: ');
      const password = readlineSync.question('Senha: ', {
        hideEchoBack: true,
      });
      break;
    case '2':
      const loginUserAdmin = readlineSync.question('Login: ');
      const passwordAdmin = readlineSync.question('Senha: ', {
        hideEchoBack: true,
      });
      break;
    case '3':
      console.log('Até logo =)');
      break;
    default:
      break;
  }
};

const createUser = () => {
  const optionLogin = readlineSync.question(
    '1. Criar usuário normal \n2. Criar conta admin \n3. Sair \nOpção escolhida: '
  );
  switch (optionLogin) {
    case '1':
      const name = readlineSync.question('Nome: ');
      const loginUser = readlineSync.question('Login do usuário: ');
      const password = readlineSync.question('Senha: ');
      console.log(new User(name, loginUser, password));
      break;
    case '2':
      const loginUserAdmin = readlineSync.question('Login: ');
      const passwordAdmin = readlineSync.question('Senha: ', {
        hideEchoBack: true,
      });
      break;
    case '3':
      console.log('Até logo =)');
      break;
    default:
      break;
  }
};

const initMudaSampa = () => {
  console.clear();
  console.log('----- Bem-vindo ao Muda Sampa =) \n \n ');

  const optionLogin = readlineSync.question(
    '1. Fazer login \n2. Criar uma nova conta \n3. Sair \nOpção escolhida: '
  );
  switch (optionLogin) {
    case '1':
      loginUser();
      break;
    case '2':
      createUser();
      break;
    case '3':
      console.log('Até logo =)');
      break;
    default:
      console.log('Opção inválida. Tente novamente.');
      initMudaSampa();
      break;
  }
};
initMudaSampa();
