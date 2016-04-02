"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Element_1 = require("../Element");
var _ = require("underscore");
var CheckboxElement = (function (_super) {
    __extends(CheckboxElement, _super);
    function CheckboxElement() {
        _super.call(this);
        this._tagName = 'checkbox-element';
        this._trueValue = true;
        this._falseValue = false;
        this.initialize();
    }
    CheckboxElement.prototype.trueValue = function (trueValue) {
        this._trueValue = trueValue;
        return this;
    };
    CheckboxElement.prototype.falseValue = function (falseValue) {
        this._falseValue = falseValue;
        return this;
    };
    CheckboxElement.prototype.getTrueValue = function () {
        return _.isBoolean(this._trueValue) || _.isNumber(this._trueValue) ? this._trueValue : "'" + this._trueValue + "'";
    };
    CheckboxElement.prototype.getFalseValue = function () {
        return _.isBoolean(this._falseValue) || _.isNumber(this._trueValue) ? this._falseValue : "'" + this._falseValue + "'";
    };
    return CheckboxElement;
}(Element_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CheckboxElement;
