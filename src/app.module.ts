import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { XmlModule } from './xml/xml.module';
import { DiagramTypeDetectorModule } from './diagram-type-detector/diagram-type-detector.module';
import { XMLDetectorService } from './diagram-type-detector/xml/XMLDetectorService';
import { XMLRulesService } from './diagram-type-detector/rule-service/x-m-l-xml-rules.service';
import { XmlParserService } from './xml/xml-parser/xml-parser.service';

@Module({
    imports: [XmlModule, DiagramTypeDetectorModule],
    controllers: [AppController],
    providers: [AppService, DetectorService, XMLRulesService, XmlParserService],
})
export class AppModule {
}
