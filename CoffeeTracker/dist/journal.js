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
                    }).ensure('location').isNotEmpty().hasLengthBetween(1, 32).ensure('coffeeType').isNotEmpty().hasLengthBetween(1, 56).ensure('quantity').isNotEmpty().isGreaterThan(0).containsOnlyDigits().ensure('itemPrice').isNotEmpty().isGreaterThan(0);
                }

                Journal.prototype.attached = function attached() {
                    var _this = this;

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
                    var triggerChange = function triggerChange() {
                        var val = $typeahead.val();
                        _this.newEntry.coffeeType = val;
                    };
                    $typeahead.typeahead({
                        hint: true,
                        highlight: true,
                        minLength: 1
                    }, typeaheadOpts).on("typeahead:selected", triggerChange).on("typeahead:autocompleted", triggerChange);
                };

                Journal.prototype.save = function save(newEntry) {
                    var _this2 = this;

                    this.validation.validate().then(function () {
                        var data = JSON.stringify(newEntry);

                        _this2.newEntry.location = "";
                        _this2.newEntry.coffeeType = "";
                        _this2.newEntry.itemPrice = null;
                        _this2.newEntry.quantity = null;

                        var url = "api/coffee";
                        return _this2.http.fetch(url, {
                            method: 'post',
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            },
                            body: data
                        }).then(function (result) {
                            return result.json();
                        }).then(function (result) {
                            _this2.entries.unshift(result);
                        }).catch(function (error) {});
                    });
                };

                Journal.prototype.deleteEntry = function deleteEntry(entry, index) {
                    var _this3 = this;

                    var url = 'api/coffee/' + entry.id;
                    return this.http.fetch(url, {
                        method: 'delete'
                    }).then(function () {
                        _this3.entries.splice(index, 1);
                    }).catch(function (error) {});
                };

                Journal.prototype.activate = function activate(params) {
                    var _this4 = this;

                    return this.http.fetch('api/coffee').then(function (response) {
                        return response.json();
                    }).then(function (entries) {
                        return _this4.entries = entries;
                    });
                };

                return Journal;
            }()) || _class));

            _export('Journal', Journal);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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
