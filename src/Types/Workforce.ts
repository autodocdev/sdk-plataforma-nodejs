export interface Create {
  company_id: string;
  occupation_id: string;
  type: string;
  amount: string;
}

export interface CreateMany {
  rdo_id: string;
  workforces: object[];
}

export interface Update {
  company_id: string;
  occupation_id: string;
  type: string;
  amount: string;
}
