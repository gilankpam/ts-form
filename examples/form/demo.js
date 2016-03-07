module FormDemo {

    interface UserInterface {
        firstName: string,
        lastName: string,
        email: string,
        sex: string,
        userRoleId: number,
        userStateId: number,
        notes: string
    }

    export class DemoController {

        public userForm: TSForm.Form;

        public user: UserInterface;

        public static $inject = ['$window'];

        public constructor(protected $window) {

            this.user = {
                firstName: 'Jane',
                lastName: 'Doe',
                email: 'janedoe@example.com',
                sex: 'f',
                userRoleId: 1,
                userStateId: 0,
                notes: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            };

            this.userForm = new TSForm.Form()
                .className('form form-horizontal')
                .namespace('vm')
                .name('userForm')
                .entity('user')
                .element(
                    new TSForm.Elements.InputElement()
                        .name('firstName')
                        .label('First name')
                )
                .element(
                    new TSForm.Elements.InputElement()
                        .name('lastName')
                        .label('Last name')
                )
                .element(
                    new TSForm.Elements.InputElement()
                        .name('email')
                        .label('Email')
                )
                .element(
                    new TSForm.Elements.SelectElement()
                        .name('sex')
                        .label('Sex')
                        .option('m', 'Male')
                        .option('f', 'Female')
                )
                .element(
                    new TSForm.Elements.SelectElement()
                        .name('userRoleId')
                        .label('Role')
                        .option(1, 'User')
                        .option(2, 'Manager')
                        .option(3, 'Admin')
                )
                .element(
                    new TSForm.Elements.CheckboxElement()
                        .name('userStateId')
                        .label('Active')
                        .trueValue(1)
                        .falseValue(0)
                )
                .element(
                    new TSForm.Elements.TextareaElement()
                        .name('notes')
                        .label('Notes')
                );
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

app.controller('DemoController', FormDemo.DemoController);