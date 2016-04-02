import Element from "../Element";

export default class InputElement extends Element {

    public _tagName:string = 'input-element';

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
