"use strict";
var ElementDirective_1 = require("./ElementDirective");
var ElementController_1 = require("./ElementController");
var FormDirective_1 = require("./FormDirective");
var FormBootstrap = (function () {
    function FormBootstrap() {
    }
    FormBootstrap.prototype.run = function (app) {
        app.controller('TSFormElementController', ElementController_1.default);
        app.directive('tsForm', ['$compile', '$timeout', function ($compile, $timeout) {
                return new FormDirective_1.default($compile, $timeout);
            }
        ]);
        app.directive('inputElement', function () {
            return new ElementDirective_1.default()
                .setTemplateUrl('templates/input-element.tpl.html');
        });
        app.directive('selectElement', function () {
            return new ElementDirective_1.default()
                .setTemplateUrl('templates/select-element.tpl.html');
        });
        app.directive('checkboxElement', function () {
            return new ElementDirective_1.default()
                .setTemplateUrl('templates/checkbox-element.tpl.html');
        });
        app.directive('textareaElement', function () {
            return new ElementDirective_1.default()
                .setTemplateUrl('templates/textarea-element.tpl.html');
        });
        app.directive('passwordElement', function () {
            return new ElementDirective_1.default()
                .setTemplateUrl('templates/password-element.tpl.html');
        });
    };
    return FormBootstrap;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FormBootstrap;
