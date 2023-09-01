import Attribute from "./attribute"

export default interface Entity {
    name: string;
    attributes: Attribute[];
}