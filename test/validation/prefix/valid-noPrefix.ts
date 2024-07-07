import { string } from 'superstruct';
import { fend, noPrefix } from '../../../src';

export const Struct = fend(string(), noPrefix('bar'));

export const data = 'foobar';

export const output = 'foobar';
