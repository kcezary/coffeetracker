'use strict';

System.register(['bootstrap', 'font-awesome/css/font-awesome.min.css!', 'aurelia-i18n', 'i18next-xhr-backend'], function (_export, _context) {
  var I18N, XHR;
  return {
    setters: [function (_bootstrap) {}, function (_fontAwesomeCssFontAwesomeMinCss) {}, function (_aureliaI18n) {
      I18N = _aureliaI18n.I18N;
    }, function (_i18nextXhrBackend) {
      XHR = _i18nextXhrBackend.default;
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

        aurelia.start().then(function (a) {
          return a.setRoot('app', document.body);
        });
      }

      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRVE7O0FBQ0Q7OztBQUVBLGVBQVMsU0FBVCxDQUFtQixPQUFuQixFQUE0QjtBQUNqQyxnQkFBUSxHQUFSLENBQ0cscUJBREgsR0FFRyxrQkFGSCxHQUdHLE1BSEgsQ0FHVSwyQkFIVixFQUlHLE1BSkgsQ0FJVSxvQkFKVixFQUtHLE1BTEgsQ0FLVSxjQUxWLEVBSzBCLFVBQUMsUUFBRCxFQUFjO0FBRWxDLG1CQUFTLE9BQVQsQ0FBaUIsR0FBakIsQ0FBcUIsR0FBckIsRUFGa0M7O0FBS2xDLG1CQUFTLEtBQVQsQ0FBZTtBQUNYLHFCQUFTO0FBQ0wsd0JBQVUsOEJBQVYsRUFESjtBQUdBLGlCQUFNLElBQU47QUFDQSx3QkFBYSxDQUFDLEdBQUQsRUFBSyxNQUFMLENBQWI7QUFDQSx5QkFBYyxJQUFkO0FBQ0EsbUJBQVEsS0FBUjtXQVBKLEVBTGtDO1NBQWQsQ0FMMUIsQ0FEaUM7O0FBNkJqQyxnQkFBUSxLQUFSLEdBQWdCLElBQWhCLENBQXFCO2lCQUFLLEVBQUUsT0FBRixDQUFVLEtBQVYsRUFBaUIsU0FBUyxJQUFUO1NBQXRCLENBQXJCLENBN0JpQztPQUE1QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
