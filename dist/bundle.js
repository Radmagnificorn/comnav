/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	__webpack_require__(1);

	var _PageManager = __webpack_require__(5);

	var _PageManager2 = _interopRequireDefault(_PageManager);

	var _DisplayControl = __webpack_require__(7);

	var _DisplayControl2 = _interopRequireDefault(_DisplayControl);

	var _Utils = __webpack_require__(6);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(function (document, PageManager, DisplayControl, window) {

	    init();

	    function init() {

	        var comicPanel = document.getElementById("comicPanel");

	        var dispProps = {
	            loopVideo: true,
	            autoplayVideo: true,
	            height: '100%',
	            width: '100%'
	        };

	        var startPage = _Utils2.default.getPageFromUrl(window.location.href) || { chapter: 'prolog', page: 0 };

	        var displayControl = new DisplayControl(comicPanel, dispProps);
	        var pageManager = new PageManager('./pages', startPage.chapter, startPage.page);

	        pageManager.addRenderer(displayControl);

	        comicPanel.addEventListener("click", function () {
	            pageManager.next();
	        }, false);

	        initNavigation(pageManager);
	        initChapterLinks();
	    }

	    function initNavigation(pageManager) {
	        var prevButton = document.getElementById("prevButton");
	        var nextButton = document.getElementById("nextButton");

	        prevButton.addEventListener("click", function () {
	            pageManager.previous();
	        }, false);

	        nextButton.addEventListener("click", function () {
	            pageManager.next();
	        }, false);

	        document.addEventListener("keyup", function (e) {
	            var keycode = e.keyCode;
	            if (keycode === 37) {
	                pageManager.previous();
	            }
	            if (keycode === 39) {
	                pageManager.next();
	            }
	        }, false);
	    }

	    function initChapterLinks() {
	        var chapterLinks = document.getElementById("chapters").getElementsByTagName("A");
	        for (var i = 0; i < chapterLinks.length; i++) {
	            chapterLinks[i].addEventListener("click", function () {
	                window.location.reload();
	            });
	        }
	    }
	})(document, _PageManager2.default, _DisplayControl2.default, window);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./nav.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./nav.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  background-color: #202020;\n  font-family: Verdana, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n#comicPanel {\n  height: 720px;\n  width: 960px;\n  background-color: #eeeeee;\n  margin: 0 auto;\n}\n#navPanel {\n  width: 960px;\n  margin: 0 auto;\n  position: relative;\n  margin-bottom: 150px;\n}\n#navPanel button {\n  width: 50%;\n  height: 100px;\n  position: absolute;\n  top: 0;\n  font-weight: bold;\n  font-size: large;\n  color: #202020;\n}\n#prevButton {\n  left: 0;\n}\n#nextButton {\n  right: 0;\n}\n.notice {\n  color: #FFFFFF;\n  text-align: center;\n}\n#chapters {\n  margin: 0 auto;\n  color: #ffffff;\n  text-align: center;\n  width: 75%;\n  font-weight: bold;\n}\n#chapters a {\n  text-decoration: none;\n  color: #ffffff;\n}\n#chapters a :visited {\n  color: #ffffff;\n  text-decoration: none;\n}\n#chapters a :hover {\n  color: #eeeeee;\n}\nimg,\nvideo {\n  image-rendering: -moz-crisp-edges;\n  image-rendering: -webkit-crisp-edges;\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Utils = __webpack_require__(6);

	var _Utils2 = _interopRequireDefault(_Utils);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PageManager = function () {
	    function PageManager(baseDir, chapterUrl, pageNo) {
	        _classCallCheck(this, PageManager);

	        this.baseDir = baseDir;
	        this.pageDir = chapterUrl ? chapterUrl : '';
	        this.currentPage = pageNo ? pageNo : 0;
	        this.loadChapter(this.pageDir, pageNo);
	    }

	    _createClass(PageManager, [{
	        key: 'addRenderer',
	        value: function addRenderer(displayRenderer) {
	            this.renderer = displayRenderer;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            if (this.renderer) {
	                this.renderer.render(this.getPageUrl());
	            }

	            this.pushCurrentState();
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            if (this.currentPage < this.pages.length - 1) {
	                this.currentPage++;
	                this.render();
	            } else {
	                if (this.nextChapter) {
	                    this.loadChapter(this.nextChapter, 'first');
	                }
	            }
	            return this.getPageUrl();
	        }
	    }, {
	        key: 'previous',
	        value: function previous() {
	            if (this.currentPage > 0) {
	                this.currentPage--;
	                this.render();
	            } else {
	                if (this.prevChapter) {
	                    this.loadChapter(this.prevChapter, 'last');
	                }
	            }
	            return this.getPageUrl();
	        }
	    }, {
	        key: 'pushCurrentState',
	        value: function pushCurrentState() {
	            history.pushState({
	                chapter: this.pageDir,
	                page: this.currentPage
	            }, null, '#' + this.pageDir + '~' + this.currentPage);
	        }
	    }, {
	        key: 'loadChapter',
	        value: function loadChapter(chapterUrl, page) {
	            var _this = this;

	            _Utils2.default.loadChapterManifest(this.baseDir + "/" + chapterUrl).then(function (manifest) {
	                _this.pageDir = chapterUrl;
	                _this.nextChapter = manifest.nextChapter;
	                _this.prevChapter = manifest.prevChapter;
	                _this.pages = manifest.pages;

	                var pageInt = parseInt(page);
	                if (pageInt) {
	                    _this.currentPage = pageInt;
	                } else {
	                    switch (page) {
	                        case "first":
	                            _this.currentPage = 0;
	                            break;
	                        case "last":
	                            _this.currentPage = manifest.pages.length - 1;
	                            break;
	                        default:
	                            _this.currentPage = 0;
	                    }
	                }

	                _this.render();
	            });
	        }
	    }, {
	        key: 'getChapterPath',
	        value: function getChapterPath() {
	            return this.baseDir + "/" + this.pageDir;
	        }
	    }, {
	        key: 'getPageUrl',
	        value: function getPageUrl() {
	            return this.getChapterPath() + "/" + this.pages[this.currentPage];
	        }
	    }]);

	    return PageManager;
	}();

	exports.default = PageManager;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Utils = function () {
	    function Utils() {
	        _classCallCheck(this, Utils);
	    }

	    _createClass(Utils, null, [{
	        key: 'loadChapterManifest',
	        value: function loadChapterManifest(url) {
	            return new Promise(function (resolve) {
	                var request = new XMLHttpRequest();
	                request.open('GET', url + '/manifest.json', true);

	                request.onload = function () {
	                    if (request.status >= 200 && request.status < 400) {
	                        resolve(JSON.parse(request.responseText));
	                    } else {
	                        console.log("unable to load chapter manifest");
	                    }
	                };

	                request.onerror = function () {
	                    console.log("error retrieving manifest from server");
	                };

	                request.send();
	            });
	        }
	    }, {
	        key: 'getPageFromUrl',
	        value: function getPageFromUrl(url) {
	            var page = null;
	            var locString = url.split('#')[1];
	            if (locString) {
	                var parsedLoc = locString.split('~');
	                page = {
	                    chapter: parsedLoc[0],
	                    page: parsedLoc[1]
	                };
	            }

	            return page;
	        }
	    }]);

	    return Utils;
	}();

	exports.default = Utils;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DisplayControl = function () {
	    function DisplayControl(target, properties) {
	        _classCallCheck(this, DisplayControl);

	        this.properties = properties;
	        target.style.position = 'relative';
	        this.panel = target;
	    }

	    _createClass(DisplayControl, [{
	        key: 'createImageDisplay',
	        value: function createImageDisplay(path) {
	            var props = this.properties;
	            var imageDisplay = document.createElement('img');

	            imageDisplay.style.display = 'block';
	            imageDisplay.style.height = props.height;
	            imageDisplay.style.width = props.width;
	            imageDisplay.style.position = 'absolute';
	            imageDisplay.style.top = '0';
	            imageDisplay.style.left = '0';

	            imageDisplay.src = path;

	            var loadedPromise = new Promise(function (resolve) {
	                imageDisplay.addEventListener("loaded", function () {
	                    resolve();
	                }, false);
	            });

	            return { component: imageDisplay, loaded: loadedPromise };
	        }
	    }, {
	        key: 'createVideoDisplay',
	        value: function createVideoDisplay(path) {
	            var props = this.properties;
	            var videoDisplay = document.createElement('video');
	            videoDisplay.style.display = 'block';
	            videoDisplay.style.height = props.height;
	            videoDisplay.style.width = props.width;
	            videoDisplay.style.position = 'absolute';
	            videoDisplay.style.top = '0';
	            videoDisplay.style.left = '0';
	            videoDisplay.loop = props.loopVideo ? props.loopVideo : true;
	            videoDisplay.autoplay = props.autoplayVideo ? props.autoplayVideo : true;
	            videoDisplay.muted = true;

	            var loadedPromise = new Promise(function (resolve) {
	                videoDisplay.addEventListener("loadeddata", function () {
	                    resolve();
	                }, false);
	            });

	            videoDisplay.src = path;

	            return { component: videoDisplay, loaded: loadedPromise };
	        }
	    }, {
	        key: 'render',
	        value: function render(url) {
	            var pageExt = this.getExtension(url);
	            var display = void 0;
	            switch (pageExt) {
	                case "png":
	                    display = this.createImageDisplay(url);
	                    break;
	                case "mp4":
	                    display = this.createVideoDisplay(url);
	                    break;
	                default:
	                    alert("File type not supported: " + pageExt);
	            }

	            var oldDisplay = this.currentDisplay;
	            this.currentDisplay = display;

	            this.panel.appendChild(this.currentDisplay.component);

	            this.currentDisplay.loaded.then(function () {
	                if (oldDisplay) {
	                    oldDisplay.component.remove();
	                }
	            });
	        }
	    }, {
	        key: 'getExtension',
	        value: function getExtension(url) {
	            var extPattern = /\.[0-9a-z]+$/;
	            var extMatches = url.match(extPattern);
	            var extension = '';
	            if (extMatches) {
	                extension = extMatches[0].substr(1);
	            }
	            return extension;
	        }
	    }]);

	    return DisplayControl;
	}();

	exports.default = DisplayControl;

/***/ }
/******/ ]);