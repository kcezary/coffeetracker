"bundle";"use strict";System.register("app",["npm:aurelia-framework@1.0.0-beta.1.2.0","npm:aurelia-fetch-client@1.0.0-beta.1.2.0","github:github/fetch@0.10.1"],function(t,n){function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var i,r,u,o,a;return{setters:[function(t){i=t.inject},function(t){r=t.HttpClient},function(t){}],execute:function(){t("App",(u=i(r),a=u(o=function(){function t(n){e(this,t),n.configure(function(t){t.useStandardConfiguration()}),this.http=n}return t.prototype.configureRouter=function(t,n){t.title="Coffee Tracker",t.map([{route:["","journal"],name:"journal",moduleId:"journal",nav:!0,title:""}]),this.router=n},t}())||o)),t("App",a)}}}),function(){var t=System.get("@@amd-helpers").createDefine();define("app.html!github:systemjs/plugin-text@0.0.3",[],function(){return'<template>\r\n  <require from="bootstrap/css/bootstrap.css"></require>\r\n  <div class="page-host">\r\n    <router-view></router-view>\r\n  </div>\r\n</template>'}),t()}(),System.register("journal",["npm:aurelia-framework@1.0.0-beta.1.2.0","npm:aurelia-fetch-client@1.0.0-beta.1.2.0","npm:jquery@2.2.2","github:github/fetch@0.10.1"],function(t,n){function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var i,r,u,o,a,s;return{setters:[function(t){i=t.inject},function(t){r=t.HttpClient},function(t){u=t["default"]},function(t){}],execute:function(){t("Welcome",(o=i(r),s=o(a=function(){function t(n){e(this,t),this.entries=[],n.configure(function(t){t.useStandardConfiguration()}),this.http=n}return t.prototype.activate=function(t){},t}())||a)),t("Welcome",s)}}}),function(){var t=System.get("@@amd-helpers").createDefine();define("journal.html!github:systemjs/plugin-text@0.0.3",[],function(){return"<template>\r\n    <div>test</div>\r\n</template>\r\n"}),t()}(),System.register("main",["github:twbs/bootstrap@3.3.6","npm:font-awesome@4.5.0/css/font-awesome.min.css!github:systemjs/plugin-css@0.1.20"],function(t,n){return{setters:[function(t){},function(t){}],execute:function(){function n(t){t.use.standardConfiguration().developmentLogging().plugin("aurelia-ui-virtualization"),t.start().then(function(t){return t.setRoot()})}t("configure",n)}}});