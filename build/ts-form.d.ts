/// <reference path="../node_modules/ts-core/build/ts-core.d.ts" />
/// <reference path="../typings/tsd.d.ts" />
declare module TSForm {
    class View {
        static DELEGATE_EVENT_SPLITTER: RegExp;
        protected _tagName: string;
        protected _className: string;
        protected _attributes: any;
        $el: JQuery;
        el: HTMLElement;
        protected _id: string;
        cid: string;
        constructor();
        tagName(tagName: string): this;
        getTagName(): string;
        className(className: string): this;
        getClassName(): string;
        $(selector: any): JQuery;
        initialize(): void;
        render(): View;
        remove(): this;
        private _removeElement();
        setElement(element: JQuery | HTMLElement): View;
        protected _setElement(el: JQuery | HTMLElement): void;
        delegateEvents(events?: any): this;
        delegate(eventName: string, selector: string, listener: any): this;
        undelegateEvents(): this;
        undelegate(eventName: string, selector: string, listener: any): this;
        protected _createElement(tagName: string): HTMLElement;
        protected _ensureElement(): void;
        protected _setAttributes(attributes: any): void;
    }
}
declare module TSForm {
    class Form extends TSForm.View {
        protected _tagName: string;
        protected _namespace: string;
        protected _entity: string;
        protected _name: string;
        protected _formatter: any;
        protected _elements: TSCore.Data.Dictionary<string, Element>;
        protected _cachedElements: any;
        elements: any;
        constructor();
        formatter(formatter: any): this;
        getFormatter(): any;
        namespace(namespace: string): this;
        getNameSpace(): string;
        entity(entity: string): this;
        getEntity(): string;
        name(name: string): this;
        getName(): string;
        element(element: Element): this;
        getElement(id: string): Element;
        render(): this;
    }
}
declare module TSForm {
    class Element extends TSForm.View {
        protected _tagName: string;
        _uniqueId: string;
        _id: string;
        _form: Form;
        _type: string;
        _name: string;
        _label: string;
        _formatter: any;
        _entity: string;
        _required: boolean;
        constructor();
        id(id: string): this;
        getId(): string;
        setForm(form: Form): this;
        getForm(): Form;
        formatter(formatter: any): this;
        getFormatter(): any;
        entity(entity: string): this;
        getEntity(): string;
        type(type: string): this;
        name(name: string): this;
        getName(): string;
        label(label: string): this;
        getLabel(): string;
        required(required?: boolean): Element;
        format(value: string): string;
        render(): this;
    }
}
declare module TSForm {
    class ElementController {
        element: any;
        constructor();
    }
}
declare module TSForm {
    class ElementDirective {
        restrict: string;
        replace: boolean;
        templateUrl: string;
        bindToController: boolean;
        controller: string;
        controllerAs: string;
        scope: any;
        link: (scope: any) => void;
        setTemplateUrl(templateUrl: string): ElementDirective;
        getTemplateUrl(): string;
        setController(controller: string): ElementDirective;
        getController(): string;
    }
}
declare module TSForm.Elements {
    class CheckboxElement extends Element {
        _tagName: string;
        _trueValue: any;
        _falseValue: any;
        _options: any[];
        constructor();
        trueValue(trueValue: any): this;
        falseValue(falseValue: any): this;
        getTrueValue(): any;
        getFalseValue(): any;
    }
}
declare module TSForm.Elements {
    class InputElement extends Element {
        _tagName: string;
        _minLength: number;
        _maxLength: number;
        constructor();
        minLength(minLength: number): InputElement;
        maxLength(maxLength: number): InputElement;
    }
}
declare module TSForm.Elements {
    class PasswordElement extends InputElement {
        _tagName: string;
        constructor();
    }
}
declare module TSForm.Elements {
    class SelectElement extends Element {
        _tagName: string;
        _options: TSCore.Data.List<any>;
        constructor();
        options(options: any[]): this;
        option(value: any, label: string): this;
        getOptions(): any[];
    }
}
declare module TSForm.Elements {
    class TextareaElement extends Element {
        _tagName: string;
        _minLength: number;
        _maxLength: number;
        constructor();
        minLength(minLength: number): InputElement;
        maxLength(maxLength: number): InputElement;
    }
}
declare module TSForm {
    class FormDirective {
        protected $compile: ng.ICompileService;
        protected $timeout: ng.ITimeoutService;
        restrict: string;
        constructor($compile: ng.ICompileService, $timeout: ng.ITimeoutService);
        link: (scope: any, element: any, attrs: any) => void;
    }
}
declare module TSForm {
}
declare var module: ng.IModule;
