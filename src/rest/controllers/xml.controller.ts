import { Controller, Post, Req, UploadedFile, UseInterceptors } from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import { XmlValidationPipeFactory } from "../pipes/pipe-factory"
import { Request } from "express"
import { XmlControllerService } from "../services/xml-controller.service"

@Controller("xml")
export class XmlController {
    public constructor(
        private controllerService: XmlControllerService,
    ) {
    }

    @Post("detectTypeAndParse")
    @UseInterceptors(FileInterceptor("file"))
    public parse(@UploadedFile(XmlValidationPipeFactory.isValidXmlPipe()) file: Express.Multer.File): string {
        return this.controllerService.detectTypeAndParse(file)
    }

    @Post("upload")
    @UseInterceptors(FileInterceptor("file"))
    public upload(@UploadedFile(XmlValidationPipeFactory.isValidXmlPipe()) file: Express.Multer.File): boolean {
        return this.controllerService.upload(file)
    }

    @Post("export")
    public export(@Req() request: Request): boolean {
        return this.controllerService.export(request.body)
    }
}
