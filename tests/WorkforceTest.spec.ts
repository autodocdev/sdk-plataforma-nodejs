import { Workforce } from '../src/Workforce';

jest.mock('../src/Config');

describe('Workforce class', () => {

  let workforce: Workforce;

  beforeEach(() => {
    workforce = new Workforce();
  });

  it('getByRdoId - should get all Workforce filter by RdoId', async () => {
    const result = await workforce
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('auth123')
      .withCustomer('customer-id')
      .getByRdoId('14d8121463492256732d3dda');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('create - should create one new workforce', async () => {
    const result = await workforce
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('auth123')
      .withCustomer('abc321')
      .create('14d8121463492256732d3dda', {
          company_id: '98803909183021',
          occupation_id: 'MORNING',
          type: 'RAINY',
          amount: 'PRODUCTIVE',
      });

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('getById - should get workforce filtered by RDO and idWorkforce', async () => {
    const result = await workforce
      .withUrl('http://host.example/v1/rdo')
      .withCustomer('abc321')
      .getById('56732d3dda14d81214634922', '14d8121463492256732d3dda');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('update - should update one workforce', async () => {
    const result = await workforce
      .withUrl('http://host.example/v1/rdo')
      .withAuthorization('14d8121463492256732d3dda')
      .withCustomer('56732d3dda14d81214634922')
      .update(
        '14d8121463492256732d3dda',
        '3492256732d3d14d812146da',
        {
          company_id: '98803909183021',
          occupation_id: 'MORNING',
          type: 'RAINY',
          amount: 'PRODUCTIVE',
        }
      );

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('delete - should delete one workforce', async () => {
    const result = await workforce
      .withUrl('http://host.example/v1/rdo')
      .withCustomer('abc321')
      .withAuthorization('14d8121463492256732d3dda')
      .delete('56732d3dda14d81214634922', '14d8121463492256732d3dda');

    expect(result).toBeDefined();
    expect('204').toBe(result.code);
  });



  it('createMany - should Create several new workforces', async () => {
    const result = await workforce
      .withUrl('http://host.example/v1/rdo')
      .withCustomer('abc321')
      .withAuthorization('14d8121463492256732d3dda')
      .createMany(
        '14d8121463492256732d3dda',
        {
          rdo_id: '56732d3dda14d81214634922',
          workforces:  [
            {
              "occupation": {
                "id": "5f08b3b1c23d9f977f3827d0",
                "cbo": "22-1101.00",
                "name": "Caça-fantasmas"
              },
              "company": {
                "id": "5f08b3b1c23d9f977f3827d0",
                "cnpj": "11.222.333/0001-44",
                "name": "ACME Inc."
              },
              "type": "INDIRECT",
              "amount": 8126738
            }
          ],
        },
      );

    expect(result).toBeDefined();
    expect('200').toBe(result.code);
  });
});
