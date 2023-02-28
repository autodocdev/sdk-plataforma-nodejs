import axios from 'axios';
import {expect, jest, it, describe, beforeEach} from '@jest/globals';
import { Sso } from '../src/Sso';

jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

describe('Sso class', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it('auth - should call method returning 200', async () => {
    jest.spyOn(Sso.prototype,'auth').mockImplementation(() => mockAxios.post('/auth'));
    mockAxios.post.mockResolvedValue({ data: { status: '200'}});

    const result = await new Sso()
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .withCustomer('auth123')
      .auth({username: 'user', password: 'pass'});

    expect('200').toEqual(result.data.status);
  });

  it('reset - should call method returning 200', async () => {
    jest.spyOn(Sso.prototype,'reset').mockResolvedValue({ data: { status: '200'}});

    const result = await new Sso()
      .withUrl('http://host.example/v1')
      .reset({ username: 'user'});

    expect('200').toEqual(result.data.status);
  });

  it('first-access - should call method returning 200', async () => {
    jest.spyOn(Sso.prototype,'firstAccess').mockResolvedValue({ data: { status: '200'}});

    const result = await new Sso()
      .withUrl('http://host.example/v1')
      .firstAccess({
        username: 'user',
        password: 'pass',
        session: 'session'
      });

    expect('200').toEqual(result.data.status);
  });

  it('confirm - should call method returning 200', async () => {
    jest.spyOn(Sso.prototype,'confirm').mockResolvedValue({ data: { status: '200'}});

    const result = await new Sso()
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .confirm({
        username: 'user',
        password: 'pass',
        confirmCode: 'pass',
      });

    expect('200').toEqual(result.data.status);
  });

  it('retrieve-new-token - should call method returning 200', async () => {
    jest.spyOn(Sso.prototype,'refreshToken').mockResolvedValue({ data: { status: '200'}});

    const result = await new Sso()
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .refreshToken({refreshToken: 'token'});

    expect('200').toEqual(result.data.status);
  });

  it('logout - should call method returning 200', async () => {
    jest.spyOn(Sso.prototype,'logout').mockResolvedValue({ data: { status: '200'}});

    const result = await new Sso()
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .logout({refreshToken: 'token'});

    expect('200').toEqual(result.data.status);
  });

  it('change-password - should call method returning 200', async () => {
    jest.spyOn(Sso.prototype,'changePassword').mockResolvedValue({ data: { status: '200'}});

    const result = await new Sso()
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .changePassword({
        accessToken: 'user',
        previousPassword: 'pass',
        newPassword: 'pass'
      });

    expect('200').toEqual(result.data.status);
  });

  it('account - should call method returning 200', async () => {
    jest.spyOn(Sso.prototype,'account').mockResolvedValue({ data: { status: '200'}});

    const result = await new Sso()
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .account('mail@mail.com');

    expect('200').toEqual(result.data.status);
  });

  it('updateAccount - should call method returning 204', async () => {
    jest.spyOn(Sso.prototype,'updateAccount').mockResolvedValue({ data: { status: '204'}});

    const result = await new Sso()
      .withUrl('http://host.example/v1')
      .withAuthorization('auth123')
      .updateAccount('mail@mail.com', {
        is_imported: true,
        first_access: true,
        take_to_suite: true
      });

    expect('204').toEqual(result.data.status);
  });

  it('ping - should call method returning 200', async () => {
    jest.spyOn(Sso.prototype, 'ping').mockResolvedValue({ data: '2023-02-14T17:56:01+00:00' });

    const result = await new Sso().withUrl('http://host.example/v1').ping();

    expect('2023-02-14T17:56:01+00:00').toEqual(result.data);
  });

  describe('exceptions', () => {

    it('auth - should return a NotAuthorizedException', async () => {
      jest.spyOn(Sso.prototype,'auth').mockRejectedValue(new Error('Not authorized.'));

      await expect(
        new Sso()
          .withUrl('http://host.example/v1')
          .withAuthorization('auth123')
          .auth({username: 'user', password: 'pass'})
      ).rejects.toThrow('Not authorized.');
    });

    it('ping - should return a Invalid Url', async () => {
      jest.spyOn(Sso.prototype,'ping').mockRejectedValue(new Error('Invalid Url.'));

      await expect(new Sso().ping()).rejects.toThrow('Invalid Url.');
    });
  });
});