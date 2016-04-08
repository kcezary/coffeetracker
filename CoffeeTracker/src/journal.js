import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import $ from 'jquery';
import {Bloodhound} from "typeahead.js-jspm";
import 'fetch';
import {CoffeeEntry} from './coffeeentry';
import {Validation} from 'aurelia-validation';
import * as toastr from "toastr";
import {I18N} from 'aurelia-i18n';

@inject(HttpClient, Validation, I18N)
export class Journal {
    
    entries = [];

    constructor(http, validation, i18n) {
        http.configure(config => {
            config
              .useStandardConfiguration();
        });

        this.http = http;
        this.i18n = i18n;
        this.newEntry = new CoffeeEntry(validation);
        this.validation = validation.on(this, (config) => { config.useLocale('de-DE')})
          .ensure('newEntry.location')
                .isNotEmpty()
                .hasLengthBetween(1, 32)
            .ensure('newEntry.coffeeType')
                .isNotEmpty()
                .hasLengthBetween(1, 56)
            .ensure('newEntry.quantity')
                .isNotEmpty()
                //.isNumber()
                .isGreaterThan(0)
                .containsOnlyDigits()
            .ensure('newEntry.itemPrice')
                .isNotEmpty()
                //.isNumber()
                .isGreaterThan(0);
    }

    attached(){

        let suggestions = new Bloodhound({
            name: 'options',
            limit : 15,
            local: ["Added milk, sweeteners and substitutes", "Drip or filtered coffee", "French press or cafetière", "Percolated", "Turkish coffee", "Cold brew", "Vacuum coffee", "Espresso and variations", "Caffè Americano", "Café Cubano", "Caffè crema", "Cafe Zorro", "Doppio", "Espresso Romano", "Guillermo", "Ristretto", "Espresso with milk", "Antoccino", "Breve", "Café bombón", "Cappuccino", "Cortado", "Latte", "Latte macchiato", "Espressino", "Flat white", "Galão", "Macchiato", "Wiener or Viennese melange", "Coffee with milk", "Café au lait", "Ca phe sua da", "Egg coffee", "Eggnog latte", "Eiskaffee", "Kopi susu", "White coffee", "White coffee (England)", "Coffee or espresso with whipped cream", "Vienna coffee", "Espresso con panna", "Combinations", "Coffee with espresso", "Coffee with tea", "Black tie", "Chai latte", "Red tie", "Yuanyang", "Coffee with alcohol", "Liqueur coffee", "Irish coffee", "Rüdesheimer Kaffee", "Pharisäer", "Carajillo", "Flavoured", "Melya", "Caffè Marocchino", "Café miel", "Mocha or café mocha or mochaccino", "Café de olla", "Miscellaneous", "Iced", "Greek frappé coffee", "Mazagran", "Palazzo", "Ice Shot", "Instant coffee", "Canned coffee", "Coffee milk", "Decaffeinated", "Other", "Affogato", "Caffè Medici", "Café Touba", "Indian filter coffee", "Moka", "Shakerato", "Pocillo"],
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            datumTokenizer: Bloodhound.tokenizers.whitespace
        });

        suggestions.initialize();

        let typeaheadOpts = {
            name: 'options',
            source: suggestions.ttAdapter()
        };

        let $typeahead = $("#coffeeType");
        let triggerChange = () => {
            let val = $typeahead.val();
            this.newEntry.coffeeType = val;
        };
        $typeahead.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, typeaheadOpts)
            .on("typeahead:selected", triggerChange)
            .on("typeahead:autocompleted", triggerChange);
    }

    save(newEntry){

        this.validation.validate()
            .then(() => {
                let data = JSON.stringify(newEntry);
                var url = "api/coffee";
                return this.http.fetch(url, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: data
                }).then(result => result.json())
                  .then(result => {
                      this.entries.unshift(result);
                      let msg = this.i18n.tr('coffeeSaved', {coffeeType: result.coffeeType})
                      toastr.success(msg);

                  })
                    .then(() => {
                        //reset form
                        this.newEntry.location = "";
                        this.newEntry.coffeeType = "";
                        this.newEntry.itemPrice = null;
                        this.newEntry.quantity = null;

                        this.validation.clear()
                    })
                    .catch(error => {
                        let msg = this.i18n.tr('genericError')
                        toastr.error(msg);
                  });
            });
    }

    deleteEntry(entry, index) {
        let url = `api/coffee/${entry.id}`;
        return this.http.fetch(url, {
            method: 'delete'
        }).then(() => {
            //remove from UI
            this.entries.splice(index, 1);

            let msg = this.i18n.tr('coffeeDeleted', {coffeeType: entry.coffeeType})
            toastr.info(msg);
        }).catch(error => {
            let msg = this.i18n.tr('genericError')
            toastr.error(msg);
        });
    }

    activate(params) {
        return this.http.fetch('api/coffee')
          .then(response => response.json())
          .then(entries => this.entries = entries);   
    }
}
