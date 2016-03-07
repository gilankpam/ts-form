var InputDemo;
(function (InputDemo) {
    var DemoController = (function () {
        function DemoController() {
            this.item = {
                organization: 'Redound'
            };
            this.element = new TSForm.Elements.InputElement()
                .name('organization')
                .label('Organization');
        }
        return DemoController;
    })();
    InputDemo.DemoController = DemoController;
})(InputDemo || (InputDemo = {}));
var app = angular.module('app', [
    'ts-form'
]);
app.run(function () {
    console.log('Demo running...');
});
app.controller('DemoController', InputDemo.DemoController);
