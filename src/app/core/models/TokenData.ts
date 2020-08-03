import { User } from './User';

export interface TokenData {
  jwt: string;
  user: User;
}
