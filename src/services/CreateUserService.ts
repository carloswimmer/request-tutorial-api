import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  username: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ username, email, password }: IRequest): Promise<User> {
    const usersRepository = new UsersRepository();

    const user = usersRepository.create({ username, email, password });

    return user;
  }
}

export default CreateUserService;
