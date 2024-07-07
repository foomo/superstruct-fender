import { match } from './match';

export const NameAlnum = 'alnum';

export const alnum = match(NameAlnum, /^[a-zA-Z0-9]+$/);
