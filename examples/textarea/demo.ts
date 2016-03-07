///<reference path="../../build/ts-form.d.ts"/>
///<reference path="../../typings/tsd.d.ts"/>

module TextareaDemo {

    interface ItemInterface {
        notes: string
    }

    export class DemoController {

        public element: TSForm.Elements.TextareaElement;

        public item: ItemInterface;

        public constructor() {

            this.item = {
                notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            };

            this.element = new TSForm.Elements.TextareaElement()
                .name('notes')
                .label('Notes');
        }
    }
}

setTimeout(() => {

    // Bootstrap
    var app = angular.module('app', [
        'ts-form'
    ]);

    app.run(() => {
        console.log('Demo running...');
    });

    app.controller('DemoController', TextareaDemo.DemoController);
}, 2000);