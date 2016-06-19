'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
	"use strict";

	var customElement, bindable, inject, bindingMode, _dec, _dec2, _dec3, _class, TextElement;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	return {
		setters: [function (_aureliaFramework) {
			customElement = _aureliaFramework.customElement;
			bindable = _aureliaFramework.bindable;
			inject = _aureliaFramework.inject;
			bindingMode = _aureliaFramework.bindingMode;
		}],
		execute: function () {
			_export('TextElement', TextElement = (_dec = customElement('text-element'), _dec2 = inject(Element), _dec3 = bindable({ name: 'text', attribute: 'data', defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = _dec3(_class = function TextElement(element) {
				var _this = this;

				_classCallCheck(this, TextElement);

				this.element = element;
				this.element.addEventListener('dragstart', function (e) {
					_this.dragOffsetY = e.y;
					_this.dragOffsetX = e.x;
				}, false);
				this.element.addEventListener('dragend', function (e) {
					_this.text.position.top = parseInt(_this.text.position.top) + e.y - _this.dragOffsetY;
					_this.text.position.left = parseInt(_this.text.position.left) + e.x - _this.dragOffsetX;
				}, false);
			}) || _class) || _class) || _class));

			_export('TextElement', TextElement);
		}
	};
});
//# sourceMappingURL=TextElement.js.map
