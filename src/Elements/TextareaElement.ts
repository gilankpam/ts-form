import Element from "../Element";

export default class TextareaElement extends Element {

    public _tagName:string = 'textarea-element';

    public _minLength:number;

    public _maxLength:number;

    public constructor() {
        super();
        this.initialize();
    }

    public minLength(minLength:number):this {
        this._minLength = minLength;
        return this;
    }

    public maxLength(maxLength:number):this {
        this._maxLength = maxLength;
        return this;
    }
}
