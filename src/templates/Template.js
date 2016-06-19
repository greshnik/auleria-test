export class Template {

    constructor(data) {
        Object.assign(this, data);
    }

    get jsonEncoded() {
        let jsonString = JSON.stringify(this);
        return jsonString;
    }
    
    get countItems() {
        return this.text.length;
    }

    get defaultTextItem() {
        return {
            'text': 'введите текст',
            'fontSize': 8,
            'color': 'red',
            'position': {
                top: 0,
                left: 0
            }
        }
    }

    addText() {
        this.text.push(this.defaultTextItem);
    }
}