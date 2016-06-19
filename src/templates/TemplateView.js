import {TemplateService} from './template-service';  
import {inject} from 'aurelia-framework';

@inject(TemplateService)
export class MyViewModel {  
  constructor(personService) {
      this.jane = {};
      this.personService = personService;
      this.personService.getPeople().then(response => {
        this.jane = response.content[0];
        this.jane.giveMoney(100);
    });
  }
}