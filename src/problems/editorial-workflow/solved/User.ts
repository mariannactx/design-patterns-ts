type UserRole = 'admin' | 'editor' | 'user';

export default interface User {
  readonly username: string;
  readonly role: UserRole;
}
