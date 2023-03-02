
import axios from 'axios';
import { Config } from '../src/Config';

describe('Config class', () => {
  it('Should return the Axios instance', () => {
    const actual = axios.create({baseURL: ''});

    const config = new Config().getHttpClient();

    expect(actual.defaults.baseURL).toEqual(config.defaults.baseURL);
  });

  it('Should return the Axios instance with Authorization Header', () => {
    const authorization = 'a1b2c3d4e5';

    const result = new Config().withAuthorization(authorization).getHttpClient();

    expect(authorization).toEqual(result.defaults.headers.Authorization);

  });

  it('Should return the Axios instance with Customer Header', () => {
    const customer = 'customer-identity';

    const result = new Config().withCustomer(customer).getHttpClient();

    expect(customer).toEqual(result.defaults.headers['X-Customer-id']);

  });

  it('Should return the Axios instance with the new url', () => {
    const newUrl = 'https://test.com22';

    const result = new Config().withUrl(newUrl).getHttpClient();

    expect(newUrl).toEqual(result.defaults.baseURL);

  });
});
