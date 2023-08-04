import ShortUniqueId from 'short-unique-id'

const uid = new ShortUniqueId({ length: 10, dictionary: 'alphanum_lower' })

export { uid }
