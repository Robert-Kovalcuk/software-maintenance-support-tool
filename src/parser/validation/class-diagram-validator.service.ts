import { Injectable } from '@nestjs/common'
import Validator from "./validator"
import * as xsdValidator from "xsd-schema-validator"

@Injectable()
export class ClassDiagramValidatorService extends Validator {
    private readonly xsdPath = "C:\\PracaProgramovanieSkola\\projects\\src\\parser\\schemas\\class-diagram-schema.xsd"
    public constructor() {
        super()
    }

    public validate(diagram: string): boolean {
        const isValid = false
        console.log("1")
        console.log("2")
        xsdValidator.validateXML(diagram, this.xsdPath, (err, res) => {
            console.log(err)
            console.log("in cb")
        })
        console.log("after cb")
        return isValid
    }
}
