module CheckboxDemo {

    interface ItemInterface {
        terms: boolean
    }

    export class DemoController {

        public element: TSForm.Elements.CheckboxElement;

        public item: ItemInterface;

        public constructor() {

            this.item = {
                terms: false
            };

            this.element = new TSForm.Elements.CheckboxElement()
                .name('terms')
                .label('Terms')
                .trueValue('yes')
                .falseValue('no');
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

app.controller('DemoController', CheckboxDemo.DemoController);