///<reference path="../../build/ts-form.d.ts"/>
///<reference path="../../typings/tsd.d.ts"/>

module InputDemo {

    interface ItemInterface {
        organization: string
    }

    export class DemoController {

        public element: TSForm.Elements.InputElement;

        public item: ItemInterface;

        public constructor() {

            this.item = {
                organization: 'Redound'
            };

            this.element = new TSForm.Elements.InputElement()
                .name('organization')
                .label('Organization');
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

app.controller('DemoController', InputDemo.DemoController);