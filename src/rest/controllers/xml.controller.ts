import {
    Controller,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { XmlControllerService } from '../services/xml-controller.service';
import { ParseXmlFilePipeFactory } from '../pipes/pipe-factory';
import { createResponse, IResponse } from '../core/response-models/IResponse';

@Controller('xml')
export class XmlController {

    public constructor(
        private controllerService: XmlControllerService
    ) {
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    public upload(@UploadedFile(ParseXmlFilePipeFactory.isValidXmlPipe()) file: Express.Multer.File): IResponse<string> {
        this.controllerService.upload(file)
        return createResponse("response")
    }
}
