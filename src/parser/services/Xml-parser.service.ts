import { Injectable, PreconditionFailedException } from '@nestjs/common';
import * as xml2js from 'xml2json';
import { Parser } from '../core/Parser';

@Injectable()
export class XmlParserService implements Parser<string, object> {
    public parse(data: string): object {
        try {
            return xml2js.toJson(data, {object: true})
        } catch (e) {
            throw new PreconditionFailedException(e)
        }
    }

    public serialise(data: object): string {
        try {
            return xml2js.toXml(JSON.stringify(data));
        } catch (e) {
            throw new PreconditionFailedException(e)
        }
    }
}
