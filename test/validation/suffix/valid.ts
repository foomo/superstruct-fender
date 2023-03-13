import {string} from 'superstruct'
import {prefix} from "../../../src/structs/string";

export const Struct = prefix(string(), "foo")

export const data = "foobar"

export const output = "foobar"
