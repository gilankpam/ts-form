///<reference path="../Element.ts"/>

module TSForm.Elements {

    export class SelectElement extends Element {

        public _tagName: string = 'select-element';

        public _options: TSCore.Data.List<any> = new TSCore.Data.List<any>();

        public constructor() {
            super();
            this.initialize();
        }

        public options(options: any[]) {
            this._options.addMany(options);
            return this;
        }

        public option(value: any, label: string) {
            this._options.add({
                value: value,
                label: label
            });
            return this;
        }

        public getOptions() {
            this._options.each(option => {
                option.label = this.format(option.label);
            });
            return this._options.toArray();
        }
    }
}