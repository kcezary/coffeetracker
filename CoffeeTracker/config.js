System.config({
  "defaultJSExtensions": true,
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  "paths": {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  "map": {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.1.2.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.1.2.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.0",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0",
    "aurelia-ui-virtualization": "npm:aurelia-ui-virtualization@0.3.2",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "core-js": "npm:core-js@1.2.6",
    "css": "github:systemjs/plugin-css@0.1.20",
    "fetch": "github:github/fetch@0.10.1",
    "font-awesome": "npm:font-awesome@4.5.0",
    "jquery": "npm:jquery@2.2.2",
    "moment": "npm:moment@2.12.0",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "github:components/jquery@2.2.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-binding@1.0.0-beta.1.3.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.2.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.1.1.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.0",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.2.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-framework@1.0.0-beta.1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.2.0": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.2.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-loader@1.0.0-beta.1.2.0": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-metadata@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-polyfills@1.0.0-beta.1.1.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-router@1.0.0-beta.1.2.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.2.0": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-templating@1.0.0-beta.1.2.0": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0"
    },
    "npm:aurelia-ui-virtualization@0.3.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.3.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.2.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.2.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.2.0"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.5.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:moment@2.12.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  },
  "bundles": {
    "app-build": [
      "app",
      "app.html!github:systemjs/plugin-text@0.0.3",
      "journal",
      "journal.html!github:systemjs/plugin-text@0.0.3",
      "main"
    ],
    "aurelia-3b3acf3d1f": [
      "github:components/jquery@2.2.1",
      "github:components/jquery@2.2.1/jquery",
      "github:github/fetch@0.10.1",
      "github:github/fetch@0.10.1/fetch",
      "github:systemjs/plugin-css@0.1.20",
      "github:systemjs/plugin-css@0.1.20/css",
      "github:systemjs/plugin-text@0.0.3",
      "github:systemjs/plugin-text@0.0.3/text",
      "github:twbs/bootstrap@3.3.6",
      "github:twbs/bootstrap@3.3.6/css/bootstrap.css!github:systemjs/plugin-text@0.0.3",
      "github:twbs/bootstrap@3.3.6/js/bootstrap",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.0",
      "npm:aurelia-animator-css@1.0.0-beta.1.2.0/aurelia-animator-css",
      "npm:aurelia-binding@1.0.0-beta.1.3.0",
      "npm:aurelia-binding@1.0.0-beta.1.3.0/aurelia-binding",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.2.0/aurelia-bootstrapper",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.2.0/aurelia-dependency-injection",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.2.0/aurelia-event-aggregator",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.0",
      "npm:aurelia-fetch-client@1.0.0-beta.1.2.0/aurelia-fetch-client",
      "npm:aurelia-framework@1.0.0-beta.1.2.0",
      "npm:aurelia-framework@1.0.0-beta.1.2.0/aurelia-framework",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0",
      "npm:aurelia-history-browser@1.0.0-beta.1.2.0/aurelia-history-browser",
      "npm:aurelia-history@1.0.0-beta.1.2.0",
      "npm:aurelia-history@1.0.0-beta.1.2.0/aurelia-history",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.0",
      "npm:aurelia-loader-default@1.0.0-beta.1.2.0/aurelia-loader-default",
      "npm:aurelia-loader@1.0.0-beta.1.2.0",
      "npm:aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0",
      "npm:aurelia-logging-console@1.0.0-beta.1.2.0/aurelia-logging-console",
      "npm:aurelia-logging@1.0.0-beta.1.2.0",
      "npm:aurelia-logging@1.0.0-beta.1.2.0/aurelia-logging",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0",
      "npm:aurelia-metadata@1.0.0-beta.1.2.0/aurelia-metadata",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0",
      "npm:aurelia-pal-browser@1.0.0-beta.1.2.0/aurelia-pal-browser",
      "npm:aurelia-pal@1.0.0-beta.1.2.0",
      "npm:aurelia-pal@1.0.0-beta.1.2.0/aurelia-pal",
      "npm:aurelia-path@1.0.0-beta.1.2.0",
      "npm:aurelia-path@1.0.0-beta.1.2.0/aurelia-path",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.0",
      "npm:aurelia-polyfills@1.0.0-beta.1.1.0/aurelia-polyfills",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0",
      "npm:aurelia-route-recognizer@1.0.0-beta.1.2.0/aurelia-route-recognizer",
      "npm:aurelia-router@1.0.0-beta.1.2.0",
      "npm:aurelia-router@1.0.0-beta.1.2.0/aurelia-router",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0",
      "npm:aurelia-task-queue@1.0.0-beta.1.2.0/aurelia-task-queue",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.0",
      "npm:aurelia-templating-binding@1.0.0-beta.1.2.0/aurelia-templating-binding",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/abstract-repeater",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/analyze-view-factory",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/array-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/aurelia-templating-resources",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/binding-signaler",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/compile-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/compose",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/css-resource",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/dynamic-element",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/focus",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/hide",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/html-sanitizer",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/if",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/map-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/null-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/number-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/repeat",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/repeat-strategy-locator",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/repeat-utilities",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/replaceable",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/sanitize-html",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/set-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/show",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/update-trigger-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/view-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.2.0/with",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/aurelia-templating-router",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-href",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/route-loader",
      "npm:aurelia-templating-router@1.0.0-beta.1.2.0/router-view",
      "npm:aurelia-templating@1.0.0-beta.1.2.0",
      "npm:aurelia-templating@1.0.0-beta.1.2.0/aurelia-templating",
      "npm:aurelia-ui-virtualization@0.3.2",
      "npm:aurelia-ui-virtualization@0.3.2/array-virtual-repeat-strategy",
      "npm:aurelia-ui-virtualization@0.3.2/index",
      "npm:aurelia-ui-virtualization@0.3.2/utilities",
      "npm:aurelia-ui-virtualization@0.3.2/view-strategy",
      "npm:aurelia-ui-virtualization@0.3.2/virtual-list",
      "npm:aurelia-ui-virtualization@0.3.2/virtual-list.html!github:systemjs/plugin-text@0.0.3",
      "npm:aurelia-ui-virtualization@0.3.2/virtual-repeat",
      "npm:aurelia-ui-virtualization@0.3.2/virtual-repeat-strategy-locator",
      "npm:jquery@2.2.2",
      "npm:jquery@2.2.2/dist/jquery",
      "npm:moment@2.12.0",
      "npm:moment@2.12.0/moment"
    ]
  }
})