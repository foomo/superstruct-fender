import { match } from './match';

export const NameAlpha = 'alpha';

export const alpha = match(NameAlpha, /^[a-zA-Z]+$/);
