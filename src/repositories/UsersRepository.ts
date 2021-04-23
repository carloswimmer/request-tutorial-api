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
    console.log('users-create', this.users);

    return user;
  }

  public update(id: number, user: User): void {
    const userIndex = this.users.findIndex(user => user.id === id);

    Object.assign(this.users[userIndex], user);
    console.log('users-update', this.users);
  }

  public delete(id: number): User[] | undefined {
    const userIndex = this.users.findIndex(user => user.id === id);

    if (userIndex === -1) return undefined;

    this.users.splice(userIndex, 1);
    console.log('users-delete', this.users);

    return this.users;
  }
}

export default UsersRepository;
