
interface Company {
  name: string;
  cnpj?: string;
}

export interface Create {
  name: string;
  company: Company;
  occupation_id: string[];
  service_providers: string[];
}

export interface Update {
  name: string;
  company: Company;
  occupation_id: string[];
  service_providers: string[];
}

export interface UpdateOcccupation {
  alias: string;
}

