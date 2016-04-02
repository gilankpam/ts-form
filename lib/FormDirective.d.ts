export default class FormDirective {
    protected $compile: ng.ICompileService;
    protected $timeout: ng.ITimeoutService;
    restrict: string;
    constructor($compile: ng.ICompileService, $timeout: ng.ITimeoutService);
    link: (scope: any, element: any, attrs: any) => void;
}
