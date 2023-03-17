import { match } from './match'

export const NameUUID = 'uuid'

export const uuid = match(
	NameUUID,
	/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
)
