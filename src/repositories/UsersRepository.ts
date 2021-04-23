import User from '../models/User';
import usersDB from '../mockDB/usersDB';

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = usersDB;
  }

  public findAll(): User[] {
    return this.users;
  }

  public findById(id: number): User | undefined {
    const user = this.users.find(user => user.id === id);

    return user;
  }

  public create(userRequest: Omit<User, 'id'>): User {
    const { name, username, email, phone, website } = userRequest;
    const user = new User(name, username, email, phone, website);

    this.users.push(user);

    return user;
  }
}

export default UsersRepository;
