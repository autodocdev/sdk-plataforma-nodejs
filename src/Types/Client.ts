export interface Client {

  withAuthorization(value: string): this;

  withCustomer(value: string): this;

  withUrl(value: string): this;
}