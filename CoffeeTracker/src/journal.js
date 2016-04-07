import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import $ from 'jquery';
import {Bloodhound} from "typeahead.js-jspm";
import 'fetch';
import {CoffeeEntry} from './coffeeentry';
import {Validation} from 'aurelia-validation';

@inject(HttpClient, Validation)
export class Journal {
    
    entries = [];

    constructor(http, validation) {
        http.configure(config => {
            config
              .useStandardConfiguration();
        });

        this.http = http;
        this.newEntry = new CoffeeEntry();
        this.validation = validation.on(this.newEntry, (config) => { config.useLocale('de-DE')})
          .ensure('location')
                .isNotEmpty()
                .hasLengthBetween(1, 32)
            .ensure('coffeeType')
                .isNotEmpty()
                .hasLengthBetween(1, 56)
            .ensure('quantity')
                .isNotEmpty()
                .isNumber()
                .isGreaterThan(0)
                .containsOnlyDigits()
            .ensure('itemPrice')
                .isNotEmpty()
                .isNumber()
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
        $typeahead.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, typeaheadOpts);
    }

    save(newEntry){

        this.validation.validate()
            .then(() => {
                let data = JSON.stringify(newEntry);
                
                this.newEntry.location = "";
                this.newEntry.coffeeType = "";
                this.newEntry.itemPrice = null;
                this.newEntry.quantity = null;

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
                  }).catch(error => {
                      //BAM add some logging
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
        }).catch(error => {
            //BAM add some logging
        });
    }

    activate(params) {
        return this.http.fetch('api/coffee')
          .then(response => response.json())
          .then(entries => this.entries = entries);   
    }
}
