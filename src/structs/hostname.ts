import { match } from './match'

export const NameHostname = 'hostname'

export const hostname = match(
	NameHostname,
	/^[a-zA-Z]([a-zA-Z0-9-]+[.]?)*[a-zA-Z0-9]$/
)
