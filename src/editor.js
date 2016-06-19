import {TemplateService} from './templates/TemplateService';
import {inject} from 'aurelia-framework';

@inject(TemplateService)

export class Editor {
    heading = 'Типа редактор';
    activeTemplateIndex = null;

    constructor(templateService) {
        this.templateService = templateService;
        this.templateService.get().then(response => {
            this.template = response;
        }, error => {
            this.template = this.templateService.getTestTemplate();
        });
    }

    addTemplateText() {
        this.activeTemplateIndex = this.template.countItems;
        this.template.addText();
    }

    setActive(index) {
        this.activeTemplateIndex = index;
    }

    submit() {
        this.templateService.save(this.template).then(response => {
            alert('Успешно сохранено');
        }, err => {
            alert('Ошибка сохранения');
        });
    }
}
