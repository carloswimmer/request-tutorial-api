import { verify } from 'jsonwebtoken';

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
      throw new Error('You are not allowed to access this content');
    }

    const token = authorization.replace('Bearer ', '');

    let payload = {};

    try {
      payload = verify(token, '0c4e8d33ba9137b92003e27211a91ab9');
    } catch (error) {
      throw new Error('You are not allowed to access this content');
    }

    const { id, username } = payload as any;

    return { id, username };
  }
}

export default DecodeTokenService;
