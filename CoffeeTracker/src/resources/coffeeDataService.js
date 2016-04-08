import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';
import {CoffeeEntry} from './coffeeentry';
import {Validation} from 'aurelia-validation';
import * as toastr from "toastr";
import {I18N} from 'aurelia-i18n';

let baseUrl = `api/coffee`;

@inject(HttpClient, Validation, I18N)
export class CoffeeDataService {
    constructor(http, validation, i18n) {
        http.configure(config => {
            config
              .useStandardConfiguration();
        });

        this.http = http;
        this.i18n = i18n;
    }

    saveNewEntry(newEntry){
        let data = JSON.stringify(newEntry);
        let request = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        };

        return this.http.fetch(baseUrl, request)
          .then(result => result.json())
          .then(result => {
              let msg = this.i18n.tr('coffeeSaved', {coffeeType: result.coffeeType})
              toastr.success(msg);
              return result;
          })
          .catch(error => this.handleError(error));
    }

    deleteEntry(entry) {
        let url = `${baseUrl}/${entry.id}`;
        return this.http
            .fetch(url, { method: 'delete' })
            .then(() => {
                let msg = this.i18n.tr('coffeeDeleted', {coffeeType: entry.coffeeType})
                toastr.info(msg);
            })
            .catch(error => this.handleError(error));
    }

    handleError(error){
        let msg = this.i18n.tr('genericError')
        toastr.error(msg);
    }

    getAllEntries() {
        return this.http.fetch(`${baseUrl}`)
          .then(response => response.json())
          .catch(error => this.handleError(error));   
    }
}