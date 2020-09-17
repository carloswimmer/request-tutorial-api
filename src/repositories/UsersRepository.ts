import User from '../models/User';
import usersDB from '../mockDB/usersDB';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = usersDB;
  }

  public create(username: string, email: string, password: string): User {
    const user = new User(username, email, password);

    this.users.push(user);

    return user;
  }

  public findAll(): User[] {
    return this.users;
  }
}

export default UsersRepository;
