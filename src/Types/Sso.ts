
export interface FirstAccess {
  username: string;
  password: string;
  session: string;
}

export type Auth = Pick<FirstAccess, "username" | "password">;

export type Reset = Pick<FirstAccess, "username">;

export interface Confirm {
  username: string;
  confirmCode: string;
  password: string;
}

export interface RefreshToken {
  refreshToken: string;
}

export type Logout = Pick<RefreshToken, "refreshToken">;

export interface ChangePassword {
  accessToken: string;
  previousPassword: string;
  newPassword: string;
}
export interface UpdateAccount {
  is_imported: boolean;
  first_access: boolean;
  take_to_suite: boolean;
}