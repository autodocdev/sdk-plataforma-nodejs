export class Config {
  getHttpClient(): this {
    return this;
  }

  withUrl(): this {
    return this;
  }

  withAuthorization(): this {
    return this;
  }

  withCustomer(): this {
    return this;
  }

  async get() {
    return {
      "data": {
        "code": "200"
      },
    };
  }

  async post() {
    return {
      "data": {
        "code": "200"
      },
    };
  }

  async put() {
    return {
      "data": {
        "code": "204"
      },
    };
  }

  async delete() {
    return {
      "data": {
        "code": "204"
      },
    };
  }
}
