"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Element_1 = require("../Element");
var TextareaElement = (function (_super) {
    __extends(TextareaElement, _super);
    function TextareaElement() {
        _super.call(this);
        this._tagName = 'textarea-element';
        this.initialize();
    }
    TextareaElement.prototype.minLength = function (minLength) {
        this._minLength = minLength;
        return this;
    };
    TextareaElement.prototype.maxLength = function (maxLength) {
        this._maxLength = maxLength;
        return this;
    };
    return TextareaElement;
}(Element_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextareaElement;
