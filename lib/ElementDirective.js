"use strict";
var ElementDirective = (function () {
    function ElementDirective() {
        this.restrict = 'E';
        this.replace = true;
        this.bindToController = true;
        this.controller = 'TSFormElementController';
        this.controllerAs = 'vm';
        this.scope = {
            model: '=',
            modelValue: '=',
            element: '=elementOptions'
        };
        this.link = function (scope) {
        };
    }
    ElementDirective.prototype.setTemplateUrl = function (templateUrl) {
        this.templateUrl = templateUrl;
        return this;
    };
    ElementDirective.prototype.getTemplateUrl = function () {
        return this.templateUrl;
    };
    ElementDirective.prototype.setController = function (controller) {
        this.controller = controller;
        return this;
    };
    ElementDirective.prototype.getController = function () {
        return this.controller;
    };
    return ElementDirective;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ElementDirective;
