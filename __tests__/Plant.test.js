const Plant = require('../src/models/Plant.js');
describe('Teste da classe Plant', () => {
  test('verificar se instância de Planta é feita corretamente', () => {
    const plant = new Plant('Orquidea', 2);

    expect(plant instanceof Plant).toBe(true);
  });
  test('verificar se edição de nome de Planta é feita corretamente', () => {
    const plant = new Plant('Orquidea', 2);

    expect(plant instanceof Plant).toBe(true);

    plant.setName('Rosa');
    expect(plant.name).toBe('Rosa');
  });
  test('verificar se edição de quantidade de Planta é feita corretamente', () => {
    const plant = new Plant('Orquidea', 2);

    expect(plant instanceof Plant).toBe(true);

    plant.setQuantity(4);
    expect(plant.quantity).toBe(4);
  });
});
