import { match } from './match'

export const NameEmail = 'email'

export const emailWeak = match(NameEmail, /.+@.+..+/) // https://davidcel.is/posts/stop-validating-email-addresses-with-regex/
