import { Module } from '@nestjs/common';
import { XmlParserService } from './services/Xml-parser.service';

@Module({
    providers: [XmlParserService]
})
export class ParserModule {}
