'use strict';

System.register(['aurelia-framework', 'aurelia-fetch-client', 'jquery', 'fetch'], function (_export, _context) {
    var inject, HttpClient, $, _dec, _class, Welcome;

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
                }

                Welcome.prototype.activate = function activate(params) {
                    var _this = this;

                    return this.http.fetch('api/coffee').then(function (response) {
                        return response.json();
                    }).then(function (entries) {
                        return _this.entries = entries;
                    });
                };

                return Welcome;
            }()) || _class));

            _export('Welcome', Welcome);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvdXJuYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFROztBQUNBOztBQUNEOzs7K0JBSU0sa0JBRFosT0FBTyxVQUFQO0FBS0cseUJBSlMsT0FJVCxDQUFZLElBQVosRUFBa0I7MENBSlQsU0FJUzs7eUJBRmxCLFVBQVUsR0FFUTs7QUFDZCx5QkFBSyxTQUFMLENBQWUsa0JBQVU7QUFDckIsK0JBQ0csd0JBREgsR0FEcUI7cUJBQVYsQ0FBZixDQURjOztBQU1kLHlCQUFLLElBQUwsR0FBWSxJQUFaLENBTmM7aUJBQWxCOztBQUpTLGtDQWFULDZCQUFTLFFBQVE7OztBQUNiLDJCQUFPLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsWUFBaEIsRUFDSixJQURJLENBQ0M7K0JBQVksU0FBUyxJQUFUO3FCQUFaLENBREQsQ0FFSixJQUZJLENBRUM7K0JBQVcsTUFBSyxPQUFMLEdBQWUsT0FBZjtxQkFBWCxDQUZSLENBRGE7Ozt1QkFiUiIsImZpbGUiOiJqb3VybmFsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMifQ==
