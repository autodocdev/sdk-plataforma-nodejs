import { Customer } from '../src/Customer';

jest.mock('../src/Config');

describe('Customer class', () => {

  let customer: Customer;

  beforeEach(() => {
    customer = new Customer();
  });

  it('all - should get all customers', async () => {
    const result = await customer
      .withUrl('http://host.example/v1/customers')
      .withAuthorization('auth123')
      .all();

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('create - should create new customer with cnpj', async () => {
    const result = await customer
      .withUrl('http://host.example/v1/customers')
      .withAuthorization('auth123')
      .create({
        name: 'customer name',
        company: {
          name: 'company name',
          cnpj: '48.164.562/0001-05',
        },
        occupation_id: [
          '638deac57cbefd714e0700a3',
          '638deb9fcf891c28f0c75ace',
        ],
        service_providers: [
          '638deb9fcf891c28f0c75ace',
          '638deac57cbefd714e0700a3',
        ],
      });

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('create - should create new customer without cnpj', async () => {
    const result = await customer
      .withUrl('http://host.example/v1/customers')
      .withAuthorization('auth123')
      .create({
        name: 'customer name',
        company: {
          name: 'company name',
        },
        occupation_id: [
          '638deac57cbefd714e0700a3',
          '638deb9fcf891c28f0c75ace',
        ],
        service_providers: [
          '638deb9fcf891c28f0c75ace',
          '638deac57cbefd714e0700a3',
        ],
      });

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('getById - should get customer By Id', async () => {
    const result = await customer
      .withUrl('http://host.example/v1/customers')
      .getById('63174c6580e4d9ac7946d953');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('getByCnpj - should get customer By Cnpj', async () => {
    const result = await customer
      .withUrl('http://host.example/v1/customers')
      .getByCnpj('48164562000105');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('update - should update one customer', async () => {
    const result = await customer
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .update(
        'customerId',
        {
          name: 'update name',
          company: {
            name: 'update name company',
            cnpj: '48.164.562/0001-05',
          },
          occupation_id: [
            '638deac57cbefd714e0700a3',
            '638deb9fcf891c28f0c75ace',
          ],
          service_providers: [
            '638deb9fcf891c28f0c75ace',
            '638deac57cbefd714e0700a3',
          ],
        },

      );

    expect(result).toBeDefined();
    expect('204').toEqual(result.code);
  });

  it('delete - should delete one customer', async () => {
    const result = await customer
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .delete('customerId');

    expect(result).toBeDefined();
    expect('204').toBe(result.code);
  });

  it('getOccupations - should get all occupations', async () => {
    const result = await customer
      .withUrl('http://host.example/v1/customers')
      .withAuthorization('auth123')
      .getOccupations('63174c6580e4d9ac7946d953');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('updateOccupation - should update a customer occupation', async () => {
    const result = await customer
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .updateOccupation('customerId','occupationId', {alias: 'update dev'});

    expect(result).toBeDefined();
    expect('204').toEqual(result.code);
  });

  it('getProviders - should get all providers or a given customer', async () => {
    const result = await customer
      .withUrl('http://host.example/v1/customers')
      .withAuthorization('auth123')
      .getProviders('63174c6580e4d9ac7946d953');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

});
