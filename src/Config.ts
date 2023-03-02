import axios, { AxiosInstance, AxiosStatic } from "axios";

export class Config {

  private axios: AxiosStatic;

  private http: AxiosInstance;

  constructor () {
    this.axios = axios;
    this.createHttpClient(this.getBaseConfig());
  }

  public getHttpClient(): AxiosInstance {
    return this.http;
  }

  public withAuthorization(value: string): this {
    const base = this.getBaseConfig();
    base['headers']["Authorization"] = value;

    this.createHttpClient(base);

    return this;
  }

  public withCustomer(value: string): this {
    const base = this.getBaseConfig();
    base["headers"]["X-Customer-id"] = value;
    this.createHttpClient(base);

    return this;
  }

  public withUrl(value: string): this {
    const base = this.getBaseConfig();
    base.baseURL = value;
    this.createHttpClient(base);

    return this;
  }

  private createHttpClient(config = {}): this {
    this.http = this.axios.create(config);

    return this;
  }

  private getBaseConfig() {
    return {
      withCredentials: true,
      baseURL: '',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
  }
}
