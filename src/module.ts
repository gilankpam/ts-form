///<reference path="ts-form.r.ts"/>

angular.module('ts-form-templates', []);

var module = angular.module('ts-form', [
    'ts-form-templates'
]);

module.controller('TSFormElementController', TSForm.ElementController);

module.directive('tsForm', ['$compile', '$timeout', ($compile: ng.ICompileService, $timeout: ng.ITimeoutService) =>
    new TSForm.FormDirective($compile, $timeout)
]);

module.directive('inputElement', () =>
    new TSForm.ElementDirective()
        .setTemplateUrl('templates/input-element.tpl.html')
);

module.directive('selectElement', () =>
    new TSForm.ElementDirective()
        .setTemplateUrl('templates/select-element.tpl.html')
);

module.directive('checkboxElement', () =>
    new TSForm.ElementDirective()
        .setTemplateUrl('templates/checkbox-element.tpl.html')
);

module.directive('textareaElement', () =>
    new TSForm.ElementDirective()
        .setTemplateUrl('templates/textarea-element.tpl.html')
);

module.directive('passwordElement', () =>
    new TSForm.ElementDirective()
        .setTemplateUrl('templates/password-element.tpl.html')
);