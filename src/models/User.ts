import { uuid } from 'uuidv4';

class User {
  id: string;
  username: string;
  email: string;
  password?: string;

  constructor(username: string, email: string, password?: string) {
    this.id = uuid();
    this.username = username;
    this.email = email;
    this.password = password;
  }
}

export default User;
