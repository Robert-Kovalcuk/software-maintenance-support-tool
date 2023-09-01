import { Injectable } from "@nestjs/common"
import * as xml2js from "xml2json"
import XmlParser from "../core/XmlParser"
import ClassDiagram from "../../domain/diagrams-dto/class/class-diagram"
import IDiagram from "../../domain/diagrams-dto/diagram"

@Injectable()
export class XmlParserService implements XmlParser {
    public parse(content: Express.Multer.File): string {
        const result = xml2js.toJson(content.buffer, {object: true})
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        console.log(result)
        //console.log((((result as object as IDiagram<any>).diagram) as ClassDiagram).classes)
        return xml2js.toJson(content.buffer, {object: false})
    }

    public serialise(data: string): string {
        return xml2js.toXml(JSON.stringify(data));
    }
}
