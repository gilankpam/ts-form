"use strict";
var FormDirective = (function () {
    function FormDirective($compile, $timeout) {
        var _this = this;
        this.$compile = $compile;
        this.$timeout = $timeout;
        this.restrict = 'E';
        this.link = function (scope, element, attrs) {
            scope.$watch(attrs.formOptions, function (newVal) {
                if (newVal) {
                    _this.$timeout(function () {
                        var form = newVal;
                        var template = form.render().$el;
                        console.log('template', template.clone());
                        var linkFn = _this.$compile(template);
                        var content = linkFn(scope);
                        element.empty();
                        element.append(content);
                    });
                }
            });
        };
    }
    return FormDirective;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FormDirective;
