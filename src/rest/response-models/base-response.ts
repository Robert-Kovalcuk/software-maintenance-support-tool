export default abstract class BaseResponse {
    /*
        @returns JSON string of this
     */
    public toStringJson(): string {
        return JSON.stringify(this)
    }
}