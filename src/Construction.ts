import axios, { AxiosInstance } from "axios";
import { Config } from "./Config";
import { Client } from "./Types";
import { Update } from "./Types/Construction";

export class Construction implements Client {

  private http: AxiosInstance;

  private config: Config;

  constructor() {
    this.config = new Config(axios);
    this.http = this.config.getHttpClient();
  }

  withAuthorization(value: string): this {
    this.config .withAuthorization(value).getHttpClient();
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
    const response = await this.http.get('/constructions');
    return response.data;
  }

  async getById(constructionId: string) {
    const response = await this.http.post(`/constructions/${constructionId}`);
    return response.data;
  }

  async update(constructionId: string, data: Update) {
    const response = await this.http.put(`/constructions/${constructionId}`, data);
    return response.data;
  }

  async delete(constructionId: string) {
    const response = await this.http.delete(`/constructions/${constructionId}`);
    return response.data;
  }
}

