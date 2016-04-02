import Element from "../Element";
export default class CheckboxElement extends Element {
    _tagName: string;
    _trueValue: any;
    _falseValue: any;
    _options: any[];
    constructor();
    trueValue(trueValue: any): this;
    falseValue(falseValue: any): this;
    getTrueValue(): any;
    getFalseValue(): any;
}
