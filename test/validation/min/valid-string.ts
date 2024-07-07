import { string } from 'superstruct';
import { fend, min } from '../../../src';

export const Struct = fend(string(), min(2));

export const data = 'foo';

export const output = 'foo';
