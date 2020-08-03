export interface User {
  id: number;
  email: string;
  username: string;
  blocked: boolean;
  confirmed: boolean;
  created_at: string;
  create_by: any;
  provider: string;
  role: any;
  updated_at: string;
  updated_by: any;
}
