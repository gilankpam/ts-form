export default class ElementDirective {
    restrict: string;
    replace: boolean;
    templateUrl: string;
    bindToController: boolean;
    controller: string;
    controllerAs: string;
    scope: any;
    link: (scope: any) => void;
    setTemplateUrl(templateUrl: string): this;
    getTemplateUrl(): string;
    setController(controller: string): this;
    getController(): string;
}
