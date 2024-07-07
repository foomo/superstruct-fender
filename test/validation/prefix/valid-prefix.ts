import { string } from 'superstruct';
import { fend, prefix } from '../../../src';

export const Struct = fend(string(), prefix('foo'));

export const data = 'foobar';

export const output = 'foobar';
