import 'bootstrap';
import 'font-awesome/css/font-awesome.min.css!';
import {I18N} from 'aurelia-i18n';
import XHR from 'i18next-xhr-backend';
import jsnlog from 'jsnlog';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-ui-virtualization')
    .plugin('aurelia-validation')
    .plugin('aurelia-i18n', (instance) => {
        // register backend plugin
        instance.i18next.use(XHR);

        // adapt options to your needs (see http://i18next.com/docs/options/)
        instance.setup({
            backend: {                                  // <-- configure backend settings
                loadPath: '/locales/{{lng}}/{{ns}}.json', // <-- XHR settings for where to get the files from
            },
            lng : 'de',
            attributes : ['t','i18n'],
            fallbackLng : 'de',
            debug : false
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
  }

  //Uncomment the line below to enable animation.
  //aurelia.use.plugin('aurelia-animator-css');
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  //aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(a => a.setRoot('app', document.body));
}
