import { number } from 'superstruct';
import { fend, min } from '../../../src';

export const Struct = fend(number(), min(3));

export const data = 5;

export const output = 5;
