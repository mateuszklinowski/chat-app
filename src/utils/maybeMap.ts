// Didn't wanted to add some lib with whole JS fantasy-land so just created safeMap
type Map<A, B> = (a: A) => B
type Nill = null | undefined
export type Maybe<A> = A | Nill
const isNill = (a: unknown): a is Nill => a === undefined || a === null

export const maybeMap = <A, B>(fn: Map<A, B>, a: Maybe<A>): B | undefined => {
    if (isNill(a)) {
        return undefined
    }

    return fn(a)
}
