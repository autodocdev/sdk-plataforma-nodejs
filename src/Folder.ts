import { AxiosInstance } from "axios";
import { Config } from "./Config";
import { Client } from "./Types/Client";
import { Create, Update, CreateFile, UpdateFile } from "./Types/Folder";

export class Folder implements Client {

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

  async create(data: Create) {
    const response = await this.http.post('/folders', data);
    return response.data;
  }

  async getById(folderId: string) {
    const response = await this.http.get(`/folders/${folderId}`);
    return response.data;
  }

  async update(folderId: string, data: Update) {
    const response = await this.http.put(`/folders/${folderId}`, data);
    return response.data;
  }

  async delete(folderId: string) {
    const response = await this.http.delete(`/folders/${folderId}`);
    return response.data;
  }

  async getFiles(folderId: string) {
    const response = await this.http.get(`/folders/${folderId}/files`);
    return response.data;
  }

  async createFile(folderId: string, data: CreateFile) {
    const response = await this.http.post(`/folders/${folderId}/files`, data);
    return response.data;
  }

  async getFileById(folderId: string, fileId: string) {
    const response = await this.http.get(`/folders/${folderId}/files/${fileId}`);
    return response.data;
  }

  async updateFile(folderId: string, fileId: string, data: UpdateFile) {
    const response = await this.http.put(`/folders/${folderId}/files/${fileId}`, data);
    return response.data;
  }

  async deleteFile(folderId: string, fileId: string) {
    const response = await this.http.delete(`/folders/${folderId}/files/${fileId}`);
    return response.data;
  }
}
