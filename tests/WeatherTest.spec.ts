import { Weather } from '../src/Weather';

jest.mock('../src/Config');

describe('Weather class', () => {

  let weather: Weather;

  beforeEach(() => {
    weather = new Weather();
  });

  it('getByRdoId - should get all Weather filter by RdoId', async () => {
    const result = await weather
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('auth123')
      .withCustomer('customer-id')
      .getByRdoId('14d8121463492256732d3dda');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('create - should create one new weather', async () => {
    const result = await weather
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('auth123')
      .withCustomer('abc321')
      .create('14d8121463492256732d3dda', {
          construction_id: '98803909183021',
          period: 'MORNING',
          weather: 'RAINY',
          condition: 'PRODUCTIVE',
          description: 'Lorem ipsum dolor sit amet',
      });

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('getById - should get weather filtered by RDO and idWeather', async () => {
    const result = await weather
      .withUrl('http://host.example/v1/rdo')
      .withCustomer('abc321')
      .getById('56732d3dda14d81214634922', '14d8121463492256732d3dda');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('update - should update one weather', async () => {
    const result = await weather
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('14d8121463492256732d3dda')
      .withCustomer('56732d3dda14d81214634922')
      .update(
        '14d8121463492256732d3dda',
        '3492256732d3d14d812146da',
        {
          construction_id: '98803909183021',
          period: 'MORNING',
          weather: 'RAINY',
          condition: 'PRODUCTIVE',
          description: 'Lorem ipsum dolor sit amet',
        }
      );

    expect(result).toBeDefined();
    expect('204').toEqual(result.code);
  });

  it('delete - should delete one weather', async () => {
    const result = await weather
      .withUrl('http://host.example/v1/rdo')
      .withCustomer('abc321')
      .withAuthorization('14d8121463492256732d3dda')
      .delete('56732d3dda14d81214634922', '14d8121463492256732d3dda');

    expect(result).toBeDefined();
    expect('204').toBe(result.code);
  });
});
