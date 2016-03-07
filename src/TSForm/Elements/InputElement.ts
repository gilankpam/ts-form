///<reference path="../Element.ts"/>

module TSForm.Elements {

    export class InputElement extends Element {

        public _tagName: string = 'input-element';

        public _minLength: number;

        public _maxLength: number;

        public constructor() {
            super();
            this.initialize();
        }

        public minLength(minLength: number): InputElement {
            this._minLength = minLength;
            return this;
        }

        public maxLength(maxLength: number): InputElement {
            this._maxLength = maxLength;
            return this;
        }
    }
}