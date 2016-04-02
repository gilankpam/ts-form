import List from "ts-core/lib/Data/List";
import Element from "../Element";

export default class SelectElement extends Element {

    public _tagName:string = 'select-element';

    public _options:List<any> = new List<any>();

    public constructor() {
        super();
        this.initialize();
    }

    public options(options:any[]):this {
        this._options.addMany(options);
        return this;
    }

    public option(value:any, label:string):this {
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
