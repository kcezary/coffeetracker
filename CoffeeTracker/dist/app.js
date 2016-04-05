'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (_export, _context) {
    var inject, HttpClient, _dec, _class, App;

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
        }, function (_fetch) {}],
        execute: function () {
            _export('App', App = (_dec = inject(HttpClient), _dec(_class = function () {
                function App(http) {
                    _classCallCheck(this, App);

                    http.configure(function (config) {
                        config.useStandardConfiguration();
                    });

                    this.http = http;
                }

                App.prototype.configureRouter = function configureRouter(config, router) {
                    config.title = 'Coffee Tracker';
                    config.map([{
                        route: ['', 'journal'],
                        name: 'journal',
                        moduleId: 'journal',
                        nav: true,
                        title: '' }]);

                    this.router = router;
                };

                return App;
            }()) || _class));

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQVE7O0FBQ0E7OzsyQkFJSyxjQURaLE9BQU8sVUFBUDtBQUdHLHlCQUZTLEdBRVQsQ0FBWSxJQUFaLEVBQWtCOzBDQUZULEtBRVM7O0FBQ2QseUJBQUssU0FBTCxDQUFlLGtCQUFVO0FBQ3JCLCtCQUNHLHdCQURILEdBRHFCO3FCQUFWLENBQWYsQ0FEYzs7QUFNZCx5QkFBSyxJQUFMLEdBQVksSUFBWixDQU5jO2lCQUFsQjs7QUFGUyw4QkFXVCwyQ0FBZ0IsUUFBUSxRQUFRO0FBQzVCLDJCQUFPLEtBQVAsR0FBZSxnQkFBZixDQUQ0QjtBQUU1QiwyQkFBTyxHQUFQLENBQVcsQ0FDVDtBQUNJLCtCQUFPLENBQUMsRUFBRCxFQUFLLFNBQUwsQ0FBUDtBQUNBLDhCQUFNLFNBQU47QUFDQSxrQ0FBVSxTQUFWO0FBQ0EsNkJBQUssSUFBTDtBQUNBLCtCQUFPLEVBQVAsRUFOSyxDQUFYLEVBRjRCOztBQVc1Qix5QkFBSyxNQUFMLEdBQWMsTUFBZCxDQVg0Qjs7O3VCQVh2QiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9