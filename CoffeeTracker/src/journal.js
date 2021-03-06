﻿﻿import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import $ from 'jquery';
import {Bloodhound} from "typeahead.js-jspm";
import 'fetch';
import {Validation} from 'aurelia-validation';
import {CoffeeEntry} from './resources/coffeeentry';
import {CoffeeDataService} from "./resources/coffeeDataService";

@inject(HttpClient, Validation, CoffeeDataService)
export class Journal {
    
    constructor(http, validation, coffeeData) {
        http.configure(config => {
            config
              .useStandardConfiguration();
        });

        this.http = http;
        this.coffeeData = coffeeData;
        this.newEntry = new CoffeeEntry();
        this.newEntry.reset();
        this.validation = validation.on(this, (config) => { config.useLocale('de-DE')})
          .ensure('newEntry.location')
                .isNotEmpty()
                .hasLengthBetween(1, 32)
            .ensure('newEntry.coffeeType')
                .isNotEmpty()
                .hasLengthBetween(1, 56)
            .ensure('newEntry.quantity')
                .isNotEmpty()
                .isGreaterThan(0)
                .containsOnlyDigits()
            .ensure('newEntry.itemPrice')
                .isNotEmpty()
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
                return this.coffeeData
                    .saveNewEntry(newEntry)
                    .then(result => {
                        this.entries.unshift(result);
                        //reset form
                        this.newEntry.reset();
                        this.validation.clear();
                        this.validation.result.isValid = false;
                        return result;
                    });
            });
    }

    deleteEntry(entry, index) {
        return this.coffeeData
            .deleteEntry(entry)
            .then(() => {
                //remove from UI
                this.entries.splice(index, 1);
            })
    }

    activate(params) {
        return this.coffeeData
            .getAllEntries()
            .then(entries => this.entries = entries);   
    }
}
