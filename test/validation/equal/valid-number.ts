import { number } from 'superstruct';
import { equal, fend } from '../../../src';

export const Struct = fend(number(), equal(5));

export const data = 5;

export const output = 5;
