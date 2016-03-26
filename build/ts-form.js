var TSForm;
(function (TSForm) {
    var View = (function () {
        function View() {
            this._tagName = 'div';
            this._attributes = {};
            this.cid = _.uniqueId('view');
        }
        View.prototype.tagName = function (tagName) {
            this._tagName = tagName;
            return this;
        };
        View.prototype.getTagName = function () {
            return this._tagName;
        };
        View.prototype.className = function (className) {
            this._className = className;
            return this;
        };
        View.prototype.getClassName = function () {
            return this._className;
        };
        View.prototype.$ = function (selector) {
            return this.$el.find(selector);
        };
        View.prototype.initialize = function () {
            this._ensureElement();
        };
        View.prototype.render = function () {
            return this;
        };
        View.prototype.remove = function () {
            this._removeElement();
            return this;
        };
        View.prototype._removeElement = function () {
            this.$el.remove();
        };
        View.prototype.setElement = function (element) {
            this.undelegateEvents();
            this._setElement(element);
            this.delegateEvents();
            return this;
        };
        View.prototype._setElement = function (el) {
            this.$el = $(el);
            this.el = this.$el[0];
        };
        View.prototype.delegateEvents = function (events) {
            events || (events = _.result(this, 'viewEvents'));
            if (!events)
                return this;
            this.undelegateEvents();
            for (var key in events) {
                var method = events[key];
                if (!_.isFunction(method))
                    method = this[method];
                if (!method)
                    continue;
                var match = key.match(View.DELEGATE_EVENT_SPLITTER);
                this.delegate(match[1], match[2], _.bind(method, this));
            }
            return this;
        };
        View.prototype.delegate = function (eventName, selector, listener) {
            this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
            return this;
        };
        View.prototype.undelegateEvents = function () {
            if (this.$el)
                this.$el.off('.delegateEvents' + this.cid);
            return this;
        };
        View.prototype.undelegate = function (eventName, selector, listener) {
            this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
            return this;
        };
        View.prototype._createElement = function (tagName) {
            return document.createElement(tagName);
        };
        View.prototype._ensureElement = function () {
            if (!this.el) {
                var attrs = _.extend({}, _.result(this, '_attributes'));
                if (this._id)
                    attrs.id = _.result(this, '_id');
                if (this._className)
                    attrs['class'] = _.result(this, '_className');
                this.setElement(this._createElement(_.result(this, '_tagName')));
                this._setAttributes(attrs);
            }
            else {
                this.setElement(_.result(this, 'el'));
            }
        };
        View.prototype._setAttributes = function (attributes) {
            this.$el.attr(attributes);
        };
        View.DELEGATE_EVENT_SPLITTER = /^(\S+)\s*(.*)$/;
        return View;
    })();
    TSForm.View = View;
})(TSForm || (TSForm = {}));
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TSForm;
(function (TSForm) {
    var Form = (function (_super) {
        __extends(Form, _super);
        function Form() {
            _super.call(this);
            this._tagName = 'form';
            this._namespace = 'vm';
            this._elements = new TSCore.Data.Dictionary();
            this.initialize();
        }
        Object.defineProperty(Form.prototype, "elements", {
            get: function () {
                if (!this._cachedElements) {
                    this._cachedElements = this._elements.toObject();
                }
                return this._cachedElements;
            },
            enumerable: true,
            configurable: true
        });
        Form.prototype.formatter = function (formatter) {
            this._formatter = formatter;
            return this;
        };
        Form.prototype.getFormatter = function () {
            return this._formatter;
        };
        Form.prototype.namespace = function (namespace) {
            this._namespace = namespace;
            return this;
        };
        Form.prototype.getNameSpace = function () {
            return this._namespace;
        };
        Form.prototype.entity = function (entity) {
            this._entity = entity;
            return this;
        };
        Form.prototype.getEntity = function () {
            return this._entity;
        };
        Form.prototype.name = function (name) {
            this._name = name;
            return this;
        };
        Form.prototype.getName = function () {
            return this._name;
        };
        Form.prototype.element = function (element) {
            element.setForm(this);
            element.formatter(this.getFormatter());
            this._elements.set(element.getId(), element);
            return this;
        };
        Form.prototype.getElement = function (id) {
            return this._elements.get(id);
        };
        Form.prototype.render = function () {
            var _this = this;
            var namespace = this.getNameSpace();
            var name = this.getName();
            var suffix = 'Instance';
            var onSubmit = 'OnSubmit()';
            this.$el.empty();
            this.$el.attr('class', this.getClassName());
            this.$el.attr('name', namespace + "." + name + suffix);
            this.$el.attr('ng-submit', namespace + "." + name + onSubmit);
            this._elements.each(function (id, element) {
                if (!element.getEntity()) {
                    element.entity(_this.getEntity());
                }
                _this.$el.append(element.render().$el);
            });
            return this;
        };
        return Form;
    })(TSForm.View);
    TSForm.Form = Form;
})(TSForm || (TSForm = {}));
var TSForm;
(function (TSForm) {
    var Element = (function (_super) {
        __extends(Element, _super);
        function Element() {
            _super.call(this);
            this._tagName = 'div';
            this._uniqueId = _.uniqueId('element');
        }
        Element.prototype.id = function (id) {
            this._id = id;
            return this;
        };
        Element.prototype.getId = function () {
            return this._id || this._uniqueId;
        };
        Element.prototype.setForm = function (form) {
            this._form = form;
            return this;
        };
        Element.prototype.getForm = function () {
            return this._form;
        };
        Element.prototype.formatter = function (formatter) {
            this._formatter = formatter;
            return this;
        };
        Element.prototype.getFormatter = function () {
            return this._formatter;
        };
        Element.prototype.entity = function (entity) {
            this._entity = entity;
            return this;
        };
        Element.prototype.getEntity = function () {
            return this._entity;
        };
        Element.prototype.type = function (type) {
            this._type = type;
            return this;
        };
        Element.prototype.name = function (name) {
            this._id = name;
            this._name = name;
            return this;
        };
        Element.prototype.getName = function () {
            return this._name;
        };
        Element.prototype.label = function (label) {
            this._label = label;
            return this;
        };
        Element.prototype.getLabel = function () {
            return this.format(this._label);
        };
        Element.prototype.required = function (required) {
            if (required === void 0) { required = true; }
            this._required = required;
            return this;
        };
        Element.prototype.format = function (value) {
            var formatter = this.getFormatter();
            if (formatter) {
                value = formatter(value);
            }
            return value;
        };
        Element.prototype.render = function () {
            var form = this.getForm();
            var nameSpace = form.getNameSpace();
            var formName = form.getName();
            var entity = this.getEntity();
            var name = this.getName();
            var id = this.getId();
            this.$el.attr('element-options', nameSpace + "." + formName + ".elements." + id);
            this.$el.attr('model', nameSpace + "." + entity);
            this.$el.attr('model-value', nameSpace + "." + entity + "." + name);
            return this;
        };
        return Element;
    })(TSForm.View);
    TSForm.Element = Element;
})(TSForm || (TSForm = {}));
var TSForm;
(function (TSForm) {
    var ElementController = (function () {
        function ElementController() {
            console.log('element', this.element);
        }
        return ElementController;
    })();
    TSForm.ElementController = ElementController;
})(TSForm || (TSForm = {}));
var TSForm;
(function (TSForm) {
    var ElementDirective = (function () {
        function ElementDirective() {
            this.restrict = 'E';
            this.replace = true;
            this.bindToController = true;
            this.controller = 'TSFormElementController';
            this.controllerAs = 'vm';
            this.scope = {
                model: '=',
                modelValue: '=',
                element: '=elementOptions'
            };
            this.link = function (scope) {
                console.log('scope', scope);
            };
        }
        ElementDirective.prototype.setTemplateUrl = function (templateUrl) {
            this.templateUrl = templateUrl;
            return this;
        };
        ElementDirective.prototype.getTemplateUrl = function () {
            return this.templateUrl;
        };
        ElementDirective.prototype.setController = function (controller) {
            this.controller = controller;
            return this;
        };
        ElementDirective.prototype.getController = function () {
            return this.controller;
        };
        return ElementDirective;
    })();
    TSForm.ElementDirective = ElementDirective;
})(TSForm || (TSForm = {}));
var TSForm;
(function (TSForm) {
    var Elements;
    (function (Elements) {
        var CheckboxElement = (function (_super) {
            __extends(CheckboxElement, _super);
            function CheckboxElement() {
                _super.call(this);
                this._tagName = 'checkbox-element';
                this._trueValue = true;
                this._falseValue = false;
                this.initialize();
            }
            CheckboxElement.prototype.trueValue = function (trueValue) {
                this._trueValue = trueValue;
                return this;
            };
            CheckboxElement.prototype.falseValue = function (falseValue) {
                this._falseValue = falseValue;
                return this;
            };
            CheckboxElement.prototype.getTrueValue = function () {
                return _.isBoolean(this._trueValue) || _.isNumber(this._trueValue) ? this._trueValue : "'" + this._trueValue + "'";
            };
            CheckboxElement.prototype.getFalseValue = function () {
                return _.isBoolean(this._falseValue) || _.isNumber(this._trueValue) ? this._falseValue : "'" + this._falseValue + "'";
            };
            return CheckboxElement;
        })(TSForm.Element);
        Elements.CheckboxElement = CheckboxElement;
    })(Elements = TSForm.Elements || (TSForm.Elements = {}));
})(TSForm || (TSForm = {}));
var TSForm;
(function (TSForm) {
    var Elements;
    (function (Elements) {
        var InputElement = (function (_super) {
            __extends(InputElement, _super);
            function InputElement() {
                _super.call(this);
                this._tagName = 'input-element';
                this.initialize();
            }
            InputElement.prototype.minLength = function (minLength) {
                this._minLength = minLength;
                return this;
            };
            InputElement.prototype.maxLength = function (maxLength) {
                this._maxLength = maxLength;
                return this;
            };
            return InputElement;
        })(TSForm.Element);
        Elements.InputElement = InputElement;
    })(Elements = TSForm.Elements || (TSForm.Elements = {}));
})(TSForm || (TSForm = {}));
var TSForm;
(function (TSForm) {
    var Elements;
    (function (Elements) {
        var PasswordElement = (function (_super) {
            __extends(PasswordElement, _super);
            function PasswordElement() {
                _super.call(this);
                this._tagName = 'password-element';
                this.initialize();
            }
            return PasswordElement;
        })(Elements.InputElement);
        Elements.PasswordElement = PasswordElement;
    })(Elements = TSForm.Elements || (TSForm.Elements = {}));
})(TSForm || (TSForm = {}));
var TSForm;
(function (TSForm) {
    var Elements;
    (function (Elements) {
        var SelectElement = (function (_super) {
            __extends(SelectElement, _super);
            function SelectElement() {
                _super.call(this);
                this._tagName = 'select-element';
                this._options = new TSCore.Data.List();
                this.initialize();
            }
            SelectElement.prototype.options = function (options) {
                this._options.addMany(options);
                return this;
            };
            SelectElement.prototype.option = function (value, label) {
                this._options.add({
                    value: value,
                    label: label
                });
                return this;
            };
            SelectElement.prototype.getOptions = function () {
                var _this = this;
                this._options.each(function (option) {
                    option.label = _this.format(option.label);
                });
                return this._options.toArray();
            };
            return SelectElement;
        })(TSForm.Element);
        Elements.SelectElement = SelectElement;
    })(Elements = TSForm.Elements || (TSForm.Elements = {}));
})(TSForm || (TSForm = {}));
var TSForm;
(function (TSForm) {
    var Elements;
    (function (Elements) {
        var TextareaElement = (function (_super) {
            __extends(TextareaElement, _super);
            function TextareaElement() {
                _super.call(this);
                this._tagName = 'textarea-element';
                this.initialize();
            }
            TextareaElement.prototype.minLength = function (minLength) {
                this._minLength = minLength;
                return this;
            };
            TextareaElement.prototype.maxLength = function (maxLength) {
                this._maxLength = maxLength;
                return this;
            };
            return TextareaElement;
        })(TSForm.Element);
        Elements.TextareaElement = TextareaElement;
    })(Elements = TSForm.Elements || (TSForm.Elements = {}));
})(TSForm || (TSForm = {}));
var TSForm;
(function (TSForm) {
    var FormDirective = (function () {
        function FormDirective($compile, $timeout) {
            var _this = this;
            this.$compile = $compile;
            this.$timeout = $timeout;
            this.restrict = 'E';
            this.link = function (scope, element, attrs) {
                scope.$watch(attrs.formOptions, function (newVal) {
                    if (newVal) {
                        _this.$timeout(function () {
                            var form = newVal;
                            var template = form.render().$el;
                            console.log('template', template.clone());
                            var linkFn = _this.$compile(template);
                            var content = linkFn(scope);
                            element.empty();
                            element.append(content);
                        });
                    }
                });
            };
        }
        return FormDirective;
    })();
    TSForm.FormDirective = FormDirective;
})(TSForm || (TSForm = {}));
angular.module('ts-form-templates', []);
var module = angular.module('ts-form', [
    'ts-form-templates'
]);
module.controller('TSFormElementController', TSForm.ElementController);
module.directive('tsForm', ['$compile', '$timeout', function ($compile, $timeout) {
        return new TSForm.FormDirective($compile, $timeout);
    }
]);
module.directive('inputElement', function () {
    return new TSForm.ElementDirective()
        .setTemplateUrl('templates/input-element.tpl.html');
});
module.directive('selectElement', function () {
    return new TSForm.ElementDirective()
        .setTemplateUrl('templates/select-element.tpl.html');
});
module.directive('checkboxElement', function () {
    return new TSForm.ElementDirective()
        .setTemplateUrl('templates/checkbox-element.tpl.html');
});
module.directive('textareaElement', function () {
    return new TSForm.ElementDirective()
        .setTemplateUrl('templates/textarea-element.tpl.html');
});
module.directive('passwordElement', function () {
    return new TSForm.ElementDirective()
        .setTemplateUrl('templates/password-element.tpl.html');
});
//# sourceMappingURL=ts-form.js.map