import { string } from 'superstruct';
import { equal, fend } from '../../../src';

export const Struct = fend(string(), equal('foo'));

export const data = 'foo';

export const output = 'foo';
