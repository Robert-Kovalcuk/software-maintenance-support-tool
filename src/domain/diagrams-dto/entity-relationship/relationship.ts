import {RelationshipEnum} from "./relationship-enum"

export default interface Relationship {
    type: RelationshipEnum;
    from: string;
    to: string;
}