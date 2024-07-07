import { string } from 'superstruct';
import { emailWeak, fend } from '../../../src';

export const Struct = fend(string(), emailWeak);

export const data = 'foo@bar.com';

export const output = 'foo@bar.com';
