import { Injectable } from '@nestjs/common'
import Validator from "./validator"
import * as xsdValidator from "xsd-schema-validator"

@Injectable()
export class ClassDiagramValidatorService extends Validator {
    private readonly xsdPath = "../diagrams-dto/schemas/class-diagram-schema.xsd"
    public constructor() {
        super()
    }

    public validate(diagram: string): boolean {
        xsdValidator.validateXML(diagram, this.xsdPath, (err, res) => {
            if(err)
                throw err

            return res.valid
        })

        throw "Failed to validate xml file against xsd schema"
    }
}
