export default abstract class Validator {
    public abstract validate(diagram: string, schemaPath: string): boolean
}