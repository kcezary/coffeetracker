import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import jsnlog from 'jsnlog';

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

        var logger = jsnlog.JL();
        logger.info("configureRouter");

        this.router = router;
    }
}
