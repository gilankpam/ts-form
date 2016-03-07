///<reference path="../Element.ts"/>

module TSForm.Elements {

    export class PasswordElement extends InputElement {

        public _tagName: string = 'password-element';

        public constructor() {
            super();
            this.initialize();
        }
    }
}