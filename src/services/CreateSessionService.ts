import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import UsersRepository from '../repositories/UsersRepository';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  accessToken: string;
  id: string;
  email: string;
}

class CreateUserService {
  public async execute({ username, password }: IRequest): Promise<IResponse> {
    const usersRepository = new UsersRepository();

    const user = await usersRepository.findByUsername(username);

    if (!user) {
      throw new Error('Incorrect username/password combination');
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error('Incorrect username/password combination');
    }

    const accessToken = sign(
      { username: user.username, id: user.id },
      '0c4e8d33ba9137b92003e27211a91ab9',
      {
        subject: user.id,
        expiresIn: '1d',
      },
    );

    return { accessToken, id: user.id, email: user.email };
  }
}

export default CreateUserService;
