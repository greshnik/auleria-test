import {HttpClient} from 'aurelia-http-client';
import {Template} from './Template';

export class TemplateService {
    json = {
        image: 'http://tamgdeya.ru/photos/norm/1/1_Wbt641uy.png',
        text: [
            {
                'text': 'Test test test!',
                'fontSize': 12,
                'color': 'red',
                'position': {
                    top: 0,
                    left: 0
                }
            },
            {
                'text': 'qweqweqwe qweqeqqq qweqe',
                'fontSize': 14,
                'color': 'green',
                'position': {
                    top: 0,
                    left: 0
                }
            },
            {
                'text': 'asdasd asda!',
                'fontSize': 8,
                'color': 'blue',
                'position': {
                    top: 0,
                    left: 0
                }
            }
        ]
    };

    constructor() {
        this.http = new HttpClient().configure(x=> {
            x.withHeader('Content-Type', 'application/json');
            x.withReviver((k, v) => {
                return typeof v === 'object' ? new Template(v) : v;
            });
        });
    }

    get() {
        return this.http.get('/template');
    }

    save(template) {
        return this.http.post('/template', template);
    }

    getTestTemplate() {
        return new Template(this.json);
    }
}