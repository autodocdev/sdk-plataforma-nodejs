import { AxiosInstance } from "axios";
import { Config } from "./Config";
import { Client } from "./Types/Client";
import {
  Create, CreateOccurrence, UpdateStatus
} from "./Types/Rdo";

export class Rdo implements Client {

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
    const response = await this.http.get('/rdo');
    return response.data;
  }

  async create(data: Create) {
    const response = await this.http.post('/rdo', data);
    return response.data;
  }

  async calendar(constructionId: string, month: string, year: string) {
    const response = await this.http.get(`/rdo/calendar?construction_id=${constructionId}&month=${month}&year=${year}`);
    return response.data;
  }

  async getById(rdoId: string) {
    const response = await this.http.get(`/rdo/${rdoId}`);
    return response.data;
  }

  async delete(rdoId: string) {
    const response = await this.http.delete(`/rdo/${rdoId}`);
    return response.data;
  }

  async updateStatus(rdoId: string, data: UpdateStatus) {
    const response = await this.http.put(`/rdo/${rdoId}/status`, data);
    return response.data;
  }

  async createOccurrence(rdoId: string, data: CreateOccurrence) {
    const response = await this.http.post(`/rdo/${rdoId}/occurrence`, data);
    return response.data;
  }
}
