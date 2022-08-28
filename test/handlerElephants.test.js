const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao receber count devolve a quantidade de elefantes, 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('ao receber names devolve um array', () => {
    expect(typeof handlerElephants('names')).toBe('object');
  });
  it('ao receber names devolve um array que contem o nome Jefferson, 4', () => {
    expect(handlerElephants('names')[3]).toBe('Jefferson');
  });
  it('ao receber averageAge devolve um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
