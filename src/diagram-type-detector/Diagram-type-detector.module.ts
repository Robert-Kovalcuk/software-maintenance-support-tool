import { Module } from "@nestjs/common"
import XmlDetectorService from "./services/Xml-detector-service"
import XmlDetector from "./core/XmlDetector"

@Module({
    providers: [{
        provide: XmlDetector,
        useClass: XmlDetectorService,
    }],
    exports: [{
        provide: XmlDetector,
        useClass: XmlDetectorService,
    }],
})
export class DiagramTypeDetectorModule {
}
