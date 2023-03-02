import { Sso } from '../src/Sso';

jest.mock('../src/Config');

describe('Sso class', () => {

  let sso: Sso;

  beforeEach(() => {
    sso = new Sso();
  });

  it('auth - should authenticate the user', async () => {
    const result = await sso
    .withUrl('http://host.example/v1')
    .auth({username: 'user', password: 'pass'});

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('reset - should send code to user e-mail', async () => {
    const result = await sso
      .withUrl('http://host.example/v1')
      .reset({ username: 'user'});

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('first-access - should change user password', async () => {
    const result = await sso
      .withUrl('http://host.example/v1')
      .firstAccess({
        username: 'user',
        password: 'pass',
        session: 'session'
      });

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('confirm - should confirm password after reset', async () => {

    const result = await sso
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .confirm({
        username: 'user',
        password: 'pass',
        confirmCode: 'pass',
      });

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('retrieve-new-token - should get new authentication tokens', async () => {
    const result = await sso
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .refreshToken({refreshToken: 'token'});

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('logout - should invalidate tokens', async () => {
    const result = await sso
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .logout({refreshToken: 'token'});

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('change-password - should change user password', async () => {
    const result = await sso
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .changePassword({
        accessToken: 'user',
        previousPassword: 'pass',
        newPassword: 'pass'
      });

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });

  it('account - should get user info in aws cognito', async () => {
    const result = await sso
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .account('mail@mail.com');

    expect('200').toEqual(result.code);
  });

  it('updateAccount - should update user info in aws cognito', async () => {
    const result = await sso
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .withCustomer('custom123')
      .updateAccount('mail@mail.com', {
        is_imported: true,
        first_access: true,
        take_to_suite: true
      });

    expect(result).toBeDefined();
    expect('204').toEqual(result.code);
  });

  it('ping - should get todays date', async () => {
    const result = await sso.withUrl('http://host.example/v1').ping();

    expect(result).toBeDefined();
    expect('200').toEqual(result.code);
  });
});
