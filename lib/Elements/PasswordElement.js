"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var InputElement_1 = require("./InputElement");
var PasswordElement = (function (_super) {
    __extends(PasswordElement, _super);
    function PasswordElement() {
        _super.call(this);
        this._tagName = 'password-element';
        this.initialize();
    }
    return PasswordElement;
}(InputElement_1.default));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = PasswordElement;
