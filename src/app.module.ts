import { Module } from '@nestjs/common';
import { DiagramTypeDetectorModule } from './diagram-type-detector/Diagram-type-detector.module';
import { ApiModule } from './rest/Api.module';
import { ParserModule } from './parser/Parser.module';

@Module({
    imports: [DiagramTypeDetectorModule, ApiModule, ParserModule],
})
export class AppModule {
}
