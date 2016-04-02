import {BootstrapInterface} from "angularjs-kit/lib/Bootstrap";
import ElementDirective from "./ElementDirective";
import ElementController from "./ElementController";
import FormDirective from "./FormDirective";

export default class FormBootstrap implements BootstrapInterface {

    public run(app:ng.IModule) {

        app.controller('TSFormElementController', ElementController);

        app.directive('tsForm', ['$compile', '$timeout', ($compile:ng.ICompileService, $timeout:ng.ITimeoutService) =>
            new FormDirective($compile, $timeout)
        ]);

        app.directive('inputElement', () =>
            new ElementDirective()
                .setTemplateUrl('templates/input-element.tpl.html')
        );

        app.directive('selectElement', () =>
            new ElementDirective()
                .setTemplateUrl('templates/select-element.tpl.html')
        );

        app.directive('checkboxElement', () =>
            new ElementDirective()
                .setTemplateUrl('templates/checkbox-element.tpl.html')
        );

        app.directive('textareaElement', () =>
            new ElementDirective()
                .setTemplateUrl('templates/textarea-element.tpl.html')
        );

        app.directive('passwordElement', () =>
            new ElementDirective()
                .setTemplateUrl('templates/password-element.tpl.html')
        );
    }
}
