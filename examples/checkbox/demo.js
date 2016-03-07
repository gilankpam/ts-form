var CheckboxDemo;
(function (CheckboxDemo) {
    var DemoController = (function () {
        function DemoController() {
            this.item = {
                terms: false
            };
            this.element = new TSForm.Elements.CheckboxElement()
                .name('terms')
                .label('Terms')
                .trueValue('yes')
                .falseValue('no');
        }
        return DemoController;
    })();
    CheckboxDemo.DemoController = DemoController;
})(CheckboxDemo || (CheckboxDemo = {}));
setTimeout(function () {
    var app = angular.module('app', [
        'ts-form'
    ]);
    app.run(function () {
        console.log('Demo running...');
    });
    app.controller('DemoController', CheckboxDemo.DemoController);
}, 5000);
