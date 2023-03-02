import { Construction } from '../src/Construction';

jest.mock('../src/Config');

describe('Construction class', () => {

  let construction: Construction;

  beforeEach(() => {
    construction = new Construction();
  });

  it('all - should get all constructions', async () => {
    const result = await construction
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .withCustomer('auth123')
      .all();

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('getById - should get item By Id', async () => {
    const result = await construction
      .withUrl('http://host.example/v1')
      .withCustomer('abc321')
      .getById('uuid');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('update - should update one item', async () => {
    const result = await construction
      .withUrl('http://host.example/v1')
      .withCustomer('abc321')
      .withAuthorization('auth123')
      .update(
        'constructuionId',
        {
          name: 'name teste',
          description: 'description teste',
        }
      );

    expect(result).toBeDefined();
    expect('204').toEqual(result.code);
  });

  it('delete - should delete one item', async () => {
    const result = await construction
      .withUrl('http://host.example/v1')
      .withCustomer('abc321')
      .withAuthorization('auth123')
      .delete('constructionId');

    expect(result).toBeDefined();
    expect('204').toBe(result.code);
  });
});
