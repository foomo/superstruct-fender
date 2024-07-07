import { string } from 'superstruct';
import { fend, suffix } from '../../../src';

export const Struct = fend(string(), suffix('bar'));

export const data = 'foobar';

export const output = 'foobar';
