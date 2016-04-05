"use strict";

System.register(["openexchangerates/accounting.js"], function (_export, _context) {
    var accounting, PriceFormatValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_openexchangeratesAccountingJs) {
            accounting = _openexchangeratesAccountingJs;
        }],
        execute: function () {
            _export("PriceFormatValueConverter", PriceFormatValueConverter = function () {
                function PriceFormatValueConverter() {
                    _classCallCheck(this, PriceFormatValueConverter);

                    this.settings = {
                        thousand: ".",
                        decimal: ",",
                        precision: 2
                    };
                }

                PriceFormatValueConverter.prototype.toView = function toView(value) {
                    if (!value) return "";

                    var formatted = accounting.formatNumber(value, this.settings);
                    return formatted;
                };

                return PriceFormatValueConverter;
            }());

            _export("PriceFormatValueConverter", PriceFormatValueConverter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9wcmljZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFZOzs7aURBRUM7Ozs7eUJBRVQsV0FBVztBQUNQLGtDQUFVLEdBQVY7QUFDQSxpQ0FBUyxHQUFUO0FBQ0EsbUNBQVcsQ0FBWDs7OztBQUxLLG9EQVFULHlCQUFPLE9BQU87QUFDVix3QkFBSSxDQUFDLEtBQUQsRUFDQSxPQUFPLEVBQVAsQ0FESjs7QUFHQSx3QkFBSSxZQUFZLFdBQVcsWUFBWCxDQUF3QixLQUF4QixFQUErQixLQUFLLFFBQUwsQ0FBM0MsQ0FKTTtBQUtWLDJCQUFPLFNBQVAsQ0FMVTs7O3VCQVJMIiwiZmlsZSI6InJlc291cmNlcy9wcmljZS1mb3JtYXQuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
