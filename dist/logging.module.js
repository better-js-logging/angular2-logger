!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t){e.exports=require("@angular/core")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t,n,o){this.prefixPattern=e,this.datetimePattern=t,this.datetimeLocale=n,this.contextLogLevels=o}return e}();t.LoggingConfig=o;var r=function(){function e(e,t){this.name=e,this.level=t}return e}();r.TRACE=new r("TRACE",4),r.DEBUG=new r("DEBUG",3),r.INFO=new r("INFO",2),r.WARN=new r("WARN",1),r.ERROR=new r("ERROR",0),r.OFF=new r("OFF",-1),t.LogLevel=r;var i=function(){function e(e,t){this.context=e,this.logLevel=t}return e}();t.ContextLogLevel=i},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}};Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),f=n(1),u=n(4),l=a=function(){function e(e){this.config=e,this.config=new f.LoggingConfig(e.prefixPattern||a.DEFAULT_CONFIG.prefixPattern,e.datetimePattern||a.DEFAULT_CONFIG.datetimePattern,e.datetimeLocale||a.DEFAULT_CONFIG.datetimeLocale,e.contextLogLevels||a.DEFAULT_CONFIG.contextLogLevels)}return e.prototype.getLogger=function(e,t,n,o,r){return new u.Logger(e,new f.LoggingConfig(t||this.config.prefixPattern,o||this.config.datetimePattern,n||this.config.datetimeLocale,r&&[new f.ContextLogLevel(e,r)]||this.config.contextLogLevels))},e}();l.DEFAULT_CONFIG=new f.LoggingConfig("%s::[%s]> ",window.navigator.language||"en","LLL",[new f.ContextLogLevel("*",f.LogLevel.TRACE)]),l=a=o([c.Injectable(),i(0,c.Inject("loggingConfig")),i(0,c.Optional()),r("design:paramtypes",[f.LoggingConfig])],l),t.LoggingService=l;var a},function(e,t,n){"use strict";function o(){var e=function(){return null};return"undefined"!=typeof console?console:{log:e,info:e,debug:e,warn:e,error:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o},function(e,t,n){"use strict";var o=this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),i=n(6),c=n(1),f=n(3),u=function(){function e(){this.countSprintfHolders=function(e){function t(e){return function(){n=Math.max(n,e)}}if(/\x25\([a-zA-Z0-9_]+\)[b-fijosuxX]/.test(e))return 1;var n=0;return r.default(e,t(1),t(2),t(3),t(4),t(5),t(6),t(7),t(8),t(9),t(10)),n}}return e.prototype.log=function(e,t,n,o){if(o.logLevels=o.logLevels||[],this.levelPassesThreshold(n,t,o)){var r=this.enhanceLogline(arguments,n,t,o.datetimePattern,o.datetimeLocale,o.prefixPattern);return e.apply(null,r),r}return null},e.prototype.levelPassesThreshold=function(e,t,n){return t>c.LogLevel.OFF.level&&t<=this.getLogLevelThreshold(e,n)},e.prototype.getLogLevelThreshold=function(e,t){if(e){var n=this.findLogLevelForContext(t.contextLogLevels,e);if(n)return n.logLevel;if(-1!==e.indexOf("."))return this.getLogLevelThreshold(e.substring(0,e.lastIndexOf(".")),t)}var o=this.findLogLevelForContext(t.contextLogLevels,"*");return o&&o.logLevel||c.LogLevel.TRACE},e.prototype.findLogLevelForContext=function(e,t){return e.find(function(e){return e.context==t})},e.prototype.enhanceLogline=function(e,t,n,o,i,c){var f=this.generatePrefix(t,n,o,i,c),u=function(e){if(void 0!==r.default&&e.length>=2&&"string"==typeof e[0]&&-1!==e[0].indexOf("%"))try{var t=this.countSprintfHolders(e[0]);t>0&&(e[0]=r.default.apply(null,e),e.splice(1,t))}catch(t){e.unshift(t)}return e}([].slice.call(e));return[f].concat([].slice.call(u))},e.prototype.generatePrefix=function(e,t,n,o,c){var f="";if(void 0!==i)f=i().locale(o).format(n);else{var u=new Date,l=(new Date).toTimeString().match(/^([0-9]{2}:[0-9]{2}:[0-9]{2})/)[0];f=u.getDate()+"-"+(u.getMonth()+1)+"-"+u.getFullYear()+" "+l}return void 0!==r.default?r.default(c,f,e,t.name.toLowerCase()):f+"::"+e+"::"+t.name.toLowerCase()+"> "},e}(),l=function(e){function t(n,o){var r=e.call(this)||this;return r.context=n,r.config=o,r.trace=function(){return r.log(t.console.debug,c.LogLevel.DEBUG,r.context,r.config)},r.debug=function(){return r.log(t.console.debug,c.LogLevel.DEBUG,r.context,r.config)},r.info=function(){return r.log(t.console.info,c.LogLevel.INFO,r.context,r.config)},r.warn=function(){return r.log(t.console.warn,c.LogLevel.WARN,r.context,r.config)},r.error=function(){return r.log(t.console.error,c.LogLevel.ERROR,r.context,r.config)},r}return o(t,e),t}(u);l.console=f.default(),t.Logger=l},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,c=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var f=e.length-1;f>=0;f--)(r=e[f])&&(c=(i<3?r(c):i>3?r(t,n,c):r(t,n))||c);return i>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(2);r.enableProdMode();var c=function(){function e(){}return e}();c=o([r.NgModule({providers:[i.LoggingService]})],c),t.LoggingModule=c},function(e,t){e.exports=moment},function(e,t){e.exports=sprintf-js}]);
//# sourceMappingURL=logging.module.map