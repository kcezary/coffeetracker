"use strict";

System.register(["openexchangerates/accounting.js"], function (_export, _context) {
    var accounting, NumberFormatValueConverter;

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
            _export("NumberFormatValueConverter", NumberFormatValueConverter = function () {
                function NumberFormatValueConverter() {
                    _classCallCheck(this, NumberFormatValueConverter);

                    this.settings = {
                        thousand: ".",
                        decimal: ","
                    };
                }

                NumberFormatValueConverter.prototype.toView = function toView(unformatted, precision) {
                    if (!unformatted) return "";

                    var settings = Object.assign({ precision: precision }, this.settings);
                    var formatted = accounting.formatNumber(unformatted, settings);
                    return formatted;
                };

                NumberFormatValueConverter.prototype.fromView = function fromView(formatted, precision) {

                    if (!formatted) {
                        return null;
                    }

                    var unformatted = accounting.unformat(formatted, this.settings.decimal);

                    return unformatted;
                };

                return NumberFormatValueConverter;
            }());

            _export("NumberFormatValueConverter", NumberFormatValueConverter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9udW1iZXItZm9ybWF0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBWTs7O2tEQUVDOzs7O3lCQUVULFdBQVc7QUFDUCxrQ0FBVSxHQUFWO0FBQ0EsaUNBQVMsR0FBVDs7OztBQUpLLHFEQU9ULHlCQUFPLGFBQWEsV0FBVztBQUMzQix3QkFBSSxDQUFDLFdBQUQsRUFDQSxPQUFPLEVBQVAsQ0FESjs7QUFHQSx3QkFBSSxXQUFXLE9BQU8sTUFBUCxDQUFjLEVBQUMsV0FBVSxTQUFWLEVBQWYsRUFBcUMsS0FBSyxRQUFMLENBQWhELENBSnVCO0FBSzNCLHdCQUFJLFlBQVksV0FBVyxZQUFYLENBQXdCLFdBQXhCLEVBQXFDLFFBQXJDLENBQVosQ0FMdUI7QUFNM0IsMkJBQU8sU0FBUCxDQU4yQjs7O0FBUHRCLHFEQWdCVCw2QkFBUyxXQUFXLFdBQVU7O0FBRTFCLHdCQUFJLENBQUMsU0FBRCxFQUFXO0FBQ1gsK0JBQU8sSUFBUCxDQURXO3FCQUFmOztBQUlBLHdCQUFJLGNBQWMsV0FBVyxRQUFYLENBQW9CLFNBQXBCLEVBQStCLEtBQUssUUFBTCxDQUFjLE9BQWQsQ0FBN0MsQ0FOc0I7O0FBUTFCLDJCQUFPLFdBQVAsQ0FSMEI7Ozt1QkFoQnJCIiwiZmlsZSI6InJlc291cmNlcy9udW1iZXItZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
