import Element from "../Element";
export default class TextareaElement extends Element {
    _tagName: string;
    _minLength: number;
    _maxLength: number;
    constructor();
    minLength(minLength: number): this;
    maxLength(maxLength: number): this;
}
