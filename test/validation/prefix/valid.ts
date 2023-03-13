import {string} from 'superstruct'
import {suffix} from "../../../src/structs/string";

export const Struct = suffix(string(), "bar")

export const data = "foobar"

export const output = "foobar"
