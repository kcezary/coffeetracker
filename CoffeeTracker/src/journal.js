import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import $ from 'jquery';
import 'fetch';

@inject(HttpClient)
export class Welcome {

    entries = [];

    constructor(http) {
        http.configure(config => {
            config
              .useStandardConfiguration();
        });

        this.http = http;
    }

    activate(params) {
        return this.http.fetch('api/coffee')
          .then(response => response.json())
          .then(entries => this.entries = entries);   
    }
}
