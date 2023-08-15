import { Module } from '@nestjs/common';
import XmlDetectorService from './services/Xml-detector-service';

@Module({
    providers: [
        XmlDetectorService
    ],
})
export class DiagramTypeDetectorModule {}
