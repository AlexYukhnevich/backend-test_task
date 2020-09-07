import { genSalt, hash, compare } from 'bcrypt';

export const getHashedEntity = async (entity: any, saltRounds: number): Promise<string> => {
  const salt = await genSalt(saltRounds);
  return await hash(entity, salt);
};

export const compareEntities = async (entity: any, hashed: string): Promise<boolean> => await compare(entity, hashed);