import { AxiosInstance } from "axios";
import { Config } from "./Config";
import { Client } from "./Types/Client";
import {
  Auth, ChangePassword, Confirm, FirstAccess, Logout, RefreshToken, Reset, UpdateAccount
} from "./Types/Sso";

export class Sso implements Client {

  private http: AxiosInstance;

  private config: Config;

  constructor() {
    this.config = new Config();
    this.http = this.config.getHttpClient();
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

  async auth(data: Auth) {
    const response = await this.http.post('/auth', data);
    return response.data;
  }

  async reset(data: Reset) {
    const response = await this.http.post('/reset', data);
    return response.data;
  }

  async firstAccess(data: FirstAccess) {
    const response = await this.http.post('/first-access', data);
    return response.data;
  }

  async confirm(data: Confirm) {
    const response = await this.http.post('/confirm', data);
    return response.data;
  }

  async refreshToken(data: RefreshToken) {
    const response = await this.http.post('/retrieve-new-token', data);
    return response.data;
  }

  async logout(data: Logout) {
    const response = await this.http.post('/logout', data);
    return response.data;
  }

  async changePassword(data: ChangePassword) {
    const response = await this.http.post('/reset', data);
    return response.data;
  }

  async account(email: string) {
    const response = await this.http.get(`/account/${email}`);
    return response.data;
  }

  async updateAccount(email: string, data: UpdateAccount) {
    const response = await this.http.put(`/account/${email}`, data);
    return response.data;
  }

  async ping() {
    const response = await this.http.get('/ping');
    return response.data;
  }
}
