import { AxiosInstance } from "axios";
import { Config } from "./Config";
import { Client } from "./Types/Client";
import { Create, Update } from "./Types/Activity";

export class Activity implements Client {

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
    const response = await this.http.get(`/rdo/${rdoId}/activities`);
    return response.data;
  }

  async create(rdoId: string, data: Create) {
    const response = await this.http.post(`/rdo/${rdoId}/activities`, data);
    return response.data;
  }

  async getById(rdoId: string, activityId: string) {
    const response = await this.http.get(`/rdo/${rdoId}/activity/${activityId}`);
    return response.data;
  }

  async update(rdoId: string, activityId: string, data: Update) {
    const response = await this.http.post(`/rdo/${rdoId}/activities/${activityId}`, data);
    return response.data;
  }

  async delete(rdoId: string, activityId: string) {
    const response = await this.http.delete(`/rdo/${rdoId}/activities/${activityId}`);
    return response.data;
  }
}
