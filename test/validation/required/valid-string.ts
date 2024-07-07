import { string } from 'superstruct';
import { fend, min, required } from '../../../src';

export const Struct = fend(string(), required, min(5));

export const data = 'foobar';

export const output = 'foobar';
