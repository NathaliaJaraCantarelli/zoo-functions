const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao receber count devolve a quantidade de elefantes, 4', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('ao receber names devolve um array', () => {
    expect(typeof handlerElephants('names')).toBe('object');
  });
  it('ao receber names devolve um array que contem o nome Jefferson, 4', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });
  it('ao receber averageAge devolve um número próximo a 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('ao receber location devolve uma string', () => {
    expect(typeof handlerElephants('location')).toBe('string');
  });
  it('ao receber location devolve uma string NW', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('ao receber popularity devolve um number', () => {
    expect(typeof handlerElephants('popularity')).toBe('number');
  });
  it('ao receber popularity devolve um number igual ou maior que 5', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('ao receber availability devolve um array', () => {
    expect(typeof handlerElephants('availability')).toBe('object');
  });
  it('ao receber availability devolve um array que não contém Monday', () => {
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
  it('se não receber nenhum argumento devolve undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('se receber um objeto vazio devolve uma string', () => {
    expect(typeof handlerElephants({})).toBe('string');
  });
  it('se receber um objeto vazio devolve uma string Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('se receber uma string que não contempla uma funcionalidade devolve null', () => {
    expect(handlerElephants('ola')).toBe(null);
  });
});
