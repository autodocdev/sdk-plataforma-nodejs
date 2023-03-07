export interface Create {
  name: string;
  parent_id: string;
}

export interface Update {
  name: string;
  parent_id: string;
}

export interface CreateFile {
  name: string;
}

export interface UpdateFile {
  name: string;
  folders_id?: string;
}
