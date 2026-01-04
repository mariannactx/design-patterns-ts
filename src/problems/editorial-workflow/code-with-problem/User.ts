export type UserRole = 'admin' | 'editor' | 'user';

export default interface User {
  readonly id: number;
  readonly username: string;
  readonly role: UserRole;
}
