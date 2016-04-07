'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'jquery', 'typeahead.js-jspm', 'fetch', './coffeeentry', 'aurelia-validation'], function (_export, _context) {
    var inject, HttpClient, $, Bloodhound, CoffeeEntry, Validation, _dec, _class, Journal;

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
        }, function (_fetch) {}, function (_coffeeentry) {
            CoffeeEntry = _coffeeentry.CoffeeEntry;
        }, function (_aureliaValidation) {
            Validation = _aureliaValidation.Validation;
        }],
        execute: function () {
            _export('Journal', Journal = (_dec = inject(HttpClient, Validation), _dec(_class = function () {
                function Journal(http, validation) {
                    _classCallCheck(this, Journal);

                    this.entries = [];

                    http.configure(function (config) {
                        config.useStandardConfiguration();
                    });

                    this.http = http;
                    this.newEntry = new CoffeeEntry();
                    this.validation = validation.on(this.newEntry, function (config) {
                        config.useLocale('de-DE');
                    }).ensure('location').isNotEmpty().hasLengthBetween(1, 32).ensure('coffeeType').isNotEmpty().hasLengthBetween(1, 56).ensure('quantity').isNotEmpty().isNumber().isGreaterThan(0).containsOnlyDigits().ensure('itemPrice').isNotEmpty().isNumber().isGreaterThan(0);
                }

                Journal.prototype.attached = function attached() {

                    var suggestions = new Bloodhound({
                        name: 'options',
                        limit: 15,
                        local: ["Added milk, sweeteners and substitutes", "Drip or filtered coffee", "French press or cafetière", "Percolated", "Turkish coffee", "Cold brew", "Vacuum coffee", "Espresso and variations", "Caffè Americano", "Café Cubano", "Caffè crema", "Cafe Zorro", "Doppio", "Espresso Romano", "Guillermo", "Ristretto", "Espresso with milk", "Antoccino", "Breve", "Café bombón", "Cappuccino", "Cortado", "Latte", "Latte macchiato", "Espressino", "Flat white", "Galão", "Macchiato", "Wiener or Viennese melange", "Coffee with milk", "Café au lait", "Ca phe sua da", "Egg coffee", "Eggnog latte", "Eiskaffee", "Kopi susu", "White coffee", "White coffee (England)", "Coffee or espresso with whipped cream", "Vienna coffee", "Espresso con panna", "Combinations", "Coffee with espresso", "Coffee with tea", "Black tie", "Chai latte", "Red tie", "Yuanyang", "Coffee with alcohol", "Liqueur coffee", "Irish coffee", "Rüdesheimer Kaffee", "Pharisäer", "Carajillo", "Flavoured", "Melya", "Caffè Marocchino", "Café miel", "Mocha or café mocha or mochaccino", "Café de olla", "Miscellaneous", "Iced", "Greek frappé coffee", "Mazagran", "Palazzo", "Ice Shot", "Instant coffee", "Canned coffee", "Coffee milk", "Decaffeinated", "Other", "Affogato", "Caffè Medici", "Café Touba", "Indian filter coffee", "Moka", "Shakerato", "Pocillo"],
                        queryTokenizer: Bloodhound.tokenizers.whitespace,
                        datumTokenizer: Bloodhound.tokenizers.whitespace
                    });

                    suggestions.initialize();

                    var typeaheadOpts = {
                        name: 'options',
                        source: suggestions.ttAdapter()
                    };

                    var $typeahead = $("#coffeeType");
                    $typeahead.typeahead({
                        hint: true,
                        highlight: true,
                        minLength: 1
                    }, typeaheadOpts);
                };

                Journal.prototype.save = function save(newEntry) {
                    var _this = this;

                    this.validation.validate().then(function () {
                        var data = JSON.stringify(newEntry);

                        _this.newEntry.location = "";
                        _this.newEntry.coffeeType = "";
                        _this.newEntry.itemPrice = null;
                        _this.newEntry.quantity = null;

                        var url = "api/coffee";
                        return _this.http.fetch(url, {
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
                    });
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
            }()) || _class));

            _export('Journal', Journal);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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
