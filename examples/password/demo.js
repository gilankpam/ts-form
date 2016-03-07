module PasswordDemo {

    interface ItemInterface {
        password: string
    }

    export class DemoController {

        public element: TSForm.Elements.PasswordElement;

        public item: ItemInterface;

        public constructor() {

            this.item = {
                password: 'supersecret'
            };

            this.element = new TSForm.Elements.PasswordElement()
                .name('password')
                .label('Password');
        }
    }
}

// Bootstrap
var app = angular.module('app', [
    'ts-form'
]);

app.run(() => {
    console.log('Demo running...');
});

app.controller('DemoController', PasswordDemo.DemoController);