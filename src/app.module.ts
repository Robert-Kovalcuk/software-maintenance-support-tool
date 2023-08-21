import { Module } from "@nestjs/common"
import { DevtoolsModule } from "@nestjs/devtools-integration"
import * as process from "process"
import { ApiModule } from "./rest/api.module"
import { DiagramTypeDetectorModule } from "./diagram-type-detector/Diagram-type-detector.module"
import { ParserModule } from "./parser/Parser.module"

@Module({
    imports: [
        ApiModule,
        DiagramTypeDetectorModule,
        ParserModule,
        DevtoolsModule.register({
            http: process.env.NODE_ENV !== "production",
        }),
    ],
})
export class AppModule {
}
