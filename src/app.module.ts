import { Module } from "@nestjs/common"
import { DevtoolsModule } from "@nestjs/devtools-integration"
import * as process from "process"
import { ApiModule } from "./rest/api.module"
import { DiagramTypeDetectorModule } from "./diagram-type-detector/Diagram-type-detector.module"
import { ParserModule } from "./parser/Parser.module"
import {DomainModule} from "./domain/domain.module"
import { DiagramValidatorService } from './parser/validation/diagram-validator-service';
import { MapperModule } from './mapper/mapper.module';
import { ClassMapperService } from './mapper/class-mapper/class-mapper.service';
import { DiagramAnalysisModule } from './diagram-analysis/diagram-analysis.module';

@Module({
    imports: [
        ApiModule,
        ParserModule,
        DomainModule,
        DiagramTypeDetectorModule,
        DevtoolsModule.register({
            http: process.env.NODE_ENV !== "production",
        }),
        MapperModule,
        DiagramAnalysisModule,
    ],
    providers: [DiagramValidatorService, ClassMapperService],
})
export class AppModule {
}
