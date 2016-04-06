import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import $ from 'jquery';
import {Bloodhound} from "typeahead.js-jspm";
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

        var engine = new Bloodhound({
            local: ["Added milk, sweeteners and substitutes", "Drip or filtered coffee", "French press or cafeti�re", "Percolated", "Turkish coffee", "Cold brew", "Vacuum coffee", "Espresso and variations", "Caff� Americano", "Caf� Cubano", "Caff� crema", "Cafe Zorro", "Doppio", "Espresso Romano", "Guillermo", "Ristretto", "Espresso with milk", "Antoccino", "Breve", "Caf� bomb�n", "Cappuccino", "Cortado", "Latte", "Latte macchiato", "Espressino", "Flat white", "Gal�o", "Macchiato", "Wiener or Viennese melange", "Coffee with milk", "Caf� au lait", "Ca phe sua da", "Egg coffee", "Eggnog latte", "Eiskaffee", "Kopi susu", "White coffee", "White coffee (England)", "Coffee or espresso with whipped cream", "Vienna coffee", "Espresso con panna", "Combinations", "Coffee with espresso", "Coffee with tea", "Black tie", "Chai latte", "Red tie", "Yuanyang", "Coffee with alcohol", "Liqueur coffee", "Irish coffee", "R�desheimer Kaffee", "Pharis�er", "Carajillo", "Flavoured", "Melya", "Caff� Marocchino", "Caf� miel", "Mocha or caf� mocha or mochaccino", "Caf� de olla", "Miscellaneous", "Iced", "Greek frapp� coffee", "Mazagran", "Palazzo", "Ice Shot", "Instant coffee", "Canned coffee", "Coffee milk", "Decaffeinated", "Other", "Affogato", "Caff� Medici", "Caf� Touba", "Indian filter coffee", "Moka", "Shakerato", "Pocillo"],
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            datumTokenizer: Bloodhound.tokenizers.whitespace
        });
    }

    deleteEntry(entry, index) {
        var url = "api/coffee/" + entry.id;
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
