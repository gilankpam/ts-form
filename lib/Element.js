"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View_1 = require("./View");
var Element = (function (_super) {
    __extends(Element, _super);
    function Element() {
        _super.call(this);
        this._tagName = 'div';
        this._uniqueId = _.uniqueId('element');
    }
    Element.prototype.id = function (id) {
        this._id = id;
        return this;
    };
    Element.prototype.getId = function () {
        return this._id || this._uniqueId;
    };
    Element.prototype.setForm = function (form) {
        this._form = form;
        return this;
    };
    Element.prototype.getForm = function () {
        return this._form;
    };
    Element.prototype.formatter = function (formatter) {
        this._formatter = formatter;
        return this;
    };
    Element.prototype.getFormatter = function () {
        return this._formatter;
    };
    Element.prototype.entity = function (entity) {
        this._entity = entity;
        return this;
    };
    Element.prototype.getEntity = function () {
        return this._entity;
    };
    Element.prototype.type = function (type) {
        this._type = type;
        return this;
    };
    Element.prototype.name = function (name) {
        this._id = name;
        this._name = name;
        return this;
    };
    Element.prototype.getName = function () {
        return this._name;
    };
    Element.prototype.label = function (label) {
        this._label = label;
        return this;
    };
    Element.prototype.getLabel = function () {
        return this.format(this._label);
    };
    Element.prototype.required = function (required) {
        if (required === void 0) { required = true; }
        this._required = required;
        return this;
    };
    Element.prototype.format = function (value) {
        var formatter = this.getFormatter();
        if (formatter) {
            value = formatter(value);
        }
        return value;
    };
    Element.prototype.render = function () {
        var form = this.getForm();
        var nameSpace = form.getNameSpace();
        var formName = form.getName();
        var entity = this.getEntity();
        var name = this.getName();
        var id = this.getId();
        this.$el.attr('element-options', nameSpace + "." + formName + ".elements." + id);
        this.$el.attr('model', nameSpace + "." + entity);
        this.$el.attr('model-value', nameSpace + "." + entity + "." + name);
        return this;
    };
    return Element;
}(View_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Element;
