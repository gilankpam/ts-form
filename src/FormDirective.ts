import Form from "./Form";

export default class FormDirective {

    public restrict:string = 'E';

    public constructor(protected $compile:ng.ICompileService, protected $timeout:ng.ITimeoutService) {

    }

    public link = (scope, element, attrs) => {

        scope.$watch(attrs.formOptions, newVal => {

            if (newVal) {

                this.$timeout(() => {
                    var form:Form = newVal;
                    var template = form.render().$el;
                    console.log('template', template.clone());
                    var linkFn = this.$compile(template);
                    var content = linkFn(scope);
                    element.empty();
                    element.append(content);
                });
            }
        });
    };
}
