try{!function(){var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="20dcd06a-0e15-4324-8029-fdf6d04de8b0",e._sentryDebugIdIdentifier="sentry-dbid-20dcd06a-0e15-4324-8029-fdf6d04de8b0")}()}catch(e){}!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[(new e.Error).stack]=function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];if(null!=n)for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}return e}({},e._sentryModuleMetadata[(new e.Error).stack],{"_sentryBundlerPluginAppKey:sentry-js-hh-filter-key":!0})}catch(e){}}(),function(){try{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{}).SENTRY_RELEASE={id:"a8891b807f20bd18b60ec88985b3712ef8d8e4c6"}}catch(e){}}(),(globalThis.__xhh_LOADABLE_LOADED_CHUNKS__=globalThis.__xhh_LOADABLE_LOADED_CHUNKS__||[]).push([["1749"],{487001:function(e,t,n){n.d(t,{Z:()=>M});var r,i=n(570655),o=n(244589),s=n(630909);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function a(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var c,u,l=[];(u=c||(c={}))[u.DEBUG=0]="DEBUG",u[u.VERBOSE=1]="VERBOSE",u[u.INFO=2]="INFO",u[u.WARN=3]="WARN",u[u.ERROR=4]="ERROR",u[u.SILENT=5]="SILENT";var f,p={debug:c.DEBUG,verbose:c.VERBOSE,info:c.INFO,warn:c.WARN,error:c.ERROR,silent:c.SILENT},h=c.INFO,d=((r={})[c.DEBUG]="log",r[c.VERBOSE]="log",r[c.INFO]="info",r[c.WARN]="warn",r[c.ERROR]="error",r),v=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),o=d[t];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[o].apply(console,a(["["+i+"]  "+e.name+":"],n))}},g=function(){function e(e){this.name=e,this._logLevel=h,this._logHandler=v,this._userLogHandler=null,l.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in c))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?p[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,a([this,c.DEBUG],e)),this._logHandler.apply(this,a([this,c.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,a([this,c.VERBOSE],e)),this._logHandler.apply(this,a([this,c.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,a([this,c.INFO],e)),this._logHandler.apply(this,a([this,c.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,a([this,c.WARN],e)),this._logHandler.apply(this,a([this,c.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,a([this,c.ERROR],e)),this._logHandler.apply(this,a([this,c.ERROR],e))},e}();function b(e){l.forEach((function(t){t.setLogLevel(e)}))}var m,y=((f={})["no-app"]="No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",f["bad-app-name"]="Illegal App name: '{$appName}",f["duplicate-app"]="Firebase App named '{$appName}' already exists",f["app-deleted"]="Firebase App named '{$appName}' already deleted",f["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",f["invalid-log-argument"]="First argument to `onLog` must be null or a function.",f),w=new o.LL("app","Firebase",y),k="@firebase/app",I="[DEFAULT]",_=((m={})[k]="fire-core",m["@firebase/analytics"]="fire-analytics",m["@firebase/app-check"]="fire-app-check",m["@firebase/auth"]="fire-auth",m["@firebase/database"]="fire-rtdb",m["@firebase/functions"]="fire-fn",m["@firebase/installations"]="fire-iid",m["@firebase/messaging"]="fire-fcm",m["@firebase/performance"]="fire-perf",m["@firebase/remote-config"]="fire-rc",m["@firebase/storage"]="fire-gcs",m["@firebase/firestore"]="fire-fst",m["fire-js"]="fire-js",m["firebase-wrapper"]="fire-js-all",m),S=new g("@firebase/app"),C=function(){function e(e,t,n){var r=this;this.firebase_=n,this.isDeleted_=!1,this.name_=t.name,this.automaticDataCollectionEnabled_=t.automaticDataCollectionEnabled||!1,this.options_=(0,o.p$)(e),this.container=new s.H0(t.name),this._addComponent(new s.wA("app",(function(){return r}),"PUBLIC")),this.firebase_.INTERNAL.components.forEach((function(e){return r._addComponent(e)}))}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!1,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise((function(t){e.checkDestroyed_(),t()})).then((function(){return e.firebase_.INTERNAL.removeApp(e.name_),Promise.all(e.container.getProviders().map((function(e){return e.delete()})))})).then((function(){e.isDeleted_=!0}))},e.prototype._getService=function(e,t){var n;void 0===t&&(t=I),this.checkDestroyed_();var r=this.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})},e.prototype._removeServiceInstance=function(e,t){void 0===t&&(t=I),this.container.getProvider(e).clearInstance(t)},e.prototype._addComponent=function(e){try{this.container.addComponent(e)}catch(t){S.debug("Component "+e.name+" failed to register with FirebaseApp "+this.name,t)}},e.prototype._addOrOverwriteComponent=function(e){this.container.addOrOverwriteComponent(e)},e.prototype.toJSON=function(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}},e.prototype.checkDestroyed_=function(){if(this.isDeleted_)throw w.create("app-deleted",{appName:this.name_})},e}();C.prototype.name&&C.prototype.options||C.prototype.delete||console.log("dc");var E="8.7.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){var t={},n=new Map,r={__esModule:!0,initializeApp:function(n,i){void 0===i&&(i={});if("object"!=typeof i||null===i){i={name:i}}var s=i;void 0===s.name&&(s.name=I);var a=s.name;if("string"!=typeof a||!a)throw w.create("bad-app-name",{appName:String(a)});if((0,o.r3)(t,a))throw w.create("duplicate-app",{appName:a});var c=new e(n,s,r);return t[a]=c,c},app:i,registerVersion:function(e,t,n){var r,i=null!==(r=_[e])&&void 0!==r?r:e;n&&(i+="-"+n);var o=i.match(/\s|\//),c=t.match(/\s|\//);if(o||c){var u=['Unable to register library "'+i+'" with version "'+t+'":'];return o&&u.push('library name "'+i+'" contains illegal characters (whitespace or "/")'),o&&c&&u.push("and"),c&&u.push('version name "'+t+'" contains illegal characters (whitespace or "/")'),void S.warn(u.join(" "))}a(new s.wA(i+"-version",(function(){return{library:i,version:t}}),"VERSION"))},setLogLevel:b,onLog:function(e,t){if(null!==e&&"function"!=typeof e)throw w.create("invalid-log-argument");!function(e,t){for(var n=function(n){var r=null;t&&t.level&&(r=p[t.level]),n.userLogHandler=null===e?null:function(t,n){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];var s=i.map((function(e){if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((function(e){return e})).join(" ");n>=(null!=r?r:t.logLevel)&&e({level:c[n].toLowerCase(),message:s,args:i,type:t.name})}},r=0,i=l;r<i.length;r++)n(i[r])}(e,t)},apps:null,SDK_VERSION:E,INTERNAL:{registerComponent:a,removeApp:function(e){delete t[e]},components:n,useAsService:function(e,t){if("serverAuth"===t)return null;return t}}};function i(e){if(e=e||I,!(0,o.r3)(t,e))throw w.create("no-app",{appName:e});return t[e]}function a(s){var a=s.name;if(n.has(a))return S.debug("There were multiple attempts to register component "+a+"."),"PUBLIC"===s.type?r[a]:null;if(n.set(a,s),"PUBLIC"===s.type){var c=function(e){if(void 0===e&&(e=i()),"function"!=typeof e[a])throw w.create("invalid-app-argument",{appName:a});return e[a]()};void 0!==s.serviceProps&&(0,o.ZB)(c,s.serviceProps),r[a]=c,e.prototype[a]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._getService.bind(this,a).apply(this,s.multipleInstances?e:[])}}for(var u=0,l=Object.keys(t);u<l.length;u++){var f=l[u];t[f]._addComponent(s)}return"PUBLIC"===s.type?r[a]:null}return r.default=r,Object.defineProperty(r,"apps",{get:function(){return Object.keys(t).map((function(e){return t[e]}))}}),i.App=e,r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var T=function e(){var t=O(C);return t.INTERNAL=(0,i.pi)((0,i.pi)({},t.INTERNAL),{createFirebaseNamespace:e,extendNamespace:function(e){(0,o.ZB)(t,e)},createSubscribe:o.ne,ErrorFactory:o.LL,deepExtend:o.ZB}),t}(),D=function(){function e(e){this.container=e}return e.prototype.getPlatformInfoString=function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)){var t=e.getImmediate();return t.library+"/"+t.version}return null})).filter((function(e){return e})).join(" ")},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
if((0,o.jU)()&&void 0!==self.firebase){S.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var N=self.firebase.SDK_VERSION;N&&N.indexOf("LITE")>=0&&S.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var A=T.initializeApp;T.initializeApp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,o.UG)()&&S.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the @rollup/plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/@rollup/plugin-node-resolve\n      '),A.apply(void 0,e)};var P,L,R=T;(P=R).INTERNAL.registerComponent(new s.wA("platform-logger",(function(e){return new D(e)}),"PRIVATE")),P.registerVersion(k,"0.6.28",L),P.registerVersion("fire-js","");const M=R},630909:function(e,t,n){n.d(t,{H0:()=>c,wA:()=>o});var r=n(570655),i=n(244589),o=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),s="[DEFAULT]",a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new i.BH;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}try{for(var i=(0,r.XA)(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=(0,r.CR)(o.value,2),c=a[0],u=a[1],l=this.normalizeInstanceIdentifier(c);try{var f=this.getOrInitializeService({instanceIdentifier:l});u.resolve(f)}catch(e){}}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=s),this.instancesDeferred.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return(0,r.mG)(this,void 0,void 0,(function(){var e;return(0,r.Jh)(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all((0,r.ev)((0,r.ev)([],(0,r.CR)(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),(0,r.CR)(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=s),this.instances.has(e)},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var i=e.options,o=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var c=(0,r.XA)(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=(0,r.CR)(u.value,2),f=l[0],p=l[1];s===this.normalizeInstanceIdentifier(f)&&p.resolve(a)}}catch(e){t={error:e}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}return a},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,o=this.onInitCallbacks.get(t);if(o)try{for(var s=(0,r.XA)(o),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===s?void 0:t),options:i}),this.instances.set(n,o),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch(e){}return o||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=s),this.component?this.component.multipleInstances?e:s:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();var c=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new a(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()},370120:function(e,t,n){var r,i=n(487001),o=n(630909),s=n(570655),a=n(244589),c=n(198676),u="0.4.30",l=1e4,f="w:"+u,p="FIS_v2",h="https://firebaseinstallations.googleapis.com/v1",d=36e5,v=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),g=new a.LL("installations","Installations",v);function b(e){return e instanceof a.ZR&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(e){var t=e.projectId;return h+"/projects/"+t+"/installations"}function y(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function w(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return[4,t.json()];case 1:return n=i.sent(),r=n.error,[2,g.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function k(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function I(e,t){var n=t.refreshToken,r=k(e);return r.append("Authorization",function(e){return p+" "+e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n)),r}function _(e){return(0,s.mG)(this,void 0,void 0,(function(){var t;return(0,s.Jh)(this,(function(n){switch(n.label){case 0:return[4,e()];case 1:return(t=n.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function S(e,t){var n=t.fid;return(0,s.mG)(this,void 0,void 0,(function(){var t,r,i,o,a,c;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return t=m(e),r=k(e),i={fid:n,authVersion:p,appId:e.appId,sdkVersion:f},o={method:"POST",headers:r,body:JSON.stringify(i)},[4,_((function(){return fetch(t,o)}))];case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3];case 2:return c=s.sent(),[2,{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:y(c.authToken)}];case 3:return[4,w("Create Installation",a)];case 4:throw s.sent()}}))}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var E=/^[cdef][\w-]{21}$/,O="";function T(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){var t=(n=e,btoa(String.fromCharCode.apply(String,(0,s.ev)([],(0,s.CR)(n)))).replace(/\+/g,"-").replace(/\//g,"_"));var n;return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return E.test(t)?t:O}catch(e){return O}}function D(e){return e.appName+"!"+e.appId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N=new Map;function A(e,t){var n=D(e);P(n,t),function(e,t){var n=R();n&&n.postMessage({key:e,fid:t});M()}(n,t)}function P(e,t){var n,r,i=N.get(e);if(i)try{for(var o=(0,s.XA)(i),a=o.next();!a.done;a=o.next()){(0,a.value)(t)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var L=null;function R(){return!L&&"BroadcastChannel"in self&&((L=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){P(e.data.key,e.data.fid)}),L}function M(){0===N.size&&L&&(L.close(),L=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var j,G,K="firebase-installations-database",J=1,F="firebase-installations-store",H=null;function x(){return H||(H=(0,c.openDb)(K,J,(function(e){if(0===e.oldVersion)e.createObjectStore(F)}))),H}function z(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i,o,a;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return n=D(e),[4,x()];case 1:return r=s.sent(),i=r.transaction(F,"readwrite"),[4,(o=i.objectStore(F)).get(n)];case 2:return a=s.sent(),[4,o.put(t,n)];case 3:return s.sent(),[4,i.complete];case 4:return s.sent(),a&&a.fid===t.fid||A(e,t.fid),[2,t]}}))}))}function B(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return t=D(e),[4,x()];case 1:return n=i.sent(),[4,(r=n.transaction(F,"readwrite")).objectStore(F).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function U(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i,o,a,c;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return n=D(e),[4,x()];case 1:return r=s.sent(),i=r.transaction(F,"readwrite"),[4,(o=i.objectStore(F)).get(n)];case 2:return a=s.sent(),void 0!==(c=t(a))?[3,4]:[4,o.delete(n)];case 3:return s.sent(),[3,6];case 4:return[4,o.put(c,n)];case 5:s.sent(),s.label=6;case 6:return[4,i.complete];case 7:return s.sent(),!c||a&&a.fid===c.fid||A(e,c.fid),[2,c]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return[4,U(e,(function(n){var r=function(e){var t=e||{fid:T(),registrationStatus:0};return $(t)}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(g.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,7]),[4,S(e,t)];case 1:return n=i.sent(),[2,z(e,n)];case 2:return b(r=i.sent())&&409===r.customData.serverCode?[4,B(e)]:[3,4];case 3:return i.sent(),[3,6];case 4:return[4,z(e,{fid:t.fid,registrationStatus:0})];case 5:i.sent(),i.label=6;case 6:throw r;case 7:return[2]}}))}))}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:W(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}))];case 1:return(n=i.sent()).fid!==O?[3,3]:(r={},[4,t]);case 2:return[2,(r.installationEntry=i.sent(),r)];case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function W(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r,i;return(0,s.Jh)(this,(function(o){switch(o.label){case 0:return[4,q(e)];case 1:t=o.sent(),o.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,C(100)];case 3:return o.sent(),[4,q(e)];case 4:return t=o.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,V(e)];case 6:return n=o.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}}))}))}function q(e){return U(e,(function(e){if(!e)throw g.create("installation-not-found");return $(e)}))}function $(e){return 1===(t=e).registrationStatus&&t.registrationTime+l<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function Z(e,t){var n=e.appConfig,r=e.platformLoggerProvider;return(0,s.mG)(this,void 0,void 0,(function(){var e,i,o,a,c,u,l;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return e=function(e,t){var n=t.fid;return m(e)+"/"+n+"/authTokens:generate"}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,t),i=I(n,t),(o=r.getImmediate({optional:!0}))&&i.append("x-firebase-client",o.getPlatformInfoString()),a={installation:{sdkVersion:f}},c={method:"POST",headers:i,body:JSON.stringify(a)},[4,_((function(){return fetch(e,c)}))];case 1:return(u=s.sent()).ok?[4,u.json()]:[3,3];case 2:return l=s.sent(),[2,y(l)];case 3:return[4,w("Generate Auth Token",u)];case 4:throw s.sent()}}))}))}function X(e,t){return void 0===t&&(t=!1),(0,s.mG)(this,void 0,void 0,(function(){var n,r,i;return(0,s.Jh)(this,(function(o){switch(o.label){case 0:return[4,U(e.appConfig,(function(r){if(!Q(r))throw g.create("not-registered");var i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+d}(e)}(i))return r;if(1===i.requestStatus)return n=function(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return[4,Y(e.appConfig)];case 1:n=i.sent(),i.label=2;case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,C(100)];case 3:return i.sent(),[4,Y(e.appConfig)];case 4:return n=i.sent(),[3,2];case 5:return 0===(r=n.authToken).requestStatus?[2,X(e,t)]:[2,r]}}))}))}(e,t),r;if(!navigator.onLine)throw g.create("app-offline");var o=function(e){var t={requestStatus:1,requestTime:Date.now()};return(0,s.pi)((0,s.pi)({},e),{authToken:t})}(r);return n=function(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i;return(0,s.Jh)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,8]),[4,Z(e,t)];case 1:return n=o.sent(),i=(0,s.pi)((0,s.pi)({},t),{authToken:n}),[4,z(e.appConfig,i)];case 2:return o.sent(),[2,n];case 3:return!b(r=o.sent())||401!==r.customData.serverCode&&404!==r.customData.serverCode?[3,5]:[4,B(e.appConfig)];case 4:return o.sent(),[3,7];case 5:return i=(0,s.pi)((0,s.pi)({},t),{authToken:{requestStatus:0}}),[4,z(e.appConfig,i)];case 6:o.sent(),o.label=7;case 7:throw r;case 8:return[2]}}))}))}(e,o),o}))];case 1:return r=o.sent(),n?[4,n]:[3,3];case 2:return i=o.sent(),[3,4];case 3:i=r.authToken,o.label=4;case 4:return[2,i]}}))}))}function Y(e){return U(e,(function(e){if(!Q(e))throw g.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+l<Date.now()?(0,s.pi)((0,s.pi)({},e),{authToken:{requestStatus:0}}):e}))}function Q(e){return void 0!==e&&2===e.registrationStatus}function ee(e){return(0,s.mG)(this,void 0,void 0,(function(){var t;return(0,s.Jh)(this,(function(n){switch(n.label){case 0:return[4,V(e)];case 1:return(t=n.sent().registrationPromise)?[4,t]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i,o;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return n=function(e,t){var n=t.fid;return m(e)+"/"+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t),r=I(e,t),i={method:"DELETE",headers:r},[4,_((function(){return fetch(n,i)}))];case 1:return(o=s.sent()).ok?[3,3]:[4,w("Delete Installation",o)];case 2:throw s.sent();case 3:return[2]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ne(e,t){var n=e.appConfig;return function(e,t){R();var n=D(e),r=N.get(n);r||(r=new Set,N.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=D(e),r=N.get(n);r&&(r.delete(t),0===r.size&&N.delete(n),M())}(n,t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){return g.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(j=i.Z).INTERNAL.registerComponent(new o.wA("installations",(function(e){var t=e.getProvider("app").getImmediate(),n=function(e){var t,n;if(!e||!e.options)throw re("App Configuration");if(!e.name)throw re("App Name");try{for(var r=(0,s.XA)(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw re(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),r={appConfig:n,platformLoggerProvider:e.getProvider("platform-logger")},i={app:t,getId:function(){
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return[4,V(e.appConfig)];case 1:return t=i.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):X(e).catch(console.error),[2,n.fid]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)},getToken:function(e){return function(e,t){return void 0===t&&(t=!1),(0,s.mG)(this,void 0,void 0,(function(){return(0,s.Jh)(this,(function(n){switch(n.label){case 0:return[4,ee(e.appConfig)];case 1:return n.sent(),[4,X(e,t)];case 2:return[2,n.sent().token]}}))}))}(r,e)},delete:function(){return function(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n;return(0,s.Jh)(this,(function(r){switch(r.label){case 0:return[4,U(t=e.appConfig,(function(e){if(!e||0!==e.registrationStatus)return e}))];case 1:if(!(n=r.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw g.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw g.create("app-offline");case 3:return[4,te(t,n)];case 4:return r.sent(),[4,B(t)];case 5:r.sent(),r.label=6;case 6:return[2]}}))}))}(r)},onIdChange:function(e){return ne(r,e)}};return i}),"PUBLIC")),j.registerVersion("@firebase/installations",u);var ie,oe,se=((G={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',G["only-available-in-window"]="This method is available in a Window context.",G["only-available-in-sw"]="This method is available in a service worker context.",G["permission-default"]="The notification permission was not granted and dismissed instead.",G["permission-blocked"]="The notification permission was not granted and blocked instead.",G["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",G["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",G["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",G["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",G["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",G["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",G["token-update-no-token"]="FCM returned no token when updating the user to push.",G["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",G["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",G["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",G["invalid-vapid-key"]="The public VAPID key must be a string.",G["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",G),ae=new a.LL("messaging","Messaging",se),ce="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ue="https://fcmregistrations.googleapis.com/v1",le="FCM_MSG",fe="google.c.a.c_id";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pe(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,(0,s.ev)([],(0,s.CR)(t)))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function he(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(oe=ie||(ie={})).PUSH_RECEIVED="push-received",oe.NOTIFICATION_CLICKED="notification-clicked";var de="fcm_token_details_db",ve=5,ge="fcm_token_object_Store";function be(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r,i=this;return(0,s.Jh)(this,(function(o){switch(o.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=o.sent(),n=t.map((function(e){return e.name})),!n.includes(de))return[2,null];o.label=2;case 2:return r=null,[4,(0,c.openDb)(de,ve,(function(t){return(0,s.mG)(i,void 0,void 0,(function(){var n,i,o,a;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains(ge)?[4,(n=t.transaction.objectStore(ge)).index("fcmSenderId").get(e)]:[2];case 1:return i=s.sent(),[4,n.clear()];case 2:if(s.sent(),!i)return[2];if(2===t.oldVersion){if(!(o=i).auth||!o.p256dh||!o.endpoint)return[2];r={token:o.fcmToken,createTime:null!==(a=o.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"==typeof o.vapidKey?o.vapidKey:pe(o.vapidKey)}}}else(3===t.oldVersion||4===t.oldVersion)&&(r={token:(o=i).fcmToken,createTime:o.createTime,subscriptionOptions:{auth:pe(o.auth),p256dh:pe(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:pe(o.vapidKey)}});return[2]}}))}))}))];case 3:return o.sent().close(),[4,(0,c.deleteDb)(de)];case 4:return o.sent(),[4,(0,c.deleteDb)("fcm_vapid_details_db")];case 5:return o.sent(),[4,(0,c.deleteDb)("undefined")];case 6:return o.sent(),[2,me(r)?r:null]}}))}))}function me(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye="firebase-messaging-database",we=1,ke="firebase-messaging-store",Ie=null;function _e(){return Ie||(Ie=(0,c.openDb)(ye,we,(function(e){if(0===e.oldVersion)e.createObjectStore(ke)}))),Ie}function Se(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return t=Oe(e),[4,_e()];case 1:return[4,i.sent().transaction(ke).objectStore(ke).get(t)];case 2:return(n=i.sent())?[2,n]:[3,3];case 3:return[4,be(e.appConfig.senderId)];case 4:return(r=i.sent())?[4,Ce(e,r)]:[3,6];case 5:return i.sent(),[2,r];case 6:return[2]}}))}))}function Ce(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i;return(0,s.Jh)(this,(function(o){switch(o.label){case 0:return n=Oe(e),[4,_e()];case 1:return r=o.sent(),[4,(i=r.transaction(ke,"readwrite")).objectStore(ke).put(t,n)];case 2:return o.sent(),[4,i.complete];case 3:return o.sent(),[2,t]}}))}))}function Ee(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return t=Oe(e),[4,_e()];case 1:return n=i.sent(),[4,(r=n.transaction(ke,"readwrite")).objectStore(ke).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function Oe(e){return e.appConfig.appId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i,o,a,c;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return[4,Pe(e)];case 1:n=s.sent(),r=Le(t),i={method:"POST",headers:n,body:JSON.stringify(r)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(Ae(e.appConfig),i)];case 3:return[4,s.sent().json()];case 4:return o=s.sent(),[3,6];case 5:throw a=s.sent(),ae.create("token-subscribe-failed",{errorInfo:a});case 6:if(o.error)throw c=o.error.message,ae.create("token-subscribe-failed",{errorInfo:c});if(!o.token)throw ae.create("token-subscribe-no-token");return[2,o.token]}}))}))}function De(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i,o,a,c;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return[4,Pe(e)];case 1:n=s.sent(),r=Le(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(Ae(e.appConfig)+"/"+t.token,i)];case 3:return[4,s.sent().json()];case 4:return o=s.sent(),[3,6];case 5:throw a=s.sent(),ae.create("token-update-failed",{errorInfo:a});case 6:if(o.error)throw c=o.error.message,ae.create("token-update-failed",{errorInfo:c});if(!o.token)throw ae.create("token-update-no-token");return[2,o.token]}}))}))}function Ne(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r,i,o,a;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return[4,Pe(e)];case 1:n=s.sent(),r={method:"DELETE",headers:n},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(Ae(e.appConfig)+"/"+t,r)];case 3:return[4,s.sent().json()];case 4:if((i=s.sent()).error)throw o=i.error.message,ae.create("token-unsubscribe-failed",{errorInfo:o});return[3,6];case 5:throw a=s.sent(),ae.create("token-unsubscribe-failed",{errorInfo:a});case 6:return[2]}}))}))}function Ae(e){var t=e.projectId;return ue+"/projects/"+t+"/registrations"}function Pe(e){var t=e.appConfig,n=e.installations;return(0,s.mG)(this,void 0,void 0,(function(){var e;return(0,s.Jh)(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function Le(e){var t=e.p256dh,n=e.auth,r=e.endpoint,i=e.vapidKey,o={web:{endpoint:r,auth:n,p256dh:t}};return i!==ce&&(o.web.applicationPubKey=i),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t,n){return(0,s.mG)(this,void 0,void 0,(function(){var r,i,o,a;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:if("granted"!==Notification.permission)throw ae.create("permission-blocked");return[4,Ke(t,n)];case 1:return r=s.sent(),[4,Se(e)];case 2:return i=s.sent(),o={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:pe(r.getKey("auth")),p256dh:pe(r.getKey("p256dh"))},i?[3,3]:[2,Ge(e,o)];case 3:if(c=i.subscriptionOptions,l=(u=o).vapidKey===c.vapidKey,f=u.endpoint===c.endpoint,p=u.auth===c.auth,h=u.p256dh===c.p256dh,l&&f&&p&&h)return[3,8];s.label=4;case 4:return s.trys.push([4,6,,7]),[4,Ne(e,i.token)];case 5:return s.sent(),[3,7];case 6:return a=s.sent(),console.warn(a),[3,7];case 7:return[2,Ge(e,o)];case 8:return Date.now()>=i.createTime+6048e5?[2,je({token:i.token,createTime:Date.now(),subscriptionOptions:o},e,t)]:[2,i.token];case 9:return[2]}var c,u,l,f,p,h;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}))}function Me(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return[4,Se(e)];case 1:return(n=i.sent())?[4,Ne(e,n.token)]:[3,4];case 2:return i.sent(),[4,Ee(e)];case 3:i.sent(),i.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return(r=i.sent())?[2,r.unsubscribe()]:[2,!0]}}))}))}function je(e,t,n){return(0,s.mG)(this,void 0,void 0,(function(){var r,i,o;return(0,s.Jh)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,De(t,e)];case 1:return r=a.sent(),i=(0,s.pi)((0,s.pi)({},e),{token:r,createTime:Date.now()}),[4,Ce(t,i)];case 2:return a.sent(),[2,r];case 3:return o=a.sent(),[4,Me(t,n)];case 4:throw a.sent(),o;case 5:return[2]}}))}))}function Ge(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n,r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return[4,Te(e,t)];case 1:return n=i.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,Ce(e,r)];case 2:return i.sent(),[2,r.token]}}))}))}function Ke(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n;return(0,s.Jh)(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:he(t)})]}}))}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Je(e){return"object"==typeof e&&!!e&&fe in e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(e){return new Promise((function(t){setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He=function(){function e(e){var t=this;this.firebaseDependencies=e,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(this.isOnBackgroundMessageUsed=!1,!e||"function"!=typeof e)throw ae.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.onBackgroundMessage=function(e){var t=this;return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=e,function(){t.bgMessageHandler=null}},e.prototype.getToken=function(){var e,t;return(0,s.mG)(this,void 0,void 0,(function(){var n;return(0,s.Jh)(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,Se(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null==n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:ce,r.label=2;case 2:return[2,Re(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return Me(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw ae.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw ae.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw ae.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw ae.create("only-available-in-window")},e.prototype.onMessage=function(){throw ae.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw ae.create("only-available-in-window")},e.prototype.onPush=function(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r,i;return(0,s.Jh)(this,(function(o){switch(o.label){case 0:return t=function(e){var t=e.data;if(!t)return null;try{return t.json()}catch(e){return null}}(e),t?[4,Ue()]:(console.debug("FirebaseMessaging: failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2]);case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=o.sent())?[2,Be(n,t)]:(r=!1,t.notification?[4,Ve(xe(t))]:[3,3]);case 2:o.sent(),r=!0,o.label=3;case 3:return!0===r&&!1===this.isOnBackgroundMessageUsed?[2]:(this.bgMessageHandler&&(i=function(e){var t={from:e.from,collapseKey:e.collapse_key};return function(e,t){if(t.notification){e.notification={};var n=t.notification.title;n&&(e.notification.title=n);var r=t.notification.body;r&&(e.notification.body=r);var i=t.notification.image;i&&(e.notification.image=i)}}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){if(t.fcmOptions){e.fcmOptions={};var n=t.fcmOptions.link;n&&(e.fcmOptions.link=n);var r=t.fcmOptions.analytics_label;r&&(e.fcmOptions.analyticsLabel=r)}}(t,e),t}(t),"function"==typeof this.bgMessageHandler?this.bgMessageHandler(i):this.bgMessageHandler.next(i)),[4,Fe(1e3)]);case 4:return o.sent(),[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return(0,s.mG)(this,void 0,void 0,(function(){var r;return(0,s.Jh)(this,(function(i){switch(i.label){case 0:return e.newSubscription?[3,2]:[4,Me(this.firebaseDependencies,self.registration)];case 1:case 5:return i.sent(),[2];case 2:return[4,Se(this.firebaseDependencies)];case 3:return r=i.sent(),[4,Me(this.firebaseDependencies,self.registration)];case 4:return i.sent(),[4,Re(this.firebaseDependencies,self.registration,null!==(n=null===(t=null==r?void 0:r.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:ce)]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return(0,s.mG)(this,void 0,void 0,(function(){var r,i,o,a,c;return(0,s.Jh)(this,(function(s){switch(s.label){case 0:return(r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n[le])?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),i=function(e){var t,n,r,i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;if(i)return i;return Je(e.data)?self.location.origin:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r),i?(o=new URL(i,self.location.href),a=new URL(self.location.origin),o.host!==a.host?[2]:[4,ze(o)]):[2]):[2];case 1:return(c=s.sent())?[3,4]:[4,self.clients.openWindow(i)];case 2:return c=s.sent(),[4,Fe(3e3)];case 3:return s.sent(),[3,6];case 4:return[4,c.focus()];case 5:c=s.sent(),s.label=6;case 6:return c?(r.messageType=ie.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,[2,c.postMessage(r)]):[2]}}))}))},e}();function xe(e){var t,n=(0,s.pi)({},e.notification);return n.data=((t={})[le]=e,t),n}function ze(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n,r,i,o,a,c;return(0,s.Jh)(this,(function(u){switch(u.label){case 0:return[4,Ue()];case 1:t=u.sent();try{for(n=(0,s.XA)(t),r=n.next();!r.done;r=n.next())if(i=r.value,o=new URL(i.url,self.location.href),e.host===o.host)return[2,i]}catch(e){a={error:e}}finally{try{r&&!r.done&&(c=n.return)&&c.call(n)}finally{if(a)throw a.error}}return[2,null]}}))}))}function Be(e,t){var n,r;t.isFirebaseMessaging=!0,t.messageType=ie.PUSH_RECEIVED;try{for(var i=(0,s.XA)(e),o=i.next();!o.done;o=i.next()){o.value.postMessage(t)}}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}function Ue(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Ve(e){var t,n=e.actions,r=Notification.maxActions;return n&&r&&n.length>r&&console.warn("This browser only supports "+r+" actions. The remaining actions will not be displayed."),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}var We=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(e){return(0,s.mG)(this,void 0,void 0,(function(){var t,n;return(0,s.Jh)(this,(function(r){switch(r.label){case 0:return(t=e.data).isFirebaseMessaging?(this.onMessageCallback&&t.messageType===ie.PUSH_RECEIVED&&("function"==typeof this.onMessageCallback?this.onMessageCallback(function(e){return delete e.messageType,delete e.isFirebaseMessaging,e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Object.assign({},t))):this.onMessageCallback.next(Object.assign({},t))),Je(n=t.data)&&"1"===n["google.c.a.e"]?[4,this.logEvent(t.messageType,n)]:[3,2]):[2];case 1:r.sent(),r.label=2;case 2:return[2]}}))}))},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(e){return(0,s.mG)(this,void 0,void 0,(function(){return(0,s.Jh)(this,(function(t){switch(t.label){case 0:return"default"!==Notification.permission?[3,2]:[4,Notification.requestPermission()];case 1:t.sent(),t.label=2;case 2:if("granted"!==Notification.permission)throw ae.create("permission-blocked");return[4,this.updateVapidKey(null==e?void 0:e.vapidKey)];case 3:return t.sent(),[4,this.updateSwReg(null==e?void 0:e.serviceWorkerRegistration)];case 4:return t.sent(),[2,Re(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}}))}))},e.prototype.updateVapidKey=function(e){return(0,s.mG)(this,void 0,void 0,(function(){return(0,s.Jh)(this,(function(t){return e?this.vapidKey=e:this.vapidKey||(this.vapidKey=ce),[2]}))}))},e.prototype.updateSwReg=function(e){return(0,s.mG)(this,void 0,void 0,(function(){return(0,s.Jh)(this,(function(t){switch(t.label){case 0:return e||this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:t.sent(),t.label=2;case 2:if(!e&&this.swRegistration)return[2];if(!(e instanceof ServiceWorkerRegistration))throw ae.create("invalid-sw-registration");return this.swRegistration=e,[2]}}))}))},e.prototype.registerDefaultSw=function(){return(0,s.mG)(this,void 0,void 0,(function(){var e,t;return(0,s.Jh)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 1:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,3];case 2:throw t=n.sent(),ae.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 3:return[2]}}))}))},e.prototype.deleteToken=function(){return(0,s.mG)(this,void 0,void 0,(function(){return(0,s.Jh)(this,(function(e){switch(e.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()];case 1:e.sent(),e.label=2;case 2:return[2,Me(this.firebaseDependencies,this.swRegistration)]}}))}))},e.prototype.requestPermission=function(){return(0,s.mG)(this,void 0,void 0,(function(){var e;return(0,s.Jh)(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?ae.create("permission-blocked"):ae.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw ae.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw ae.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw ae.create("invalid-sw-registration");if(this.swRegistration)throw ae.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback=e,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw ae.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw ae.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(e,t){return(0,s.mG)(this,void 0,void 0,(function(){var n;return(0,s.Jh)(this,(function(r){switch(r.label){case 0:return n=function(e){switch(e){case ie.NOTIFICATION_CLICKED:return"notification_open";case ie.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return r.sent().logEvent(n,{message_id:t[fe],message_name:t["google.c.a.c_l"],message_time:t["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();function qe(e){return ae.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e={isSupported:Ze};function Ze(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}i.Z.INTERNAL.registerComponent(new o.wA("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n=function(e){var t,n;if(!e||!e.options)throw qe("App Configuration Object");if(!e.name)throw qe("App Name");var r=e.options;try{for(var i=(0,s.XA)(["projectId","apiKey","appId","messagingSenderId"]),o=i.next();!o.done;o=i.next()){var a=o.value;if(!r[a])throw qe(a)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),r={app:t,appConfig:n,installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!Ze())throw ae.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new He(r):new We(r)}),"PUBLIC").setServiceProps($e))},244589:function(e,t,n){n.d(t,{BH:()=>s,LL:()=>l,UG:()=>a,ZB:()=>o,ZR:()=>u,jU:()=>c,ne:()=>h,p$:()=>i,r3:()=>p});var r=n(570655);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function i(e){return o(void 0,e)}function o(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=o(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a(){try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function c(){return"object"==typeof self&&self.self===self}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var u=function(e){function t(n,r,i){var o=e.call(this,r)||this;return o.code=n,o.customData=i,o.name="FirebaseError",Object.setPrototypeOf(o,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(o,l.prototype.create),o}return(0,r.ZT)(t,e),t}(Error),l=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],s=o?function(e,t){return e.replace(f,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}(o,r):"Error",a=this.serviceName+": "+s+" ("+i+").";return new u(i,a,r)},e}();var f=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function p(e,t){return Object.prototype.hasOwnProperty.call(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var o,s,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],l=this.chain_[3],f=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(o=l^c&(u^l),s=1518500249):(o=c^u^l,s=1859775393):r<60?(o=c&u|l&(c|u),s=2400959708):(o=c^u^l,s=3395469782);i=(a<<5|a>>>27)+o+f+s+n[r]&4294967295;f=l,l=u,u=4294967295&(c<<30|c>>>2),c=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+f&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,o=this.inbuf_;r<t;){if(0===o)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[o]=e.charCodeAt(r),++r,++o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++r,++o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e}}();function h(e,t){var n=new d(e,t);return n.subscribe.bind(n)}var d=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=v),void 0===r.error&&(r.error=v),void 0===r.complete&&(r.complete=v);var o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),o},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function v(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}}]);
//# sourceMappingURL=firebase.2ece51dadda079d5.js.map
//# debugId=20dcd06a-0e15-4324-8029-fdf6d04de8b0