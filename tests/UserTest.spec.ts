import { User } from '../src/User';

jest.mock('../src/Config');

describe('User class', () => {

  let user: User;

  beforeEach(() => {
    user = new User();
  });

  it('all - should get all users', async () => {
    const result = await user
      .withUrl('http://host.example/v1/users')
      .withAuthorization('auth123')
      .withCustomer('ac7946d95363174c6580e4d9')
      .all();

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('create - should create one user', async () => {
    const result = await user
      .withUrl('http://host.example/v1/users')
      .withAuthorization('auth123')
      .withCustomer('ac7946d95363174c6580e4d9')
      .create({
        name: 'name user',
        email: 'mail@user.com',
        confirmationStatus: 'teste',
        notify: true,
        groups: [
          '',
          '',
        ],
        is_imported: true,
        first_access: false,
        take_to_suite: false,
      });

      expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('getById - should get user By Id', async () => {
    const result = await user
      .withUrl('http://host.example/v1/users')
      .withAuthorization('auth123')
      .withCustomer('ac7946d95363174c6580e4d9')
      .getById('63174c6580e4d9ac7946d953');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('update - should update one user', async () => {
    const result = await user
      .withUrl('http://host.example/v1/users')
      .withAuthorization('auth123')
      .withCustomer('ac7946d95363174c6580e4d9')
      .update(
        '63174c6580e4d9ac7946d953',
        {
          name: 'updated name',
          groups: [
            'group one',
            'group two'
          ],
        }
      );

    expect(result).toBeDefined();
    expect('204').toEqual(result.code);
  });

  it('delete - should delete one user', async () => {
    const result = await user
      .withUrl('http://host.example/v1/users')
      .withCustomer('ac7946d95363174c6580e4d9')
      .withAuthorization('auth123')
      .delete('63174c6580e4d9ac7946d953');

    expect(result).toBeDefined();
    expect('204').toBe(result.code);
  });

  it('getByEmail - should get user By Email', async () => {
    const result = await user
      .withUrl('http://host.example/v1/users')
      .withAuthorization('auth123')
      .withCustomer('ac7946d95363174c6580e4d9')
      .getByEmail('user@mail.com');

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('delete - should delete a user group', async () => {
    const result = await user
      .withUrl('http://host.example/v1/users')
      .withCustomer('ac7946d95363174c6580e4d9')
      .withAuthorization('auth123')
      .deleteGroup('63174c6580e4d9ac7946d953', 'ac7946d95363174c6580e4d9');

    expect(result).toBeDefined();
    expect('204').toBe(result.code);
  });

});
