///<reference path="View.ts"/>
///<reference path="Element.ts"/>

module TSForm {

    export class Form extends TSForm.View {

        protected _tagName:string = 'form';

        protected _namespace:string = 'vm';

        protected _entity:string;

        protected _name:string;

        protected _formatter:any;

        protected _elements:TSCore.Data.Dictionary<string, Element> = new TSCore.Data.Dictionary<string, Element>();

        protected _cachedElements:any;

        public get elements() {

            if (!this._cachedElements) {
                this._cachedElements = this._elements.toObject();
            }

            return this._cachedElements;
        }

        public constructor() {

            super();
            this.initialize();
        }

        public formatter(formatter:any):this {
            this._formatter = formatter;
            return this;
        }

        public getFormatter():any {
            return this._formatter;
        }

        public namespace(namespace:string):this {
            this._namespace = namespace;
            return this;
        }

        public getNameSpace():string {
            return this._namespace;
        }

        public entity(entity:string):this {
            this._entity = entity;
            return this;
        }

        public getEntity():string {
            return this._entity;
        }

        public name(name:string):this {
            this._name = name;
            return this;
        }

        public getName():string {
            return this._name;
        }

        public element(element:Element):this {
            element.setForm(this);
            element.formatter(this.getFormatter());
            this._elements.set(element.getId(), element);
            return this;
        }

        public getElement(id:string):Element {
            return this._elements.get(id);
        }

        public render():this {

            var namespace = this.getNameSpace();
            var name = this.getName();
            var suffix = 'Instance';
            var onSubmit = 'OnSubmit()';

            this.$el.empty();
            this.$el.attr('class', this.getClassName());
            this.$el.attr('name', `${namespace}.${name}${suffix}`);
            this.$el.attr('ng-submit', `${namespace}.${name}${onSubmit}`);

            this._elements.each((id, element) => {

                if (!element.getEntity()) {
                    element.entity(this.getEntity());
                }

                this.$el.append(element.render().$el);
            });

            return this;
        }
    }
}
