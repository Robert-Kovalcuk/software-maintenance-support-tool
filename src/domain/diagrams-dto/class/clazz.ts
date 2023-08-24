import Attribute from "./attribute"
import Method from "./method"

export default interface Clazz {
    name: string;
    abstract?: boolean;
    extends?: string;
    attributes: Attribute[];
    methods: Method[];
}