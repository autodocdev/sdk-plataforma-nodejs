import { Config } from './Config';
import { AxiosInstance } from 'axios';
import { Create, Update } from './Types/User';

export class User {

  private http: AxiosInstance;

  private config: Config;

  constructor() {
    this.config = new Config();
    this.http = new Config().getHttpClient();
  }

  withAuthorization(value: string): this {
    this.http = this.config.withAuthorization(value).getHttpClient();

    return this;
  }

  withCustomer(value: string): this {
    this.http = this.config.withCustomer(value).getHttpClient();

    return this;
  }

  withUrl(value: string): this {
    this.http = this.config.withUrl(value).getHttpClient();

    return this;
  }

  async all() {
    const response = await this.http.get('/users');
    return response.data;
  }

  async create(data: Create) {
    const response = await this.http.post('/users', data);
    return response.data;
  }

  async getById(userId: string) {
    const response = await this.http.get(`/users/${userId}`);
    return response.data;
  }

  async update(userId: string, data: Update) {
    const response = await this.http.put(`/users/${userId}`, data);
    return response.data;
  }

  async delete(userId: string) {
    const response = await this.http.delete(`/users/${userId}`);
    return response.data;
  }

  async getByEmail(email: string) {
    const response = await this.http.get(`/users/email/${email}`);
    return response.data;
  }

  async deleteGroup(userId: string, groupName: string) {
    const response = await this.http.delete(`/users/${userId}/groups/${groupName}`);
    return response.data;
  }

}
