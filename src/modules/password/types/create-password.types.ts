export type CreatePassword = {
    length: number
    numbers?: boolean
    symbols?: boolean
    uppercase?: boolean
    excludeSimilarCharacters?: boolean
}