import { string } from 'superstruct';
import { fend, noSuffix } from '../../../src';

export const Struct = fend(string(), noSuffix('baz'));

export const data = 'foobar';

export const output = 'foobar';
