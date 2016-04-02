"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var List_1 = require("ts-core/lib/Data/List");
var Element_1 = require("../Element");
var SelectElement = (function (_super) {
    __extends(SelectElement, _super);
    function SelectElement() {
        _super.call(this);
        this._tagName = 'select-element';
        this._options = new List_1.default();
        this.initialize();
    }
    SelectElement.prototype.options = function (options) {
        this._options.addMany(options);
        return this;
    };
    SelectElement.prototype.option = function (value, label) {
        this._options.add({
            value: value,
            label: label
        });
        return this;
    };
    SelectElement.prototype.getOptions = function () {
        var _this = this;
        this._options.each(function (option) {
            option.label = _this.format(option.label);
        });
        return this._options.toArray();
    };
    return SelectElement;
}(Element_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SelectElement;
