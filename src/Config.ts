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
    this.http.defaults.headers.common['Authorization'] = value;

    return this;
  }

  public withCustomer(value: string): this {
    this.http.defaults.headers.common['X-Customer-id'] = value;

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
