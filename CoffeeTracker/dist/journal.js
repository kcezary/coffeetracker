'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'jquery', 'typeahead.js-jspm', 'fetch'], function (_export, _context) {
    var inject, HttpClient, $, Bloodhound, _dec, _class, Welcome;

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
            _export('Welcome', Welcome = (_dec = inject(HttpClient), _dec(_class = function () {
                function Welcome(http) {
                    _classCallCheck(this, Welcome);

                    this.entries = [];

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

                Welcome.prototype.deleteEntry = function deleteEntry(entry, index) {
                    var _this = this;

                    var url = "api/coffee/" + entry.id;
                    return this.http.fetch(url, {
                        method: 'delete'
                    }).then(function () {
                        _this.entries.splice(index, 1);
                    }).catch(function (error) {});
                };

                Welcome.prototype.activate = function activate(params) {
                    var _this2 = this;

                    return this.http.fetch('api/coffee').then(function (response) {
                        return response.json();
                    }).then(function (entries) {
                        return _this2.entries = entries;
                    });
                };

                return Welcome;
            }()) || _class));

            _export('Welcome', Welcome);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvdXJuYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFROztBQUNBOztBQUNEOztBQUNDOzs7K0JBSUssa0JBRFosT0FBTyxVQUFQO0FBS0cseUJBSlMsT0FJVCxDQUFZLElBQVosRUFBa0I7MENBSlQsU0FJUzs7eUJBRmxCLFVBQVUsR0FFUTs7QUFDZCx5QkFBSyxTQUFMLENBQWUsa0JBQVU7QUFDckIsK0JBQ0csd0JBREgsR0FEcUI7cUJBQVYsQ0FBZixDQURjOztBQU1kLHlCQUFLLElBQUwsR0FBWSxJQUFaLENBTmM7O0FBUWQsd0JBQUksU0FBUyxJQUFJLFVBQUosQ0FBZTtBQUN4QiwrQkFBTyxDQUFDLHdDQUFELEVBQTJDLHlCQUEzQyxFQUFzRSwyQkFBdEUsRUFBbUcsWUFBbkcsRUFBaUgsZ0JBQWpILEVBQW1JLFdBQW5JLEVBQWdKLGVBQWhKLEVBQWlLLHlCQUFqSyxFQUE0TCxpQkFBNUwsRUFBK00sYUFBL00sRUFBOE4sYUFBOU4sRUFBNk8sWUFBN08sRUFBMlAsUUFBM1AsRUFBcVEsaUJBQXJRLEVBQXdSLFdBQXhSLEVBQXFTLFdBQXJTLEVBQWtULG9CQUFsVCxFQUF3VSxXQUF4VSxFQUFxVixPQUFyVixFQUE4VixhQUE5VixFQUE2VyxZQUE3VyxFQUEyWCxTQUEzWCxFQUFzWSxPQUF0WSxFQUErWSxpQkFBL1ksRUFBa2EsWUFBbGEsRUFBZ2IsWUFBaGIsRUFBOGIsT0FBOWIsRUFBdWMsV0FBdmMsRUFBb2QsNEJBQXBkLEVBQWtmLGtCQUFsZixFQUFzZ0IsY0FBdGdCLEVBQXNoQixlQUF0aEIsRUFBdWlCLFlBQXZpQixFQUFxakIsY0FBcmpCLEVBQXFrQixXQUFya0IsRUFBa2xCLFdBQWxsQixFQUErbEIsY0FBL2xCLEVBQSttQix3QkFBL21CLEVBQXlvQix1Q0FBem9CLEVBQWtyQixlQUFsckIsRUFBbXNCLG9CQUFuc0IsRUFBeXRCLGNBQXp0QixFQUF5dUIsc0JBQXp1QixFQUFpd0IsaUJBQWp3QixFQUFveEIsV0FBcHhCLEVBQWl5QixZQUFqeUIsRUFBK3lCLFNBQS95QixFQUEwekIsVUFBMXpCLEVBQXMwQixxQkFBdDBCLEVBQTYxQixnQkFBNzFCLEVBQSsyQixjQUEvMkIsRUFBKzNCLG9CQUEvM0IsRUFBcTVCLFdBQXI1QixFQUFrNkIsV0FBbDZCLEVBQSs2QixXQUEvNkIsRUFBNDdCLE9BQTU3QixFQUFxOEIsa0JBQXI4QixFQUF5OUIsV0FBejlCLEVBQXMrQixtQ0FBdCtCLEVBQTJnQyxjQUEzZ0MsRUFBMmhDLGVBQTNoQyxFQUE0aUMsTUFBNWlDLEVBQW9qQyxxQkFBcGpDLEVBQTJrQyxVQUEza0MsRUFBdWxDLFNBQXZsQyxFQUFrbUMsVUFBbG1DLEVBQThtQyxnQkFBOW1DLEVBQWdvQyxlQUFob0MsRUFBaXBDLGFBQWpwQyxFQUFncUMsZUFBaHFDLEVBQWlyQyxPQUFqckMsRUFBMHJDLFVBQTFyQyxFQUFzc0MsY0FBdHNDLEVBQXN0QyxZQUF0dEMsRUFBb3VDLHNCQUFwdUMsRUFBNHZDLE1BQTV2QyxFQUFvd0MsV0FBcHdDLEVBQWl4QyxTQUFqeEMsQ0FBUDtBQUNBLHdDQUFnQixXQUFXLFVBQVgsQ0FBc0IsVUFBdEI7QUFDaEIsd0NBQWdCLFdBQVcsVUFBWCxDQUFzQixVQUF0QjtxQkFIUCxDQUFULENBUlU7aUJBQWxCOztBQUpTLGtDQW1CVCxtQ0FBWSxPQUFPLE9BQU87OztBQUN0Qix3QkFBSSxNQUFNLGdCQUFnQixNQUFNLEVBQU4sQ0FESjtBQUV0QiwyQkFBTyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEdBQWhCLEVBQXFCO0FBQ3hCLGdDQUFRLFFBQVI7cUJBREcsRUFFSixJQUZJLENBRUMsWUFBTTtBQUVWLDhCQUFLLE9BQUwsQ0FBYSxNQUFiLENBQW9CLEtBQXBCLEVBQTJCLENBQTNCLEVBRlU7cUJBQU4sQ0FGRCxDQUtKLEtBTEksQ0FLRSxpQkFBUyxFQUFULENBTFQsQ0FGc0I7OztBQW5CakIsa0NBK0JULDZCQUFTLFFBQVE7OztBQUNiLDJCQUFPLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsWUFBaEIsRUFDSixJQURJLENBQ0M7K0JBQVksU0FBUyxJQUFUO3FCQUFaLENBREQsQ0FFSixJQUZJLENBRUM7K0JBQVcsT0FBSyxPQUFMLEdBQWUsT0FBZjtxQkFBWCxDQUZSLENBRGE7Ozt1QkEvQlIiLCJmaWxlIjoiam91cm5hbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
