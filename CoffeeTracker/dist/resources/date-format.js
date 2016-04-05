'use strict';

System.register(['moment'], function (_export, _context) {
    var moment, DateFormatValueConverter;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_moment) {
            moment = _moment.default;
        }],
        execute: function () {
            _export('DateFormatValueConverter', DateFormatValueConverter = function () {
                function DateFormatValueConverter() {
                    _classCallCheck(this, DateFormatValueConverter);
                }

                DateFormatValueConverter.prototype.toView = function toView(value) {
                    if (!value) return "";

                    var formatted = moment(value).format('DD.MM.YYYY H:mm') + ' Uhr';
                    return formatted;
                };

                return DateFormatValueConverter;
            }());

            _export('DateFormatValueConverter', DateFormatValueConverter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9kYXRlLWZvcm1hdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU87OztnREFFTTs7Ozs7bURBQ1QseUJBQU8sT0FBTztBQUNWLHdCQUFJLENBQUMsS0FBRCxFQUNBLE9BQU8sRUFBUCxDQURKOztBQUdBLHdCQUFJLFlBQVksT0FBTyxLQUFQLEVBQWMsTUFBZCxDQUFxQixpQkFBckIsSUFBMkMsTUFBM0MsQ0FKTjtBQUtWLDJCQUFPLFNBQVAsQ0FMVTs7O3VCQURMIiwiZmlsZSI6InJlc291cmNlcy9kYXRlLWZvcm1hdC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
