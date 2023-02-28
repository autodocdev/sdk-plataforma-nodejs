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
      "data": [{
        "id": "63dbc47c9ad425cbd2066687",
        "created_at": "2022-11-16T18:29:00+00:00",
        "deleted_at": null
      },
      {
        "id": "63dbc47c9ad425cbd2066688",
        "created_at": "2022-11-16T18:29:00+00:00",
        "deleted_at": null
      }]
    };
  }

  async post() {
    return {
      "data": {
        "id": "63dbc47c9ad425cbd2066687",
        "created_at": "2022-11-16T18:29:00+00:00",
        "deleted_at": null
      }
    };
  }

  async put() {
    return {
      "data": {
        "id": "63dbc47c9ad425cbd2066687",
        "created_at": "2022-11-16T18:29:00+00:00",
        "deleted_at": null
      }
    };
  }

  async delete() {
    return {
      "data": {
        "status": "204",
      }
    };
  }
}