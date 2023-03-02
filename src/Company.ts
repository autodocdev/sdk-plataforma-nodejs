import { AxiosInstance } from 'axios';
import { Config } from './Config';
import { Client } from "./Types/Client";
import { Create, Update } from "./Types/Company";

export class Company implements Client {

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

  async all() {
    const response = await this.http.get('/companies');
    return response.data;
  }

  async create(data: Create) {
    const response = await this.http.post('/companies', data);
    return response.data;
  }

  async getById(companyId: string) {
    const response = await this.http.get(`/companies/${companyId}`);
    return response.data;
  }

  async getByCnpj(cnpj: string) {
    const response = await this.http.get(`/companies/cnpj/${cnpj}`);
    return response.data;
  }

  async update(companyId: string, data: Update) {
    const response = await this.http.put(`/companies/${companyId}`, data);
    return response.data;
  }

  async delete(companyId: string) {
    const response = await this.http.delete(`/companies/${companyId}`);
    return response.data;
  }
}
