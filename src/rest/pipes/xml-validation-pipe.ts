import {Injectable, PipeTransform, ArgumentMetadata, PreconditionFailedException} from "@nestjs/common"

@Injectable()
export class XmlIsValidPipe implements PipeTransform<Express.Multer.File, void> {

// eslint-disable-next-line @typescript-eslint/no-unused-vars
    public transform(value: any, metadata: ArgumentMetadata): void {
        if (!(value && value.filename.endsWith(".xml")))
            throw new PreconditionFailedException("Not an XML file.")
    }
}
