import { Company } from '../src/Company';

jest.mock('../src/Config');

describe('Company class', () => {

  let company: Company;

  beforeEach(() => {
    company = new Company();
  });

  it('all - should get all companies', async () => {
    const result = await company
      .withUrl('http://host.example/v1/companies')
      .withAuthorization('auth123')
      .withCustomer('xCustomerId')
      .all();

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('create - should create new company with cnpj', async () => {
    const result = await company
      .withUrl('http://host.example/v1/companies')
      .withAuthorization('auth123')
      .withCustomer('xCustomerId')
      .create({ name: 'company name', cnpj: '48164562000105'});

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('create - should create new company without cnpj', async () => {
    const result = await company
      .withUrl('http://host.example/v1/companies')
      .withAuthorization('auth123')
      .withCustomer('xCustomerId')
      .create({ name: 'company name'});

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('getById - should get company By Id', async () => {
    const result = await company
      .withUrl('http://host.example/v1/companies')
      .withAuthorization('auth123')
      .withCustomer('xCustomerId')
      .getById('63174c6580e4d9ac7946d953');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('getByCnpj - should get company By Cnpj', async () => {
    const result = await company
      .withUrl('http://host.example/v1/companies/cnpj')
      .withAuthorization('auth123')
      .withCustomer('xCustomerId')
      .getByCnpj('48164562000105');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('update - should update one company', async () => {
    const result = await company
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .withCustomer('xCustomerId')
      .update('customerId', {name: 'update name'});

    expect(result).toBeDefined();
    expect('204').toEqual(result.code);
  });

  it('delete - should delete one company', async () => {
    const result = await company
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .withCustomer('xCustomerId')
      .delete('customerId');

    expect(result).toBeDefined();
    expect('204').toBe(result.code);
  });
});
