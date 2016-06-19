import {customElement, bindable, inject, bindingMode} from 'aurelia-framework';

@customElement('text-element')
@inject(Element)
@bindable({ name: 'text', attribute: 'data', defaultBindingMode: bindingMode.twoWay})

export class TextElement {

	constructor(element) {
		this.element = element;
		this.element.addEventListener('dragstart', e => {
			this.dragOffsetY = e.y;
			this.dragOffsetX = e.x;
		}, false);
		this.element.addEventListener('dragend', e => {
			this.text.position.top = parseInt(this.text.position.top) + e.y - this.dragOffsetY;
			this.text.position.left = parseInt(this.text.position.left) + e.x - this.dragOffsetX;
		}, false);
	}

}