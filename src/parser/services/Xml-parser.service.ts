import { Injectable } from "@nestjs/common"
import * as xml2js from "xml2json"
import XmlParser from "../core/XmlParser"

@Injectable()
export class XmlParserService implements XmlParser {
    public parse(content: Express.Multer.File): string {
        return xml2js.toJson(content.buffer, {object: false})
    }

    public serialise(data: string): string {
        return xml2js.toXml(JSON.stringify(data));
    }
}
