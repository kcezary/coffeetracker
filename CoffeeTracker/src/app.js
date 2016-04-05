import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class App {

    constructor(http) {
        http.configure(config => {
            config
              .useStandardConfiguration();
        });

        this.http = http;
    }

    configureRouter(config, router) {
        config.title = 'Coffee Tracker';
        config.map([
          { 
              route: ['', 'journal'], 
              name: 'journal',      
              moduleId: 'journal',      
              nav: true, 
              title: '' }
        ]);

        this.router = router;
    }
}
