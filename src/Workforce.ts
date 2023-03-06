import { AxiosInstance } from "axios";
import { Config } from "./Config";
import { Client } from "./Types/Client";
import { Create, CreateMany, Update } from "./Types/Workforce";

export class Workforce implements Client {

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

  async getByRdoId(rdoId: string) {
    const response = await this.http.get(`/rdo/${rdoId}/workforce`);
    return response.data;
  }

  async create(rdoId: string, data: Create) {
    const response = await this.http.post(`/rdo/${rdoId}/workforce`, data);
    return response.data;
  }

  async getById(rdoId: string, workforceId: string) {
    const response = await this.http.get(`/rdo/${rdoId}/workforce/${workforceId}`);
    return response.data;
  }

  async update(rdoId: string, workforceId: string, data: Update) {
    const response = await this.http.post(`/rdo/${rdoId}/workforce/${workforceId}`, data);
    return response.data;
  }

  async delete(rdoId: string, workforceId: string) {
    const response = await this.http.delete(`/rdo/${rdoId}/workforce/${workforceId}`);
    return response.data;
  }

  async createMany(rdoId: string, data: CreateMany) {
    const response = await this.http.post(`/rdo/${rdoId}/workforce/many`, data);
    return response.data;
  }
}
