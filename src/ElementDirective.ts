export default class ElementDirective {

    public restrict:string = 'E';
    public replace:boolean = true;
    public templateUrl:string;
    public bindToController:boolean = true;
    public controller:string = 'TSFormElementController';
    public controllerAs:string = 'vm';
    public scope:any = {
        model: '=',
        modelValue: '=',
        element: '=elementOptions'
    };

    public link = (scope) => {
    };

    public setTemplateUrl(templateUrl:string):this {
        this.templateUrl = templateUrl;
        return this;
    }

    public getTemplateUrl():string {
        return this.templateUrl;
    }

    public setController(controller:string):this {
        this.controller = controller;
        return this;
    }

    public getController():string {
        return this.controller;
    }
}
