import {Visibility} from "./visibility"

export default interface Attribute {
    name: string;
    type: string;
    visibility: Visibility;
}