var SelectDemo;
(function (SelectDemo) {
    var DemoController = (function () {
        function DemoController() {
            this.item = {
                sex: 'm'
            };
            this.element = new TSForm.Elements.SelectElement()
                .name('sex')
                .label('Sex')
                .option('m', 'Male')
                .option('f', 'Female');
        }
        return DemoController;
    })();
    SelectDemo.DemoController = DemoController;
})(SelectDemo || (SelectDemo = {}));
var app = angular.module('app', [
    'ts-form'
]);
app.run(function () {
    console.log('Demo running...');
});
app.controller('DemoController', SelectDemo.DemoController);
