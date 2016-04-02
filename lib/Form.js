"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View_1 = require("./View");
var Dictionary_1 = require("ts-core/lib/Data/Dictionary");
var Form = (function (_super) {
    __extends(Form, _super);
    function Form() {
        _super.call(this);
        this._tagName = 'form';
        this._namespace = 'vm';
        this._elements = new Dictionary_1.default();
        this.initialize();
    }
    Object.defineProperty(Form.prototype, "elements", {
        get: function () {
            if (!this._cachedElements) {
                this._cachedElements = this._elements.toObject();
            }
            return this._cachedElements;
        },
        enumerable: true,
        configurable: true
    });
    Form.prototype.formatter = function (formatter) {
        this._formatter = formatter;
        return this;
    };
    Form.prototype.getFormatter = function () {
        return this._formatter;
    };
    Form.prototype.namespace = function (namespace) {
        this._namespace = namespace;
        return this;
    };
    Form.prototype.getNameSpace = function () {
        return this._namespace;
    };
    Form.prototype.entity = function (entity) {
        this._entity = entity;
        return this;
    };
    Form.prototype.getEntity = function () {
        return this._entity;
    };
    Form.prototype.name = function (name) {
        this._name = name;
        return this;
    };
    Form.prototype.getName = function () {
        return this._name;
    };
    Form.prototype.element = function (element) {
        element.setForm(this);
        element.formatter(this.getFormatter());
        this._elements.set(element.getId(), element);
        return this;
    };
    Form.prototype.getElement = function (id) {
        return this._elements.get(id);
    };
    Form.prototype.render = function () {
        var _this = this;
        var namespace = this.getNameSpace();
        var name = this.getName();
        var suffix = 'Instance';
        var onSubmit = 'OnSubmit()';
        this.$el.empty();
        this.$el.attr('class', this.getClassName());
        this.$el.attr('name', namespace + "." + name + suffix);
        this.$el.attr('ng-submit', namespace + "." + name + onSubmit);
        this._elements.each(function (id, element) {
            if (!element.getEntity()) {
                element.entity(_this.getEntity());
            }
            _this.$el.append(element.render().$el);
        });
        return this;
    };
    return Form;
}(View_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Form;
