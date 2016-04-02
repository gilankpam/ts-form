export default class View {
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
