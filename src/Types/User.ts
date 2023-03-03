export interface Create {
  name: string;
  email: string;
  confirmationStatus: string,
  notify: boolean,
  groups: string[];
  is_imported: boolean,
  first_access: boolean,
  take_to_suite: boolean,
}

export interface Update {
  name: string;
  groups: string[];
}
