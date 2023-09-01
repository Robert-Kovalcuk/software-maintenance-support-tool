import Parameter from "./parameter"

export default interface Method {
    name: string;
    parameters?: Parameter[];
}