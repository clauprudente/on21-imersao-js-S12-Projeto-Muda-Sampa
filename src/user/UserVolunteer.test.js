import UserVolunteer from './UserVolunteer.js';
describe('testes da classe UserVolunteer', () => {
  test('verificar se Usuário Voluntário é criado', () => {
    const userVolunteer = new UserVolunteer('Cláudia', 'claudia.santos', '123456');
    expect(userVolunteer instanceof UserVolunteer).toBe(true);
    expect(userVolunteer.name).toBe('Cláudia');
  });

  test('verificar se cadastro dá erro com dados inválidos', () => {
    expect(() => new UserVolunteer('Cláudia')).toThrow('Erro no cadastro, dados inválidos');
  });
});
