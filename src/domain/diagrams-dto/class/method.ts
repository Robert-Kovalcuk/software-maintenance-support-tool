import Parameter from "./parameter"
import {Visibility} from "./visibility"

export default interface Method {
    name: string;
    returnType: string;
    parameters: Parameter[];
    visibility: Visibility;
}