import { FileTypeValidator, HttpStatus, Injectable, ParseFilePipe } from "@nestjs/common"

@Injectable()
export class XmlValidationPipeFactory {
    public static isValidXmlPipe(): ParseFilePipe {
        return new ParseFilePipe({
            validators: [
                new FileTypeValidator({ fileType: "application/xml" }),
            ],
            errorHttpStatusCode: HttpStatus.PRECONDITION_FAILED,
        })
    }
}
