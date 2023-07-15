export interface Account {
  id: number
  email: string;
  password: string;
  role: Role;
}

export enum Role {
  Admin = 'Admin',
  User = 'User',
}
