import { Module } from '@nestjs/common';
import { XmlController } from './controllers/xml.controller';
import { XmlControllerService } from './services/xml-controller.service';

@Module({
    imports: [],
    controllers: [XmlController],
    providers: [XmlControllerService],
})
export class ApiModule {
}
