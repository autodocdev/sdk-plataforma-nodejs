export interface Create {
  date: string;
  construction_id: string;
}

export interface UpdateStatus {
  rdo_id: string;
  status: string;
}

export interface CreateOccurrence {
  rdo_id: string;
  description: string;
  category: string;
  start_time: string;
  finish_time: string;
  punctual: string;
}
