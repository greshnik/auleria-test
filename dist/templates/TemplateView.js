'use strict';

System.register(['./template-service', 'aurelia-framework'], function (_export, _context) {
  "use strict";

  var TemplateService, inject, _dec, _class, MyViewModel;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_templateService) {
      TemplateService = _templateService.TemplateService;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      _export('MyViewModel', MyViewModel = (_dec = inject(TemplateService), _dec(_class = function MyViewModel(personService) {
        var _this = this;

        _classCallCheck(this, MyViewModel);

        this.jane = {};
        this.personService = personService;
        this.personService.getPeople().then(function (response) {
          _this.jane = response.content[0];
          _this.jane.giveMoney(100);
        });
      }) || _class));

      _export('MyViewModel', MyViewModel);
    }
  };
});
//# sourceMappingURL=TemplateView.js.map
