'use strict';

System.register(['bootstrap', 'font-awesome/css/font-awesome.min.css!', 'aurelia-i18n', 'i18next-xhr-backend', 'jsnlog'], function (_export, _context) {
    var I18N, XHR, jsnlog;
    return {
        setters: [function (_bootstrap) {}, function (_fontAwesomeCssFontAwesomeMinCss) {}, function (_aureliaI18n) {
            I18N = _aureliaI18n.I18N;
        }, function (_i18nextXhrBackend) {
            XHR = _i18nextXhrBackend.default;
        }, function (_jsnlog) {
            jsnlog = _jsnlog.default;
        }],
        execute: function () {
            function configure(aurelia) {
                aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-ui-virtualization').plugin('aurelia-validation').plugin('aurelia-i18n', function (instance) {
                    instance.i18next.use(XHR);

                    instance.setup({
                        backend: {
                            loadPath: '/locales/{{lng}}/{{ns}}.json' },
                        lng: 'de',
                        attributes: ['t', 'i18n'],
                        fallbackLng: 'de',
                        debug: false
                    });
                });

                window.onerror = function (errorMsg, url, lineNumber, column, errorObj) {
                    JL("ClientGlobalLogger").fatalException({
                        "msg": "Unhandled exception occured",
                        "errorMsg": errorMsg,
                        "url": url,
                        "line number": lineNumber,
                        "column": column
                    }, errorObj);

                    return false;
                };

                aurelia.start().then(function (a) {
                    return a.setRoot('app', document.body);
                });
            }

            _export('configure', configure);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRVE7O0FBQ0Q7O0FBQ0E7OztBQUVBLHFCQUFTLFNBQVQsQ0FBbUIsT0FBbkIsRUFBNEI7QUFDakMsd0JBQVEsR0FBUixDQUNHLHFCQURILEdBRUcsa0JBRkgsR0FHRyxNQUhILENBR1UsMkJBSFYsRUFJRyxNQUpILENBSVUsb0JBSlYsRUFLRyxNQUxILENBS1UsY0FMVixFQUswQixVQUFDLFFBQUQsRUFBYztBQUVsQyw2QkFBUyxPQUFULENBQWlCLEdBQWpCLENBQXFCLEdBQXJCLEVBRmtDOztBQUtsQyw2QkFBUyxLQUFULENBQWU7QUFDWCxpQ0FBUztBQUNMLHNDQUFVLDhCQUFWLEVBREo7QUFHQSw2QkFBTSxJQUFOO0FBQ0Esb0NBQWEsQ0FBQyxHQUFELEVBQUssTUFBTCxDQUFiO0FBQ0EscUNBQWMsSUFBZDtBQUNBLCtCQUFRLEtBQVI7cUJBUEosRUFMa0M7aUJBQWQsQ0FMMUIsQ0FEaUM7O0FBc0JqQyx1QkFBTyxPQUFQLEdBQWlCLFVBQVUsUUFBVixFQUFvQixHQUFwQixFQUF5QixVQUF6QixFQUFxQyxNQUFyQyxFQUE2QyxRQUE3QyxFQUF1RDtBQUNwRSx1QkFBRyxvQkFBSCxFQUF5QixjQUF6QixDQUF3QztBQUNwQywrQkFBTyw2QkFBUDtBQUNBLG9DQUFZLFFBQVo7QUFDQSwrQkFBTyxHQUFQO0FBQ0EsdUNBQWUsVUFBZjtBQUNBLGtDQUFVLE1BQVY7cUJBTEosRUFNRyxRQU5ILEVBRG9FOztBQVNwRSwyQkFBTyxLQUFQLENBVG9FO2lCQUF2RCxDQXRCZ0I7O0FBeUNqQyx3QkFBUSxLQUFSLEdBQWdCLElBQWhCLENBQXFCOzJCQUFLLEVBQUUsT0FBRixDQUFVLEtBQVYsRUFBaUIsU0FBUyxJQUFUO2lCQUF0QixDQUFyQixDQXpDaUM7YUFBNUIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
