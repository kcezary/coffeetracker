'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch', './coffeeentry', 'toastr', 'aurelia-i18n'], function (_export, _context) {
    var inject, HttpClient, CoffeeEntry, toastr, I18N, _dec, _class, baseUrl, CoffeeDataService;

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
        }, function (_toastr) {
            toastr = _toastr;
        }, function (_aureliaI18n) {
            I18N = _aureliaI18n.I18N;
        }],
        execute: function () {
            baseUrl = 'api/coffee';

            _export('CoffeeDataService', CoffeeDataService = (_dec = inject(HttpClient, I18N), _dec(_class = function () {
                function CoffeeDataService(http, i18n) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9jb2ZmZWVEYXRhU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7O0FBQ0E7O0FBRUE7O0FBQ0k7O0FBQ0o7OztBQUVKOzt5Q0FHUyw0QkFEWixPQUFPLFVBQVAsRUFBbUIsSUFBbkI7QUFFRyx5QkFEUyxpQkFDVCxDQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0I7MENBRGYsbUJBQ2U7O0FBQ3BCLHlCQUFLLFNBQUwsQ0FBZSxrQkFBVTtBQUNyQiwrQkFDRyx3QkFESCxHQURxQjtxQkFBVixDQUFmLENBRG9COztBQU1wQix5QkFBSyxJQUFMLEdBQVksSUFBWixDQU5vQjtBQU9wQix5QkFBSyxJQUFMLEdBQVksSUFBWixDQVBvQjtpQkFBeEI7O0FBRFMsNENBV1QscUNBQWEsVUFBUzs7O0FBQ2xCLHdCQUFJLE9BQU8sS0FBSyxTQUFMLENBQWUsUUFBZixDQUFQLENBRGM7QUFFbEIsd0JBQUksVUFBVTtBQUNWLGdDQUFRLE1BQVI7QUFDQSxpQ0FBUztBQUNMLHNDQUFVLGtCQUFWO0FBQ0EsNENBQWdCLGtCQUFoQjt5QkFGSjtBQUlBLDhCQUFNLElBQU47cUJBTkEsQ0FGYzs7QUFXbEIsMkJBQU8sS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixPQUFoQixFQUF5QixPQUF6QixFQUNKLElBREksQ0FDQzsrQkFBVSxPQUFPLElBQVA7cUJBQVYsQ0FERCxDQUVKLElBRkksQ0FFQyxrQkFBVTtBQUNaLDRCQUFJLE1BQU0sTUFBSyxJQUFMLENBQVUsRUFBVixDQUFhLGFBQWIsRUFBNEIsRUFBQyxZQUFZLE9BQU8sVUFBUCxFQUF6QyxDQUFOLENBRFE7QUFFWiwrQkFBTyxPQUFQLENBQWUsR0FBZixFQUZZO0FBR1osK0JBQU8sTUFBUCxDQUhZO3FCQUFWLENBRkQsQ0FPSixLQVBJLENBT0U7K0JBQVMsTUFBSyxXQUFMLENBQWlCLEtBQWpCO3FCQUFULENBUFQsQ0FYa0I7OztBQVhiLDRDQWdDVCxtQ0FBWSxPQUFPOzs7QUFDZix3QkFBSSxNQUFTLGdCQUFXLE1BQU0sRUFBTixDQURUO0FBRWYsMkJBQU8sS0FBSyxJQUFMLENBQ0YsS0FERSxDQUNJLEdBREosRUFDUyxFQUFFLFFBQVEsUUFBUixFQURYLEVBRUYsSUFGRSxDQUVHLFlBQU07QUFDUiw0QkFBSSxNQUFNLE9BQUssSUFBTCxDQUFVLEVBQVYsQ0FBYSxlQUFiLEVBQThCLEVBQUMsWUFBWSxNQUFNLFVBQU4sRUFBM0MsQ0FBTixDQURJO0FBRVIsK0JBQU8sSUFBUCxDQUFZLEdBQVosRUFGUTtxQkFBTixDQUZILENBTUYsS0FORSxDQU1JOytCQUFTLE9BQUssV0FBTCxDQUFpQixLQUFqQjtxQkFBVCxDQU5YLENBRmU7OztBQWhDViw0Q0EyQ1QsbUNBQVksT0FBTTtBQUNkLHdCQUFJLE1BQU0sS0FBSyxJQUFMLENBQVUsRUFBVixDQUFhLGNBQWIsQ0FBTixDQURVO0FBRWQsMkJBQU8sS0FBUCxDQUFhLEdBQWIsRUFGYzs7O0FBM0NULDRDQWdEVCx5Q0FBZ0I7OztBQUNaLDJCQUFPLEtBQUssSUFBTCxDQUFVLEtBQVYsTUFBbUIsT0FBbkIsRUFDSixJQURJLENBQ0M7K0JBQVksU0FBUyxJQUFUO3FCQUFaLENBREQsQ0FFSixLQUZJLENBRUU7K0JBQVMsT0FBSyxXQUFMLENBQWlCLEtBQWpCO3FCQUFULENBRlQsQ0FEWTs7O3VCQWhEUCIsImZpbGUiOiJyZXNvdXJjZXMvY29mZmVlRGF0YVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
