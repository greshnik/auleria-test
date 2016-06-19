'use strict';

System.register(['aurelia-http-client', './Template'], function (_export, _context) {
    "use strict";

    var HttpClient, Template, _typeof, TemplateService;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }, function (_Template) {
            Template = _Template.Template;
        }],
        execute: function () {
            _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
            };

            _export('TemplateService', TemplateService = function () {
                function TemplateService() {
                    _classCallCheck(this, TemplateService);

                    this.json = {
                        image: 'http://tamgdeya.ru/photos/norm/1/1_Wbt641uy.png',
                        text: [{
                            'text': 'Test test test!',
                            'fontSize': 12,
                            'color': 'red',
                            'position': {
                                top: 0,
                                left: 0
                            }
                        }, {
                            'text': 'qweqweqwe qweqeqqq qweqe',
                            'fontSize': 14,
                            'color': 'green',
                            'position': {
                                top: 0,
                                left: 0
                            }
                        }, {
                            'text': 'asdasd asda!',
                            'fontSize': 8,
                            'color': 'blue',
                            'position': {
                                top: 0,
                                left: 0
                            }
                        }]
                    };

                    this.http = new HttpClient().configure(function (x) {
                        x.withHeader('Content-Type', 'application/json');
                        x.withReviver(function (k, v) {
                            return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' ? new Template(v) : v;
                        });
                    });
                }

                TemplateService.prototype.get = function get() {
                    return this.http.get('/template');
                };

                TemplateService.prototype.save = function save(template) {
                    return this.http.post('/template', template);
                };

                TemplateService.prototype.getTestTemplate = function getTestTemplate() {
                    return new Template(this.json);
                };

                return TemplateService;
            }());

            _export('TemplateService', TemplateService);
        }
    };
});
//# sourceMappingURL=TemplateService.js.map
