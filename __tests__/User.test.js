const User = require('../src/models/User.js');
describe('testes da classe User', () => {
  test('verificar se instância de Usuário é criada', () => {
    const user = new User('Cláudia', 'claudia.santos', '123456');
    expect(user instanceof User).toBe(true);
    expect(user.name).toBe('Cláudia');
  });
  test('verificar se cadastro dá erro com dados inválidos', () => {
    expect(() => new User('Cláudia')).toThrow('Erro no cadastro, dados inválidos');
  });
});
