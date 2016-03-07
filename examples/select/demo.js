module SelectDemo {

    interface ItemInterface {
        sex: string
    }

    export class DemoController {

        public element: TSForm.Elements.SelectElement;

        public item: ItemInterface;

        public constructor() {

            this.item = {
                sex: 'm'
            };

            this.element = new TSForm.Elements.SelectElement()
                .name('sex')
                .label('Sex')
                .option('m', 'Male')
                .option('f', 'Female')
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

app.controller('DemoController', SelectDemo.DemoController);