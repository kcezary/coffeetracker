'use strict';

System.register(['bootstrap', 'font-awesome/css/font-awesome.min.css!'], function (_export, _context) {
  return {
    setters: [function (_bootstrap) {}, function (_fontAwesomeCssFontAwesomeMinCss) {}],
    execute: function () {
      function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-ui-virtualization').plugin('aurelia-validation');

        aurelia.start().then(function (a) {
          return a.setRoot('app', document.body);
        });
      }

      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR08sZUFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQ2pDLGdCQUFRLEdBQVIsQ0FDRyxxQkFESCxHQUVHLGtCQUZILEdBR0csTUFISCxDQUdVLDJCQUhWLEVBSUcsTUFKSCxDQUlVLG9CQUpWLEVBRGlDOztBQWNqQyxnQkFBUSxLQUFSLEdBQWdCLElBQWhCLENBQXFCO2lCQUFLLEVBQUUsT0FBRixDQUFVLEtBQVYsRUFBaUIsU0FBUyxJQUFUO1NBQXRCLENBQXJCLENBZGlDO09BQTVCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NyYyJ9
