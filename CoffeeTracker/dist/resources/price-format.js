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

                PriceFormatValueConverter.prototype.toView = function toView(unformatted) {
                    if (!unformatted) return "";

                    var formatted = accounting.formatNumber(unformatted, this.settings);
                    return formatted;
                };

                PriceFormatValueConverter.prototype.fromView = function fromView(formatted) {
                    if (!formatted) return null;

                    var unformatted = accounting.unformat(formatted, this.settings.decimal);
                    unformatted = accounting.toFixed(unformatted, this.settings.precision);

                    return unformatted;
                };

                return PriceFormatValueConverter;
            }());

            _export("PriceFormatValueConverter", PriceFormatValueConverter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9wcmljZS1mb3JtYXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFZOzs7aURBRUM7Ozs7eUJBRVQsV0FBVztBQUNQLGtDQUFVLEdBQVY7QUFDQSxpQ0FBUyxHQUFUO0FBQ0EsbUNBQVcsQ0FBWDs7OztBQUxLLG9EQVFULHlCQUFPLGFBQWE7QUFDaEIsd0JBQUksQ0FBQyxXQUFELEVBQ0EsT0FBTyxFQUFQLENBREo7O0FBR0Esd0JBQUksWUFBWSxXQUFXLFlBQVgsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBSyxRQUFMLENBQWpELENBSlk7QUFLaEIsMkJBQU8sU0FBUCxDQUxnQjs7O0FBUlgsb0RBZ0JULDZCQUFTLFdBQVU7QUFDZix3QkFBSSxDQUFDLFNBQUQsRUFDQSxPQUFPLElBQVAsQ0FESjs7QUFHQSx3QkFBSSxjQUFjLFdBQVcsUUFBWCxDQUFvQixTQUFwQixFQUErQixLQUFLLFFBQUwsQ0FBYyxPQUFkLENBQTdDLENBSlc7QUFLZixrQ0FBYyxXQUFXLE9BQVgsQ0FBbUIsV0FBbkIsRUFBZ0MsS0FBSyxRQUFMLENBQWMsU0FBZCxDQUE5QyxDQUxlOztBQU9mLDJCQUFPLFdBQVAsQ0FQZTs7O3VCQWhCViIsImZpbGUiOiJyZXNvdXJjZXMvcHJpY2UtZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
