import { boolean } from 'superstruct';
import { bool, fend } from '../../../src';

export const Struct = fend(boolean(), bool(true));

export const data = true;

export const output = true;
