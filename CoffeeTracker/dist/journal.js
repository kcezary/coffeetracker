'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'jquery', 'typeahead.js-jspm', 'fetch'], function (_export, _context) {
    var inject, HttpClient, $, Bloodhound, _dec, _class2, CoffeeEntry, Journal;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaFetchClient) {
            HttpClient = _aureliaFetchClient.HttpClient;
        }, function (_jquery) {
            $ = _jquery.default;
        }, function (_typeaheadJsJspm) {
            Bloodhound = _typeaheadJsJspm.Bloodhound;
        }, function (_fetch) {}],
        execute: function () {
            CoffeeEntry = function CoffeeEntry() {
                _classCallCheck(this, CoffeeEntry);

                this.location = "";
                this.coffeeType = "";
                this.itemPrice = null;
                this.quantity = 1;
            };

            _export('Journal', Journal = (_dec = inject(HttpClient), _dec(_class2 = function () {
                function Journal(http) {
                    _classCallCheck(this, Journal);

                    this.entries = [];
                    this.newEntry = new CoffeeEntry();

                    http.configure(function (config) {
                        config.useStandardConfiguration();
                    });

                    this.http = http;

                    var engine = new Bloodhound({
                        local: ["Added milk, sweeteners and substitutes", "Drip or filtered coffee", "French press or cafeti�re", "Percolated", "Turkish coffee", "Cold brew", "Vacuum coffee", "Espresso and variations", "Caff� Americano", "Caf� Cubano", "Caff� crema", "Cafe Zorro", "Doppio", "Espresso Romano", "Guillermo", "Ristretto", "Espresso with milk", "Antoccino", "Breve", "Caf� bomb�n", "Cappuccino", "Cortado", "Latte", "Latte macchiato", "Espressino", "Flat white", "Gal�o", "Macchiato", "Wiener or Viennese melange", "Coffee with milk", "Caf� au lait", "Ca phe sua da", "Egg coffee", "Eggnog latte", "Eiskaffee", "Kopi susu", "White coffee", "White coffee (England)", "Coffee or espresso with whipped cream", "Vienna coffee", "Espresso con panna", "Combinations", "Coffee with espresso", "Coffee with tea", "Black tie", "Chai latte", "Red tie", "Yuanyang", "Coffee with alcohol", "Liqueur coffee", "Irish coffee", "R�desheimer Kaffee", "Pharis�er", "Carajillo", "Flavoured", "Melya", "Caff� Marocchino", "Caf� miel", "Mocha or caf� mocha or mochaccino", "Caf� de olla", "Miscellaneous", "Iced", "Greek frapp� coffee", "Mazagran", "Palazzo", "Ice Shot", "Instant coffee", "Canned coffee", "Coffee milk", "Decaffeinated", "Other", "Affogato", "Caff� Medici", "Caf� Touba", "Indian filter coffee", "Moka", "Shakerato", "Pocillo"],
                        queryTokenizer: Bloodhound.tokenizers.whitespace,
                        datumTokenizer: Bloodhound.tokenizers.whitespace
                    });
                }

                Journal.prototype.save = function save(newEntry) {
                    var _this = this;

                    this.newEntry = new CoffeeEntry();

                    var url = "api/coffee";
                    var data = JSON.stringify(newEntry);
                    return this.http.fetch(url, {
                        method: 'post',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: data
                    }).then(function (result) {
                        return result.json();
                    }).then(function (result) {
                        _this.entries.unshift(result);
                    }).catch(function (error) {});
                };

                Journal.prototype.deleteEntry = function deleteEntry(entry, index) {
                    var _this2 = this;

                    var url = 'api/coffee/' + entry.id;
                    return this.http.fetch(url, {
                        method: 'delete'
                    }).then(function () {
                        _this2.entries.splice(index, 1);
                    }).catch(function (error) {});
                };

                Journal.prototype.activate = function activate(params) {
                    var _this3 = this;

                    return this.http.fetch('api/coffee').then(function (response) {
                        return response.json();
                    }).then(function (entries) {
                        return _this3.entries = entries;
                    });
                };

                return Journal;
            }()) || _class2));

            _export('Journal', Journal);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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
