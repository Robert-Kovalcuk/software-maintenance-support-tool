import { Injectable } from '@nestjs/common'
import Validator from "./validator"
import * as xsdValidator from "xsd-schema-validator"

@Injectable()
export class DiagramValidatorService extends Validator {
    public constructor() {
        super()
    }

    public validate(diagram: string, schemaPath: string): boolean {
        let isValid = false

        xsdValidator.validateXML(diagram, schemaPath, (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log(res.valid)
                isValid = res.valid
            }
        })

        return isValid
    }
}
