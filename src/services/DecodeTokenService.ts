import { TokenExpiredError, verify } from 'jsonwebtoken';
import AppError from '../error/AppError';

interface IRequest {
  authorization: string | undefined;
}

interface IResponse {
  username: string;
  id: string;
}

class DecodeTokenService {
  public async execute({ authorization }: IRequest): Promise<IResponse> {
    if (!authorization) {
      throw new AppError(
        'Você não tem autorização para acessar esse conteúdo',
        403,
      );
    }

    const token = authorization.replace('Bearer ', '');

    let payload = {};

    try {
      payload = verify(token, '0c4e8d33ba9137b92003e27211a91ab9');
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new AppError('Sua conexão expirou, faça login novamente', 401);
      }

      throw new AppError(
        'Você não tem autorização para acessar esse conteúdo',
        401,
      );
    }

    const { id, username } = payload as any;

    return { id, username };
  }
}

export default DecodeTokenService;
