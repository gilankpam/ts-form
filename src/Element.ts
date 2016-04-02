import View from "./View";
import Form from "./Form";
import * as _ from "underscore";

export default class Element extends View {

    protected _tagName:string = 'div';

    public _uniqueId:string;

    public _id:string;

    public _form:Form;

    public _type:string;

    public _name:string;

    public _label:string;

    public _formatter:any;

    public _entity:string;

    public _required:boolean;

    public constructor() {

        super();
        this._uniqueId = _.uniqueId('element');
    }

    public id(id:string):this {
        this._id = id;
        return this;
    }

    public getId() {
        return this._id || this._uniqueId;
    }

    public setForm(form:Form):this {
        this._form = form;
        return this;
    }

    public getForm():Form {
        return this._form;
    }

    public formatter(formatter:any) {
        this._formatter = formatter;
        return this;
    }

    public getFormatter():any {
        return this._formatter;
    }

    public entity(entity:string) {
        this._entity = entity;
        return this;
    }

    public getEntity() {
        return this._entity;
    }

    public type(type:string) {
        this._type = type;
        return this;
    }

    public name(name:string) {
        this._id = name;
        this._name = name;
        return this;
    }

    public getName():string {
        return this._name;
    }

    public label(label:string) {
        this._label = label;
        return this;
    }

    public getLabel():string {
        return this.format(this._label);
    }

    public required(required:boolean = true):this {
        this._required = required;
        return this;
    }

    public format(value:string):string {

        var formatter = this.getFormatter();

        if (formatter) {
            value = formatter(value);
        }

        return value;
    }

    public render() {

        var form = this.getForm();
        var nameSpace = form.getNameSpace();
        var formName = form.getName();
        var entity = this.getEntity();
        var name = this.getName();
        var id = this.getId();

        this.$el.attr('element-options', `${nameSpace}.${formName}.elements.${id}`);
        this.$el.attr('model', `${nameSpace}.${entity}`);
        this.$el.attr('model-value', `${nameSpace}.${entity}.${name}`);
        return this;
    }
}
