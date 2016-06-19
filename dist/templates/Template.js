'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Template;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('Template', Template = function () {
                function Template(data) {
                    _classCallCheck(this, Template);

                    Object.assign(this, data);
                }

                Template.prototype.addText = function addText() {
                    this.text.push(this.defaultTextItem);
                };

                _createClass(Template, [{
                    key: 'jsonEncoded',
                    get: function get() {
                        var jsonString = JSON.stringify(this);
                        return jsonString;
                    }
                }, {
                    key: 'countItems',
                    get: function get() {
                        return this.text.length;
                    }
                }, {
                    key: 'defaultTextItem',
                    get: function get() {
                        return {
                            'text': 'введите текст',
                            'fontSize': 8,
                            'color': 'red',
                            'position': {
                                top: 0,
                                left: 0
                            }
                        };
                    }
                }]);

                return Template;
            }());

            _export('Template', Template);
        }
    };
});
//# sourceMappingURL=Template.js.map
