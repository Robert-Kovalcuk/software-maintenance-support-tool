export default abstract class XmlParser {
    public abstract parse(content: Express.Multer.File): string
    public abstract serialise(content: string): string
}