import View from "./View";
import Dictionary from "ts-core/lib/Data/Dictionary";
import Element from "./Element";
export default class Form extends View {
    protected _tagName: string;
    protected _namespace: string;
    protected _entity: string;
    protected _name: string;
    protected _formatter: any;
    protected _elements: Dictionary<string, Element>;
    protected _cachedElements: any;
    elements: any;
    constructor();
    formatter(formatter: any): this;
    getFormatter(): any;
    namespace(namespace: string): this;
    getNameSpace(): string;
    entity(entity: string): this;
    getEntity(): string;
    name(name: string): this;
    getName(): string;
    element(element: Element): this;
    getElement(id: string): Element;
    render(): this;
}
