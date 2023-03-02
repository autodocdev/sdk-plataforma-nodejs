import { AxiosInstance } from "axios";
import { Config } from "./Config";
import { Client } from "./Types/Client";
import { Create, Update, UpdateOcccupations } from "./Types/Customer";

export class Customer implements Client {

  private http: AxiosInstance;

  private config: Config;

  constructor() {
    this.config = new Config();
    this.http = this.config.getHttpClient();
  }

  withAuthorization(value: string): this {
    this.config.withAuthorization(value).getHttpClient();
    return this;
  }

  withCustomer(value: string): this {
    this.config.withCustomer(value).getHttpClient();
    return this;
  }

  withUrl(value: string): this {
    this.config.withUrl(value).getHttpClient();
    return this;
  }

  async all() {
    const response = await this.http.get('/customers');
    return response.data;
  }

  async create(data: Create) {
    const response = await this.http.post('/customers', data);
    return response.data;
  }

  async getById(customerId: string) {
    const response = await this.http.get(`/customers/${customerId}`);
    return response.data;
  }

  async getByCnpj(cnpj: string) {
    const response = await this.http.get(`/customers/cnpj/${cnpj}`);
    return response.data;
  }

  async update(customerId: string, data: Update) {
    const response = await this.http.put(`/customers/${customerId}`, data);
    return response.data;
  }

  async delete(customerId: string) {
    const response = await this.http.delete(`/customers/${customerId}`);
    return response.data;
  }

  async getOccupations(customerId: string) {
    const response = await this.http.post(`/customers/${customerId}/occupations`);
    return response.data;
  }

  async updateOccupation(customerId: string, data: UpdateOcccupations) {
    const response = await this.http.put(`/customers/${customerId}/occupations`, data);
    return response.data;
  }

  async getProviders(customerId: string) {
    const response = await this.http.post(`/customers/${customerId}/providers`);
    return response.data;
  }
}
