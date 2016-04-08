'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'jquery', 'typeahead.js-jspm', 'fetch', 'aurelia-validation', './resources/coffeeentry', './resources/coffeeDataService'], function (_export, _context) {
    var inject, HttpClient, $, Bloodhound, Validation, CoffeeEntry, CoffeeDataService, _dec, _class, Journal;

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
        }, function (_fetch) {}, function (_aureliaValidation) {
            Validation = _aureliaValidation.Validation;
        }, function (_resourcesCoffeeentry) {
            CoffeeEntry = _resourcesCoffeeentry.CoffeeEntry;
        }, function (_resourcesCoffeeDataService) {
            CoffeeDataService = _resourcesCoffeeDataService.CoffeeDataService;
        }],
        execute: function () {
            _export('Journal', Journal = (_dec = inject(HttpClient, Validation, CoffeeDataService), _dec(_class = function () {
                function Journal(http, validation, coffeeData) {
                    _classCallCheck(this, Journal);

                    http.configure(function (config) {
                        config.useStandardConfiguration();
                    });

                    this.http = http;
                    this.coffeeData = coffeeData;
                    this.newEntry = new CoffeeEntry();
                    this.newEntry.reset();
                    this.validation = validation.on(this, function (config) {
                        config.useLocale('de-DE');
                    }).ensure('newEntry.location').isNotEmpty().hasLengthBetween(1, 32).ensure('newEntry.coffeeType').isNotEmpty().hasLengthBetween(1, 56).ensure('newEntry.quantity').isNotEmpty().isGreaterThan(0).containsOnlyDigits().ensure('newEntry.itemPrice').isNotEmpty().isGreaterThan(0);
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
                        return _this2.coffeeData.saveNewEntry(newEntry).then(function (result) {
                            _this2.entries.unshift(result);

                            _this2.newEntry.reset();
                            _this2.validation.clear();
                            _this2.validation.result.isValid = false;
                            return result;
                        });
                    });
                };

                Journal.prototype.deleteEntry = function deleteEntry(entry, index) {
                    var _this3 = this;

                    return this.coffeeData.deleteEntry(entry).then(function () {
                        _this3.entries.splice(index, 1);
                    });
                };

                Journal.prototype.activate = function activate(params) {
                    var _this4 = this;

                    return this.coffeeData.getAllEntries().then(function (entries) {
                        return _this4.entries = entries;
                    });
                };

                return Journal;
            }()) || _class));

            _export('Journal', Journal);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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QUFLLFVBQUwsQ0FBZ0IsS0FBaEIsR0FKWTtBQUtaLG1DQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsQ0FBdUIsT0FBdkIsR0FBaUMsS0FBakMsQ0FMWTtBQU1aLG1DQUFPLE1BQVAsQ0FOWTt5QkFBVixDQUZWLENBRFE7cUJBQU4sQ0FEVixDQURVOzs7QUEzREwsa0NBMkVULG1DQUFZLE9BQU8sT0FBTzs7O0FBQ3RCLDJCQUFPLEtBQUssVUFBTCxDQUNGLFdBREUsQ0FDVSxLQURWLEVBRUYsSUFGRSxDQUVHLFlBQU07QUFFUiwrQkFBSyxPQUFMLENBQWEsTUFBYixDQUFvQixLQUFwQixFQUEyQixDQUEzQixFQUZRO3FCQUFOLENBRlYsQ0FEc0I7OztBQTNFakIsa0NBb0ZULDZCQUFTLFFBQVE7OztBQUNiLDJCQUFPLEtBQUssVUFBTCxDQUNGLGFBREUsR0FFRixJQUZFLENBRUc7K0JBQVcsT0FBSyxPQUFMLEdBQWUsT0FBZjtxQkFBWCxDQUZWLENBRGE7Ozt1QkFwRlIiLCJmaWxlIjoiam91cm5hbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
