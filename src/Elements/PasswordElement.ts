import InputElement from "./InputElement";

export default class PasswordElement extends InputElement {

    public _tagName:string = 'password-element';

    public constructor() {
        super();
        this.initialize();
    }
}
