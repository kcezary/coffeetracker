'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch', './coffeeentry', 'aurelia-validation', 'toastr', 'aurelia-i18n'], function (_export, _context) {
    var inject, HttpClient, CoffeeEntry, Validation, toastr, I18N, _dec, _class, baseUrl, CoffeeDataService;

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
        }, function (_fetch) {}, function (_coffeeentry) {
            CoffeeEntry = _coffeeentry.CoffeeEntry;
        }, function (_aureliaValidation) {
            Validation = _aureliaValidation.Validation;
        }, function (_toastr) {
            toastr = _toastr;
        }, function (_aureliaI18n) {
            I18N = _aureliaI18n.I18N;
        }],
        execute: function () {
            baseUrl = 'api/coffee';

            _export('CoffeeDataService', CoffeeDataService = (_dec = inject(HttpClient, Validation, I18N), _dec(_class = function () {
                function CoffeeDataService(http, validation, i18n) {
                    _classCallCheck(this, CoffeeDataService);

                    http.configure(function (config) {
                        config.useStandardConfiguration();
                    });

                    this.http = http;
                    this.i18n = i18n;
                }

                CoffeeDataService.prototype.saveNewEntry = function saveNewEntry(newEntry) {
                    var _this = this;

                    var data = JSON.stringify(newEntry);
                    var request = {
                        method: 'post',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: data
                    };

                    return this.http.fetch(baseUrl, request).then(function (result) {
                        return result.json();
                    }).then(function (result) {
                        var msg = _this.i18n.tr('coffeeSaved', { coffeeType: result.coffeeType });
                        toastr.success(msg);
                        return result;
                    }).catch(function (error) {
                        return _this.handleError(error);
                    });
                };

                CoffeeDataService.prototype.deleteEntry = function deleteEntry(entry) {
                    var _this2 = this;

                    var url = baseUrl + '/' + entry.id;
                    return this.http.fetch(url, { method: 'delete' }).then(function () {
                        var msg = _this2.i18n.tr('coffeeDeleted', { coffeeType: entry.coffeeType });
                        toastr.info(msg);
                    }).catch(function (error) {
                        return _this2.handleError(error);
                    });
                };

                CoffeeDataService.prototype.handleError = function handleError(error) {
                    var msg = this.i18n.tr('genericError');
                    toastr.error(msg);
                };

                CoffeeDataService.prototype.getAllEntries = function getAllEntries() {
                    var _this3 = this;

                    return this.http.fetch('' + baseUrl).then(function (response) {
                        return response.json();
                    }).catch(function (error) {
                        return _this3.handleError(error);
                    });
                };

                return CoffeeDataService;
            }()) || _class));

            _export('CoffeeDataService', CoffeeDataService);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9jb2ZmZWVEYXRhU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0k7O0FBQ0o7OztBQUVKOzt5Q0FHUyw0QkFEWixPQUFPLFVBQVAsRUFBbUIsVUFBbkIsRUFBK0IsSUFBL0I7QUFFRyx5QkFEUyxpQkFDVCxDQUFZLElBQVosRUFBa0IsVUFBbEIsRUFBOEIsSUFBOUIsRUFBb0M7MENBRDNCLG1CQUMyQjs7QUFDaEMseUJBQUssU0FBTCxDQUFlLGtCQUFVO0FBQ3JCLCtCQUNHLHdCQURILEdBRHFCO3FCQUFWLENBQWYsQ0FEZ0M7O0FBTWhDLHlCQUFLLElBQUwsR0FBWSxJQUFaLENBTmdDO0FBT2hDLHlCQUFLLElBQUwsR0FBWSxJQUFaLENBUGdDO2lCQUFwQzs7QUFEUyw0Q0FXVCxxQ0FBYSxVQUFTOzs7QUFDbEIsd0JBQUksT0FBTyxLQUFLLFNBQUwsQ0FBZSxRQUFmLENBQVAsQ0FEYztBQUVsQix3QkFBSSxVQUFVO0FBQ1YsZ0NBQVEsTUFBUjtBQUNBLGlDQUFTO0FBQ0wsc0NBQVUsa0JBQVY7QUFDQSw0Q0FBZ0Isa0JBQWhCO3lCQUZKO0FBSUEsOEJBQU0sSUFBTjtxQkFOQSxDQUZjOztBQVdsQiwyQkFBTyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE9BQWhCLEVBQXlCLE9BQXpCLEVBQ0osSUFESSxDQUNDOytCQUFVLE9BQU8sSUFBUDtxQkFBVixDQURELENBRUosSUFGSSxDQUVDLGtCQUFVO0FBQ1osNEJBQUksTUFBTSxNQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsYUFBYixFQUE0QixFQUFDLFlBQVksT0FBTyxVQUFQLEVBQXpDLENBQU4sQ0FEUTtBQUVaLCtCQUFPLE9BQVAsQ0FBZSxHQUFmLEVBRlk7QUFHWiwrQkFBTyxNQUFQLENBSFk7cUJBQVYsQ0FGRCxDQU9KLEtBUEksQ0FPRTsrQkFBUyxNQUFLLFdBQUwsQ0FBaUIsS0FBakI7cUJBQVQsQ0FQVCxDQVhrQjs7O0FBWGIsNENBZ0NULG1DQUFZLE9BQU87OztBQUNmLHdCQUFJLE1BQVMsZ0JBQVcsTUFBTSxFQUFOLENBRFQ7QUFFZiwyQkFBTyxLQUFLLElBQUwsQ0FDRixLQURFLENBQ0ksR0FESixFQUNTLEVBQUUsUUFBUSxRQUFSLEVBRFgsRUFFRixJQUZFLENBRUcsWUFBTTtBQUNSLDRCQUFJLE1BQU0sT0FBSyxJQUFMLENBQVUsRUFBVixDQUFhLGVBQWIsRUFBOEIsRUFBQyxZQUFZLE1BQU0sVUFBTixFQUEzQyxDQUFOLENBREk7QUFFUiwrQkFBTyxJQUFQLENBQVksR0FBWixFQUZRO3FCQUFOLENBRkgsQ0FNRixLQU5FLENBTUk7K0JBQVMsT0FBSyxXQUFMLENBQWlCLEtBQWpCO3FCQUFULENBTlgsQ0FGZTs7O0FBaENWLDRDQTJDVCxtQ0FBWSxPQUFNO0FBQ2Qsd0JBQUksTUFBTSxLQUFLLElBQUwsQ0FBVSxFQUFWLENBQWEsY0FBYixDQUFOLENBRFU7QUFFZCwyQkFBTyxLQUFQLENBQWEsR0FBYixFQUZjOzs7QUEzQ1QsNENBZ0RULHlDQUFnQjs7O0FBQ1osMkJBQU8sS0FBSyxJQUFMLENBQVUsS0FBVixNQUFtQixPQUFuQixFQUNKLElBREksQ0FDQzsrQkFBWSxTQUFTLElBQVQ7cUJBQVosQ0FERCxDQUVKLEtBRkksQ0FFRTsrQkFBUyxPQUFLLFdBQUwsQ0FBaUIsS0FBakI7cUJBQVQsQ0FGVCxDQURZOzs7dUJBaERQIiwiZmlsZSI6InJlc291cmNlcy9jb2ZmZWVEYXRhU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
