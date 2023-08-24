import { Module } from "@nestjs/common"
import { DevtoolsModule } from "@nestjs/devtools-integration"
import * as process from "process"
import { ApiModule } from "./rest/api.module"
import { DiagramTypeDetectorModule } from "./diagram-type-detector/Diagram-type-detector.module"
import { ParserModule } from "./parser/Parser.module"
import {DomainModule} from "./domain/domain.module"
import { ClassDiagramValidatorService } from './parser/validation/class-diagram-validator.service';

@Module({
    imports: [
        ApiModule,
        ParserModule,
        DomainModule,
        DiagramTypeDetectorModule,
        DevtoolsModule.register({
            http: process.env.NODE_ENV !== "production",
        }),
    ],
    providers: [ClassDiagramValidatorService],
})
export class AppModule {
}
