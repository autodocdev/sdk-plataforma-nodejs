import { AxiosInstance } from "axios";
import { Config } from "./Config";
import { Client } from "./Types/Client";
import { Create, Update } from "./Types/Weather";

export class Weather implements Client {

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
    const response = await this.http.get(`/rdo/${rdoId}/weather`);
    return response.data;
  }

  async create(rdoId: string, data: Create) {
    const response = await this.http.post(`/rdo/${rdoId}/weather`, data);
    return response.data;
  }

  async getById(rdoId: string, weatherId: string) {
    const response = await this.http.get(`/rdo/${rdoId}/weather/${weatherId}`);
    return response.data;
  }

  async update(rdoId: string, weatherId: string, data: Update) {
    const response = await this.http.put(`/rdo/${rdoId}/weather/${weatherId}`, data);
    return response.data;
  }

  async delete(rdoId: string, weatherId: string) {
    const response = await this.http.delete(`/rdo/${rdoId}/weather/${weatherId}`);
    return response.data;
  }
}
