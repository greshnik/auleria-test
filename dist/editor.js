'use strict';

System.register(['./templates/TemplateService', 'aurelia-framework'], function (_export, _context) {
    "use strict";

    var TemplateService, inject, _dec, _class, Editor;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_templatesTemplateService) {
            TemplateService = _templatesTemplateService.TemplateService;
        }, function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }],
        execute: function () {
            _export('Editor', Editor = (_dec = inject(TemplateService), _dec(_class = function () {
                function Editor(templateService) {
                    var _this = this;

                    _classCallCheck(this, Editor);

                    this.heading = 'Типа редактор';
                    this.activeTemplateIndex = null;

                    this.templateService = templateService;
                    this.templateService.get().then(function (response) {
                        _this.template = response;
                    }, function (error) {
                        _this.template = _this.templateService.getTestTemplate();
                    });
                }

                Editor.prototype.addTemplateText = function addTemplateText() {
                    this.activeTemplateIndex = this.template.countItems;
                    this.template.addText();
                };

                Editor.prototype.setActive = function setActive(index) {
                    this.activeTemplateIndex = index;
                };

                Editor.prototype.submit = function submit() {
                    this.templateService.save(this.template).then(function (response) {
                        alert('Успешно сохранено');
                    }, function (err) {
                        alert('Ошибка сохранения');
                    });
                };

                return Editor;
            }()) || _class));

            _export('Editor', Editor);
        }
    };
});
//# sourceMappingURL=editor.js.map
