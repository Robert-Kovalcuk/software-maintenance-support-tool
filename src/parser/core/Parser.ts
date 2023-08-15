export interface Parser<I, O> {
    parse(content: I): O
    serialise(content: O): I
}