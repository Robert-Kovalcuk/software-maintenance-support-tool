export interface IResponse<T> {
    content: T
}

export function createResponse<T>(content: T): IResponse<T> {
    return {
        content: content
    }
}