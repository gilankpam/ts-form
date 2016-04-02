import List from "ts-core/lib/Data/List";
import Element from "../Element";
export default class SelectElement extends Element {
    _tagName: string;
    _options: List<any>;
    constructor();
    options(options: any[]): this;
    option(value: any, label: string): this;
    getOptions(): any[];
}
