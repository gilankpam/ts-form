var PasswordDemo;
(function (PasswordDemo) {
    var DemoController = (function () {
        function DemoController() {
            this.item = {
                password: 'supersecret'
            };
            this.element = new TSForm.Elements.PasswordElement()
                .name('password')
                .label('Password');
        }
        return DemoController;
    })();
    PasswordDemo.DemoController = DemoController;
})(PasswordDemo || (PasswordDemo = {}));
var app = angular.module('app', [
    'ts-form'
]);
app.run(function () {
    console.log('Demo running...');
});
app.controller('DemoController', PasswordDemo.DemoController);
