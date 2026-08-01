Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esmMin = (fn, res, err) => () => {
	if (err) throw err[0];
	try {
		return fn && (res = fn(fn = 0)), res;
	} catch (e) {
		throw err = [e], e;
	}
};
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
var __toCommonJS = (mod) => __hasOwnProp.call(mod, "module.exports") ? mod["module.exports"] : __copyProps(__defProp({}, "__esModule", { value: true }), mod);
//#endregion
let axios = require("axios");
axios = __toESM(axios, 1);
let electron = require("electron");
//#region extension/node_modules/xml2js/lib/defaults.js
var require_defaults = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		exports.defaults = {
			"0.1": {
				explicitCharkey: false,
				trim: true,
				normalize: true,
				normalizeTags: false,
				attrkey: "@",
				charkey: "#",
				explicitArray: false,
				ignoreAttrs: false,
				mergeAttrs: false,
				explicitRoot: false,
				validator: null,
				xmlns: false,
				explicitChildren: false,
				childkey: "@@",
				charsAsChildren: false,
				includeWhiteChars: false,
				async: false,
				strict: true,
				attrNameProcessors: null,
				attrValueProcessors: null,
				tagNameProcessors: null,
				valueProcessors: null,
				emptyTag: ""
			},
			"0.2": {
				explicitCharkey: false,
				trim: false,
				normalize: false,
				normalizeTags: false,
				attrkey: "$",
				charkey: "_",
				explicitArray: true,
				ignoreAttrs: false,
				mergeAttrs: false,
				explicitRoot: true,
				validator: null,
				xmlns: false,
				explicitChildren: false,
				preserveChildrenOrder: false,
				childkey: "$$",
				charsAsChildren: false,
				includeWhiteChars: false,
				async: false,
				strict: true,
				attrNameProcessors: null,
				attrValueProcessors: null,
				tagNameProcessors: null,
				valueProcessors: null,
				rootName: "root",
				xmldec: {
					"version": "1.0",
					"encoding": "UTF-8",
					"standalone": true
				},
				doctype: null,
				renderOpts: {
					"pretty": true,
					"indent": "  ",
					"newline": "\n"
				},
				headless: false,
				chunkSize: 1e4,
				emptyTag: "",
				cdata: false
			}
		};
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/Utility.js
var require_Utility = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var assign, getValue, isArray, isEmpty, isFunction, isObject, isPlainObject, slice = [].slice, hasProp = {}.hasOwnProperty;
		assign = function() {
			var i, key, len, source, sources, target = arguments[0];
			sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
			if (isFunction(Object.assign)) Object.assign.apply(null, arguments);
			else for (i = 0, len = sources.length; i < len; i++) {
				source = sources[i];
				if (source != null) for (key in source) {
					if (!hasProp.call(source, key)) continue;
					target[key] = source[key];
				}
			}
			return target;
		};
		isFunction = function(val) {
			return !!val && Object.prototype.toString.call(val) === "[object Function]";
		};
		isObject = function(val) {
			var ref;
			return !!val && ((ref = typeof val) === "function" || ref === "object");
		};
		isArray = function(val) {
			if (isFunction(Array.isArray)) return Array.isArray(val);
			else return Object.prototype.toString.call(val) === "[object Array]";
		};
		isEmpty = function(val) {
			var key;
			if (isArray(val)) return !val.length;
			else {
				for (key in val) {
					if (!hasProp.call(val, key)) continue;
					return false;
				}
				return true;
			}
		};
		isPlainObject = function(val) {
			var ctor, proto;
			return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === "function" && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
		};
		getValue = function(obj) {
			if (isFunction(obj.valueOf)) return obj.valueOf();
			else return obj;
		};
		module.exports.assign = assign;
		module.exports.isFunction = isFunction;
		module.exports.isObject = isObject;
		module.exports.isArray = isArray;
		module.exports.isEmpty = isEmpty;
		module.exports.isPlainObject = isPlainObject;
		module.exports.getValue = getValue;
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLDOMImplementation.js
var require_XMLDOMImplementation = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		module.exports = (function() {
			function XMLDOMImplementation() {}
			XMLDOMImplementation.prototype.hasFeature = function(feature, version) {
				return true;
			};
			XMLDOMImplementation.prototype.createDocumentType = function(qualifiedName, publicId, systemId) {
				throw new Error("This DOM method is not implemented.");
			};
			XMLDOMImplementation.prototype.createDocument = function(namespaceURI, qualifiedName, doctype) {
				throw new Error("This DOM method is not implemented.");
			};
			XMLDOMImplementation.prototype.createHTMLDocument = function(title) {
				throw new Error("This DOM method is not implemented.");
			};
			XMLDOMImplementation.prototype.getFeature = function(feature, version) {
				throw new Error("This DOM method is not implemented.");
			};
			return XMLDOMImplementation;
		})();
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLDOMErrorHandler.js
var require_XMLDOMErrorHandler = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		module.exports = (function() {
			function XMLDOMErrorHandler() {}
			XMLDOMErrorHandler.prototype.handleError = function(error) {
				throw new Error(error);
			};
			return XMLDOMErrorHandler;
		})();
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLDOMStringList.js
var require_XMLDOMStringList = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		module.exports = (function() {
			function XMLDOMStringList(arr) {
				this.arr = arr || [];
			}
			Object.defineProperty(XMLDOMStringList.prototype, "length", { get: function() {
				return this.arr.length;
			} });
			XMLDOMStringList.prototype.item = function(index) {
				return this.arr[index] || null;
			};
			XMLDOMStringList.prototype.contains = function(str) {
				return this.arr.indexOf(str) !== -1;
			};
			return XMLDOMStringList;
		})();
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLDOMConfiguration.js
var require_XMLDOMConfiguration = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var XMLDOMErrorHandler = require_XMLDOMErrorHandler(), XMLDOMStringList = require_XMLDOMStringList();
		module.exports = (function() {
			function XMLDOMConfiguration() {
				this.defaultParams = {
					"canonical-form": false,
					"cdata-sections": false,
					"comments": false,
					"datatype-normalization": false,
					"element-content-whitespace": true,
					"entities": true,
					"error-handler": new XMLDOMErrorHandler(),
					"infoset": true,
					"validate-if-schema": false,
					"namespaces": true,
					"namespace-declarations": true,
					"normalize-characters": false,
					"schema-location": "",
					"schema-type": "",
					"split-cdata-sections": true,
					"validate": false,
					"well-formed": true
				};
				this.params = Object.create(this.defaultParams);
			}
			Object.defineProperty(XMLDOMConfiguration.prototype, "parameterNames", { get: function() {
				return new XMLDOMStringList(Object.keys(this.defaultParams));
			} });
			XMLDOMConfiguration.prototype.getParameter = function(name) {
				if (this.params.hasOwnProperty(name)) return this.params[name];
				else return null;
			};
			XMLDOMConfiguration.prototype.canSetParameter = function(name, value) {
				return true;
			};
			XMLDOMConfiguration.prototype.setParameter = function(name, value) {
				if (value != null) return this.params[name] = value;
				else return delete this.params[name];
			};
			return XMLDOMConfiguration;
		})();
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/NodeType.js
var require_NodeType = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		module.exports = {
			Element: 1,
			Attribute: 2,
			Text: 3,
			CData: 4,
			EntityReference: 5,
			EntityDeclaration: 6,
			ProcessingInstruction: 7,
			Comment: 8,
			Document: 9,
			DocType: 10,
			DocumentFragment: 11,
			NotationDeclaration: 12,
			Declaration: 201,
			Raw: 202,
			AttributeDeclaration: 203,
			ElementDeclaration: 204,
			Dummy: 205
		};
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLAttribute.js
var require_XMLAttribute = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType = require_NodeType();
		require_XMLNode();
		module.exports = (function() {
			function XMLAttribute(parent, name, value) {
				this.parent = parent;
				if (this.parent) {
					this.options = this.parent.options;
					this.stringify = this.parent.stringify;
				}
				if (name == null) throw new Error("Missing attribute name. " + this.debugInfo(name));
				this.name = this.stringify.name(name);
				this.value = this.stringify.attValue(value);
				this.type = NodeType.Attribute;
				this.isId = false;
				this.schemaTypeInfo = null;
			}
			Object.defineProperty(XMLAttribute.prototype, "nodeType", { get: function() {
				return this.type;
			} });
			Object.defineProperty(XMLAttribute.prototype, "ownerElement", { get: function() {
				return this.parent;
			} });
			Object.defineProperty(XMLAttribute.prototype, "textContent", {
				get: function() {
					return this.value;
				},
				set: function(value) {
					return this.value = value || "";
				}
			});
			Object.defineProperty(XMLAttribute.prototype, "namespaceURI", { get: function() {
				return "";
			} });
			Object.defineProperty(XMLAttribute.prototype, "prefix", { get: function() {
				return "";
			} });
			Object.defineProperty(XMLAttribute.prototype, "localName", { get: function() {
				return this.name;
			} });
			Object.defineProperty(XMLAttribute.prototype, "specified", { get: function() {
				return true;
			} });
			XMLAttribute.prototype.clone = function() {
				return Object.create(this);
			};
			XMLAttribute.prototype.toString = function(options) {
				return this.options.writer.attribute(this, this.options.writer.filterOptions(options));
			};
			XMLAttribute.prototype.debugInfo = function(name) {
				name = name || this.name;
				if (name == null) return "parent: <" + this.parent.name + ">";
				else return "attribute: {" + name + "}, parent: <" + this.parent.name + ">";
			};
			XMLAttribute.prototype.isEqualNode = function(node) {
				if (node.namespaceURI !== this.namespaceURI) return false;
				if (node.prefix !== this.prefix) return false;
				if (node.localName !== this.localName) return false;
				if (node.value !== this.value) return false;
				return true;
			};
			return XMLAttribute;
		})();
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLNamedNodeMap.js
var require_XMLNamedNodeMap = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		module.exports = (function() {
			function XMLNamedNodeMap(nodes) {
				this.nodes = nodes;
			}
			Object.defineProperty(XMLNamedNodeMap.prototype, "length", { get: function() {
				return Object.keys(this.nodes).length || 0;
			} });
			XMLNamedNodeMap.prototype.clone = function() {
				return this.nodes = null;
			};
			XMLNamedNodeMap.prototype.getNamedItem = function(name) {
				return this.nodes[name];
			};
			XMLNamedNodeMap.prototype.setNamedItem = function(node) {
				var oldNode = this.nodes[node.nodeName];
				this.nodes[node.nodeName] = node;
				return oldNode || null;
			};
			XMLNamedNodeMap.prototype.removeNamedItem = function(name) {
				var oldNode = this.nodes[name];
				delete this.nodes[name];
				return oldNode || null;
			};
			XMLNamedNodeMap.prototype.item = function(index) {
				return this.nodes[Object.keys(this.nodes)[index]] || null;
			};
			XMLNamedNodeMap.prototype.getNamedItemNS = function(namespaceURI, localName) {
				throw new Error("This DOM method is not implemented.");
			};
			XMLNamedNodeMap.prototype.setNamedItemNS = function(node) {
				throw new Error("This DOM method is not implemented.");
			};
			XMLNamedNodeMap.prototype.removeNamedItemNS = function(namespaceURI, localName) {
				throw new Error("This DOM method is not implemented.");
			};
			return XMLNamedNodeMap;
		})();
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLElement.js
var require_XMLElement = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLAttribute, XMLNamedNodeMap, XMLNode, getValue, isFunction, isObject, ref, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		ref = require_Utility(), isObject = ref.isObject, isFunction = ref.isFunction, getValue = ref.getValue;
		XMLNode = require_XMLNode();
		NodeType = require_NodeType();
		XMLAttribute = require_XMLAttribute();
		XMLNamedNodeMap = require_XMLNamedNodeMap();
		module.exports = (function(superClass) {
			extend(XMLElement, superClass);
			function XMLElement(parent, name, attributes) {
				var child, j, len, ref1;
				XMLElement.__super__.constructor.call(this, parent);
				if (name == null) throw new Error("Missing element name. " + this.debugInfo());
				this.name = this.stringify.name(name);
				this.type = NodeType.Element;
				this.attribs = {};
				this.schemaTypeInfo = null;
				if (attributes != null) this.attribute(attributes);
				if (parent.type === NodeType.Document) {
					this.isRoot = true;
					this.documentObject = parent;
					parent.rootObject = this;
					if (parent.children) {
						ref1 = parent.children;
						for (j = 0, len = ref1.length; j < len; j++) {
							child = ref1[j];
							if (child.type === NodeType.DocType) {
								child.name = this.name;
								break;
							}
						}
					}
				}
			}
			Object.defineProperty(XMLElement.prototype, "tagName", { get: function() {
				return this.name;
			} });
			Object.defineProperty(XMLElement.prototype, "namespaceURI", { get: function() {
				return "";
			} });
			Object.defineProperty(XMLElement.prototype, "prefix", { get: function() {
				return "";
			} });
			Object.defineProperty(XMLElement.prototype, "localName", { get: function() {
				return this.name;
			} });
			Object.defineProperty(XMLElement.prototype, "id", { get: function() {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			} });
			Object.defineProperty(XMLElement.prototype, "className", { get: function() {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			} });
			Object.defineProperty(XMLElement.prototype, "classList", { get: function() {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			} });
			Object.defineProperty(XMLElement.prototype, "attributes", { get: function() {
				if (!this.attributeMap || !this.attributeMap.nodes) this.attributeMap = new XMLNamedNodeMap(this.attribs);
				return this.attributeMap;
			} });
			XMLElement.prototype.clone = function() {
				var att, attName, clonedSelf = Object.create(this), ref1;
				if (clonedSelf.isRoot) clonedSelf.documentObject = null;
				clonedSelf.attribs = {};
				ref1 = this.attribs;
				for (attName in ref1) {
					if (!hasProp.call(ref1, attName)) continue;
					att = ref1[attName];
					clonedSelf.attribs[attName] = att.clone();
				}
				clonedSelf.children = [];
				this.children.forEach(function(child) {
					var clonedChild = child.clone();
					clonedChild.parent = clonedSelf;
					return clonedSelf.children.push(clonedChild);
				});
				return clonedSelf;
			};
			XMLElement.prototype.attribute = function(name, value) {
				var attName, attValue;
				if (name != null) name = getValue(name);
				if (isObject(name)) for (attName in name) {
					if (!hasProp.call(name, attName)) continue;
					attValue = name[attName];
					this.attribute(attName, attValue);
				}
				else {
					if (isFunction(value)) value = value.apply();
					if (this.options.keepNullAttributes && value == null) this.attribs[name] = new XMLAttribute(this, name, "");
					else if (value != null) this.attribs[name] = new XMLAttribute(this, name, value);
				}
				return this;
			};
			XMLElement.prototype.removeAttribute = function(name) {
				var attName, j, len;
				if (name == null) throw new Error("Missing attribute name. " + this.debugInfo());
				name = getValue(name);
				if (Array.isArray(name)) for (j = 0, len = name.length; j < len; j++) {
					attName = name[j];
					delete this.attribs[attName];
				}
				else delete this.attribs[name];
				return this;
			};
			XMLElement.prototype.toString = function(options) {
				return this.options.writer.element(this, this.options.writer.filterOptions(options));
			};
			XMLElement.prototype.att = function(name, value) {
				return this.attribute(name, value);
			};
			XMLElement.prototype.a = function(name, value) {
				return this.attribute(name, value);
			};
			XMLElement.prototype.getAttribute = function(name) {
				if (this.attribs.hasOwnProperty(name)) return this.attribs[name].value;
				else return null;
			};
			XMLElement.prototype.setAttribute = function(name, value) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.getAttributeNode = function(name) {
				if (this.attribs.hasOwnProperty(name)) return this.attribs[name];
				else return null;
			};
			XMLElement.prototype.setAttributeNode = function(newAttr) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.removeAttributeNode = function(oldAttr) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.getElementsByTagName = function(name) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.getAttributeNS = function(namespaceURI, localName) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.setAttributeNS = function(namespaceURI, qualifiedName, value) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.removeAttributeNS = function(namespaceURI, localName) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.getAttributeNodeNS = function(namespaceURI, localName) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.setAttributeNodeNS = function(newAttr) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.hasAttribute = function(name) {
				return this.attribs.hasOwnProperty(name);
			};
			XMLElement.prototype.hasAttributeNS = function(namespaceURI, localName) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.setIdAttribute = function(name, isId) {
				if (this.attribs.hasOwnProperty(name)) return this.attribs[name].isId;
				else return isId;
			};
			XMLElement.prototype.setIdAttributeNS = function(namespaceURI, localName, isId) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.setIdAttributeNode = function(idAttr, isId) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.getElementsByTagName = function(tagname) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.getElementsByClassName = function(classNames) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLElement.prototype.isEqualNode = function(node) {
				var i, j, ref1;
				if (!XMLElement.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) return false;
				if (node.namespaceURI !== this.namespaceURI) return false;
				if (node.prefix !== this.prefix) return false;
				if (node.localName !== this.localName) return false;
				if (node.attribs.length !== this.attribs.length) return false;
				for (i = j = 0, ref1 = this.attribs.length - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; i = 0 <= ref1 ? ++j : --j) if (!this.attribs[i].isEqualNode(node.attribs[i])) return false;
				return true;
			};
			return XMLElement;
		})(XMLNode);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLCharacterData.js
var require_XMLCharacterData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var XMLNode, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		XMLNode = require_XMLNode();
		module.exports = (function(superClass) {
			extend(XMLCharacterData, superClass);
			function XMLCharacterData(parent) {
				XMLCharacterData.__super__.constructor.call(this, parent);
				this.value = "";
			}
			Object.defineProperty(XMLCharacterData.prototype, "data", {
				get: function() {
					return this.value;
				},
				set: function(value) {
					return this.value = value || "";
				}
			});
			Object.defineProperty(XMLCharacterData.prototype, "length", { get: function() {
				return this.value.length;
			} });
			Object.defineProperty(XMLCharacterData.prototype, "textContent", {
				get: function() {
					return this.value;
				},
				set: function(value) {
					return this.value = value || "";
				}
			});
			XMLCharacterData.prototype.clone = function() {
				return Object.create(this);
			};
			XMLCharacterData.prototype.substringData = function(offset, count) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLCharacterData.prototype.appendData = function(arg) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLCharacterData.prototype.insertData = function(offset, arg) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLCharacterData.prototype.deleteData = function(offset, count) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLCharacterData.prototype.replaceData = function(offset, count, arg) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLCharacterData.prototype.isEqualNode = function(node) {
				if (!XMLCharacterData.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) return false;
				if (node.data !== this.data) return false;
				return true;
			};
			return XMLCharacterData;
		})(XMLNode);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLCData.js
var require_XMLCData = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLCharacterData, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		NodeType = require_NodeType();
		XMLCharacterData = require_XMLCharacterData();
		module.exports = (function(superClass) {
			extend(XMLCData, superClass);
			function XMLCData(parent, text) {
				XMLCData.__super__.constructor.call(this, parent);
				if (text == null) throw new Error("Missing CDATA text. " + this.debugInfo());
				this.name = "#cdata-section";
				this.type = NodeType.CData;
				this.value = this.stringify.cdata(text);
			}
			XMLCData.prototype.clone = function() {
				return Object.create(this);
			};
			XMLCData.prototype.toString = function(options) {
				return this.options.writer.cdata(this, this.options.writer.filterOptions(options));
			};
			return XMLCData;
		})(XMLCharacterData);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLComment.js
var require_XMLComment = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLCharacterData, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		NodeType = require_NodeType();
		XMLCharacterData = require_XMLCharacterData();
		module.exports = (function(superClass) {
			extend(XMLComment, superClass);
			function XMLComment(parent, text) {
				XMLComment.__super__.constructor.call(this, parent);
				if (text == null) throw new Error("Missing comment text. " + this.debugInfo());
				this.name = "#comment";
				this.type = NodeType.Comment;
				this.value = this.stringify.comment(text);
			}
			XMLComment.prototype.clone = function() {
				return Object.create(this);
			};
			XMLComment.prototype.toString = function(options) {
				return this.options.writer.comment(this, this.options.writer.filterOptions(options));
			};
			return XMLComment;
		})(XMLCharacterData);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLDeclaration.js
var require_XMLDeclaration = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLNode, isObject, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		isObject = require_Utility().isObject;
		XMLNode = require_XMLNode();
		NodeType = require_NodeType();
		module.exports = (function(superClass) {
			extend(XMLDeclaration, superClass);
			function XMLDeclaration(parent, version, encoding, standalone) {
				var ref;
				XMLDeclaration.__super__.constructor.call(this, parent);
				if (isObject(version)) ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
				if (!version) version = "1.0";
				this.type = NodeType.Declaration;
				this.version = this.stringify.xmlVersion(version);
				if (encoding != null) this.encoding = this.stringify.xmlEncoding(encoding);
				if (standalone != null) this.standalone = this.stringify.xmlStandalone(standalone);
			}
			XMLDeclaration.prototype.toString = function(options) {
				return this.options.writer.declaration(this, this.options.writer.filterOptions(options));
			};
			return XMLDeclaration;
		})(XMLNode);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLDTDAttList.js
var require_XMLDTDAttList = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLNode, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		XMLNode = require_XMLNode();
		NodeType = require_NodeType();
		module.exports = (function(superClass) {
			extend(XMLDTDAttList, superClass);
			function XMLDTDAttList(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
				XMLDTDAttList.__super__.constructor.call(this, parent);
				if (elementName == null) throw new Error("Missing DTD element name. " + this.debugInfo());
				if (attributeName == null) throw new Error("Missing DTD attribute name. " + this.debugInfo(elementName));
				if (!attributeType) throw new Error("Missing DTD attribute type. " + this.debugInfo(elementName));
				if (!defaultValueType) throw new Error("Missing DTD attribute default. " + this.debugInfo(elementName));
				if (defaultValueType.indexOf("#") !== 0) defaultValueType = "#" + defaultValueType;
				if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(elementName));
				if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(elementName));
				this.elementName = this.stringify.name(elementName);
				this.type = NodeType.AttributeDeclaration;
				this.attributeName = this.stringify.name(attributeName);
				this.attributeType = this.stringify.dtdAttType(attributeType);
				if (defaultValue) this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
				this.defaultValueType = defaultValueType;
			}
			XMLDTDAttList.prototype.toString = function(options) {
				return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(options));
			};
			return XMLDTDAttList;
		})(XMLNode);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLDTDEntity.js
var require_XMLDTDEntity = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLNode, isObject, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		isObject = require_Utility().isObject;
		XMLNode = require_XMLNode();
		NodeType = require_NodeType();
		module.exports = (function(superClass) {
			extend(XMLDTDEntity, superClass);
			function XMLDTDEntity(parent, pe, name, value) {
				XMLDTDEntity.__super__.constructor.call(this, parent);
				if (name == null) throw new Error("Missing DTD entity name. " + this.debugInfo(name));
				if (value == null) throw new Error("Missing DTD entity value. " + this.debugInfo(name));
				this.pe = !!pe;
				this.name = this.stringify.name(name);
				this.type = NodeType.EntityDeclaration;
				if (!isObject(value)) {
					this.value = this.stringify.dtdEntityValue(value);
					this.internal = true;
				} else {
					if (!value.pubID && !value.sysID) throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(name));
					if (value.pubID && !value.sysID) throw new Error("System identifier is required for a public external entity. " + this.debugInfo(name));
					this.internal = false;
					if (value.pubID != null) this.pubID = this.stringify.dtdPubID(value.pubID);
					if (value.sysID != null) this.sysID = this.stringify.dtdSysID(value.sysID);
					if (value.nData != null) this.nData = this.stringify.dtdNData(value.nData);
					if (this.pe && this.nData) throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(name));
				}
			}
			Object.defineProperty(XMLDTDEntity.prototype, "publicId", { get: function() {
				return this.pubID;
			} });
			Object.defineProperty(XMLDTDEntity.prototype, "systemId", { get: function() {
				return this.sysID;
			} });
			Object.defineProperty(XMLDTDEntity.prototype, "notationName", { get: function() {
				return this.nData || null;
			} });
			Object.defineProperty(XMLDTDEntity.prototype, "inputEncoding", { get: function() {
				return null;
			} });
			Object.defineProperty(XMLDTDEntity.prototype, "xmlEncoding", { get: function() {
				return null;
			} });
			Object.defineProperty(XMLDTDEntity.prototype, "xmlVersion", { get: function() {
				return null;
			} });
			XMLDTDEntity.prototype.toString = function(options) {
				return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(options));
			};
			return XMLDTDEntity;
		})(XMLNode);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLDTDElement.js
var require_XMLDTDElement = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLNode, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		XMLNode = require_XMLNode();
		NodeType = require_NodeType();
		module.exports = (function(superClass) {
			extend(XMLDTDElement, superClass);
			function XMLDTDElement(parent, name, value) {
				XMLDTDElement.__super__.constructor.call(this, parent);
				if (name == null) throw new Error("Missing DTD element name. " + this.debugInfo());
				if (!value) value = "(#PCDATA)";
				if (Array.isArray(value)) value = "(" + value.join(",") + ")";
				this.name = this.stringify.name(name);
				this.type = NodeType.ElementDeclaration;
				this.value = this.stringify.dtdElementValue(value);
			}
			XMLDTDElement.prototype.toString = function(options) {
				return this.options.writer.dtdElement(this, this.options.writer.filterOptions(options));
			};
			return XMLDTDElement;
		})(XMLNode);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLDTDNotation.js
var require_XMLDTDNotation = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLNode, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		XMLNode = require_XMLNode();
		NodeType = require_NodeType();
		module.exports = (function(superClass) {
			extend(XMLDTDNotation, superClass);
			function XMLDTDNotation(parent, name, value) {
				XMLDTDNotation.__super__.constructor.call(this, parent);
				if (name == null) throw new Error("Missing DTD notation name. " + this.debugInfo(name));
				if (!value.pubID && !value.sysID) throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(name));
				this.name = this.stringify.name(name);
				this.type = NodeType.NotationDeclaration;
				if (value.pubID != null) this.pubID = this.stringify.dtdPubID(value.pubID);
				if (value.sysID != null) this.sysID = this.stringify.dtdSysID(value.sysID);
			}
			Object.defineProperty(XMLDTDNotation.prototype, "publicId", { get: function() {
				return this.pubID;
			} });
			Object.defineProperty(XMLDTDNotation.prototype, "systemId", { get: function() {
				return this.sysID;
			} });
			XMLDTDNotation.prototype.toString = function(options) {
				return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(options));
			};
			return XMLDTDNotation;
		})(XMLNode);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLDocType.js
var require_XMLDocType = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLNamedNodeMap, XMLNode, isObject, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		isObject = require_Utility().isObject;
		XMLNode = require_XMLNode();
		NodeType = require_NodeType();
		XMLDTDAttList = require_XMLDTDAttList();
		XMLDTDEntity = require_XMLDTDEntity();
		XMLDTDElement = require_XMLDTDElement();
		XMLDTDNotation = require_XMLDTDNotation();
		XMLNamedNodeMap = require_XMLNamedNodeMap();
		module.exports = (function(superClass) {
			extend(XMLDocType, superClass);
			function XMLDocType(parent, pubID, sysID) {
				var child, i, len, ref, ref1, ref2;
				XMLDocType.__super__.constructor.call(this, parent);
				this.type = NodeType.DocType;
				if (parent.children) {
					ref = parent.children;
					for (i = 0, len = ref.length; i < len; i++) {
						child = ref[i];
						if (child.type === NodeType.Element) {
							this.name = child.name;
							break;
						}
					}
				}
				this.documentObject = parent;
				if (isObject(pubID)) ref1 = pubID, pubID = ref1.pubID, sysID = ref1.sysID;
				if (sysID == null) ref2 = [pubID, sysID], sysID = ref2[0], pubID = ref2[1];
				if (pubID != null) this.pubID = this.stringify.dtdPubID(pubID);
				if (sysID != null) this.sysID = this.stringify.dtdSysID(sysID);
			}
			Object.defineProperty(XMLDocType.prototype, "entities", { get: function() {
				var child, i, len, nodes = {}, ref = this.children;
				for (i = 0, len = ref.length; i < len; i++) {
					child = ref[i];
					if (child.type === NodeType.EntityDeclaration && !child.pe) nodes[child.name] = child;
				}
				return new XMLNamedNodeMap(nodes);
			} });
			Object.defineProperty(XMLDocType.prototype, "notations", { get: function() {
				var child, i, len, nodes = {}, ref = this.children;
				for (i = 0, len = ref.length; i < len; i++) {
					child = ref[i];
					if (child.type === NodeType.NotationDeclaration) nodes[child.name] = child;
				}
				return new XMLNamedNodeMap(nodes);
			} });
			Object.defineProperty(XMLDocType.prototype, "publicId", { get: function() {
				return this.pubID;
			} });
			Object.defineProperty(XMLDocType.prototype, "systemId", { get: function() {
				return this.sysID;
			} });
			Object.defineProperty(XMLDocType.prototype, "internalSubset", { get: function() {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			} });
			XMLDocType.prototype.element = function(name, value) {
				var child = new XMLDTDElement(this, name, value);
				this.children.push(child);
				return this;
			};
			XMLDocType.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
				var child = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
				this.children.push(child);
				return this;
			};
			XMLDocType.prototype.entity = function(name, value) {
				var child = new XMLDTDEntity(this, false, name, value);
				this.children.push(child);
				return this;
			};
			XMLDocType.prototype.pEntity = function(name, value) {
				var child = new XMLDTDEntity(this, true, name, value);
				this.children.push(child);
				return this;
			};
			XMLDocType.prototype.notation = function(name, value) {
				var child = new XMLDTDNotation(this, name, value);
				this.children.push(child);
				return this;
			};
			XMLDocType.prototype.toString = function(options) {
				return this.options.writer.docType(this, this.options.writer.filterOptions(options));
			};
			XMLDocType.prototype.ele = function(name, value) {
				return this.element(name, value);
			};
			XMLDocType.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
				return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
			};
			XMLDocType.prototype.ent = function(name, value) {
				return this.entity(name, value);
			};
			XMLDocType.prototype.pent = function(name, value) {
				return this.pEntity(name, value);
			};
			XMLDocType.prototype.not = function(name, value) {
				return this.notation(name, value);
			};
			XMLDocType.prototype.up = function() {
				return this.root() || this.documentObject;
			};
			XMLDocType.prototype.isEqualNode = function(node) {
				if (!XMLDocType.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) return false;
				if (node.name !== this.name) return false;
				if (node.publicId !== this.publicId) return false;
				if (node.systemId !== this.systemId) return false;
				return true;
			};
			return XMLDocType;
		})(XMLNode);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLRaw.js
var require_XMLRaw = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLNode, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		NodeType = require_NodeType();
		XMLNode = require_XMLNode();
		module.exports = (function(superClass) {
			extend(XMLRaw, superClass);
			function XMLRaw(parent, text) {
				XMLRaw.__super__.constructor.call(this, parent);
				if (text == null) throw new Error("Missing raw text. " + this.debugInfo());
				this.type = NodeType.Raw;
				this.value = this.stringify.raw(text);
			}
			XMLRaw.prototype.clone = function() {
				return Object.create(this);
			};
			XMLRaw.prototype.toString = function(options) {
				return this.options.writer.raw(this, this.options.writer.filterOptions(options));
			};
			return XMLRaw;
		})(XMLNode);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLText.js
var require_XMLText = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLCharacterData, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		NodeType = require_NodeType();
		XMLCharacterData = require_XMLCharacterData();
		module.exports = (function(superClass) {
			extend(XMLText, superClass);
			function XMLText(parent, text) {
				XMLText.__super__.constructor.call(this, parent);
				if (text == null) throw new Error("Missing element text. " + this.debugInfo());
				this.name = "#text";
				this.type = NodeType.Text;
				this.value = this.stringify.text(text);
			}
			Object.defineProperty(XMLText.prototype, "isElementContentWhitespace", { get: function() {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			} });
			Object.defineProperty(XMLText.prototype, "wholeText", { get: function() {
				var next, prev, str = "";
				prev = this.previousSibling;
				while (prev) {
					str = prev.data + str;
					prev = prev.previousSibling;
				}
				str += this.data;
				next = this.nextSibling;
				while (next) {
					str = str + next.data;
					next = next.nextSibling;
				}
				return str;
			} });
			XMLText.prototype.clone = function() {
				return Object.create(this);
			};
			XMLText.prototype.toString = function(options) {
				return this.options.writer.text(this, this.options.writer.filterOptions(options));
			};
			XMLText.prototype.splitText = function(offset) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLText.prototype.replaceWholeText = function(content) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			return XMLText;
		})(XMLCharacterData);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLProcessingInstruction.js
var require_XMLProcessingInstruction = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLCharacterData, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		NodeType = require_NodeType();
		XMLCharacterData = require_XMLCharacterData();
		module.exports = (function(superClass) {
			extend(XMLProcessingInstruction, superClass);
			function XMLProcessingInstruction(parent, target, value) {
				XMLProcessingInstruction.__super__.constructor.call(this, parent);
				if (target == null) throw new Error("Missing instruction target. " + this.debugInfo());
				this.type = NodeType.ProcessingInstruction;
				this.target = this.stringify.insTarget(target);
				this.name = this.target;
				if (value) this.value = this.stringify.insValue(value);
			}
			XMLProcessingInstruction.prototype.clone = function() {
				return Object.create(this);
			};
			XMLProcessingInstruction.prototype.toString = function(options) {
				return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(options));
			};
			XMLProcessingInstruction.prototype.isEqualNode = function(node) {
				if (!XMLProcessingInstruction.__super__.isEqualNode.apply(this, arguments).isEqualNode(node)) return false;
				if (node.target !== this.target) return false;
				return true;
			};
			return XMLProcessingInstruction;
		})(XMLCharacterData);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLDummy.js
var require_XMLDummy = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLNode, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		XMLNode = require_XMLNode();
		NodeType = require_NodeType();
		module.exports = (function(superClass) {
			extend(XMLDummy, superClass);
			function XMLDummy(parent) {
				XMLDummy.__super__.constructor.call(this, parent);
				this.type = NodeType.Dummy;
			}
			XMLDummy.prototype.clone = function() {
				return Object.create(this);
			};
			XMLDummy.prototype.toString = function(options) {
				return "";
			};
			return XMLDummy;
		})(XMLNode);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLNodeList.js
var require_XMLNodeList = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		module.exports = (function() {
			function XMLNodeList(nodes) {
				this.nodes = nodes;
			}
			Object.defineProperty(XMLNodeList.prototype, "length", { get: function() {
				return this.nodes.length || 0;
			} });
			XMLNodeList.prototype.clone = function() {
				return this.nodes = null;
			};
			XMLNodeList.prototype.item = function(index) {
				return this.nodes[index] || null;
			};
			return XMLNodeList;
		})();
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/DocumentPosition.js
var require_DocumentPosition = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		module.exports = {
			Disconnected: 1,
			Preceding: 2,
			Following: 4,
			Contains: 8,
			ContainedBy: 16,
			ImplementationSpecific: 32
		};
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLNode.js
var require_XMLNode = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var DocumentPosition, NodeType, XMLCData, XMLComment, XMLDeclaration, XMLDocType, XMLDummy, XMLElement, XMLNodeList, XMLProcessingInstruction, XMLRaw, XMLText, getValue, isEmpty, isFunction, isObject, ref1, hasProp = {}.hasOwnProperty;
		ref1 = require_Utility(), isObject = ref1.isObject, isFunction = ref1.isFunction, isEmpty = ref1.isEmpty, getValue = ref1.getValue;
		XMLElement = null;
		XMLCData = null;
		XMLComment = null;
		XMLDeclaration = null;
		XMLDocType = null;
		XMLRaw = null;
		XMLText = null;
		XMLProcessingInstruction = null;
		XMLDummy = null;
		NodeType = null;
		XMLNodeList = null;
		DocumentPosition = null;
		module.exports = (function() {
			function XMLNode(parent1) {
				this.parent = parent1;
				if (this.parent) {
					this.options = this.parent.options;
					this.stringify = this.parent.stringify;
				}
				this.value = null;
				this.children = [];
				this.baseURI = null;
				if (!XMLElement) {
					XMLElement = require_XMLElement();
					XMLCData = require_XMLCData();
					XMLComment = require_XMLComment();
					XMLDeclaration = require_XMLDeclaration();
					XMLDocType = require_XMLDocType();
					XMLRaw = require_XMLRaw();
					XMLText = require_XMLText();
					XMLProcessingInstruction = require_XMLProcessingInstruction();
					XMLDummy = require_XMLDummy();
					NodeType = require_NodeType();
					XMLNodeList = require_XMLNodeList();
					require_XMLNamedNodeMap();
					DocumentPosition = require_DocumentPosition();
				}
			}
			Object.defineProperty(XMLNode.prototype, "nodeName", { get: function() {
				return this.name;
			} });
			Object.defineProperty(XMLNode.prototype, "nodeType", { get: function() {
				return this.type;
			} });
			Object.defineProperty(XMLNode.prototype, "nodeValue", { get: function() {
				return this.value;
			} });
			Object.defineProperty(XMLNode.prototype, "parentNode", { get: function() {
				return this.parent;
			} });
			Object.defineProperty(XMLNode.prototype, "childNodes", { get: function() {
				if (!this.childNodeList || !this.childNodeList.nodes) this.childNodeList = new XMLNodeList(this.children);
				return this.childNodeList;
			} });
			Object.defineProperty(XMLNode.prototype, "firstChild", { get: function() {
				return this.children[0] || null;
			} });
			Object.defineProperty(XMLNode.prototype, "lastChild", { get: function() {
				return this.children[this.children.length - 1] || null;
			} });
			Object.defineProperty(XMLNode.prototype, "previousSibling", { get: function() {
				var i = this.parent.children.indexOf(this);
				return this.parent.children[i - 1] || null;
			} });
			Object.defineProperty(XMLNode.prototype, "nextSibling", { get: function() {
				var i = this.parent.children.indexOf(this);
				return this.parent.children[i + 1] || null;
			} });
			Object.defineProperty(XMLNode.prototype, "ownerDocument", { get: function() {
				return this.document() || null;
			} });
			Object.defineProperty(XMLNode.prototype, "textContent", {
				get: function() {
					var child, j, len, ref2, str;
					if (this.nodeType === NodeType.Element || this.nodeType === NodeType.DocumentFragment) {
						str = "";
						ref2 = this.children;
						for (j = 0, len = ref2.length; j < len; j++) {
							child = ref2[j];
							if (child.textContent) str += child.textContent;
						}
						return str;
					} else return null;
				},
				set: function(value) {
					throw new Error("This DOM method is not implemented." + this.debugInfo());
				}
			});
			XMLNode.prototype.setParent = function(parent) {
				var child, j, len, ref2, results;
				this.parent = parent;
				if (parent) {
					this.options = parent.options;
					this.stringify = parent.stringify;
				}
				ref2 = this.children;
				results = [];
				for (j = 0, len = ref2.length; j < len; j++) {
					child = ref2[j];
					results.push(child.setParent(this));
				}
				return results;
			};
			XMLNode.prototype.element = function(name, attributes, text) {
				var childNode, item, j, k, key, lastChild = null, len, len1, ref2, ref3, val;
				if (attributes === null && text == null) ref2 = [{}, null], attributes = ref2[0], text = ref2[1];
				if (attributes == null) attributes = {};
				attributes = getValue(attributes);
				if (!isObject(attributes)) ref3 = [attributes, text], text = ref3[0], attributes = ref3[1];
				if (name != null) name = getValue(name);
				if (Array.isArray(name)) for (j = 0, len = name.length; j < len; j++) {
					item = name[j];
					lastChild = this.element(item);
				}
				else if (isFunction(name)) lastChild = this.element(name.apply());
				else if (isObject(name)) for (key in name) {
					if (!hasProp.call(name, key)) continue;
					val = name[key];
					if (isFunction(val)) val = val.apply();
					if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
					else if (!this.options.separateArrayItems && Array.isArray(val) && isEmpty(val)) lastChild = this.dummy();
					else if (isObject(val) && isEmpty(val)) lastChild = this.element(key);
					else if (!this.options.keepNullNodes && val == null) lastChild = this.dummy();
					else if (!this.options.separateArrayItems && Array.isArray(val)) for (k = 0, len1 = val.length; k < len1; k++) {
						item = val[k];
						childNode = {};
						childNode[key] = item;
						lastChild = this.element(childNode);
					}
					else if (isObject(val)) if (!this.options.ignoreDecorators && this.stringify.convertTextKey && key.indexOf(this.stringify.convertTextKey) === 0) lastChild = this.element(val);
					else {
						lastChild = this.element(key);
						lastChild.element(val);
					}
					else lastChild = this.element(key, val);
				}
				else if (!this.options.keepNullNodes && text === null) lastChild = this.dummy();
				else if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) lastChild = this.text(text);
				else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) lastChild = this.cdata(text);
				else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) lastChild = this.comment(text);
				else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) lastChild = this.raw(text);
				else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
				else lastChild = this.node(name, attributes, text);
				if (lastChild == null) throw new Error("Could not create any elements with: " + name + ". " + this.debugInfo());
				return lastChild;
			};
			XMLNode.prototype.insertBefore = function(name, attributes, text) {
				var child, i, newChild, refChild, removed;
				if (name != null ? name.type : void 0) {
					newChild = name;
					refChild = attributes;
					newChild.setParent(this);
					if (refChild) {
						i = children.indexOf(refChild);
						removed = children.splice(i);
						children.push(newChild);
						Array.prototype.push.apply(children, removed);
					} else children.push(newChild);
					return newChild;
				} else {
					if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
					i = this.parent.children.indexOf(this);
					removed = this.parent.children.splice(i);
					child = this.parent.element(name, attributes, text);
					Array.prototype.push.apply(this.parent.children, removed);
					return child;
				}
			};
			XMLNode.prototype.insertAfter = function(name, attributes, text) {
				var child, i, removed;
				if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(name));
				i = this.parent.children.indexOf(this);
				removed = this.parent.children.splice(i + 1);
				child = this.parent.element(name, attributes, text);
				Array.prototype.push.apply(this.parent.children, removed);
				return child;
			};
			XMLNode.prototype.remove = function() {
				var i;
				if (this.isRoot) throw new Error("Cannot remove the root element. " + this.debugInfo());
				i = this.parent.children.indexOf(this);
				[].splice.apply(this.parent.children, [i, i - i + 1].concat([]));
				return this.parent;
			};
			XMLNode.prototype.node = function(name, attributes, text) {
				var child, ref2;
				if (name != null) name = getValue(name);
				attributes || (attributes = {});
				attributes = getValue(attributes);
				if (!isObject(attributes)) ref2 = [attributes, text], text = ref2[0], attributes = ref2[1];
				child = new XMLElement(this, name, attributes);
				if (text != null) child.text(text);
				this.children.push(child);
				return child;
			};
			XMLNode.prototype.text = function(value) {
				var child;
				if (isObject(value)) this.element(value);
				child = new XMLText(this, value);
				this.children.push(child);
				return this;
			};
			XMLNode.prototype.cdata = function(value) {
				var child = new XMLCData(this, value);
				this.children.push(child);
				return this;
			};
			XMLNode.prototype.comment = function(value) {
				var child = new XMLComment(this, value);
				this.children.push(child);
				return this;
			};
			XMLNode.prototype.commentBefore = function(value) {
				var i = this.parent.children.indexOf(this), removed = this.parent.children.splice(i);
				this.parent.comment(value);
				Array.prototype.push.apply(this.parent.children, removed);
				return this;
			};
			XMLNode.prototype.commentAfter = function(value) {
				var i = this.parent.children.indexOf(this), removed = this.parent.children.splice(i + 1);
				this.parent.comment(value);
				Array.prototype.push.apply(this.parent.children, removed);
				return this;
			};
			XMLNode.prototype.raw = function(value) {
				var child = new XMLRaw(this, value);
				this.children.push(child);
				return this;
			};
			XMLNode.prototype.dummy = function() {
				return new XMLDummy(this);
			};
			XMLNode.prototype.instruction = function(target, value) {
				var insTarget, insValue, instruction, j, len;
				if (target != null) target = getValue(target);
				if (value != null) value = getValue(value);
				if (Array.isArray(target)) for (j = 0, len = target.length; j < len; j++) {
					insTarget = target[j];
					this.instruction(insTarget);
				}
				else if (isObject(target)) for (insTarget in target) {
					if (!hasProp.call(target, insTarget)) continue;
					insValue = target[insTarget];
					this.instruction(insTarget, insValue);
				}
				else {
					if (isFunction(value)) value = value.apply();
					instruction = new XMLProcessingInstruction(this, target, value);
					this.children.push(instruction);
				}
				return this;
			};
			XMLNode.prototype.instructionBefore = function(target, value) {
				var i = this.parent.children.indexOf(this), removed = this.parent.children.splice(i);
				this.parent.instruction(target, value);
				Array.prototype.push.apply(this.parent.children, removed);
				return this;
			};
			XMLNode.prototype.instructionAfter = function(target, value) {
				var i = this.parent.children.indexOf(this), removed = this.parent.children.splice(i + 1);
				this.parent.instruction(target, value);
				Array.prototype.push.apply(this.parent.children, removed);
				return this;
			};
			XMLNode.prototype.declaration = function(version, encoding, standalone) {
				var doc = this.document(), xmldec = new XMLDeclaration(doc, version, encoding, standalone);
				if (doc.children.length === 0) doc.children.unshift(xmldec);
				else if (doc.children[0].type === NodeType.Declaration) doc.children[0] = xmldec;
				else doc.children.unshift(xmldec);
				return doc.root() || doc;
			};
			XMLNode.prototype.dtd = function(pubID, sysID) {
				var child, doc = this.document(), doctype = new XMLDocType(doc, pubID, sysID), i, j, k, len, len1, ref2 = doc.children, ref3;
				for (i = j = 0, len = ref2.length; j < len; i = ++j) {
					child = ref2[i];
					if (child.type === NodeType.DocType) {
						doc.children[i] = doctype;
						return doctype;
					}
				}
				ref3 = doc.children;
				for (i = k = 0, len1 = ref3.length; k < len1; i = ++k) {
					child = ref3[i];
					if (child.isRoot) {
						doc.children.splice(i, 0, doctype);
						return doctype;
					}
				}
				doc.children.push(doctype);
				return doctype;
			};
			XMLNode.prototype.up = function() {
				if (this.isRoot) throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
				return this.parent;
			};
			XMLNode.prototype.root = function() {
				var node = this;
				while (node) if (node.type === NodeType.Document) return node.rootObject;
				else if (node.isRoot) return node;
				else node = node.parent;
			};
			XMLNode.prototype.document = function() {
				var node = this;
				while (node) if (node.type === NodeType.Document) return node;
				else node = node.parent;
			};
			XMLNode.prototype.end = function(options) {
				return this.document().end(options);
			};
			XMLNode.prototype.prev = function() {
				var i = this.parent.children.indexOf(this);
				if (i < 1) throw new Error("Already at the first node. " + this.debugInfo());
				return this.parent.children[i - 1];
			};
			XMLNode.prototype.next = function() {
				var i = this.parent.children.indexOf(this);
				if (i === -1 || i === this.parent.children.length - 1) throw new Error("Already at the last node. " + this.debugInfo());
				return this.parent.children[i + 1];
			};
			XMLNode.prototype.importDocument = function(doc) {
				var clonedRoot = doc.root().clone();
				clonedRoot.parent = this;
				clonedRoot.isRoot = false;
				this.children.push(clonedRoot);
				return this;
			};
			XMLNode.prototype.debugInfo = function(name) {
				var ref2, ref3;
				name = name || this.name;
				if (name == null && !((ref2 = this.parent) != null ? ref2.name : void 0)) return "";
				else if (name == null) return "parent: <" + this.parent.name + ">";
				else if (!((ref3 = this.parent) != null ? ref3.name : void 0)) return "node: <" + name + ">";
				else return "node: <" + name + ">, parent: <" + this.parent.name + ">";
			};
			XMLNode.prototype.ele = function(name, attributes, text) {
				return this.element(name, attributes, text);
			};
			XMLNode.prototype.nod = function(name, attributes, text) {
				return this.node(name, attributes, text);
			};
			XMLNode.prototype.txt = function(value) {
				return this.text(value);
			};
			XMLNode.prototype.dat = function(value) {
				return this.cdata(value);
			};
			XMLNode.prototype.com = function(value) {
				return this.comment(value);
			};
			XMLNode.prototype.ins = function(target, value) {
				return this.instruction(target, value);
			};
			XMLNode.prototype.doc = function() {
				return this.document();
			};
			XMLNode.prototype.dec = function(version, encoding, standalone) {
				return this.declaration(version, encoding, standalone);
			};
			XMLNode.prototype.e = function(name, attributes, text) {
				return this.element(name, attributes, text);
			};
			XMLNode.prototype.n = function(name, attributes, text) {
				return this.node(name, attributes, text);
			};
			XMLNode.prototype.t = function(value) {
				return this.text(value);
			};
			XMLNode.prototype.d = function(value) {
				return this.cdata(value);
			};
			XMLNode.prototype.c = function(value) {
				return this.comment(value);
			};
			XMLNode.prototype.r = function(value) {
				return this.raw(value);
			};
			XMLNode.prototype.i = function(target, value) {
				return this.instruction(target, value);
			};
			XMLNode.prototype.u = function() {
				return this.up();
			};
			XMLNode.prototype.importXMLBuilder = function(doc) {
				return this.importDocument(doc);
			};
			XMLNode.prototype.replaceChild = function(newChild, oldChild) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLNode.prototype.removeChild = function(oldChild) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLNode.prototype.appendChild = function(newChild) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLNode.prototype.hasChildNodes = function() {
				return this.children.length !== 0;
			};
			XMLNode.prototype.cloneNode = function(deep) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLNode.prototype.normalize = function() {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLNode.prototype.isSupported = function(feature, version) {
				return true;
			};
			XMLNode.prototype.hasAttributes = function() {
				return this.attribs.length !== 0;
			};
			XMLNode.prototype.compareDocumentPosition = function(other) {
				var ref = this, res;
				if (ref === other) return 0;
				else if (this.document() !== other.document()) {
					res = DocumentPosition.Disconnected | DocumentPosition.ImplementationSpecific;
					if (Math.random() < .5) res |= DocumentPosition.Preceding;
					else res |= DocumentPosition.Following;
					return res;
				} else if (ref.isAncestor(other)) return DocumentPosition.Contains | DocumentPosition.Preceding;
				else if (ref.isDescendant(other)) return DocumentPosition.Contains | DocumentPosition.Following;
				else if (ref.isPreceding(other)) return DocumentPosition.Preceding;
				else return DocumentPosition.Following;
			};
			XMLNode.prototype.isSameNode = function(other) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLNode.prototype.lookupPrefix = function(namespaceURI) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLNode.prototype.isDefaultNamespace = function(namespaceURI) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLNode.prototype.lookupNamespaceURI = function(prefix) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLNode.prototype.isEqualNode = function(node) {
				var i, j, ref2;
				if (node.nodeType !== this.nodeType) return false;
				if (node.children.length !== this.children.length) return false;
				for (i = j = 0, ref2 = this.children.length - 1; 0 <= ref2 ? j <= ref2 : j >= ref2; i = 0 <= ref2 ? ++j : --j) if (!this.children[i].isEqualNode(node.children[i])) return false;
				return true;
			};
			XMLNode.prototype.getFeature = function(feature, version) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLNode.prototype.setUserData = function(key, data, handler) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLNode.prototype.getUserData = function(key) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLNode.prototype.contains = function(other) {
				if (!other) return false;
				return other === this || this.isDescendant(other);
			};
			XMLNode.prototype.isDescendant = function(node) {
				var child, isDescendantChild, j, len, ref2 = this.children;
				for (j = 0, len = ref2.length; j < len; j++) {
					child = ref2[j];
					if (node === child) return true;
					isDescendantChild = child.isDescendant(node);
					if (isDescendantChild) return true;
				}
				return false;
			};
			XMLNode.prototype.isAncestor = function(node) {
				return node.isDescendant(this);
			};
			XMLNode.prototype.isPreceding = function(node) {
				var nodePos = this.treePosition(node), thisPos = this.treePosition(this);
				if (nodePos === -1 || thisPos === -1) return false;
				else return nodePos < thisPos;
			};
			XMLNode.prototype.isFollowing = function(node) {
				var nodePos = this.treePosition(node), thisPos = this.treePosition(this);
				if (nodePos === -1 || thisPos === -1) return false;
				else return nodePos > thisPos;
			};
			XMLNode.prototype.treePosition = function(node) {
				var found, pos = 0;
				found = false;
				this.foreachTreeNode(this.document(), function(childNode) {
					pos++;
					if (!found && childNode === node) return found = true;
				});
				if (found) return pos;
				else return -1;
			};
			XMLNode.prototype.foreachTreeNode = function(node, func) {
				var child, j, len, ref2, res;
				node || (node = this.document());
				ref2 = node.children;
				for (j = 0, len = ref2.length; j < len; j++) {
					child = ref2[j];
					if (res = func(child)) return res;
					else {
						res = this.foreachTreeNode(child, func);
						if (res) return res;
					}
				}
			};
			return XMLNode;
		})();
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLStringifier.js
var require_XMLStringifier = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var bind = function(fn, me) {
			return function() {
				return fn.apply(me, arguments);
			};
		}, hasProp = {}.hasOwnProperty;
		module.exports = (function() {
			function XMLStringifier(options) {
				this.assertLegalName = bind(this.assertLegalName, this);
				this.assertLegalChar = bind(this.assertLegalChar, this);
				var key, ref, value;
				options || (options = {});
				this.options = options;
				if (!this.options.version) this.options.version = "1.0";
				ref = options.stringify || {};
				for (key in ref) {
					if (!hasProp.call(ref, key)) continue;
					value = ref[key];
					this[key] = value;
				}
			}
			XMLStringifier.prototype.name = function(val) {
				if (this.options.noValidation) return val;
				return this.assertLegalName("" + val || "");
			};
			XMLStringifier.prototype.text = function(val) {
				if (this.options.noValidation) return val;
				return this.assertLegalChar(this.textEscape("" + val || ""));
			};
			XMLStringifier.prototype.cdata = function(val) {
				if (this.options.noValidation) return val;
				val = "" + val || "";
				val = val.replace("]]>", "]]]]><![CDATA[>");
				return this.assertLegalChar(val);
			};
			XMLStringifier.prototype.comment = function(val) {
				if (this.options.noValidation) return val;
				val = "" + val || "";
				if (val.match(/--/)) throw new Error("Comment text cannot contain double-hypen: " + val);
				return this.assertLegalChar(val);
			};
			XMLStringifier.prototype.raw = function(val) {
				if (this.options.noValidation) return val;
				return "" + val || "";
			};
			XMLStringifier.prototype.attValue = function(val) {
				if (this.options.noValidation) return val;
				return this.assertLegalChar(this.attEscape(val = "" + val || ""));
			};
			XMLStringifier.prototype.insTarget = function(val) {
				if (this.options.noValidation) return val;
				return this.assertLegalChar("" + val || "");
			};
			XMLStringifier.prototype.insValue = function(val) {
				if (this.options.noValidation) return val;
				val = "" + val || "";
				if (val.match(/\?>/)) throw new Error("Invalid processing instruction value: " + val);
				return this.assertLegalChar(val);
			};
			XMLStringifier.prototype.xmlVersion = function(val) {
				if (this.options.noValidation) return val;
				val = "" + val || "";
				if (!val.match(/1\.[0-9]+/)) throw new Error("Invalid version number: " + val);
				return val;
			};
			XMLStringifier.prototype.xmlEncoding = function(val) {
				if (this.options.noValidation) return val;
				val = "" + val || "";
				if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) throw new Error("Invalid encoding: " + val);
				return this.assertLegalChar(val);
			};
			XMLStringifier.prototype.xmlStandalone = function(val) {
				if (this.options.noValidation) return val;
				if (val) return "yes";
				else return "no";
			};
			XMLStringifier.prototype.dtdPubID = function(val) {
				if (this.options.noValidation) return val;
				return this.assertLegalChar("" + val || "");
			};
			XMLStringifier.prototype.dtdSysID = function(val) {
				if (this.options.noValidation) return val;
				return this.assertLegalChar("" + val || "");
			};
			XMLStringifier.prototype.dtdElementValue = function(val) {
				if (this.options.noValidation) return val;
				return this.assertLegalChar("" + val || "");
			};
			XMLStringifier.prototype.dtdAttType = function(val) {
				if (this.options.noValidation) return val;
				return this.assertLegalChar("" + val || "");
			};
			XMLStringifier.prototype.dtdAttDefault = function(val) {
				if (this.options.noValidation) return val;
				return this.assertLegalChar("" + val || "");
			};
			XMLStringifier.prototype.dtdEntityValue = function(val) {
				if (this.options.noValidation) return val;
				return this.assertLegalChar("" + val || "");
			};
			XMLStringifier.prototype.dtdNData = function(val) {
				if (this.options.noValidation) return val;
				return this.assertLegalChar("" + val || "");
			};
			XMLStringifier.prototype.convertAttKey = "@";
			XMLStringifier.prototype.convertPIKey = "?";
			XMLStringifier.prototype.convertTextKey = "#text";
			XMLStringifier.prototype.convertCDataKey = "#cdata";
			XMLStringifier.prototype.convertCommentKey = "#comment";
			XMLStringifier.prototype.convertRawKey = "#raw";
			XMLStringifier.prototype.assertLegalChar = function(str) {
				var regex, res;
				if (this.options.noValidation) return str;
				regex = "";
				if (this.options.version === "1.0") {
					regex = /[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
					if (res = str.match(regex)) throw new Error("Invalid character in string: " + str + " at index " + res.index);
				} else if (this.options.version === "1.1") {
					regex = /[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
					if (res = str.match(regex)) throw new Error("Invalid character in string: " + str + " at index " + res.index);
				}
				return str;
			};
			XMLStringifier.prototype.assertLegalName = function(str) {
				var regex;
				if (this.options.noValidation) return str;
				this.assertLegalChar(str);
				regex = /^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/;
				if (!str.match(regex)) throw new Error("Invalid character in name");
				return str;
			};
			XMLStringifier.prototype.textEscape = function(str) {
				var ampregex;
				if (this.options.noValidation) return str;
				ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
				return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
			};
			XMLStringifier.prototype.attEscape = function(str) {
				var ampregex;
				if (this.options.noValidation) return str;
				ampregex = this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
				return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
			};
			return XMLStringifier;
		})();
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/WriterState.js
var require_WriterState = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		module.exports = {
			None: 0,
			OpenTag: 1,
			InsideTag: 2,
			CloseTag: 3
		};
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLWriterBase.js
var require_XMLWriterBase = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, WriterState, assign, hasProp = {}.hasOwnProperty;
		assign = require_Utility().assign;
		NodeType = require_NodeType();
		require_XMLDeclaration();
		require_XMLDocType();
		require_XMLCData();
		require_XMLComment();
		require_XMLElement();
		require_XMLRaw();
		require_XMLText();
		require_XMLProcessingInstruction();
		require_XMLDummy();
		require_XMLDTDAttList();
		require_XMLDTDElement();
		require_XMLDTDEntity();
		require_XMLDTDNotation();
		WriterState = require_WriterState();
		module.exports = (function() {
			function XMLWriterBase(options) {
				var key, ref, value;
				options || (options = {});
				this.options = options;
				ref = options.writer || {};
				for (key in ref) {
					if (!hasProp.call(ref, key)) continue;
					value = ref[key];
					this["_" + key] = this[key];
					this[key] = value;
				}
			}
			XMLWriterBase.prototype.filterOptions = function(options) {
				var filteredOptions, ref, ref1, ref2, ref3, ref4, ref5, ref6;
				options || (options = {});
				options = assign({}, this.options, options);
				filteredOptions = { writer: this };
				filteredOptions.pretty = options.pretty || false;
				filteredOptions.allowEmpty = options.allowEmpty || false;
				filteredOptions.indent = (ref = options.indent) != null ? ref : "  ";
				filteredOptions.newline = (ref1 = options.newline) != null ? ref1 : "\n";
				filteredOptions.offset = (ref2 = options.offset) != null ? ref2 : 0;
				filteredOptions.dontPrettyTextNodes = (ref3 = (ref4 = options.dontPrettyTextNodes) != null ? ref4 : options.dontprettytextnodes) != null ? ref3 : 0;
				filteredOptions.spaceBeforeSlash = (ref5 = (ref6 = options.spaceBeforeSlash) != null ? ref6 : options.spacebeforeslash) != null ? ref5 : "";
				if (filteredOptions.spaceBeforeSlash === true) filteredOptions.spaceBeforeSlash = " ";
				filteredOptions.suppressPrettyCount = 0;
				filteredOptions.user = {};
				filteredOptions.state = WriterState.None;
				return filteredOptions;
			};
			XMLWriterBase.prototype.indent = function(node, options, level) {
				var indentLevel;
				if (!options.pretty || options.suppressPrettyCount) return "";
				else if (options.pretty) {
					indentLevel = (level || 0) + options.offset + 1;
					if (indentLevel > 0) return new Array(indentLevel).join(options.indent);
				}
				return "";
			};
			XMLWriterBase.prototype.endline = function(node, options, level) {
				if (!options.pretty || options.suppressPrettyCount) return "";
				else return options.newline;
			};
			XMLWriterBase.prototype.attribute = function(att, options, level) {
				var r;
				this.openAttribute(att, options, level);
				r = " " + att.name + "=\"" + att.value + "\"";
				this.closeAttribute(att, options, level);
				return r;
			};
			XMLWriterBase.prototype.cdata = function(node, options, level) {
				var r;
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				r = this.indent(node, options, level) + "<![CDATA[";
				options.state = WriterState.InsideTag;
				r += node.value;
				options.state = WriterState.CloseTag;
				r += "]]>" + this.endline(node, options, level);
				options.state = WriterState.None;
				this.closeNode(node, options, level);
				return r;
			};
			XMLWriterBase.prototype.comment = function(node, options, level) {
				var r;
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				r = this.indent(node, options, level) + "<!-- ";
				options.state = WriterState.InsideTag;
				r += node.value;
				options.state = WriterState.CloseTag;
				r += " -->" + this.endline(node, options, level);
				options.state = WriterState.None;
				this.closeNode(node, options, level);
				return r;
			};
			XMLWriterBase.prototype.declaration = function(node, options, level) {
				var r;
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				r = this.indent(node, options, level) + "<?xml";
				options.state = WriterState.InsideTag;
				r += " version=\"" + node.version + "\"";
				if (node.encoding != null) r += " encoding=\"" + node.encoding + "\"";
				if (node.standalone != null) r += " standalone=\"" + node.standalone + "\"";
				options.state = WriterState.CloseTag;
				r += options.spaceBeforeSlash + "?>";
				r += this.endline(node, options, level);
				options.state = WriterState.None;
				this.closeNode(node, options, level);
				return r;
			};
			XMLWriterBase.prototype.docType = function(node, options, level) {
				var child, i, len, r, ref;
				level || (level = 0);
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				r = this.indent(node, options, level);
				r += "<!DOCTYPE " + node.root().name;
				if (node.pubID && node.sysID) r += " PUBLIC \"" + node.pubID + "\" \"" + node.sysID + "\"";
				else if (node.sysID) r += " SYSTEM \"" + node.sysID + "\"";
				if (node.children.length > 0) {
					r += " [";
					r += this.endline(node, options, level);
					options.state = WriterState.InsideTag;
					ref = node.children;
					for (i = 0, len = ref.length; i < len; i++) {
						child = ref[i];
						r += this.writeChildNode(child, options, level + 1);
					}
					options.state = WriterState.CloseTag;
					r += "]";
				}
				options.state = WriterState.CloseTag;
				r += options.spaceBeforeSlash + ">";
				r += this.endline(node, options, level);
				options.state = WriterState.None;
				this.closeNode(node, options, level);
				return r;
			};
			XMLWriterBase.prototype.element = function(node, options, level) {
				var att, child, childNodeCount, firstChildNode, i, j, len, len1, name, prettySuppressed, r, ref, ref1, ref2;
				level || (level = 0);
				prettySuppressed = false;
				r = "";
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				r += this.indent(node, options, level) + "<" + node.name;
				ref = node.attribs;
				for (name in ref) {
					if (!hasProp.call(ref, name)) continue;
					att = ref[name];
					r += this.attribute(att, options, level);
				}
				childNodeCount = node.children.length;
				firstChildNode = childNodeCount === 0 ? null : node.children[0];
				if (childNodeCount === 0 || node.children.every(function(e) {
					return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === "";
				})) if (options.allowEmpty) {
					r += ">";
					options.state = WriterState.CloseTag;
					r += "</" + node.name + ">" + this.endline(node, options, level);
				} else {
					options.state = WriterState.CloseTag;
					r += options.spaceBeforeSlash + "/>" + this.endline(node, options, level);
				}
				else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
					r += ">";
					options.state = WriterState.InsideTag;
					options.suppressPrettyCount++;
					prettySuppressed = true;
					r += this.writeChildNode(firstChildNode, options, level + 1);
					options.suppressPrettyCount--;
					prettySuppressed = false;
					options.state = WriterState.CloseTag;
					r += "</" + node.name + ">" + this.endline(node, options, level);
				} else {
					if (options.dontPrettyTextNodes) {
						ref1 = node.children;
						for (i = 0, len = ref1.length; i < len; i++) {
							child = ref1[i];
							if ((child.type === NodeType.Text || child.type === NodeType.Raw) && child.value != null) {
								options.suppressPrettyCount++;
								prettySuppressed = true;
								break;
							}
						}
					}
					r += ">" + this.endline(node, options, level);
					options.state = WriterState.InsideTag;
					ref2 = node.children;
					for (j = 0, len1 = ref2.length; j < len1; j++) {
						child = ref2[j];
						r += this.writeChildNode(child, options, level + 1);
					}
					options.state = WriterState.CloseTag;
					r += this.indent(node, options, level) + "</" + node.name + ">";
					if (prettySuppressed) options.suppressPrettyCount--;
					r += this.endline(node, options, level);
					options.state = WriterState.None;
				}
				this.closeNode(node, options, level);
				return r;
			};
			XMLWriterBase.prototype.writeChildNode = function(node, options, level) {
				switch (node.type) {
					case NodeType.CData: return this.cdata(node, options, level);
					case NodeType.Comment: return this.comment(node, options, level);
					case NodeType.Element: return this.element(node, options, level);
					case NodeType.Raw: return this.raw(node, options, level);
					case NodeType.Text: return this.text(node, options, level);
					case NodeType.ProcessingInstruction: return this.processingInstruction(node, options, level);
					case NodeType.Dummy: return "";
					case NodeType.Declaration: return this.declaration(node, options, level);
					case NodeType.DocType: return this.docType(node, options, level);
					case NodeType.AttributeDeclaration: return this.dtdAttList(node, options, level);
					case NodeType.ElementDeclaration: return this.dtdElement(node, options, level);
					case NodeType.EntityDeclaration: return this.dtdEntity(node, options, level);
					case NodeType.NotationDeclaration: return this.dtdNotation(node, options, level);
					default: throw new Error("Unknown XML node type: " + node.constructor.name);
				}
			};
			XMLWriterBase.prototype.processingInstruction = function(node, options, level) {
				var r;
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				r = this.indent(node, options, level) + "<?";
				options.state = WriterState.InsideTag;
				r += node.target;
				if (node.value) r += " " + node.value;
				options.state = WriterState.CloseTag;
				r += options.spaceBeforeSlash + "?>";
				r += this.endline(node, options, level);
				options.state = WriterState.None;
				this.closeNode(node, options, level);
				return r;
			};
			XMLWriterBase.prototype.raw = function(node, options, level) {
				var r;
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				r = this.indent(node, options, level);
				options.state = WriterState.InsideTag;
				r += node.value;
				options.state = WriterState.CloseTag;
				r += this.endline(node, options, level);
				options.state = WriterState.None;
				this.closeNode(node, options, level);
				return r;
			};
			XMLWriterBase.prototype.text = function(node, options, level) {
				var r;
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				r = this.indent(node, options, level);
				options.state = WriterState.InsideTag;
				r += node.value;
				options.state = WriterState.CloseTag;
				r += this.endline(node, options, level);
				options.state = WriterState.None;
				this.closeNode(node, options, level);
				return r;
			};
			XMLWriterBase.prototype.dtdAttList = function(node, options, level) {
				var r;
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				r = this.indent(node, options, level) + "<!ATTLIST";
				options.state = WriterState.InsideTag;
				r += " " + node.elementName + " " + node.attributeName + " " + node.attributeType;
				if (node.defaultValueType !== "#DEFAULT") r += " " + node.defaultValueType;
				if (node.defaultValue) r += " \"" + node.defaultValue + "\"";
				options.state = WriterState.CloseTag;
				r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
				options.state = WriterState.None;
				this.closeNode(node, options, level);
				return r;
			};
			XMLWriterBase.prototype.dtdElement = function(node, options, level) {
				var r;
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				r = this.indent(node, options, level) + "<!ELEMENT";
				options.state = WriterState.InsideTag;
				r += " " + node.name + " " + node.value;
				options.state = WriterState.CloseTag;
				r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
				options.state = WriterState.None;
				this.closeNode(node, options, level);
				return r;
			};
			XMLWriterBase.prototype.dtdEntity = function(node, options, level) {
				var r;
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				r = this.indent(node, options, level) + "<!ENTITY";
				options.state = WriterState.InsideTag;
				if (node.pe) r += " %";
				r += " " + node.name;
				if (node.value) r += " \"" + node.value + "\"";
				else {
					if (node.pubID && node.sysID) r += " PUBLIC \"" + node.pubID + "\" \"" + node.sysID + "\"";
					else if (node.sysID) r += " SYSTEM \"" + node.sysID + "\"";
					if (node.nData) r += " NDATA " + node.nData;
				}
				options.state = WriterState.CloseTag;
				r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
				options.state = WriterState.None;
				this.closeNode(node, options, level);
				return r;
			};
			XMLWriterBase.prototype.dtdNotation = function(node, options, level) {
				var r;
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				r = this.indent(node, options, level) + "<!NOTATION";
				options.state = WriterState.InsideTag;
				r += " " + node.name;
				if (node.pubID && node.sysID) r += " PUBLIC \"" + node.pubID + "\" \"" + node.sysID + "\"";
				else if (node.pubID) r += " PUBLIC \"" + node.pubID + "\"";
				else if (node.sysID) r += " SYSTEM \"" + node.sysID + "\"";
				options.state = WriterState.CloseTag;
				r += options.spaceBeforeSlash + ">" + this.endline(node, options, level);
				options.state = WriterState.None;
				this.closeNode(node, options, level);
				return r;
			};
			XMLWriterBase.prototype.openNode = function(node, options, level) {};
			XMLWriterBase.prototype.closeNode = function(node, options, level) {};
			XMLWriterBase.prototype.openAttribute = function(att, options, level) {};
			XMLWriterBase.prototype.closeAttribute = function(att, options, level) {};
			return XMLWriterBase;
		})();
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLStringWriter.js
var require_XMLStringWriter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var XMLWriterBase, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		XMLWriterBase = require_XMLWriterBase();
		module.exports = (function(superClass) {
			extend(XMLStringWriter, superClass);
			function XMLStringWriter(options) {
				XMLStringWriter.__super__.constructor.call(this, options);
			}
			XMLStringWriter.prototype.document = function(doc, options) {
				var child, i, len, r, ref;
				options = this.filterOptions(options);
				r = "";
				ref = doc.children;
				for (i = 0, len = ref.length; i < len; i++) {
					child = ref[i];
					r += this.writeChildNode(child, options, 0);
				}
				if (options.pretty && r.slice(-options.newline.length) === options.newline) r = r.slice(0, -options.newline.length);
				return r;
			};
			return XMLStringWriter;
		})(XMLWriterBase);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLDocument.js
var require_XMLDocument = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, XMLDOMConfiguration, XMLDOMImplementation, XMLNode, XMLStringWriter, XMLStringifier, isPlainObject, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		isPlainObject = require_Utility().isPlainObject;
		XMLDOMImplementation = require_XMLDOMImplementation();
		XMLDOMConfiguration = require_XMLDOMConfiguration();
		XMLNode = require_XMLNode();
		NodeType = require_NodeType();
		XMLStringifier = require_XMLStringifier();
		XMLStringWriter = require_XMLStringWriter();
		module.exports = (function(superClass) {
			extend(XMLDocument, superClass);
			function XMLDocument(options) {
				XMLDocument.__super__.constructor.call(this, null);
				this.name = "#document";
				this.type = NodeType.Document;
				this.documentURI = null;
				this.domConfig = new XMLDOMConfiguration();
				options || (options = {});
				if (!options.writer) options.writer = new XMLStringWriter();
				this.options = options;
				this.stringify = new XMLStringifier(options);
			}
			Object.defineProperty(XMLDocument.prototype, "implementation", { value: new XMLDOMImplementation() });
			Object.defineProperty(XMLDocument.prototype, "doctype", { get: function() {
				var child, i, len, ref = this.children;
				for (i = 0, len = ref.length; i < len; i++) {
					child = ref[i];
					if (child.type === NodeType.DocType) return child;
				}
				return null;
			} });
			Object.defineProperty(XMLDocument.prototype, "documentElement", { get: function() {
				return this.rootObject || null;
			} });
			Object.defineProperty(XMLDocument.prototype, "inputEncoding", { get: function() {
				return null;
			} });
			Object.defineProperty(XMLDocument.prototype, "strictErrorChecking", { get: function() {
				return false;
			} });
			Object.defineProperty(XMLDocument.prototype, "xmlEncoding", { get: function() {
				if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) return this.children[0].encoding;
				else return null;
			} });
			Object.defineProperty(XMLDocument.prototype, "xmlStandalone", { get: function() {
				if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) return this.children[0].standalone === "yes";
				else return false;
			} });
			Object.defineProperty(XMLDocument.prototype, "xmlVersion", { get: function() {
				if (this.children.length !== 0 && this.children[0].type === NodeType.Declaration) return this.children[0].version;
				else return "1.0";
			} });
			Object.defineProperty(XMLDocument.prototype, "URL", { get: function() {
				return this.documentURI;
			} });
			Object.defineProperty(XMLDocument.prototype, "origin", { get: function() {
				return null;
			} });
			Object.defineProperty(XMLDocument.prototype, "compatMode", { get: function() {
				return null;
			} });
			Object.defineProperty(XMLDocument.prototype, "characterSet", { get: function() {
				return null;
			} });
			Object.defineProperty(XMLDocument.prototype, "contentType", { get: function() {
				return null;
			} });
			XMLDocument.prototype.end = function(writer) {
				var writerOptions = {};
				if (!writer) writer = this.options.writer;
				else if (isPlainObject(writer)) {
					writerOptions = writer;
					writer = this.options.writer;
				}
				return writer.document(this, writer.filterOptions(writerOptions));
			};
			XMLDocument.prototype.toString = function(options) {
				return this.options.writer.document(this, this.options.writer.filterOptions(options));
			};
			XMLDocument.prototype.createElement = function(tagName) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.createDocumentFragment = function() {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.createTextNode = function(data) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.createComment = function(data) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.createCDATASection = function(data) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.createProcessingInstruction = function(target, data) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.createAttribute = function(name) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.createEntityReference = function(name) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.getElementsByTagName = function(tagname) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.importNode = function(importedNode, deep) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.createElementNS = function(namespaceURI, qualifiedName) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.createAttributeNS = function(namespaceURI, qualifiedName) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.getElementsByTagNameNS = function(namespaceURI, localName) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.getElementById = function(elementId) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.adoptNode = function(source) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.normalizeDocument = function() {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.renameNode = function(node, namespaceURI, qualifiedName) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.getElementsByClassName = function(classNames) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.createEvent = function(eventInterface) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.createRange = function() {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.createNodeIterator = function(root, whatToShow, filter) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			XMLDocument.prototype.createTreeWalker = function(root, whatToShow, filter) {
				throw new Error("This DOM method is not implemented." + this.debugInfo());
			};
			return XMLDocument;
		})(XMLNode);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLDocumentCB.js
var require_XMLDocumentCB = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, WriterState, XMLAttribute, XMLCData, XMLComment, XMLDTDAttList, XMLDTDElement, XMLDTDEntity, XMLDTDNotation, XMLDeclaration, XMLDocType, XMLDocument, XMLElement, XMLProcessingInstruction, XMLRaw, XMLStringWriter, XMLStringifier, XMLText, getValue, isFunction, isObject, isPlainObject, ref, hasProp = {}.hasOwnProperty;
		ref = require_Utility(), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject, getValue = ref.getValue;
		NodeType = require_NodeType();
		XMLDocument = require_XMLDocument();
		XMLElement = require_XMLElement();
		XMLCData = require_XMLCData();
		XMLComment = require_XMLComment();
		XMLRaw = require_XMLRaw();
		XMLText = require_XMLText();
		XMLProcessingInstruction = require_XMLProcessingInstruction();
		XMLDeclaration = require_XMLDeclaration();
		XMLDocType = require_XMLDocType();
		XMLDTDAttList = require_XMLDTDAttList();
		XMLDTDEntity = require_XMLDTDEntity();
		XMLDTDElement = require_XMLDTDElement();
		XMLDTDNotation = require_XMLDTDNotation();
		XMLAttribute = require_XMLAttribute();
		XMLStringifier = require_XMLStringifier();
		XMLStringWriter = require_XMLStringWriter();
		WriterState = require_WriterState();
		module.exports = (function() {
			function XMLDocumentCB(options, onData, onEnd) {
				var writerOptions;
				this.name = "?xml";
				this.type = NodeType.Document;
				options || (options = {});
				writerOptions = {};
				if (!options.writer) options.writer = new XMLStringWriter();
				else if (isPlainObject(options.writer)) {
					writerOptions = options.writer;
					options.writer = new XMLStringWriter();
				}
				this.options = options;
				this.writer = options.writer;
				this.writerOptions = this.writer.filterOptions(writerOptions);
				this.stringify = new XMLStringifier(options);
				this.onDataCallback = onData || function() {};
				this.onEndCallback = onEnd || function() {};
				this.currentNode = null;
				this.currentLevel = -1;
				this.openTags = {};
				this.documentStarted = false;
				this.documentCompleted = false;
				this.root = null;
			}
			XMLDocumentCB.prototype.createChildNode = function(node) {
				var att, attName, attributes, child, i, len, ref1, ref2;
				switch (node.type) {
					case NodeType.CData:
						this.cdata(node.value);
						break;
					case NodeType.Comment:
						this.comment(node.value);
						break;
					case NodeType.Element:
						attributes = {};
						ref1 = node.attribs;
						for (attName in ref1) {
							if (!hasProp.call(ref1, attName)) continue;
							att = ref1[attName];
							attributes[attName] = att.value;
						}
						this.node(node.name, attributes);
						break;
					case NodeType.Dummy:
						this.dummy();
						break;
					case NodeType.Raw:
						this.raw(node.value);
						break;
					case NodeType.Text:
						this.text(node.value);
						break;
					case NodeType.ProcessingInstruction:
						this.instruction(node.target, node.value);
						break;
					default: throw new Error("This XML node type is not supported in a JS object: " + node.constructor.name);
				}
				ref2 = node.children;
				for (i = 0, len = ref2.length; i < len; i++) {
					child = ref2[i];
					this.createChildNode(child);
					if (child.type === NodeType.Element) this.up();
				}
				return this;
			};
			XMLDocumentCB.prototype.dummy = function() {
				return this;
			};
			XMLDocumentCB.prototype.node = function(name, attributes, text) {
				var ref1;
				if (name == null) throw new Error("Missing node name.");
				if (this.root && this.currentLevel === -1) throw new Error("Document can only have one root node. " + this.debugInfo(name));
				this.openCurrent();
				name = getValue(name);
				if (attributes == null) attributes = {};
				attributes = getValue(attributes);
				if (!isObject(attributes)) ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
				this.currentNode = new XMLElement(this, name, attributes);
				this.currentNode.children = false;
				this.currentLevel++;
				this.openTags[this.currentLevel] = this.currentNode;
				if (text != null) this.text(text);
				return this;
			};
			XMLDocumentCB.prototype.element = function(name, attributes, text) {
				var child, i, len, oldValidationFlag, ref1, root;
				if (this.currentNode && this.currentNode.type === NodeType.DocType) this.dtdElement.apply(this, arguments);
				else if (Array.isArray(name) || isObject(name) || isFunction(name)) {
					oldValidationFlag = this.options.noValidation;
					this.options.noValidation = true;
					root = new XMLDocument(this.options).element("TEMP_ROOT");
					root.element(name);
					this.options.noValidation = oldValidationFlag;
					ref1 = root.children;
					for (i = 0, len = ref1.length; i < len; i++) {
						child = ref1[i];
						this.createChildNode(child);
						if (child.type === NodeType.Element) this.up();
					}
				} else this.node(name, attributes, text);
				return this;
			};
			XMLDocumentCB.prototype.attribute = function(name, value) {
				var attName, attValue;
				if (!this.currentNode || this.currentNode.children) throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(name));
				if (name != null) name = getValue(name);
				if (isObject(name)) for (attName in name) {
					if (!hasProp.call(name, attName)) continue;
					attValue = name[attName];
					this.attribute(attName, attValue);
				}
				else {
					if (isFunction(value)) value = value.apply();
					if (this.options.keepNullAttributes && value == null) this.currentNode.attribs[name] = new XMLAttribute(this, name, "");
					else if (value != null) this.currentNode.attribs[name] = new XMLAttribute(this, name, value);
				}
				return this;
			};
			XMLDocumentCB.prototype.text = function(value) {
				var node;
				this.openCurrent();
				node = new XMLText(this, value);
				this.onData(this.writer.text(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
				return this;
			};
			XMLDocumentCB.prototype.cdata = function(value) {
				var node;
				this.openCurrent();
				node = new XMLCData(this, value);
				this.onData(this.writer.cdata(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
				return this;
			};
			XMLDocumentCB.prototype.comment = function(value) {
				var node;
				this.openCurrent();
				node = new XMLComment(this, value);
				this.onData(this.writer.comment(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
				return this;
			};
			XMLDocumentCB.prototype.raw = function(value) {
				var node;
				this.openCurrent();
				node = new XMLRaw(this, value);
				this.onData(this.writer.raw(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
				return this;
			};
			XMLDocumentCB.prototype.instruction = function(target, value) {
				var i, insTarget, insValue, len, node;
				this.openCurrent();
				if (target != null) target = getValue(target);
				if (value != null) value = getValue(value);
				if (Array.isArray(target)) for (i = 0, len = target.length; i < len; i++) {
					insTarget = target[i];
					this.instruction(insTarget);
				}
				else if (isObject(target)) for (insTarget in target) {
					if (!hasProp.call(target, insTarget)) continue;
					insValue = target[insTarget];
					this.instruction(insTarget, insValue);
				}
				else {
					if (isFunction(value)) value = value.apply();
					node = new XMLProcessingInstruction(this, target, value);
					this.onData(this.writer.processingInstruction(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
				}
				return this;
			};
			XMLDocumentCB.prototype.declaration = function(version, encoding, standalone) {
				var node;
				this.openCurrent();
				if (this.documentStarted) throw new Error("declaration() must be the first node.");
				node = new XMLDeclaration(this, version, encoding, standalone);
				this.onData(this.writer.declaration(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
				return this;
			};
			XMLDocumentCB.prototype.doctype = function(root, pubID, sysID) {
				this.openCurrent();
				if (root == null) throw new Error("Missing root node name.");
				if (this.root) throw new Error("dtd() must come before the root node.");
				this.currentNode = new XMLDocType(this, pubID, sysID);
				this.currentNode.rootNodeName = root;
				this.currentNode.children = false;
				this.currentLevel++;
				this.openTags[this.currentLevel] = this.currentNode;
				return this;
			};
			XMLDocumentCB.prototype.dtdElement = function(name, value) {
				var node;
				this.openCurrent();
				node = new XMLDTDElement(this, name, value);
				this.onData(this.writer.dtdElement(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
				return this;
			};
			XMLDocumentCB.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
				var node;
				this.openCurrent();
				node = new XMLDTDAttList(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
				this.onData(this.writer.dtdAttList(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
				return this;
			};
			XMLDocumentCB.prototype.entity = function(name, value) {
				var node;
				this.openCurrent();
				node = new XMLDTDEntity(this, false, name, value);
				this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
				return this;
			};
			XMLDocumentCB.prototype.pEntity = function(name, value) {
				var node;
				this.openCurrent();
				node = new XMLDTDEntity(this, true, name, value);
				this.onData(this.writer.dtdEntity(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
				return this;
			};
			XMLDocumentCB.prototype.notation = function(name, value) {
				var node;
				this.openCurrent();
				node = new XMLDTDNotation(this, name, value);
				this.onData(this.writer.dtdNotation(node, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
				return this;
			};
			XMLDocumentCB.prototype.up = function() {
				if (this.currentLevel < 0) throw new Error("The document node has no parent.");
				if (this.currentNode) {
					if (this.currentNode.children) this.closeNode(this.currentNode);
					else this.openNode(this.currentNode);
					this.currentNode = null;
				} else this.closeNode(this.openTags[this.currentLevel]);
				delete this.openTags[this.currentLevel];
				this.currentLevel--;
				return this;
			};
			XMLDocumentCB.prototype.end = function() {
				while (this.currentLevel >= 0) this.up();
				return this.onEnd();
			};
			XMLDocumentCB.prototype.openCurrent = function() {
				if (this.currentNode) {
					this.currentNode.children = true;
					return this.openNode(this.currentNode);
				}
			};
			XMLDocumentCB.prototype.openNode = function(node) {
				var att, chunk, name, ref1;
				if (!node.isOpen) {
					if (!this.root && this.currentLevel === 0 && node.type === NodeType.Element) this.root = node;
					chunk = "";
					if (node.type === NodeType.Element) {
						this.writerOptions.state = WriterState.OpenTag;
						chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<" + node.name;
						ref1 = node.attribs;
						for (name in ref1) {
							if (!hasProp.call(ref1, name)) continue;
							att = ref1[name];
							chunk += this.writer.attribute(att, this.writerOptions, this.currentLevel);
						}
						chunk += (node.children ? ">" : "/>") + this.writer.endline(node, this.writerOptions, this.currentLevel);
						this.writerOptions.state = WriterState.InsideTag;
					} else {
						this.writerOptions.state = WriterState.OpenTag;
						chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + node.rootNodeName;
						if (node.pubID && node.sysID) chunk += " PUBLIC \"" + node.pubID + "\" \"" + node.sysID + "\"";
						else if (node.sysID) chunk += " SYSTEM \"" + node.sysID + "\"";
						if (node.children) {
							chunk += " [";
							this.writerOptions.state = WriterState.InsideTag;
						} else {
							this.writerOptions.state = WriterState.CloseTag;
							chunk += ">";
						}
						chunk += this.writer.endline(node, this.writerOptions, this.currentLevel);
					}
					this.onData(chunk, this.currentLevel);
					return node.isOpen = true;
				}
			};
			XMLDocumentCB.prototype.closeNode = function(node) {
				var chunk;
				if (!node.isClosed) {
					chunk = "";
					this.writerOptions.state = WriterState.CloseTag;
					if (node.type === NodeType.Element) chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "</" + node.name + ">" + this.writer.endline(node, this.writerOptions, this.currentLevel);
					else chunk = this.writer.indent(node, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(node, this.writerOptions, this.currentLevel);
					this.writerOptions.state = WriterState.None;
					this.onData(chunk, this.currentLevel);
					return node.isClosed = true;
				}
			};
			XMLDocumentCB.prototype.onData = function(chunk, level) {
				this.documentStarted = true;
				return this.onDataCallback(chunk, level + 1);
			};
			XMLDocumentCB.prototype.onEnd = function() {
				this.documentCompleted = true;
				return this.onEndCallback();
			};
			XMLDocumentCB.prototype.debugInfo = function(name) {
				if (name == null) return "";
				else return "node: <" + name + ">";
			};
			XMLDocumentCB.prototype.ele = function() {
				return this.element.apply(this, arguments);
			};
			XMLDocumentCB.prototype.nod = function(name, attributes, text) {
				return this.node(name, attributes, text);
			};
			XMLDocumentCB.prototype.txt = function(value) {
				return this.text(value);
			};
			XMLDocumentCB.prototype.dat = function(value) {
				return this.cdata(value);
			};
			XMLDocumentCB.prototype.com = function(value) {
				return this.comment(value);
			};
			XMLDocumentCB.prototype.ins = function(target, value) {
				return this.instruction(target, value);
			};
			XMLDocumentCB.prototype.dec = function(version, encoding, standalone) {
				return this.declaration(version, encoding, standalone);
			};
			XMLDocumentCB.prototype.dtd = function(root, pubID, sysID) {
				return this.doctype(root, pubID, sysID);
			};
			XMLDocumentCB.prototype.e = function(name, attributes, text) {
				return this.element(name, attributes, text);
			};
			XMLDocumentCB.prototype.n = function(name, attributes, text) {
				return this.node(name, attributes, text);
			};
			XMLDocumentCB.prototype.t = function(value) {
				return this.text(value);
			};
			XMLDocumentCB.prototype.d = function(value) {
				return this.cdata(value);
			};
			XMLDocumentCB.prototype.c = function(value) {
				return this.comment(value);
			};
			XMLDocumentCB.prototype.r = function(value) {
				return this.raw(value);
			};
			XMLDocumentCB.prototype.i = function(target, value) {
				return this.instruction(target, value);
			};
			XMLDocumentCB.prototype.att = function() {
				if (this.currentNode && this.currentNode.type === NodeType.DocType) return this.attList.apply(this, arguments);
				else return this.attribute.apply(this, arguments);
			};
			XMLDocumentCB.prototype.a = function() {
				if (this.currentNode && this.currentNode.type === NodeType.DocType) return this.attList.apply(this, arguments);
				else return this.attribute.apply(this, arguments);
			};
			XMLDocumentCB.prototype.ent = function(name, value) {
				return this.entity(name, value);
			};
			XMLDocumentCB.prototype.pent = function(name, value) {
				return this.pEntity(name, value);
			};
			XMLDocumentCB.prototype.not = function(name, value) {
				return this.notation(name, value);
			};
			return XMLDocumentCB;
		})();
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/XMLStreamWriter.js
var require_XMLStreamWriter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, WriterState, XMLWriterBase, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		NodeType = require_NodeType();
		XMLWriterBase = require_XMLWriterBase();
		WriterState = require_WriterState();
		module.exports = (function(superClass) {
			extend(XMLStreamWriter, superClass);
			function XMLStreamWriter(stream, options) {
				this.stream = stream;
				XMLStreamWriter.__super__.constructor.call(this, options);
			}
			XMLStreamWriter.prototype.endline = function(node, options, level) {
				if (node.isLastRootNode && options.state === WriterState.CloseTag) return "";
				else return XMLStreamWriter.__super__.endline.call(this, node, options, level);
			};
			XMLStreamWriter.prototype.document = function(doc, options) {
				var child, i, j, k, len, len1, ref = doc.children, ref1, results;
				for (i = j = 0, len = ref.length; j < len; i = ++j) {
					child = ref[i];
					child.isLastRootNode = i === doc.children.length - 1;
				}
				options = this.filterOptions(options);
				ref1 = doc.children;
				results = [];
				for (k = 0, len1 = ref1.length; k < len1; k++) {
					child = ref1[k];
					results.push(this.writeChildNode(child, options, 0));
				}
				return results;
			};
			XMLStreamWriter.prototype.attribute = function(att, options, level) {
				return this.stream.write(XMLStreamWriter.__super__.attribute.call(this, att, options, level));
			};
			XMLStreamWriter.prototype.cdata = function(node, options, level) {
				return this.stream.write(XMLStreamWriter.__super__.cdata.call(this, node, options, level));
			};
			XMLStreamWriter.prototype.comment = function(node, options, level) {
				return this.stream.write(XMLStreamWriter.__super__.comment.call(this, node, options, level));
			};
			XMLStreamWriter.prototype.declaration = function(node, options, level) {
				return this.stream.write(XMLStreamWriter.__super__.declaration.call(this, node, options, level));
			};
			XMLStreamWriter.prototype.docType = function(node, options, level) {
				var child, j, len, ref;
				level || (level = 0);
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				this.stream.write(this.indent(node, options, level));
				this.stream.write("<!DOCTYPE " + node.root().name);
				if (node.pubID && node.sysID) this.stream.write(" PUBLIC \"" + node.pubID + "\" \"" + node.sysID + "\"");
				else if (node.sysID) this.stream.write(" SYSTEM \"" + node.sysID + "\"");
				if (node.children.length > 0) {
					this.stream.write(" [");
					this.stream.write(this.endline(node, options, level));
					options.state = WriterState.InsideTag;
					ref = node.children;
					for (j = 0, len = ref.length; j < len; j++) {
						child = ref[j];
						this.writeChildNode(child, options, level + 1);
					}
					options.state = WriterState.CloseTag;
					this.stream.write("]");
				}
				options.state = WriterState.CloseTag;
				this.stream.write(options.spaceBeforeSlash + ">");
				this.stream.write(this.endline(node, options, level));
				options.state = WriterState.None;
				return this.closeNode(node, options, level);
			};
			XMLStreamWriter.prototype.element = function(node, options, level) {
				var att, child, childNodeCount, firstChildNode, j, len, name, ref, ref1;
				level || (level = 0);
				this.openNode(node, options, level);
				options.state = WriterState.OpenTag;
				this.stream.write(this.indent(node, options, level) + "<" + node.name);
				ref = node.attribs;
				for (name in ref) {
					if (!hasProp.call(ref, name)) continue;
					att = ref[name];
					this.attribute(att, options, level);
				}
				childNodeCount = node.children.length;
				firstChildNode = childNodeCount === 0 ? null : node.children[0];
				if (childNodeCount === 0 || node.children.every(function(e) {
					return (e.type === NodeType.Text || e.type === NodeType.Raw) && e.value === "";
				})) if (options.allowEmpty) {
					this.stream.write(">");
					options.state = WriterState.CloseTag;
					this.stream.write("</" + node.name + ">");
				} else {
					options.state = WriterState.CloseTag;
					this.stream.write(options.spaceBeforeSlash + "/>");
				}
				else if (options.pretty && childNodeCount === 1 && (firstChildNode.type === NodeType.Text || firstChildNode.type === NodeType.Raw) && firstChildNode.value != null) {
					this.stream.write(">");
					options.state = WriterState.InsideTag;
					options.suppressPrettyCount++;
					this.writeChildNode(firstChildNode, options, level + 1);
					options.suppressPrettyCount--;
					options.state = WriterState.CloseTag;
					this.stream.write("</" + node.name + ">");
				} else {
					this.stream.write(">" + this.endline(node, options, level));
					options.state = WriterState.InsideTag;
					ref1 = node.children;
					for (j = 0, len = ref1.length; j < len; j++) {
						child = ref1[j];
						this.writeChildNode(child, options, level + 1);
					}
					options.state = WriterState.CloseTag;
					this.stream.write(this.indent(node, options, level) + "</" + node.name + ">");
				}
				this.stream.write(this.endline(node, options, level));
				options.state = WriterState.None;
				return this.closeNode(node, options, level);
			};
			XMLStreamWriter.prototype.processingInstruction = function(node, options, level) {
				return this.stream.write(XMLStreamWriter.__super__.processingInstruction.call(this, node, options, level));
			};
			XMLStreamWriter.prototype.raw = function(node, options, level) {
				return this.stream.write(XMLStreamWriter.__super__.raw.call(this, node, options, level));
			};
			XMLStreamWriter.prototype.text = function(node, options, level) {
				return this.stream.write(XMLStreamWriter.__super__.text.call(this, node, options, level));
			};
			XMLStreamWriter.prototype.dtdAttList = function(node, options, level) {
				return this.stream.write(XMLStreamWriter.__super__.dtdAttList.call(this, node, options, level));
			};
			XMLStreamWriter.prototype.dtdElement = function(node, options, level) {
				return this.stream.write(XMLStreamWriter.__super__.dtdElement.call(this, node, options, level));
			};
			XMLStreamWriter.prototype.dtdEntity = function(node, options, level) {
				return this.stream.write(XMLStreamWriter.__super__.dtdEntity.call(this, node, options, level));
			};
			XMLStreamWriter.prototype.dtdNotation = function(node, options, level) {
				return this.stream.write(XMLStreamWriter.__super__.dtdNotation.call(this, node, options, level));
			};
			return XMLStreamWriter;
		})(XMLWriterBase);
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xmlbuilder/lib/index.js
var require_lib$1 = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function() {
		var NodeType, WriterState, XMLDOMImplementation, XMLDocument, XMLDocumentCB, XMLStreamWriter, XMLStringWriter, assign, isFunction, ref = require_Utility();
		assign = ref.assign, isFunction = ref.isFunction;
		XMLDOMImplementation = require_XMLDOMImplementation();
		XMLDocument = require_XMLDocument();
		XMLDocumentCB = require_XMLDocumentCB();
		XMLStringWriter = require_XMLStringWriter();
		XMLStreamWriter = require_XMLStreamWriter();
		NodeType = require_NodeType();
		WriterState = require_WriterState();
		module.exports.create = function(name, xmldec, doctype, options) {
			var doc, root;
			if (name == null) throw new Error("Root element needs a name.");
			options = assign({}, xmldec, doctype, options);
			doc = new XMLDocument(options);
			root = doc.element(name);
			if (!options.headless) {
				doc.declaration(options);
				if (options.pubID != null || options.sysID != null) doc.dtd(options);
			}
			return root;
		};
		module.exports.begin = function(options, onData, onEnd) {
			var ref1;
			if (isFunction(options)) {
				ref1 = [options, onData], onData = ref1[0], onEnd = ref1[1];
				options = {};
			}
			if (onData) return new XMLDocumentCB(options, onData, onEnd);
			else return new XMLDocument(options);
		};
		module.exports.stringWriter = function(options) {
			return new XMLStringWriter(options);
		};
		module.exports.streamWriter = function(stream, options) {
			return new XMLStreamWriter(stream, options);
		};
		module.exports.implementation = new XMLDOMImplementation();
		module.exports.nodeType = NodeType;
		module.exports.writerState = WriterState;
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xml2js/lib/builder.js
var require_builder = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		"use strict";
		var builder, defaults, escapeCDATA, requiresCDATA, wrapCDATA, hasProp = {}.hasOwnProperty;
		builder = require_lib$1();
		defaults = require_defaults().defaults;
		requiresCDATA = function(entry) {
			return typeof entry === "string" && (entry.indexOf("&") >= 0 || entry.indexOf(">") >= 0 || entry.indexOf("<") >= 0);
		};
		wrapCDATA = function(entry) {
			return "<![CDATA[" + escapeCDATA(entry) + "]]>";
		};
		escapeCDATA = function(entry) {
			return entry.replace("]]>", "]]]]><![CDATA[>");
		};
		exports.Builder = (function() {
			function Builder(opts) {
				var key, ref, value;
				this.options = {};
				ref = defaults["0.2"];
				for (key in ref) {
					if (!hasProp.call(ref, key)) continue;
					value = ref[key];
					this.options[key] = value;
				}
				for (key in opts) {
					if (!hasProp.call(opts, key)) continue;
					value = opts[key];
					this.options[key] = value;
				}
			}
			Builder.prototype.buildObject = function(rootObj) {
				var attrkey = this.options.attrkey, charkey = this.options.charkey, render, rootElement, rootName;
				if (Object.keys(rootObj).length === 1 && this.options.rootName === defaults["0.2"].rootName) {
					rootName = Object.keys(rootObj)[0];
					rootObj = rootObj[rootName];
				} else rootName = this.options.rootName;
				render = (function(_this) {
					return function(element, obj) {
						var attr, child, entry, index, key, value;
						if (typeof obj !== "object") if (_this.options.cdata && requiresCDATA(obj)) element.raw(wrapCDATA(obj));
						else element.txt(obj);
						else if (Array.isArray(obj)) for (index in obj) {
							if (!hasProp.call(obj, index)) continue;
							child = obj[index];
							for (key in child) {
								entry = child[key];
								element = render(element.ele(key), entry).up();
							}
						}
						else for (key in obj) {
							if (!hasProp.call(obj, key)) continue;
							child = obj[key];
							if (key === attrkey) {
								if (typeof child === "object") for (attr in child) {
									value = child[attr];
									element = element.att(attr, value);
								}
							} else if (key === charkey) if (_this.options.cdata && requiresCDATA(child)) element = element.raw(wrapCDATA(child));
							else element = element.txt(child);
							else if (Array.isArray(child)) for (index in child) {
								if (!hasProp.call(child, index)) continue;
								entry = child[index];
								if (typeof entry === "string") if (_this.options.cdata && requiresCDATA(entry)) element = element.ele(key).raw(wrapCDATA(entry)).up();
								else element = element.ele(key, entry).up();
								else element = render(element.ele(key), entry).up();
							}
							else if (typeof child === "object") element = render(element.ele(key), child).up();
							else if (typeof child === "string" && _this.options.cdata && requiresCDATA(child)) element = element.ele(key).raw(wrapCDATA(child)).up();
							else {
								if (child == null) child = "";
								element = element.ele(key, child.toString()).up();
							}
						}
						return element;
					};
				})(this);
				rootElement = builder.create(rootName, this.options.xmldec, this.options.doctype, {
					headless: this.options.headless,
					allowSurrogateChars: this.options.allowSurrogateChars
				});
				return render(rootElement, rootObj).end(this.options.renderOpts);
			};
			return Builder;
		})();
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/sax/lib/sax.js
var require_sax = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function(sax) {
		sax.parser = function(strict, opt) {
			return new SAXParser(strict, opt);
		};
		sax.SAXParser = SAXParser;
		sax.SAXStream = SAXStream;
		sax.createStream = createStream;
		sax.MAX_BUFFER_LENGTH = 64 * 1024;
		var buffers = [
			"comment",
			"sgmlDecl",
			"textNode",
			"tagName",
			"doctype",
			"procInstName",
			"procInstBody",
			"entity",
			"attribName",
			"attribValue",
			"cdata",
			"script"
		];
		sax.EVENTS = [
			"text",
			"processinginstruction",
			"sgmldeclaration",
			"doctype",
			"comment",
			"opentagstart",
			"attribute",
			"opentag",
			"closetag",
			"opencdata",
			"cdata",
			"closecdata",
			"error",
			"end",
			"ready",
			"script",
			"opennamespace",
			"closenamespace"
		];
		function SAXParser(strict, opt) {
			if (!(this instanceof SAXParser)) return new SAXParser(strict, opt);
			var parser = this;
			clearBuffers(parser);
			parser.q = parser.c = "";
			parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH;
			parser.encoding = null;
			parser.opt = opt || {};
			parser.opt.lowercase = parser.opt.lowercase || parser.opt.lowercasetags;
			parser.looseCase = parser.opt.lowercase ? "toLowerCase" : "toUpperCase";
			parser.opt.maxEntityCount = parser.opt.maxEntityCount || 512;
			parser.opt.maxEntityDepth = parser.opt.maxEntityDepth || 4;
			parser.entityCount = parser.entityDepth = 0;
			parser.tags = [];
			parser.closed = parser.closedRoot = parser.sawRoot = false;
			parser.tag = parser.error = null;
			parser.strict = !!strict;
			parser.noscript = !!(strict || parser.opt.noscript);
			parser.state = S.BEGIN;
			parser.strictEntities = parser.opt.strictEntities;
			parser.ENTITIES = parser.strictEntities ? Object.create(sax.XML_ENTITIES) : Object.create(sax.ENTITIES);
			parser.attribList = [];
			if (parser.opt.xmlns) parser.ns = Object.create(rootNS);
			if (parser.opt.unquotedAttributeValues === void 0) parser.opt.unquotedAttributeValues = !strict;
			parser.trackPosition = parser.opt.position !== false;
			if (parser.trackPosition) parser.position = parser.line = parser.column = 0;
			emit(parser, "onready");
		}
		if (!Object.create) Object.create = function(o) {
			function F() {}
			F.prototype = o;
			return new F();
		};
		if (!Object.keys) Object.keys = function(o) {
			var a = [];
			for (var i in o) if (o.hasOwnProperty(i)) a.push(i);
			return a;
		};
		function checkBufferLength(parser) {
			var maxAllowed = Math.max(sax.MAX_BUFFER_LENGTH, 10);
			var maxActual = 0;
			for (var i = 0, l = buffers.length; i < l; i++) {
				var len = parser[buffers[i]].length;
				if (len > maxAllowed) switch (buffers[i]) {
					case "textNode":
						closeText(parser);
						break;
					case "cdata":
						emitNode(parser, "oncdata", parser.cdata);
						parser.cdata = "";
						break;
					case "script":
						emitNode(parser, "onscript", parser.script);
						parser.script = "";
						break;
					default: error(parser, "Max buffer length exceeded: " + buffers[i]);
				}
				maxActual = Math.max(maxActual, len);
			}
			parser.bufferCheckPosition = sax.MAX_BUFFER_LENGTH - maxActual + parser.position;
		}
		function clearBuffers(parser) {
			for (var i = 0, l = buffers.length; i < l; i++) parser[buffers[i]] = "";
		}
		function flushBuffers(parser) {
			closeText(parser);
			if (parser.cdata !== "") {
				emitNode(parser, "oncdata", parser.cdata);
				parser.cdata = "";
			}
			if (parser.script !== "") {
				emitNode(parser, "onscript", parser.script);
				parser.script = "";
			}
		}
		SAXParser.prototype = {
			end: function() {
				end(this);
			},
			write,
			resume: function() {
				this.error = null;
				return this;
			},
			close: function() {
				return this.write(null);
			},
			flush: function() {
				flushBuffers(this);
			}
		};
		var Stream;
		try {
			Stream = require("stream").Stream;
		} catch (ex) {
			Stream = function() {};
		}
		if (!Stream) Stream = function() {};
		var streamWraps = sax.EVENTS.filter(function(ev) {
			return ev !== "error" && ev !== "end";
		});
		function createStream(strict, opt) {
			return new SAXStream(strict, opt);
		}
		function determineBufferEncoding(data, isEnd) {
			if (data.length >= 2) {
				if (data[0] === 255 && data[1] === 254) return "utf-16le";
				if (data[0] === 254 && data[1] === 255) return "utf-16be";
			}
			if (data.length >= 3 && data[0] === 239 && data[1] === 187 && data[2] === 191) return "utf8";
			if (data.length >= 4) {
				if (data[0] === 60 && data[1] === 0 && data[2] === 63 && data[3] === 0) return "utf-16le";
				if (data[0] === 0 && data[1] === 60 && data[2] === 0 && data[3] === 63) return "utf-16be";
				return "utf8";
			}
			return isEnd ? "utf8" : null;
		}
		function SAXStream(strict, opt) {
			if (!(this instanceof SAXStream)) return new SAXStream(strict, opt);
			Stream.apply(this);
			this._parser = new SAXParser(strict, opt);
			this.writable = true;
			this.readable = true;
			var me = this;
			this._parser.onend = function() {
				me.emit("end");
			};
			this._parser.onerror = function(er) {
				me.emit("error", er);
				me._parser.error = null;
			};
			this._decoder = null;
			this._decoderBuffer = null;
			streamWraps.forEach(function(ev) {
				Object.defineProperty(me, "on" + ev, {
					get: function() {
						return me._parser["on" + ev];
					},
					set: function(h) {
						if (!h) {
							me.removeAllListeners(ev);
							me._parser["on" + ev] = h;
							return h;
						}
						me.on(ev, h);
					},
					enumerable: true,
					configurable: false
				});
			});
		}
		SAXStream.prototype = Object.create(Stream.prototype, { constructor: { value: SAXStream } });
		SAXStream.prototype._decodeBuffer = function(data, isEnd) {
			if (this._decoderBuffer) {
				data = Buffer.concat([this._decoderBuffer, data]);
				this._decoderBuffer = null;
			}
			if (!this._decoder) {
				var encoding = determineBufferEncoding(data, isEnd);
				if (!encoding) {
					this._decoderBuffer = data;
					return "";
				}
				this._parser.encoding = encoding;
				this._decoder = new TextDecoder(encoding);
			}
			return this._decoder.decode(data, { stream: !isEnd });
		};
		SAXStream.prototype.write = function(data) {
			if (typeof Buffer === "function" && typeof Buffer.isBuffer === "function" && Buffer.isBuffer(data)) data = this._decodeBuffer(data, false);
			else if (this._decoderBuffer) {
				var remaining = this._decodeBuffer(Buffer.alloc(0), true);
				if (remaining) {
					this._parser.write(remaining);
					this.emit("data", remaining);
				}
			}
			this._parser.write(data.toString());
			this.emit("data", data);
			return true;
		};
		SAXStream.prototype.end = function(chunk) {
			if (chunk && chunk.length) this.write(chunk);
			if (this._decoderBuffer) {
				var finalChunk = this._decodeBuffer(Buffer.alloc(0), true);
				if (finalChunk) {
					this._parser.write(finalChunk);
					this.emit("data", finalChunk);
				}
			} else if (this._decoder) {
				var remaining = this._decoder.decode();
				if (remaining) {
					this._parser.write(remaining);
					this.emit("data", remaining);
				}
			}
			this._parser.end();
			return true;
		};
		SAXStream.prototype.on = function(ev, handler) {
			var me = this;
			if (!me._parser["on" + ev] && streamWraps.indexOf(ev) !== -1) me._parser["on" + ev] = function() {
				var args = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
				args.splice(0, 0, ev);
				me.emit.apply(me, args);
			};
			return Stream.prototype.on.call(me, ev, handler);
		};
		var CDATA = "[CDATA[";
		var DOCTYPE = "DOCTYPE";
		var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
		var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
		var rootNS = {
			xml: XML_NAMESPACE,
			xmlns: XMLNS_NAMESPACE
		};
		var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
		var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
		var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
		var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
		function isWhitespace(c) {
			return c === " " || c === "\n" || c === "\r" || c === "	";
		}
		function isQuote(c) {
			return c === "\"" || c === "'";
		}
		function isAttribEnd(c) {
			return c === ">" || isWhitespace(c);
		}
		function isMatch(regex, c) {
			return regex.test(c);
		}
		function notMatch(regex, c) {
			return !isMatch(regex, c);
		}
		var S = 0;
		sax.STATE = {
			BEGIN: S++,
			BEGIN_WHITESPACE: S++,
			TEXT: S++,
			TEXT_ENTITY: S++,
			OPEN_WAKA: S++,
			SGML_DECL: S++,
			SGML_DECL_QUOTED: S++,
			DOCTYPE: S++,
			DOCTYPE_QUOTED: S++,
			DOCTYPE_DTD: S++,
			DOCTYPE_DTD_QUOTED: S++,
			COMMENT_STARTING: S++,
			COMMENT: S++,
			COMMENT_ENDING: S++,
			COMMENT_ENDED: S++,
			CDATA: S++,
			CDATA_ENDING: S++,
			CDATA_ENDING_2: S++,
			PROC_INST: S++,
			PROC_INST_BODY: S++,
			PROC_INST_ENDING: S++,
			OPEN_TAG: S++,
			OPEN_TAG_SLASH: S++,
			ATTRIB: S++,
			ATTRIB_NAME: S++,
			ATTRIB_NAME_SAW_WHITE: S++,
			ATTRIB_VALUE: S++,
			ATTRIB_VALUE_QUOTED: S++,
			ATTRIB_VALUE_CLOSED: S++,
			ATTRIB_VALUE_UNQUOTED: S++,
			ATTRIB_VALUE_ENTITY_Q: S++,
			ATTRIB_VALUE_ENTITY_U: S++,
			CLOSE_TAG: S++,
			CLOSE_TAG_SAW_WHITE: S++,
			SCRIPT: S++,
			SCRIPT_ENDING: S++
		};
		sax.XML_ENTITIES = {
			amp: "&",
			gt: ">",
			lt: "<",
			quot: "\"",
			apos: "'"
		};
		sax.ENTITIES = {
			amp: "&",
			gt: ">",
			lt: "<",
			quot: "\"",
			apos: "'",
			AElig: 198,
			Aacute: 193,
			Acirc: 194,
			Agrave: 192,
			Aring: 197,
			Atilde: 195,
			Auml: 196,
			Ccedil: 199,
			ETH: 208,
			Eacute: 201,
			Ecirc: 202,
			Egrave: 200,
			Euml: 203,
			Iacute: 205,
			Icirc: 206,
			Igrave: 204,
			Iuml: 207,
			Ntilde: 209,
			Oacute: 211,
			Ocirc: 212,
			Ograve: 210,
			Oslash: 216,
			Otilde: 213,
			Ouml: 214,
			THORN: 222,
			Uacute: 218,
			Ucirc: 219,
			Ugrave: 217,
			Uuml: 220,
			Yacute: 221,
			aacute: 225,
			acirc: 226,
			aelig: 230,
			agrave: 224,
			aring: 229,
			atilde: 227,
			auml: 228,
			ccedil: 231,
			eacute: 233,
			ecirc: 234,
			egrave: 232,
			eth: 240,
			euml: 235,
			iacute: 237,
			icirc: 238,
			igrave: 236,
			iuml: 239,
			ntilde: 241,
			oacute: 243,
			ocirc: 244,
			ograve: 242,
			oslash: 248,
			otilde: 245,
			ouml: 246,
			szlig: 223,
			thorn: 254,
			uacute: 250,
			ucirc: 251,
			ugrave: 249,
			uuml: 252,
			yacute: 253,
			yuml: 255,
			copy: 169,
			reg: 174,
			nbsp: 160,
			iexcl: 161,
			cent: 162,
			pound: 163,
			curren: 164,
			yen: 165,
			brvbar: 166,
			sect: 167,
			uml: 168,
			ordf: 170,
			laquo: 171,
			not: 172,
			shy: 173,
			macr: 175,
			deg: 176,
			plusmn: 177,
			sup1: 185,
			sup2: 178,
			sup3: 179,
			acute: 180,
			micro: 181,
			para: 182,
			middot: 183,
			cedil: 184,
			ordm: 186,
			raquo: 187,
			frac14: 188,
			frac12: 189,
			frac34: 190,
			iquest: 191,
			times: 215,
			divide: 247,
			OElig: 338,
			oelig: 339,
			Scaron: 352,
			scaron: 353,
			Yuml: 376,
			fnof: 402,
			circ: 710,
			tilde: 732,
			Alpha: 913,
			Beta: 914,
			Gamma: 915,
			Delta: 916,
			Epsilon: 917,
			Zeta: 918,
			Eta: 919,
			Theta: 920,
			Iota: 921,
			Kappa: 922,
			Lambda: 923,
			Mu: 924,
			Nu: 925,
			Xi: 926,
			Omicron: 927,
			Pi: 928,
			Rho: 929,
			Sigma: 931,
			Tau: 932,
			Upsilon: 933,
			Phi: 934,
			Chi: 935,
			Psi: 936,
			Omega: 937,
			alpha: 945,
			beta: 946,
			gamma: 947,
			delta: 948,
			epsilon: 949,
			zeta: 950,
			eta: 951,
			theta: 952,
			iota: 953,
			kappa: 954,
			lambda: 955,
			mu: 956,
			nu: 957,
			xi: 958,
			omicron: 959,
			pi: 960,
			rho: 961,
			sigmaf: 962,
			sigma: 963,
			tau: 964,
			upsilon: 965,
			phi: 966,
			chi: 967,
			psi: 968,
			omega: 969,
			thetasym: 977,
			upsih: 978,
			piv: 982,
			ensp: 8194,
			emsp: 8195,
			thinsp: 8201,
			zwnj: 8204,
			zwj: 8205,
			lrm: 8206,
			rlm: 8207,
			ndash: 8211,
			mdash: 8212,
			lsquo: 8216,
			rsquo: 8217,
			sbquo: 8218,
			ldquo: 8220,
			rdquo: 8221,
			bdquo: 8222,
			dagger: 8224,
			Dagger: 8225,
			bull: 8226,
			hellip: 8230,
			permil: 8240,
			prime: 8242,
			Prime: 8243,
			lsaquo: 8249,
			rsaquo: 8250,
			oline: 8254,
			frasl: 8260,
			euro: 8364,
			image: 8465,
			weierp: 8472,
			real: 8476,
			trade: 8482,
			alefsym: 8501,
			larr: 8592,
			uarr: 8593,
			rarr: 8594,
			darr: 8595,
			harr: 8596,
			crarr: 8629,
			lArr: 8656,
			uArr: 8657,
			rArr: 8658,
			dArr: 8659,
			hArr: 8660,
			forall: 8704,
			part: 8706,
			exist: 8707,
			empty: 8709,
			nabla: 8711,
			isin: 8712,
			notin: 8713,
			ni: 8715,
			prod: 8719,
			sum: 8721,
			minus: 8722,
			lowast: 8727,
			radic: 8730,
			prop: 8733,
			infin: 8734,
			ang: 8736,
			and: 8743,
			or: 8744,
			cap: 8745,
			cup: 8746,
			int: 8747,
			there4: 8756,
			sim: 8764,
			cong: 8773,
			asymp: 8776,
			ne: 8800,
			equiv: 8801,
			le: 8804,
			ge: 8805,
			sub: 8834,
			sup: 8835,
			nsub: 8836,
			sube: 8838,
			supe: 8839,
			oplus: 8853,
			otimes: 8855,
			perp: 8869,
			sdot: 8901,
			lceil: 8968,
			rceil: 8969,
			lfloor: 8970,
			rfloor: 8971,
			lang: 9001,
			rang: 9002,
			loz: 9674,
			spades: 9824,
			clubs: 9827,
			hearts: 9829,
			diams: 9830
		};
		Object.keys(sax.ENTITIES).forEach(function(key) {
			var e = sax.ENTITIES[key];
			var s = typeof e === "number" ? String.fromCharCode(e) : e;
			sax.ENTITIES[key] = s;
		});
		for (var s in sax.STATE) sax.STATE[sax.STATE[s]] = s;
		S = sax.STATE;
		function emit(parser, event, data) {
			parser[event] && parser[event](data);
		}
		function getDeclaredEncoding(body) {
			var match = body && body.match(/(?:^|\s)encoding\s*=\s*(['"])([^'"]+)\1/i);
			return match ? match[2] : null;
		}
		function normalizeEncodingName(encoding) {
			if (!encoding) return null;
			return encoding.toLowerCase().replace(/[^a-z0-9]/g, "");
		}
		function encodingsMatch(detectedEncoding, declaredEncoding) {
			const detected = normalizeEncodingName(detectedEncoding);
			const declared = normalizeEncodingName(declaredEncoding);
			if (!detected || !declared) return true;
			if (declared === "utf16") return detected === "utf16le" || detected === "utf16be";
			return detected === declared;
		}
		function validateXmlDeclarationEncoding(parser, data) {
			if (!parser.strict || !parser.encoding || !data || data.name !== "xml") return;
			var declaredEncoding = getDeclaredEncoding(data.body);
			if (declaredEncoding && !encodingsMatch(parser.encoding, declaredEncoding)) strictFail(parser, "XML declaration encoding " + declaredEncoding + " does not match detected stream encoding " + parser.encoding.toUpperCase());
		}
		function emitNode(parser, nodeType, data) {
			if (parser.textNode) closeText(parser);
			emit(parser, nodeType, data);
		}
		function closeText(parser) {
			parser.textNode = textopts(parser.opt, parser.textNode);
			if (parser.textNode) emit(parser, "ontext", parser.textNode);
			parser.textNode = "";
		}
		function textopts(opt, text) {
			if (opt.trim) text = text.trim();
			if (opt.normalize) text = text.replace(/\s+/g, " ");
			return text;
		}
		function error(parser, er) {
			closeText(parser);
			if (parser.trackPosition) er += "\nLine: " + parser.line + "\nColumn: " + parser.column + "\nChar: " + parser.c;
			er = new Error(er);
			parser.error = er;
			emit(parser, "onerror", er);
			return parser;
		}
		function end(parser) {
			if (parser.sawRoot && !parser.closedRoot) strictFail(parser, "Unclosed root tag");
			if (parser.state !== S.BEGIN && parser.state !== S.BEGIN_WHITESPACE && parser.state !== S.TEXT) error(parser, "Unexpected end");
			closeText(parser);
			parser.c = "";
			parser.closed = true;
			emit(parser, "onend");
			SAXParser.call(parser, parser.strict, parser.opt);
			return parser;
		}
		function strictFail(parser, message) {
			if (typeof parser !== "object" || !(parser instanceof SAXParser)) throw new Error("bad call to strictFail");
			if (parser.strict) error(parser, message);
		}
		function newTag(parser) {
			if (!parser.strict) parser.tagName = parser.tagName[parser.looseCase]();
			var parent = parser.tags[parser.tags.length - 1] || parser;
			var tag = parser.tag = {
				name: parser.tagName,
				attributes: {}
			};
			if (parser.opt.xmlns) tag.ns = parent.ns;
			parser.attribList.length = 0;
			emitNode(parser, "onopentagstart", tag);
		}
		function qname(name, attribute) {
			var qualName = name.indexOf(":") < 0 ? ["", name] : name.split(":");
			var prefix = qualName[0];
			var local = qualName[1];
			if (attribute && name === "xmlns") {
				prefix = "xmlns";
				local = "";
			}
			return {
				prefix,
				local
			};
		}
		function attrib(parser) {
			if (!parser.strict) parser.attribName = parser.attribName[parser.looseCase]();
			if (parser.attribList.indexOf(parser.attribName) !== -1 || parser.tag.attributes.hasOwnProperty(parser.attribName)) {
				parser.attribName = parser.attribValue = "";
				return;
			}
			if (parser.opt.xmlns) {
				var qn = qname(parser.attribName, true);
				var prefix = qn.prefix;
				var local = qn.local;
				if (prefix === "xmlns") if (local === "xml" && parser.attribValue !== XML_NAMESPACE) strictFail(parser, "xml: prefix must be bound to " + XML_NAMESPACE + "\nActual: " + parser.attribValue);
				else if (local === "xmlns" && parser.attribValue !== XMLNS_NAMESPACE) strictFail(parser, "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\nActual: " + parser.attribValue);
				else {
					var tag = parser.tag;
					var parent = parser.tags[parser.tags.length - 1] || parser;
					if (tag.ns === parent.ns) tag.ns = Object.create(parent.ns);
					tag.ns[local] = parser.attribValue;
				}
				parser.attribList.push([parser.attribName, parser.attribValue]);
			} else {
				parser.tag.attributes[parser.attribName] = parser.attribValue;
				emitNode(parser, "onattribute", {
					name: parser.attribName,
					value: parser.attribValue
				});
			}
			parser.attribName = parser.attribValue = "";
		}
		function openTag(parser, selfClosing) {
			if (parser.opt.xmlns) {
				var tag = parser.tag;
				var qn = qname(parser.tagName);
				tag.prefix = qn.prefix;
				tag.local = qn.local;
				tag.uri = tag.ns[qn.prefix] || "";
				if (tag.prefix && !tag.uri) {
					strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(parser.tagName));
					tag.uri = qn.prefix;
				}
				var parent = parser.tags[parser.tags.length - 1] || parser;
				if (tag.ns && parent.ns !== tag.ns) Object.keys(tag.ns).forEach(function(p) {
					emitNode(parser, "onopennamespace", {
						prefix: p,
						uri: tag.ns[p]
					});
				});
				for (var i = 0, l = parser.attribList.length; i < l; i++) {
					var nv = parser.attribList[i];
					var name = nv[0];
					var value = nv[1];
					var qualName = qname(name, true);
					var prefix = qualName.prefix;
					var local = qualName.local;
					var uri = prefix === "" ? "" : tag.ns[prefix] || "";
					var a = {
						name,
						value,
						prefix,
						local,
						uri
					};
					if (prefix && prefix !== "xmlns" && !uri) {
						strictFail(parser, "Unbound namespace prefix: " + JSON.stringify(prefix));
						a.uri = prefix;
					}
					parser.tag.attributes[name] = a;
					emitNode(parser, "onattribute", a);
				}
				parser.attribList.length = 0;
			}
			parser.tag.isSelfClosing = !!selfClosing;
			parser.sawRoot = true;
			parser.tags.push(parser.tag);
			emitNode(parser, "onopentag", parser.tag);
			if (!selfClosing) {
				if (!parser.noscript && parser.tagName.toLowerCase() === "script") parser.state = S.SCRIPT;
				else parser.state = S.TEXT;
				parser.tag = null;
				parser.tagName = "";
			}
			parser.attribName = parser.attribValue = "";
			parser.attribList.length = 0;
		}
		function closeTag(parser) {
			if (!parser.tagName) {
				strictFail(parser, "Weird empty close tag.");
				parser.textNode += "</>";
				parser.state = S.TEXT;
				return;
			}
			if (parser.script) {
				if (parser.tagName !== "script") {
					parser.script += "</" + parser.tagName + ">";
					parser.tagName = "";
					parser.state = S.SCRIPT;
					return;
				}
				emitNode(parser, "onscript", parser.script);
				parser.script = "";
			}
			var t = parser.tags.length;
			var tagName = parser.tagName;
			if (!parser.strict) tagName = tagName[parser.looseCase]();
			var closeTo = tagName;
			while (t--) if (parser.tags[t].name !== closeTo) strictFail(parser, "Unexpected close tag");
			else break;
			if (t < 0) {
				strictFail(parser, "Unmatched closing tag: " + parser.tagName);
				parser.textNode += "</" + parser.tagName + ">";
				parser.state = S.TEXT;
				return;
			}
			parser.tagName = tagName;
			var s = parser.tags.length;
			while (s-- > t) {
				var tag = parser.tag = parser.tags.pop();
				parser.tagName = parser.tag.name;
				emitNode(parser, "onclosetag", parser.tagName);
				var x = {};
				for (var i in tag.ns) x[i] = tag.ns[i];
				var parent = parser.tags[parser.tags.length - 1] || parser;
				if (parser.opt.xmlns && tag.ns !== parent.ns) Object.keys(tag.ns).forEach(function(p) {
					var n = tag.ns[p];
					emitNode(parser, "onclosenamespace", {
						prefix: p,
						uri: n
					});
				});
			}
			if (t === 0) parser.closedRoot = true;
			parser.tagName = parser.attribValue = parser.attribName = "";
			parser.attribList.length = 0;
			parser.state = S.TEXT;
		}
		function parseEntity(parser) {
			var entity = parser.entity;
			var entityLC = entity.toLowerCase();
			var num;
			var numStr = "";
			if (parser.ENTITIES[entity]) return parser.ENTITIES[entity];
			if (parser.ENTITIES[entityLC]) return parser.ENTITIES[entityLC];
			entity = entityLC;
			if (entity.charAt(0) === "#") if (entity.charAt(1) === "x") {
				entity = entity.slice(2);
				num = parseInt(entity, 16);
				numStr = num.toString(16);
			} else {
				entity = entity.slice(1);
				num = parseInt(entity, 10);
				numStr = num.toString(10);
			}
			entity = entity.replace(/^0+/, "");
			if (isNaN(num) || numStr.toLowerCase() !== entity || num < 0 || num > 1114111) {
				strictFail(parser, "Invalid character entity");
				return "&" + parser.entity + ";";
			}
			return String.fromCodePoint(num);
		}
		function beginWhiteSpace(parser, c) {
			if (c === "<") {
				parser.state = S.OPEN_WAKA;
				parser.startTagPosition = parser.position;
			} else if (!isWhitespace(c)) {
				strictFail(parser, "Non-whitespace before first tag.");
				parser.textNode = c;
				parser.state = S.TEXT;
			}
		}
		function charAt(chunk, i) {
			var result = "";
			if (i < chunk.length) result = chunk.charAt(i);
			return result;
		}
		function write(chunk) {
			var parser = this;
			if (this.error) throw this.error;
			if (parser.closed) return error(parser, "Cannot write after close. Assign an onready handler.");
			if (chunk === null) return end(parser);
			if (typeof chunk === "object") chunk = chunk.toString();
			var i = 0;
			var c = "";
			while (true) {
				c = charAt(chunk, i++);
				parser.c = c;
				if (!c) break;
				if (parser.trackPosition) {
					parser.position++;
					if (c === "\n") {
						parser.line++;
						parser.column = 0;
					} else parser.column++;
				}
				switch (parser.state) {
					case S.BEGIN:
						parser.state = S.BEGIN_WHITESPACE;
						if (c === "﻿") continue;
						beginWhiteSpace(parser, c);
						continue;
					case S.BEGIN_WHITESPACE:
						beginWhiteSpace(parser, c);
						continue;
					case S.TEXT:
						if (parser.sawRoot && !parser.closedRoot) {
							var starti = i - 1;
							while (c && c !== "<" && c !== "&") {
								c = charAt(chunk, i++);
								if (c && parser.trackPosition) {
									parser.position++;
									if (c === "\n") {
										parser.line++;
										parser.column = 0;
									} else parser.column++;
								}
							}
							parser.textNode += chunk.substring(starti, i - 1);
						}
						if (c === "<" && !(parser.sawRoot && parser.closedRoot && !parser.strict)) {
							parser.state = S.OPEN_WAKA;
							parser.startTagPosition = parser.position;
						} else {
							if (!isWhitespace(c) && (!parser.sawRoot || parser.closedRoot)) strictFail(parser, "Text data outside of root node.");
							if (c === "&") parser.state = S.TEXT_ENTITY;
							else parser.textNode += c;
						}
						continue;
					case S.SCRIPT:
						if (c === "<") parser.state = S.SCRIPT_ENDING;
						else parser.script += c;
						continue;
					case S.SCRIPT_ENDING:
						if (c === "/") parser.state = S.CLOSE_TAG;
						else {
							parser.script += "<" + c;
							parser.state = S.SCRIPT;
						}
						continue;
					case S.OPEN_WAKA:
						if (c === "!") {
							parser.state = S.SGML_DECL;
							parser.sgmlDecl = "";
						} else if (isWhitespace(c)) {} else if (isMatch(nameStart, c)) {
							parser.state = S.OPEN_TAG;
							parser.tagName = c;
						} else if (c === "/") {
							parser.state = S.CLOSE_TAG;
							parser.tagName = "";
						} else if (c === "?") {
							parser.state = S.PROC_INST;
							parser.procInstName = parser.procInstBody = "";
						} else {
							strictFail(parser, "Unencoded <");
							if (parser.startTagPosition + 1 < parser.position) {
								var pad = parser.position - parser.startTagPosition;
								c = new Array(pad).join(" ") + c;
							}
							parser.textNode += "<" + c;
							parser.state = S.TEXT;
						}
						continue;
					case S.SGML_DECL:
						if (parser.sgmlDecl + c === "--") {
							parser.state = S.COMMENT;
							parser.comment = "";
							parser.sgmlDecl = "";
							continue;
						}
						if (parser.doctype && parser.doctype !== true && parser.sgmlDecl) {
							parser.state = S.DOCTYPE_DTD;
							parser.doctype += "<!" + parser.sgmlDecl + c;
							parser.sgmlDecl = "";
						} else if ((parser.sgmlDecl + c).toUpperCase() === CDATA) {
							emitNode(parser, "onopencdata");
							parser.state = S.CDATA;
							parser.sgmlDecl = "";
							parser.cdata = "";
						} else if ((parser.sgmlDecl + c).toUpperCase() === DOCTYPE) {
							parser.state = S.DOCTYPE;
							if (parser.doctype || parser.sawRoot) strictFail(parser, "Inappropriately located doctype declaration");
							parser.doctype = "";
							parser.sgmlDecl = "";
						} else if (c === ">") {
							emitNode(parser, "onsgmldeclaration", parser.sgmlDecl);
							parser.sgmlDecl = "";
							parser.state = S.TEXT;
						} else if (isQuote(c)) {
							parser.state = S.SGML_DECL_QUOTED;
							parser.sgmlDecl += c;
						} else parser.sgmlDecl += c;
						continue;
					case S.SGML_DECL_QUOTED:
						if (c === parser.q) {
							parser.state = S.SGML_DECL;
							parser.q = "";
						}
						parser.sgmlDecl += c;
						continue;
					case S.DOCTYPE:
						if (c === ">") {
							parser.state = S.TEXT;
							emitNode(parser, "ondoctype", parser.doctype);
							parser.doctype = true;
						} else {
							parser.doctype += c;
							if (c === "[") parser.state = S.DOCTYPE_DTD;
							else if (isQuote(c)) {
								parser.state = S.DOCTYPE_QUOTED;
								parser.q = c;
							}
						}
						continue;
					case S.DOCTYPE_QUOTED:
						parser.doctype += c;
						if (c === parser.q) {
							parser.q = "";
							parser.state = S.DOCTYPE;
						}
						continue;
					case S.DOCTYPE_DTD:
						if (c === "]") {
							parser.doctype += c;
							parser.state = S.DOCTYPE;
						} else if (c === "<") {
							parser.state = S.OPEN_WAKA;
							parser.startTagPosition = parser.position;
						} else if (isQuote(c)) {
							parser.doctype += c;
							parser.state = S.DOCTYPE_DTD_QUOTED;
							parser.q = c;
						} else parser.doctype += c;
						continue;
					case S.DOCTYPE_DTD_QUOTED:
						parser.doctype += c;
						if (c === parser.q) {
							parser.state = S.DOCTYPE_DTD;
							parser.q = "";
						}
						continue;
					case S.COMMENT:
						if (c === "-") parser.state = S.COMMENT_ENDING;
						else parser.comment += c;
						continue;
					case S.COMMENT_ENDING:
						if (c === "-") {
							parser.state = S.COMMENT_ENDED;
							parser.comment = textopts(parser.opt, parser.comment);
							if (parser.comment) emitNode(parser, "oncomment", parser.comment);
							parser.comment = "";
						} else {
							parser.comment += "-" + c;
							parser.state = S.COMMENT;
						}
						continue;
					case S.COMMENT_ENDED:
						if (c !== ">") {
							strictFail(parser, "Malformed comment");
							parser.comment += "--" + c;
							parser.state = S.COMMENT;
						} else if (parser.doctype && parser.doctype !== true) parser.state = S.DOCTYPE_DTD;
						else parser.state = S.TEXT;
						continue;
					case S.CDATA:
						var starti = i - 1;
						while (c && c !== "]") {
							c = charAt(chunk, i++);
							if (c && parser.trackPosition) {
								parser.position++;
								if (c === "\n") {
									parser.line++;
									parser.column = 0;
								} else parser.column++;
							}
						}
						parser.cdata += chunk.substring(starti, i - 1);
						if (c === "]") parser.state = S.CDATA_ENDING;
						continue;
					case S.CDATA_ENDING:
						if (c === "]") parser.state = S.CDATA_ENDING_2;
						else {
							parser.cdata += "]" + c;
							parser.state = S.CDATA;
						}
						continue;
					case S.CDATA_ENDING_2:
						if (c === ">") {
							if (parser.cdata) emitNode(parser, "oncdata", parser.cdata);
							emitNode(parser, "onclosecdata");
							parser.cdata = "";
							parser.state = S.TEXT;
						} else if (c === "]") parser.cdata += "]";
						else {
							parser.cdata += "]]" + c;
							parser.state = S.CDATA;
						}
						continue;
					case S.PROC_INST:
						if (c === "?") parser.state = S.PROC_INST_ENDING;
						else if (isWhitespace(c)) parser.state = S.PROC_INST_BODY;
						else parser.procInstName += c;
						continue;
					case S.PROC_INST_BODY:
						if (!parser.procInstBody && isWhitespace(c)) continue;
						else if (c === "?") parser.state = S.PROC_INST_ENDING;
						else parser.procInstBody += c;
						continue;
					case S.PROC_INST_ENDING:
						if (c === ">") {
							const procInstEndData = {
								name: parser.procInstName,
								body: parser.procInstBody
							};
							validateXmlDeclarationEncoding(parser, procInstEndData);
							emitNode(parser, "onprocessinginstruction", procInstEndData);
							parser.procInstName = parser.procInstBody = "";
							parser.state = S.TEXT;
						} else {
							parser.procInstBody += "?" + c;
							parser.state = S.PROC_INST_BODY;
						}
						continue;
					case S.OPEN_TAG:
						if (isMatch(nameBody, c)) parser.tagName += c;
						else {
							newTag(parser);
							if (c === ">") openTag(parser);
							else if (c === "/") parser.state = S.OPEN_TAG_SLASH;
							else {
								if (!isWhitespace(c)) strictFail(parser, "Invalid character in tag name");
								parser.state = S.ATTRIB;
							}
						}
						continue;
					case S.OPEN_TAG_SLASH:
						if (c === ">") {
							openTag(parser, true);
							closeTag(parser);
						} else {
							strictFail(parser, "Forward-slash in opening tag not followed by >");
							parser.state = S.ATTRIB;
						}
						continue;
					case S.ATTRIB:
						if (isWhitespace(c)) continue;
						else if (c === ">") openTag(parser);
						else if (c === "/") parser.state = S.OPEN_TAG_SLASH;
						else if (isMatch(nameStart, c)) {
							parser.attribName = c;
							parser.attribValue = "";
							parser.state = S.ATTRIB_NAME;
						} else strictFail(parser, "Invalid attribute name");
						continue;
					case S.ATTRIB_NAME:
						if (c === "=") parser.state = S.ATTRIB_VALUE;
						else if (c === ">") {
							strictFail(parser, "Attribute without value");
							parser.attribValue = parser.attribName;
							attrib(parser);
							openTag(parser);
						} else if (isWhitespace(c)) parser.state = S.ATTRIB_NAME_SAW_WHITE;
						else if (isMatch(nameBody, c)) parser.attribName += c;
						else strictFail(parser, "Invalid attribute name");
						continue;
					case S.ATTRIB_NAME_SAW_WHITE:
						if (c === "=") parser.state = S.ATTRIB_VALUE;
						else if (isWhitespace(c)) continue;
						else {
							strictFail(parser, "Attribute without value");
							parser.tag.attributes[parser.attribName] = "";
							parser.attribValue = "";
							emitNode(parser, "onattribute", {
								name: parser.attribName,
								value: ""
							});
							parser.attribName = "";
							if (c === ">") openTag(parser);
							else if (isMatch(nameStart, c)) {
								parser.attribName = c;
								parser.state = S.ATTRIB_NAME;
							} else {
								strictFail(parser, "Invalid attribute name");
								parser.state = S.ATTRIB;
							}
						}
						continue;
					case S.ATTRIB_VALUE:
						if (isWhitespace(c)) continue;
						else if (isQuote(c)) {
							parser.q = c;
							parser.state = S.ATTRIB_VALUE_QUOTED;
						} else {
							if (!parser.opt.unquotedAttributeValues) error(parser, "Unquoted attribute value");
							parser.state = S.ATTRIB_VALUE_UNQUOTED;
							parser.attribValue = c;
						}
						continue;
					case S.ATTRIB_VALUE_QUOTED:
						if (c !== parser.q) {
							if (c === "&") parser.state = S.ATTRIB_VALUE_ENTITY_Q;
							else parser.attribValue += c;
							continue;
						}
						attrib(parser);
						parser.q = "";
						parser.state = S.ATTRIB_VALUE_CLOSED;
						continue;
					case S.ATTRIB_VALUE_CLOSED:
						if (isWhitespace(c)) parser.state = S.ATTRIB;
						else if (c === ">") openTag(parser);
						else if (c === "/") parser.state = S.OPEN_TAG_SLASH;
						else if (isMatch(nameStart, c)) {
							strictFail(parser, "No whitespace between attributes");
							parser.attribName = c;
							parser.attribValue = "";
							parser.state = S.ATTRIB_NAME;
						} else strictFail(parser, "Invalid attribute name");
						continue;
					case S.ATTRIB_VALUE_UNQUOTED:
						if (!isAttribEnd(c)) {
							if (c === "&") parser.state = S.ATTRIB_VALUE_ENTITY_U;
							else parser.attribValue += c;
							continue;
						}
						attrib(parser);
						if (c === ">") openTag(parser);
						else parser.state = S.ATTRIB;
						continue;
					case S.CLOSE_TAG:
						if (!parser.tagName) if (isWhitespace(c)) continue;
						else if (notMatch(nameStart, c)) if (parser.script) {
							parser.script += "</" + c;
							parser.state = S.SCRIPT;
						} else strictFail(parser, "Invalid tagname in closing tag.");
						else parser.tagName = c;
						else if (c === ">") closeTag(parser);
						else if (isMatch(nameBody, c)) parser.tagName += c;
						else if (parser.script) {
							parser.script += "</" + parser.tagName + c;
							parser.tagName = "";
							parser.state = S.SCRIPT;
						} else {
							if (!isWhitespace(c)) strictFail(parser, "Invalid tagname in closing tag");
							parser.state = S.CLOSE_TAG_SAW_WHITE;
						}
						continue;
					case S.CLOSE_TAG_SAW_WHITE:
						if (isWhitespace(c)) continue;
						if (c === ">") closeTag(parser);
						else strictFail(parser, "Invalid characters in closing tag");
						continue;
					case S.TEXT_ENTITY:
					case S.ATTRIB_VALUE_ENTITY_Q:
					case S.ATTRIB_VALUE_ENTITY_U:
						var returnState;
						var buffer;
						switch (parser.state) {
							case S.TEXT_ENTITY:
								returnState = S.TEXT;
								buffer = "textNode";
								break;
							case S.ATTRIB_VALUE_ENTITY_Q:
								returnState = S.ATTRIB_VALUE_QUOTED;
								buffer = "attribValue";
								break;
							case S.ATTRIB_VALUE_ENTITY_U:
								returnState = S.ATTRIB_VALUE_UNQUOTED;
								buffer = "attribValue";
								break;
						}
						if (c === ";") {
							var parsedEntity = parseEntity(parser);
							if (parser.opt.unparsedEntities && !Object.values(sax.XML_ENTITIES).includes(parsedEntity)) {
								if ((parser.entityCount += 1) > parser.opt.maxEntityCount) error(parser, "Parsed entity count exceeds max entity count");
								if ((parser.entityDepth += 1) > parser.opt.maxEntityDepth) error(parser, "Parsed entity depth exceeds max entity depth");
								parser.entity = "";
								parser.state = returnState;
								parser.write(parsedEntity);
								parser.entityDepth -= 1;
							} else {
								parser[buffer] += parsedEntity;
								parser.entity = "";
								parser.state = returnState;
							}
						} else if (isMatch(parser.entity.length ? entityBody : entityStart, c)) parser.entity += c;
						else {
							strictFail(parser, "Invalid character in entity name");
							parser[buffer] += "&" + parser.entity + c;
							parser.entity = "";
							parser.state = returnState;
						}
						continue;
					default: throw new Error(parser, "Unknown state: " + parser.state);
				}
			}
			if (parser.position >= parser.bufferCheckPosition) checkBufferLength(parser);
			return parser;
		}
		/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
		/* istanbul ignore next */
		if (!String.fromCodePoint) (function() {
			var stringFromCharCode = String.fromCharCode;
			var floor = Math.floor;
			var fromCodePoint = function() {
				var MAX_SIZE = 16384;
				var codeUnits = [];
				var highSurrogate;
				var lowSurrogate;
				var index = -1;
				var length = arguments.length;
				if (!length) return "";
				var result = "";
				while (++index < length) {
					var codePoint = Number(arguments[index]);
					if (!isFinite(codePoint) || codePoint < 0 || codePoint > 1114111 || floor(codePoint) !== codePoint) throw RangeError("Invalid code point: " + codePoint);
					if (codePoint <= 65535) codeUnits.push(codePoint);
					else {
						codePoint -= 65536;
						highSurrogate = (codePoint >> 10) + 55296;
						lowSurrogate = codePoint % 1024 + 56320;
						codeUnits.push(highSurrogate, lowSurrogate);
					}
					if (index + 1 === length || codeUnits.length > MAX_SIZE) {
						result += stringFromCharCode.apply(null, codeUnits);
						codeUnits.length = 0;
					}
				}
				return result;
			};
			/* istanbul ignore next */
			if (Object.defineProperty) Object.defineProperty(String, "fromCodePoint", {
				value: fromCodePoint,
				configurable: true,
				writable: true
			});
			else String.fromCodePoint = fromCodePoint;
		})();
	})(typeof exports === "undefined" ? exports.sax = {} : exports);
}));
//#endregion
//#region extension/node_modules/xml2js/lib/bom.js
var require_bom = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		"use strict";
		exports.stripBOM = function(str) {
			if (str[0] === "﻿") return str.substring(1);
			else return str;
		};
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xml2js/lib/processors.js
var require_processors = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		"use strict";
		var prefixMatch = /* @__PURE__ */ new RegExp(/(?!xmlns)^.*:/);
		exports.normalize = function(str) {
			return str.toLowerCase();
		};
		exports.firstCharLowerCase = function(str) {
			return str.charAt(0).toLowerCase() + str.slice(1);
		};
		exports.stripPrefix = function(str) {
			return str.replace(prefixMatch, "");
		};
		exports.parseNumbers = function(str) {
			if (!isNaN(str)) str = str % 1 === 0 ? parseInt(str, 10) : parseFloat(str);
			return str;
		};
		exports.parseBooleans = function(str) {
			if (/^(?:true|false)$/i.test(str)) str = str.toLowerCase() === "true";
			return str;
		};
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xml2js/lib/parser.js
var require_parser$1 = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		"use strict";
		var bom, defaults, events, isEmpty, processItem, processors, sax, setImmediate, bind = function(fn, me) {
			return function() {
				return fn.apply(me, arguments);
			};
		}, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		sax = require_sax();
		events = require("events");
		bom = require_bom();
		processors = require_processors();
		setImmediate = require("timers").setImmediate;
		defaults = require_defaults().defaults;
		isEmpty = function(thing) {
			return typeof thing === "object" && thing != null && Object.keys(thing).length === 0;
		};
		processItem = function(processors, item, key) {
			var i, len, process;
			for (i = 0, len = processors.length; i < len; i++) {
				process = processors[i];
				item = process(item, key);
			}
			return item;
		};
		exports.Parser = (function(superClass) {
			extend(Parser, superClass);
			function Parser(opts) {
				this.parseStringPromise = bind(this.parseStringPromise, this);
				this.parseString = bind(this.parseString, this);
				this.reset = bind(this.reset, this);
				this.assignOrPush = bind(this.assignOrPush, this);
				this.processAsync = bind(this.processAsync, this);
				var key, ref, value;
				if (!(this instanceof exports.Parser)) return new exports.Parser(opts);
				this.options = {};
				ref = defaults["0.2"];
				for (key in ref) {
					if (!hasProp.call(ref, key)) continue;
					value = ref[key];
					this.options[key] = value;
				}
				for (key in opts) {
					if (!hasProp.call(opts, key)) continue;
					value = opts[key];
					this.options[key] = value;
				}
				if (this.options.xmlns) this.options.xmlnskey = this.options.attrkey + "ns";
				if (this.options.normalizeTags) {
					if (!this.options.tagNameProcessors) this.options.tagNameProcessors = [];
					this.options.tagNameProcessors.unshift(processors.normalize);
				}
				this.reset();
			}
			Parser.prototype.processAsync = function() {
				var chunk, err;
				try {
					if (this.remaining.length <= this.options.chunkSize) {
						chunk = this.remaining;
						this.remaining = "";
						this.saxParser = this.saxParser.write(chunk);
						return this.saxParser.close();
					} else {
						chunk = this.remaining.substr(0, this.options.chunkSize);
						this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length);
						this.saxParser = this.saxParser.write(chunk);
						return setImmediate(this.processAsync);
					}
				} catch (error1) {
					err = error1;
					if (!this.saxParser.errThrown) {
						this.saxParser.errThrown = true;
						return this.emit(err);
					}
				}
			};
			Parser.prototype.assignOrPush = function(obj, key, newValue) {
				if (!(key in obj)) if (!this.options.explicitArray) return obj[key] = newValue;
				else return obj[key] = [newValue];
				else {
					if (!(obj[key] instanceof Array)) obj[key] = [obj[key]];
					return obj[key].push(newValue);
				}
			};
			Parser.prototype.reset = function() {
				var attrkey, charkey, ontext, stack;
				this.removeAllListeners();
				this.saxParser = sax.parser(this.options.strict, {
					trim: false,
					normalize: false,
					xmlns: this.options.xmlns
				});
				this.saxParser.errThrown = false;
				this.saxParser.onerror = (function(_this) {
					return function(error) {
						_this.saxParser.resume();
						if (!_this.saxParser.errThrown) {
							_this.saxParser.errThrown = true;
							return _this.emit("error", error);
						}
					};
				})(this);
				this.saxParser.onend = (function(_this) {
					return function() {
						if (!_this.saxParser.ended) {
							_this.saxParser.ended = true;
							return _this.emit("end", _this.resultObject);
						}
					};
				})(this);
				this.saxParser.ended = false;
				this.EXPLICIT_CHARKEY = this.options.explicitCharkey;
				this.resultObject = null;
				stack = [];
				attrkey = this.options.attrkey;
				charkey = this.options.charkey;
				this.saxParser.onopentag = (function(_this) {
					return function(node) {
						var key, newValue, obj = Object.create(null), processedKey, ref;
						obj[charkey] = "";
						if (!_this.options.ignoreAttrs) {
							ref = node.attributes;
							for (key in ref) {
								if (!hasProp.call(ref, key)) continue;
								if (!(attrkey in obj) && !_this.options.mergeAttrs) obj[attrkey] = Object.create(null);
								newValue = _this.options.attrValueProcessors ? processItem(_this.options.attrValueProcessors, node.attributes[key], key) : node.attributes[key];
								processedKey = _this.options.attrNameProcessors ? processItem(_this.options.attrNameProcessors, key) : key;
								if (_this.options.mergeAttrs) _this.assignOrPush(obj, processedKey, newValue);
								else obj[attrkey][processedKey] = newValue;
							}
						}
						obj["#name"] = _this.options.tagNameProcessors ? processItem(_this.options.tagNameProcessors, node.name) : node.name;
						if (_this.options.xmlns) obj[_this.options.xmlnskey] = {
							uri: node.uri,
							local: node.local
						};
						return stack.push(obj);
					};
				})(this);
				this.saxParser.onclosetag = (function(_this) {
					return function() {
						var cdata, emptyStr, key, node, nodeName, obj = stack.pop(), objClone, old, s, xpath;
						nodeName = obj["#name"];
						if (!_this.options.explicitChildren || !_this.options.preserveChildrenOrder) delete obj["#name"];
						if (obj.cdata === true) {
							cdata = obj.cdata;
							delete obj.cdata;
						}
						s = stack[stack.length - 1];
						if (obj[charkey].match(/^\s*$/) && !cdata) {
							emptyStr = obj[charkey];
							delete obj[charkey];
						} else {
							if (_this.options.trim) obj[charkey] = obj[charkey].trim();
							if (_this.options.normalize) obj[charkey] = obj[charkey].replace(/\s{2,}/g, " ").trim();
							obj[charkey] = _this.options.valueProcessors ? processItem(_this.options.valueProcessors, obj[charkey], nodeName) : obj[charkey];
							if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) obj = obj[charkey];
						}
						if (isEmpty(obj)) if (typeof _this.options.emptyTag === "function") obj = _this.options.emptyTag();
						else obj = _this.options.emptyTag !== "" ? _this.options.emptyTag : emptyStr;
						if (_this.options.validator != null) {
							xpath = "/" + (function() {
								var i, len, results = [];
								for (i = 0, len = stack.length; i < len; i++) {
									node = stack[i];
									results.push(node["#name"]);
								}
								return results;
							})().concat(nodeName).join("/");
							(function() {
								var err;
								try {
									return obj = _this.options.validator(xpath, s && s[nodeName], obj);
								} catch (error1) {
									err = error1;
									return _this.emit("error", err);
								}
							})();
						}
						if (_this.options.explicitChildren && !_this.options.mergeAttrs && typeof obj === "object") {
							if (!_this.options.preserveChildrenOrder) {
								node = Object.create(null);
								if (_this.options.attrkey in obj) {
									node[_this.options.attrkey] = obj[_this.options.attrkey];
									delete obj[_this.options.attrkey];
								}
								if (!_this.options.charsAsChildren && _this.options.charkey in obj) {
									node[_this.options.charkey] = obj[_this.options.charkey];
									delete obj[_this.options.charkey];
								}
								if (Object.getOwnPropertyNames(obj).length > 0) node[_this.options.childkey] = obj;
								obj = node;
							} else if (s) {
								s[_this.options.childkey] = s[_this.options.childkey] || [];
								objClone = Object.create(null);
								for (key in obj) {
									if (!hasProp.call(obj, key)) continue;
									objClone[key] = obj[key];
								}
								s[_this.options.childkey].push(objClone);
								delete obj["#name"];
								if (Object.keys(obj).length === 1 && charkey in obj && !_this.EXPLICIT_CHARKEY) obj = obj[charkey];
							}
						}
						if (stack.length > 0) return _this.assignOrPush(s, nodeName, obj);
						else {
							if (_this.options.explicitRoot) {
								old = obj;
								obj = Object.create(null);
								obj[nodeName] = old;
							}
							_this.resultObject = obj;
							_this.saxParser.ended = true;
							return _this.emit("end", _this.resultObject);
						}
					};
				})(this);
				ontext = (function(_this) {
					return function(text) {
						var charChild, s = stack[stack.length - 1];
						if (s) {
							s[charkey] += text;
							if (_this.options.explicitChildren && _this.options.preserveChildrenOrder && _this.options.charsAsChildren && (_this.options.includeWhiteChars || text.replace(/\\n/g, "").trim() !== "")) {
								s[_this.options.childkey] = s[_this.options.childkey] || [];
								charChild = { "#name": "__text__" };
								charChild[charkey] = text;
								if (_this.options.normalize) charChild[charkey] = charChild[charkey].replace(/\s{2,}/g, " ").trim();
								s[_this.options.childkey].push(charChild);
							}
							return s;
						}
					};
				})(this);
				this.saxParser.ontext = ontext;
				return this.saxParser.oncdata = (function(_this) {
					return function(text) {
						var s = ontext(text);
						if (s) return s.cdata = true;
					};
				})(this);
			};
			Parser.prototype.parseString = function(str, cb) {
				var err;
				if (cb != null && typeof cb === "function") {
					this.on("end", function(result) {
						this.reset();
						return cb(null, result);
					});
					this.on("error", function(err) {
						this.reset();
						return cb(err);
					});
				}
				try {
					str = str.toString();
					if (str.trim() === "") {
						this.emit("end", null);
						return true;
					}
					str = bom.stripBOM(str);
					if (this.options.async) {
						this.remaining = str;
						setImmediate(this.processAsync);
						return this.saxParser;
					}
					return this.saxParser.write(str).close();
				} catch (error1) {
					err = error1;
					if (!(this.saxParser.errThrown || this.saxParser.ended)) {
						this.emit("error", err);
						return this.saxParser.errThrown = true;
					} else if (this.saxParser.ended) throw err;
				}
			};
			Parser.prototype.parseStringPromise = function(str) {
				return new Promise((function(_this) {
					return function(resolve, reject) {
						return _this.parseString(str, function(err, value) {
							if (err) return reject(err);
							else return resolve(value);
						});
					};
				})(this));
			};
			return Parser;
		})(events);
		exports.parseString = function(str, a, b) {
			var cb, options, parser;
			if (b != null) {
				if (typeof b === "function") cb = b;
				if (typeof a === "object") options = a;
			} else {
				if (typeof a === "function") cb = a;
				options = {};
			}
			parser = new exports.Parser(options);
			return parser.parseString(str, cb);
		};
		exports.parseStringPromise = function(str, a) {
			var options, parser;
			if (typeof a === "object") options = a;
			parser = new exports.Parser(options);
			return parser.parseStringPromise(str);
		};
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/xml2js/lib/xml2js.js
var require_xml2js = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		"use strict";
		var builder, defaults, parser, processors, extend = function(child, parent) {
			for (var key in parent) if (hasProp.call(parent, key)) child[key] = parent[key];
			function ctor() {
				this.constructor = child;
			}
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		}, hasProp = {}.hasOwnProperty;
		defaults = require_defaults();
		builder = require_builder();
		parser = require_parser$1();
		processors = require_processors();
		exports.defaults = defaults.defaults;
		exports.processors = processors;
		exports.ValidationError = (function(superClass) {
			extend(ValidationError, superClass);
			function ValidationError(message) {
				this.message = message;
			}
			return ValidationError;
		})(Error);
		exports.Builder = builder.Builder;
		exports.Parser = parser.Parser;
		exports.parseString = parser.parseString;
		exports.parseStringPromise = parser.parseStringPromise;
	}).call(exports);
}));
//#endregion
//#region extension/node_modules/rss-parser/lib/fields.js
var require_fields = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var fields = module.exports = {};
	fields.feed = [
		["author", "creator"],
		["dc:publisher", "publisher"],
		["dc:creator", "creator"],
		["dc:source", "source"],
		["dc:title", "title"],
		["dc:type", "type"],
		"title",
		"description",
		"author",
		"pubDate",
		"webMaster",
		"managingEditor",
		"generator",
		"link",
		"language",
		"copyright",
		"lastBuildDate",
		"docs",
		"generator",
		"ttl",
		"rating",
		"skipHours",
		"skipDays"
	];
	fields.item = [
		["author", "creator"],
		["dc:creator", "creator"],
		["dc:date", "date"],
		["dc:language", "language"],
		["dc:rights", "rights"],
		["dc:source", "source"],
		["dc:title", "title"],
		"title",
		"link",
		"pubDate",
		"author",
		"summary",
		[
			"content:encoded",
			"content:encoded",
			{ includeSnippet: true }
		],
		"enclosure",
		"dc:creator",
		"dc:date",
		"comments"
	];
	var mapItunesField = function(f) {
		return ["itunes:" + f, f];
	};
	fields.podcastFeed = [
		"author",
		"subtitle",
		"summary",
		"explicit"
	].map(mapItunesField);
	fields.podcastItem = [
		"author",
		"subtitle",
		"summary",
		"explicit",
		"duration",
		"image",
		"episode",
		"image",
		"season",
		"keywords",
		"episodeType"
	].map(mapItunesField);
}));
//#endregion
//#region extension/node_modules/entities/lib/maps/entities.json
var entities_exports = /* @__PURE__ */ __exportAll({
	AElig: () => "Æ",
	AMP: () => "&",
	Aacute: () => "Á",
	Abreve: () => "Ă",
	Acirc: () => "Â",
	Acy: () => "А",
	Afr: () => Afr,
	Agrave: () => "À",
	Alpha: () => "Α",
	Amacr: () => "Ā",
	And: () => "⩓",
	Aogon: () => "Ą",
	Aopf: () => Aopf,
	ApplyFunction: () => "⁡",
	Aring: () => "Å",
	Ascr: () => Ascr,
	Assign: () => "≔",
	Atilde: () => "Ã",
	Auml: () => "Ä",
	Backslash: () => "∖",
	Barv: () => "⫧",
	Barwed: () => "⌆",
	Bcy: () => "Б",
	Because: () => "∵",
	Bernoullis: () => "ℬ",
	Beta: () => "Β",
	Bfr: () => Bfr,
	Bopf: () => Bopf,
	Breve: () => "˘",
	Bscr: () => "ℬ",
	Bumpeq: () => "≎",
	CHcy: () => "Ч",
	COPY: () => "©",
	Cacute: () => "Ć",
	Cap: () => "⋒",
	CapitalDifferentialD: () => "ⅅ",
	Cayleys: () => "ℭ",
	Ccaron: () => "Č",
	Ccedil: () => "Ç",
	Ccirc: () => "Ĉ",
	Cconint: () => "∰",
	Cdot: () => "Ċ",
	Cedilla: () => "¸",
	CenterDot: () => "·",
	Cfr: () => "ℭ",
	Chi: () => "Χ",
	CircleDot: () => "⊙",
	CircleMinus: () => "⊖",
	CirclePlus: () => "⊕",
	CircleTimes: () => "⊗",
	ClockwiseContourIntegral: () => "∲",
	CloseCurlyDoubleQuote: () => "”",
	CloseCurlyQuote: () => "’",
	Colon: () => "∷",
	Colone: () => "⩴",
	Congruent: () => "≡",
	Conint: () => "∯",
	ContourIntegral: () => "∮",
	Copf: () => "ℂ",
	Coproduct: () => "∐",
	CounterClockwiseContourIntegral: () => "∳",
	Cross: () => "⨯",
	Cscr: () => Cscr,
	Cup: () => "⋓",
	CupCap: () => "≍",
	DD: () => "ⅅ",
	DDotrahd: () => "⤑",
	DJcy: () => "Ђ",
	DScy: () => "Ѕ",
	DZcy: () => "Џ",
	Dagger: () => "‡",
	Darr: () => "↡",
	Dashv: () => "⫤",
	Dcaron: () => "Ď",
	Dcy: () => "Д",
	Del: () => "∇",
	Delta: () => "Δ",
	Dfr: () => Dfr,
	DiacriticalAcute: () => "´",
	DiacriticalDot: () => "˙",
	DiacriticalDoubleAcute: () => "˝",
	DiacriticalGrave: () => "`",
	DiacriticalTilde: () => "˜",
	Diamond: () => "⋄",
	DifferentialD: () => "ⅆ",
	Dopf: () => Dopf,
	Dot: () => "¨",
	DotDot: () => "⃜",
	DotEqual: () => "≐",
	DoubleContourIntegral: () => "∯",
	DoubleDot: () => "¨",
	DoubleDownArrow: () => "⇓",
	DoubleLeftArrow: () => "⇐",
	DoubleLeftRightArrow: () => "⇔",
	DoubleLeftTee: () => "⫤",
	DoubleLongLeftArrow: () => "⟸",
	DoubleLongLeftRightArrow: () => "⟺",
	DoubleLongRightArrow: () => "⟹",
	DoubleRightArrow: () => "⇒",
	DoubleRightTee: () => "⊨",
	DoubleUpArrow: () => "⇑",
	DoubleUpDownArrow: () => "⇕",
	DoubleVerticalBar: () => "∥",
	DownArrow: () => "↓",
	DownArrowBar: () => "⤓",
	DownArrowUpArrow: () => "⇵",
	DownBreve: () => "̑",
	DownLeftRightVector: () => "⥐",
	DownLeftTeeVector: () => "⥞",
	DownLeftVector: () => "↽",
	DownLeftVectorBar: () => "⥖",
	DownRightTeeVector: () => "⥟",
	DownRightVector: () => "⇁",
	DownRightVectorBar: () => "⥗",
	DownTee: () => "⊤",
	DownTeeArrow: () => "↧",
	Downarrow: () => "⇓",
	Dscr: () => Dscr,
	Dstrok: () => "Đ",
	ENG: () => "Ŋ",
	ETH: () => "Ð",
	Eacute: () => "É",
	Ecaron: () => "Ě",
	Ecirc: () => "Ê",
	Ecy: () => "Э",
	Edot: () => "Ė",
	Efr: () => Efr,
	Egrave: () => "È",
	Element: () => "∈",
	Emacr: () => "Ē",
	EmptySmallSquare: () => "◻",
	EmptyVerySmallSquare: () => "▫",
	Eogon: () => "Ę",
	Eopf: () => Eopf,
	Epsilon: () => "Ε",
	Equal: () => "⩵",
	EqualTilde: () => "≂",
	Equilibrium: () => "⇌",
	Escr: () => "ℰ",
	Esim: () => "⩳",
	Eta: () => "Η",
	Euml: () => "Ë",
	Exists: () => "∃",
	ExponentialE: () => "ⅇ",
	Fcy: () => "Ф",
	Ffr: () => Ffr,
	FilledSmallSquare: () => "◼",
	FilledVerySmallSquare: () => "▪",
	Fopf: () => Fopf,
	ForAll: () => "∀",
	Fouriertrf: () => "ℱ",
	Fscr: () => "ℱ",
	GJcy: () => "Ѓ",
	GT: () => ">",
	Gamma: () => "Γ",
	Gammad: () => "Ϝ",
	Gbreve: () => "Ğ",
	Gcedil: () => "Ģ",
	Gcirc: () => "Ĝ",
	Gcy: () => "Г",
	Gdot: () => "Ġ",
	Gfr: () => Gfr,
	Gg: () => "⋙",
	Gopf: () => Gopf,
	GreaterEqual: () => "≥",
	GreaterEqualLess: () => "⋛",
	GreaterFullEqual: () => "≧",
	GreaterGreater: () => "⪢",
	GreaterLess: () => "≷",
	GreaterSlantEqual: () => "⩾",
	GreaterTilde: () => "≳",
	Gscr: () => Gscr,
	Gt: () => "≫",
	HARDcy: () => "Ъ",
	Hacek: () => "ˇ",
	Hat: () => "^",
	Hcirc: () => "Ĥ",
	Hfr: () => "ℌ",
	HilbertSpace: () => "ℋ",
	Hopf: () => "ℍ",
	HorizontalLine: () => "─",
	Hscr: () => "ℋ",
	Hstrok: () => "Ħ",
	HumpDownHump: () => "≎",
	HumpEqual: () => "≏",
	IEcy: () => "Е",
	IJlig: () => "Ĳ",
	IOcy: () => "Ё",
	Iacute: () => "Í",
	Icirc: () => "Î",
	Icy: () => "И",
	Idot: () => "İ",
	Ifr: () => "ℑ",
	Igrave: () => "Ì",
	Im: () => "ℑ",
	Imacr: () => "Ī",
	ImaginaryI: () => "ⅈ",
	Implies: () => "⇒",
	Int: () => "∬",
	Integral: () => "∫",
	Intersection: () => "⋂",
	InvisibleComma: () => "⁣",
	InvisibleTimes: () => "⁢",
	Iogon: () => "Į",
	Iopf: () => Iopf,
	Iota: () => "Ι",
	Iscr: () => "ℐ",
	Itilde: () => "Ĩ",
	Iukcy: () => "І",
	Iuml: () => "Ï",
	Jcirc: () => "Ĵ",
	Jcy: () => "Й",
	Jfr: () => Jfr,
	Jopf: () => Jopf,
	Jscr: () => Jscr,
	Jsercy: () => "Ј",
	Jukcy: () => "Є",
	KHcy: () => "Х",
	KJcy: () => "Ќ",
	Kappa: () => "Κ",
	Kcedil: () => "Ķ",
	Kcy: () => "К",
	Kfr: () => Kfr,
	Kopf: () => Kopf,
	Kscr: () => Kscr,
	LJcy: () => "Љ",
	LT: () => "<",
	Lacute: () => "Ĺ",
	Lambda: () => "Λ",
	Lang: () => "⟪",
	Laplacetrf: () => "ℒ",
	Larr: () => "↞",
	Lcaron: () => "Ľ",
	Lcedil: () => "Ļ",
	Lcy: () => "Л",
	LeftAngleBracket: () => "⟨",
	LeftArrow: () => "←",
	LeftArrowBar: () => "⇤",
	LeftArrowRightArrow: () => "⇆",
	LeftCeiling: () => "⌈",
	LeftDoubleBracket: () => "⟦",
	LeftDownTeeVector: () => "⥡",
	LeftDownVector: () => "⇃",
	LeftDownVectorBar: () => "⥙",
	LeftFloor: () => "⌊",
	LeftRightArrow: () => "↔",
	LeftRightVector: () => "⥎",
	LeftTee: () => "⊣",
	LeftTeeArrow: () => "↤",
	LeftTeeVector: () => "⥚",
	LeftTriangle: () => "⊲",
	LeftTriangleBar: () => "⧏",
	LeftTriangleEqual: () => "⊴",
	LeftUpDownVector: () => "⥑",
	LeftUpTeeVector: () => "⥠",
	LeftUpVector: () => "↿",
	LeftUpVectorBar: () => "⥘",
	LeftVector: () => "↼",
	LeftVectorBar: () => "⥒",
	Leftarrow: () => "⇐",
	Leftrightarrow: () => "⇔",
	LessEqualGreater: () => "⋚",
	LessFullEqual: () => "≦",
	LessGreater: () => "≶",
	LessLess: () => "⪡",
	LessSlantEqual: () => "⩽",
	LessTilde: () => "≲",
	Lfr: () => Lfr,
	Ll: () => "⋘",
	Lleftarrow: () => "⇚",
	Lmidot: () => "Ŀ",
	LongLeftArrow: () => "⟵",
	LongLeftRightArrow: () => "⟷",
	LongRightArrow: () => "⟶",
	Longleftarrow: () => "⟸",
	Longleftrightarrow: () => "⟺",
	Longrightarrow: () => "⟹",
	Lopf: () => Lopf,
	LowerLeftArrow: () => "↙",
	LowerRightArrow: () => "↘",
	Lscr: () => "ℒ",
	Lsh: () => "↰",
	Lstrok: () => "Ł",
	Lt: () => "≪",
	Map: () => "⤅",
	Mcy: () => "М",
	MediumSpace: () => " ",
	Mellintrf: () => "ℳ",
	Mfr: () => Mfr,
	MinusPlus: () => "∓",
	Mopf: () => Mopf,
	Mscr: () => "ℳ",
	Mu: () => "Μ",
	NJcy: () => "Њ",
	Nacute: () => "Ń",
	Ncaron: () => "Ň",
	Ncedil: () => "Ņ",
	Ncy: () => "Н",
	NegativeMediumSpace: () => "​",
	NegativeThickSpace: () => "​",
	NegativeThinSpace: () => "​",
	NegativeVeryThinSpace: () => "​",
	NestedGreaterGreater: () => "≫",
	NestedLessLess: () => "≪",
	NewLine: () => "\n",
	Nfr: () => Nfr,
	NoBreak: () => "⁠",
	NonBreakingSpace: () => "\xA0",
	Nopf: () => "ℕ",
	Not: () => "⫬",
	NotCongruent: () => "≢",
	NotCupCap: () => "≭",
	NotDoubleVerticalBar: () => "∦",
	NotElement: () => "∉",
	NotEqual: () => "≠",
	NotEqualTilde: () => NotEqualTilde,
	NotExists: () => "∄",
	NotGreater: () => "≯",
	NotGreaterEqual: () => "≱",
	NotGreaterFullEqual: () => NotGreaterFullEqual,
	NotGreaterGreater: () => NotGreaterGreater,
	NotGreaterLess: () => "≹",
	NotGreaterSlantEqual: () => NotGreaterSlantEqual,
	NotGreaterTilde: () => "≵",
	NotHumpDownHump: () => NotHumpDownHump,
	NotHumpEqual: () => NotHumpEqual,
	NotLeftTriangle: () => "⋪",
	NotLeftTriangleBar: () => NotLeftTriangleBar,
	NotLeftTriangleEqual: () => "⋬",
	NotLess: () => "≮",
	NotLessEqual: () => "≰",
	NotLessGreater: () => "≸",
	NotLessLess: () => NotLessLess,
	NotLessSlantEqual: () => NotLessSlantEqual,
	NotLessTilde: () => "≴",
	NotNestedGreaterGreater: () => NotNestedGreaterGreater,
	NotNestedLessLess: () => NotNestedLessLess,
	NotPrecedes: () => "⊀",
	NotPrecedesEqual: () => NotPrecedesEqual,
	NotPrecedesSlantEqual: () => "⋠",
	NotReverseElement: () => "∌",
	NotRightTriangle: () => "⋫",
	NotRightTriangleBar: () => NotRightTriangleBar,
	NotRightTriangleEqual: () => "⋭",
	NotSquareSubset: () => NotSquareSubset,
	NotSquareSubsetEqual: () => "⋢",
	NotSquareSuperset: () => NotSquareSuperset,
	NotSquareSupersetEqual: () => "⋣",
	NotSubset: () => NotSubset,
	NotSubsetEqual: () => "⊈",
	NotSucceeds: () => "⊁",
	NotSucceedsEqual: () => NotSucceedsEqual,
	NotSucceedsSlantEqual: () => "⋡",
	NotSucceedsTilde: () => NotSucceedsTilde,
	NotSuperset: () => NotSuperset,
	NotSupersetEqual: () => "⊉",
	NotTilde: () => "≁",
	NotTildeEqual: () => "≄",
	NotTildeFullEqual: () => "≇",
	NotTildeTilde: () => "≉",
	NotVerticalBar: () => "∤",
	Nscr: () => Nscr,
	Ntilde: () => "Ñ",
	Nu: () => "Ν",
	OElig: () => "Œ",
	Oacute: () => "Ó",
	Ocirc: () => "Ô",
	Ocy: () => "О",
	Odblac: () => "Ő",
	Ofr: () => Ofr,
	Ograve: () => "Ò",
	Omacr: () => "Ō",
	Omega: () => "Ω",
	Omicron: () => "Ο",
	Oopf: () => Oopf,
	OpenCurlyDoubleQuote: () => "“",
	OpenCurlyQuote: () => "‘",
	Or: () => "⩔",
	Oscr: () => Oscr,
	Oslash: () => "Ø",
	Otilde: () => "Õ",
	Otimes: () => "⨷",
	Ouml: () => "Ö",
	OverBar: () => "‾",
	OverBrace: () => "⏞",
	OverBracket: () => "⎴",
	OverParenthesis: () => "⏜",
	PartialD: () => "∂",
	Pcy: () => "П",
	Pfr: () => Pfr,
	Phi: () => "Φ",
	Pi: () => "Π",
	PlusMinus: () => "±",
	Poincareplane: () => "ℌ",
	Popf: () => "ℙ",
	Pr: () => "⪻",
	Precedes: () => "≺",
	PrecedesEqual: () => "⪯",
	PrecedesSlantEqual: () => "≼",
	PrecedesTilde: () => "≾",
	Prime: () => "″",
	Product: () => "∏",
	Proportion: () => "∷",
	Proportional: () => "∝",
	Pscr: () => Pscr,
	Psi: () => "Ψ",
	QUOT: () => "\"",
	Qfr: () => Qfr,
	Qopf: () => "ℚ",
	Qscr: () => Qscr,
	RBarr: () => "⤐",
	REG: () => "®",
	Racute: () => "Ŕ",
	Rang: () => "⟫",
	Rarr: () => "↠",
	Rarrtl: () => "⤖",
	Rcaron: () => "Ř",
	Rcedil: () => "Ŗ",
	Rcy: () => "Р",
	Re: () => "ℜ",
	ReverseElement: () => "∋",
	ReverseEquilibrium: () => "⇋",
	ReverseUpEquilibrium: () => "⥯",
	Rfr: () => "ℜ",
	Rho: () => "Ρ",
	RightAngleBracket: () => "⟩",
	RightArrow: () => "→",
	RightArrowBar: () => "⇥",
	RightArrowLeftArrow: () => "⇄",
	RightCeiling: () => "⌉",
	RightDoubleBracket: () => "⟧",
	RightDownTeeVector: () => "⥝",
	RightDownVector: () => "⇂",
	RightDownVectorBar: () => "⥕",
	RightFloor: () => "⌋",
	RightTee: () => "⊢",
	RightTeeArrow: () => "↦",
	RightTeeVector: () => "⥛",
	RightTriangle: () => "⊳",
	RightTriangleBar: () => "⧐",
	RightTriangleEqual: () => "⊵",
	RightUpDownVector: () => "⥏",
	RightUpTeeVector: () => "⥜",
	RightUpVector: () => "↾",
	RightUpVectorBar: () => "⥔",
	RightVector: () => "⇀",
	RightVectorBar: () => "⥓",
	Rightarrow: () => "⇒",
	Ropf: () => "ℝ",
	RoundImplies: () => "⥰",
	Rrightarrow: () => "⇛",
	Rscr: () => "ℛ",
	Rsh: () => "↱",
	RuleDelayed: () => "⧴",
	SHCHcy: () => "Щ",
	SHcy: () => "Ш",
	SOFTcy: () => "Ь",
	Sacute: () => "Ś",
	Sc: () => "⪼",
	Scaron: () => "Š",
	Scedil: () => "Ş",
	Scirc: () => "Ŝ",
	Scy: () => "С",
	Sfr: () => Sfr,
	ShortDownArrow: () => "↓",
	ShortLeftArrow: () => "←",
	ShortRightArrow: () => "→",
	ShortUpArrow: () => "↑",
	Sigma: () => "Σ",
	SmallCircle: () => "∘",
	Sopf: () => Sopf,
	Sqrt: () => "√",
	Square: () => "□",
	SquareIntersection: () => "⊓",
	SquareSubset: () => "⊏",
	SquareSubsetEqual: () => "⊑",
	SquareSuperset: () => "⊐",
	SquareSupersetEqual: () => "⊒",
	SquareUnion: () => "⊔",
	Sscr: () => Sscr,
	Star: () => "⋆",
	Sub: () => "⋐",
	Subset: () => "⋐",
	SubsetEqual: () => "⊆",
	Succeeds: () => "≻",
	SucceedsEqual: () => "⪰",
	SucceedsSlantEqual: () => "≽",
	SucceedsTilde: () => "≿",
	SuchThat: () => "∋",
	Sum: () => "∑",
	Sup: () => "⋑",
	Superset: () => "⊃",
	SupersetEqual: () => "⊇",
	Supset: () => "⋑",
	THORN: () => "Þ",
	TRADE: () => "™",
	TSHcy: () => "Ћ",
	TScy: () => "Ц",
	Tab: () => "	",
	Tau: () => "Τ",
	Tcaron: () => "Ť",
	Tcedil: () => "Ţ",
	Tcy: () => "Т",
	Tfr: () => Tfr,
	Therefore: () => "∴",
	Theta: () => "Θ",
	ThickSpace: () => ThickSpace,
	ThinSpace: () => " ",
	Tilde: () => "∼",
	TildeEqual: () => "≃",
	TildeFullEqual: () => "≅",
	TildeTilde: () => "≈",
	Topf: () => Topf,
	TripleDot: () => "⃛",
	Tscr: () => Tscr,
	Tstrok: () => "Ŧ",
	Uacute: () => "Ú",
	Uarr: () => "↟",
	Uarrocir: () => "⥉",
	Ubrcy: () => "Ў",
	Ubreve: () => "Ŭ",
	Ucirc: () => "Û",
	Ucy: () => "У",
	Udblac: () => "Ű",
	Ufr: () => Ufr,
	Ugrave: () => "Ù",
	Umacr: () => "Ū",
	UnderBar: () => "_",
	UnderBrace: () => "⏟",
	UnderBracket: () => "⎵",
	UnderParenthesis: () => "⏝",
	Union: () => "⋃",
	UnionPlus: () => "⊎",
	Uogon: () => "Ų",
	Uopf: () => Uopf,
	UpArrow: () => "↑",
	UpArrowBar: () => "⤒",
	UpArrowDownArrow: () => "⇅",
	UpDownArrow: () => "↕",
	UpEquilibrium: () => "⥮",
	UpTee: () => "⊥",
	UpTeeArrow: () => "↥",
	Uparrow: () => "⇑",
	Updownarrow: () => "⇕",
	UpperLeftArrow: () => "↖",
	UpperRightArrow: () => "↗",
	Upsi: () => "ϒ",
	Upsilon: () => "Υ",
	Uring: () => "Ů",
	Uscr: () => Uscr,
	Utilde: () => "Ũ",
	Uuml: () => "Ü",
	VDash: () => "⊫",
	Vbar: () => "⫫",
	Vcy: () => "В",
	Vdash: () => "⊩",
	Vdashl: () => "⫦",
	Vee: () => "⋁",
	Verbar: () => "‖",
	Vert: () => "‖",
	VerticalBar: () => "∣",
	VerticalLine: () => "|",
	VerticalSeparator: () => "❘",
	VerticalTilde: () => "≀",
	VeryThinSpace: () => " ",
	Vfr: () => Vfr,
	Vopf: () => Vopf,
	Vscr: () => Vscr,
	Vvdash: () => "⊪",
	Wcirc: () => "Ŵ",
	Wedge: () => "⋀",
	Wfr: () => Wfr,
	Wopf: () => Wopf,
	Wscr: () => Wscr,
	Xfr: () => Xfr,
	Xi: () => "Ξ",
	Xopf: () => Xopf,
	Xscr: () => Xscr,
	YAcy: () => "Я",
	YIcy: () => "Ї",
	YUcy: () => "Ю",
	Yacute: () => "Ý",
	Ycirc: () => "Ŷ",
	Ycy: () => "Ы",
	Yfr: () => Yfr,
	Yopf: () => Yopf,
	Yscr: () => Yscr,
	Yuml: () => "Ÿ",
	ZHcy: () => "Ж",
	Zacute: () => "Ź",
	Zcaron: () => "Ž",
	Zcy: () => "З",
	Zdot: () => "Ż",
	ZeroWidthSpace: () => "​",
	Zeta: () => "Ζ",
	Zfr: () => "ℨ",
	Zopf: () => "ℤ",
	Zscr: () => Zscr,
	aacute: () => "á",
	abreve: () => "ă",
	ac: () => "∾",
	acE: () => acE,
	acd: () => "∿",
	acirc: () => "â",
	acute: () => "´",
	acy: () => "а",
	aelig: () => "æ",
	af: () => "⁡",
	afr: () => afr,
	agrave: () => "à",
	alefsym: () => "ℵ",
	aleph: () => "ℵ",
	alpha: () => "α",
	amacr: () => "ā",
	amalg: () => "⨿",
	amp: () => "&",
	and: () => "∧",
	andand: () => "⩕",
	andd: () => "⩜",
	andslope: () => "⩘",
	andv: () => "⩚",
	ang: () => "∠",
	ange: () => "⦤",
	angle: () => "∠",
	angmsd: () => "∡",
	angmsdaa: () => "⦨",
	angmsdab: () => "⦩",
	angmsdac: () => "⦪",
	angmsdad: () => "⦫",
	angmsdae: () => "⦬",
	angmsdaf: () => "⦭",
	angmsdag: () => "⦮",
	angmsdah: () => "⦯",
	angrt: () => "∟",
	angrtvb: () => "⊾",
	angrtvbd: () => "⦝",
	angsph: () => "∢",
	angst: () => "Å",
	angzarr: () => "⍼",
	aogon: () => "ą",
	aopf: () => aopf,
	ap: () => "≈",
	apE: () => "⩰",
	apacir: () => "⩯",
	ape: () => "≊",
	apid: () => "≋",
	apos: () => "'",
	approx: () => "≈",
	approxeq: () => "≊",
	aring: () => "å",
	ascr: () => ascr,
	ast: () => "*",
	asymp: () => "≈",
	asympeq: () => "≍",
	atilde: () => "ã",
	auml: () => "ä",
	awconint: () => "∳",
	awint: () => "⨑",
	bNot: () => "⫭",
	backcong: () => "≌",
	backepsilon: () => "϶",
	backprime: () => "‵",
	backsim: () => "∽",
	backsimeq: () => "⋍",
	barvee: () => "⊽",
	barwed: () => "⌅",
	barwedge: () => "⌅",
	bbrk: () => "⎵",
	bbrktbrk: () => "⎶",
	bcong: () => "≌",
	bcy: () => "б",
	bdquo: () => "„",
	becaus: () => "∵",
	because: () => "∵",
	bemptyv: () => "⦰",
	bepsi: () => "϶",
	bernou: () => "ℬ",
	beta: () => "β",
	beth: () => "ℶ",
	between: () => "≬",
	bfr: () => bfr,
	bigcap: () => "⋂",
	bigcirc: () => "◯",
	bigcup: () => "⋃",
	bigodot: () => "⨀",
	bigoplus: () => "⨁",
	bigotimes: () => "⨂",
	bigsqcup: () => "⨆",
	bigstar: () => "★",
	bigtriangledown: () => "▽",
	bigtriangleup: () => "△",
	biguplus: () => "⨄",
	bigvee: () => "⋁",
	bigwedge: () => "⋀",
	bkarow: () => "⤍",
	blacklozenge: () => "⧫",
	blacksquare: () => "▪",
	blacktriangle: () => "▴",
	blacktriangledown: () => "▾",
	blacktriangleleft: () => "◂",
	blacktriangleright: () => "▸",
	blank: () => "␣",
	blk12: () => "▒",
	blk14: () => "░",
	blk34: () => "▓",
	block: () => "█",
	bne: () => bne,
	bnequiv: () => bnequiv,
	bnot: () => "⌐",
	bopf: () => bopf,
	bot: () => "⊥",
	bottom: () => "⊥",
	bowtie: () => "⋈",
	boxDL: () => "╗",
	boxDR: () => "╔",
	boxDl: () => "╖",
	boxDr: () => "╓",
	boxH: () => "═",
	boxHD: () => "╦",
	boxHU: () => "╩",
	boxHd: () => "╤",
	boxHu: () => "╧",
	boxUL: () => "╝",
	boxUR: () => "╚",
	boxUl: () => "╜",
	boxUr: () => "╙",
	boxV: () => "║",
	boxVH: () => "╬",
	boxVL: () => "╣",
	boxVR: () => "╠",
	boxVh: () => "╫",
	boxVl: () => "╢",
	boxVr: () => "╟",
	boxbox: () => "⧉",
	boxdL: () => "╕",
	boxdR: () => "╒",
	boxdl: () => "┐",
	boxdr: () => "┌",
	boxh: () => "─",
	boxhD: () => "╥",
	boxhU: () => "╨",
	boxhd: () => "┬",
	boxhu: () => "┴",
	boxminus: () => "⊟",
	boxplus: () => "⊞",
	boxtimes: () => "⊠",
	boxuL: () => "╛",
	boxuR: () => "╘",
	boxul: () => "┘",
	boxur: () => "└",
	boxv: () => "│",
	boxvH: () => "╪",
	boxvL: () => "╡",
	boxvR: () => "╞",
	boxvh: () => "┼",
	boxvl: () => "┤",
	boxvr: () => "├",
	bprime: () => "‵",
	breve: () => "˘",
	brvbar: () => "¦",
	bscr: () => bscr,
	bsemi: () => "⁏",
	bsim: () => "∽",
	bsime: () => "⋍",
	bsol: () => "\\",
	bsolb: () => "⧅",
	bsolhsub: () => "⟈",
	bull: () => "•",
	bullet: () => "•",
	bump: () => "≎",
	bumpE: () => "⪮",
	bumpe: () => "≏",
	bumpeq: () => "≏",
	cacute: () => "ć",
	cap: () => "∩",
	capand: () => "⩄",
	capbrcup: () => "⩉",
	capcap: () => "⩋",
	capcup: () => "⩇",
	capdot: () => "⩀",
	caps: () => caps,
	caret: () => "⁁",
	caron: () => "ˇ",
	ccaps: () => "⩍",
	ccaron: () => "č",
	ccedil: () => "ç",
	ccirc: () => "ĉ",
	ccups: () => "⩌",
	ccupssm: () => "⩐",
	cdot: () => "ċ",
	cedil: () => "¸",
	cemptyv: () => "⦲",
	cent: () => "¢",
	centerdot: () => "·",
	cfr: () => cfr,
	chcy: () => "ч",
	check: () => "✓",
	checkmark: () => "✓",
	chi: () => "χ",
	cir: () => "○",
	cirE: () => "⧃",
	circ: () => "ˆ",
	circeq: () => "≗",
	circlearrowleft: () => "↺",
	circlearrowright: () => "↻",
	circledR: () => "®",
	circledS: () => "Ⓢ",
	circledast: () => "⊛",
	circledcirc: () => "⊚",
	circleddash: () => "⊝",
	cire: () => "≗",
	cirfnint: () => "⨐",
	cirmid: () => "⫯",
	cirscir: () => "⧂",
	clubs: () => "♣",
	clubsuit: () => "♣",
	colon: () => ":",
	colone: () => "≔",
	coloneq: () => "≔",
	comma: () => ",",
	commat: () => "@",
	comp: () => "∁",
	compfn: () => "∘",
	complement: () => "∁",
	complexes: () => "ℂ",
	cong: () => "≅",
	congdot: () => "⩭",
	conint: () => "∮",
	copf: () => copf,
	coprod: () => "∐",
	copy: () => "©",
	copysr: () => "℗",
	crarr: () => "↵",
	cross: () => "✗",
	cscr: () => cscr,
	csub: () => "⫏",
	csube: () => "⫑",
	csup: () => "⫐",
	csupe: () => "⫒",
	ctdot: () => "⋯",
	cudarrl: () => "⤸",
	cudarrr: () => "⤵",
	cuepr: () => "⋞",
	cuesc: () => "⋟",
	cularr: () => "↶",
	cularrp: () => "⤽",
	cup: () => "∪",
	cupbrcap: () => "⩈",
	cupcap: () => "⩆",
	cupcup: () => "⩊",
	cupdot: () => "⊍",
	cupor: () => "⩅",
	cups: () => cups,
	curarr: () => "↷",
	curarrm: () => "⤼",
	curlyeqprec: () => "⋞",
	curlyeqsucc: () => "⋟",
	curlyvee: () => "⋎",
	curlywedge: () => "⋏",
	curren: () => "¤",
	curvearrowleft: () => "↶",
	curvearrowright: () => "↷",
	cuvee: () => "⋎",
	cuwed: () => "⋏",
	cwconint: () => "∲",
	cwint: () => "∱",
	cylcty: () => "⌭",
	dArr: () => "⇓",
	dHar: () => "⥥",
	dagger: () => "†",
	daleth: () => "ℸ",
	darr: () => "↓",
	dash: () => "‐",
	dashv: () => "⊣",
	dbkarow: () => "⤏",
	dblac: () => "˝",
	dcaron: () => "ď",
	dcy: () => "д",
	dd: () => "ⅆ",
	ddagger: () => "‡",
	ddarr: () => "⇊",
	ddotseq: () => "⩷",
	default: () => entities_default,
	deg: () => "°",
	delta: () => "δ",
	demptyv: () => "⦱",
	dfisht: () => "⥿",
	dfr: () => dfr,
	dharl: () => "⇃",
	dharr: () => "⇂",
	diam: () => "⋄",
	diamond: () => "⋄",
	diamondsuit: () => "♦",
	diams: () => "♦",
	die: () => "¨",
	digamma: () => "ϝ",
	disin: () => "⋲",
	div: () => "÷",
	divide: () => "÷",
	divideontimes: () => "⋇",
	divonx: () => "⋇",
	djcy: () => "ђ",
	dlcorn: () => "⌞",
	dlcrop: () => "⌍",
	dollar: () => "$",
	dopf: () => dopf,
	dot: () => "˙",
	doteq: () => "≐",
	doteqdot: () => "≑",
	dotminus: () => "∸",
	dotplus: () => "∔",
	dotsquare: () => "⊡",
	doublebarwedge: () => "⌆",
	downarrow: () => "↓",
	downdownarrows: () => "⇊",
	downharpoonleft: () => "⇃",
	downharpoonright: () => "⇂",
	drbkarow: () => "⤐",
	drcorn: () => "⌟",
	drcrop: () => "⌌",
	dscr: () => dscr,
	dscy: () => "ѕ",
	dsol: () => "⧶",
	dstrok: () => "đ",
	dtdot: () => "⋱",
	dtri: () => "▿",
	dtrif: () => "▾",
	duarr: () => "⇵",
	duhar: () => "⥯",
	dwangle: () => "⦦",
	dzcy: () => "џ",
	dzigrarr: () => "⟿",
	eDDot: () => "⩷",
	eDot: () => "≑",
	eacute: () => "é",
	easter: () => "⩮",
	ecaron: () => "ě",
	ecir: () => "≖",
	ecirc: () => "ê",
	ecolon: () => "≕",
	ecy: () => "э",
	edot: () => "ė",
	ee: () => "ⅇ",
	efDot: () => "≒",
	efr: () => efr,
	eg: () => "⪚",
	egrave: () => "è",
	egs: () => "⪖",
	egsdot: () => "⪘",
	el: () => "⪙",
	elinters: () => "⏧",
	ell: () => "ℓ",
	els: () => "⪕",
	elsdot: () => "⪗",
	emacr: () => "ē",
	empty: () => "∅",
	emptyset: () => "∅",
	emptyv: () => "∅",
	emsp: () => " ",
	emsp13: () => " ",
	emsp14: () => " ",
	eng: () => "ŋ",
	ensp: () => " ",
	eogon: () => "ę",
	eopf: () => eopf,
	epar: () => "⋕",
	eparsl: () => "⧣",
	eplus: () => "⩱",
	epsi: () => "ε",
	epsilon: () => "ε",
	epsiv: () => "ϵ",
	eqcirc: () => "≖",
	eqcolon: () => "≕",
	eqsim: () => "≂",
	eqslantgtr: () => "⪖",
	eqslantless: () => "⪕",
	equals: () => "=",
	equest: () => "≟",
	equiv: () => "≡",
	equivDD: () => "⩸",
	eqvparsl: () => "⧥",
	erDot: () => "≓",
	erarr: () => "⥱",
	escr: () => "ℯ",
	esdot: () => "≐",
	esim: () => "≂",
	eta: () => "η",
	eth: () => "ð",
	euml: () => "ë",
	euro: () => "€",
	excl: () => "!",
	exist: () => "∃",
	expectation: () => "ℰ",
	exponentiale: () => "ⅇ",
	fallingdotseq: () => "≒",
	fcy: () => "ф",
	female: () => "♀",
	ffilig: () => "ﬃ",
	fflig: () => "ﬀ",
	ffllig: () => "ﬄ",
	ffr: () => ffr,
	filig: () => "ﬁ",
	fjlig: () => "fj",
	flat: () => "♭",
	fllig: () => "ﬂ",
	fltns: () => "▱",
	fnof: () => "ƒ",
	fopf: () => fopf,
	forall: () => "∀",
	fork: () => "⋔",
	forkv: () => "⫙",
	fpartint: () => "⨍",
	frac12: () => "½",
	frac13: () => "⅓",
	frac14: () => "¼",
	frac15: () => "⅕",
	frac16: () => "⅙",
	frac18: () => "⅛",
	frac23: () => "⅔",
	frac25: () => "⅖",
	frac34: () => "¾",
	frac35: () => "⅗",
	frac38: () => "⅜",
	frac45: () => "⅘",
	frac56: () => "⅚",
	frac58: () => "⅝",
	frac78: () => "⅞",
	frasl: () => "⁄",
	frown: () => "⌢",
	fscr: () => fscr,
	gE: () => "≧",
	gEl: () => "⪌",
	gacute: () => "ǵ",
	gamma: () => "γ",
	gammad: () => "ϝ",
	gap: () => "⪆",
	gbreve: () => "ğ",
	gcirc: () => "ĝ",
	gcy: () => "г",
	gdot: () => "ġ",
	ge: () => "≥",
	gel: () => "⋛",
	geq: () => "≥",
	geqq: () => "≧",
	geqslant: () => "⩾",
	ges: () => "⩾",
	gescc: () => "⪩",
	gesdot: () => "⪀",
	gesdoto: () => "⪂",
	gesdotol: () => "⪄",
	gesl: () => gesl,
	gesles: () => "⪔",
	gfr: () => gfr,
	gg: () => "≫",
	ggg: () => "⋙",
	gimel: () => "ℷ",
	gjcy: () => "ѓ",
	gl: () => "≷",
	glE: () => "⪒",
	gla: () => "⪥",
	glj: () => "⪤",
	gnE: () => "≩",
	gnap: () => "⪊",
	gnapprox: () => "⪊",
	gne: () => "⪈",
	gneq: () => "⪈",
	gneqq: () => "≩",
	gnsim: () => "⋧",
	gopf: () => gopf,
	grave: () => "`",
	gscr: () => "ℊ",
	gsim: () => "≳",
	gsime: () => "⪎",
	gsiml: () => "⪐",
	gt: () => ">",
	gtcc: () => "⪧",
	gtcir: () => "⩺",
	gtdot: () => "⋗",
	gtlPar: () => "⦕",
	gtquest: () => "⩼",
	gtrapprox: () => "⪆",
	gtrarr: () => "⥸",
	gtrdot: () => "⋗",
	gtreqless: () => "⋛",
	gtreqqless: () => "⪌",
	gtrless: () => "≷",
	gtrsim: () => "≳",
	gvertneqq: () => gvertneqq,
	gvnE: () => gvnE,
	hArr: () => "⇔",
	hairsp: () => " ",
	half: () => "½",
	hamilt: () => "ℋ",
	hardcy: () => "ъ",
	harr: () => "↔",
	harrcir: () => "⥈",
	harrw: () => "↭",
	hbar: () => "ℏ",
	hcirc: () => "ĥ",
	hearts: () => "♥",
	heartsuit: () => "♥",
	hellip: () => "…",
	hercon: () => "⊹",
	hfr: () => hfr,
	hksearow: () => "⤥",
	hkswarow: () => "⤦",
	hoarr: () => "⇿",
	homtht: () => "∻",
	hookleftarrow: () => "↩",
	hookrightarrow: () => "↪",
	hopf: () => hopf,
	horbar: () => "―",
	hscr: () => hscr,
	hslash: () => "ℏ",
	hstrok: () => "ħ",
	hybull: () => "⁃",
	hyphen: () => "‐",
	iacute: () => "í",
	ic: () => "⁣",
	icirc: () => "î",
	icy: () => "и",
	iecy: () => "е",
	iexcl: () => "¡",
	iff: () => "⇔",
	ifr: () => ifr,
	igrave: () => "ì",
	ii: () => "ⅈ",
	iiiint: () => "⨌",
	iiint: () => "∭",
	iinfin: () => "⧜",
	iiota: () => "℩",
	ijlig: () => "ĳ",
	imacr: () => "ī",
	image: () => "ℑ",
	imagline: () => "ℐ",
	imagpart: () => "ℑ",
	imath: () => "ı",
	imof: () => "⊷",
	imped: () => "Ƶ",
	incare: () => "℅",
	infin: () => "∞",
	infintie: () => "⧝",
	inodot: () => "ı",
	int: () => "∫",
	intcal: () => "⊺",
	integers: () => "ℤ",
	intercal: () => "⊺",
	intlarhk: () => "⨗",
	intprod: () => "⨼",
	iocy: () => "ё",
	iogon: () => "į",
	iopf: () => iopf,
	iota: () => "ι",
	iprod: () => "⨼",
	iquest: () => "¿",
	iscr: () => iscr,
	isin: () => "∈",
	isinE: () => "⋹",
	isindot: () => "⋵",
	isins: () => "⋴",
	isinsv: () => "⋳",
	isinv: () => "∈",
	it: () => "⁢",
	itilde: () => "ĩ",
	iukcy: () => "і",
	iuml: () => "ï",
	jcirc: () => "ĵ",
	jcy: () => "й",
	jfr: () => jfr,
	jmath: () => "ȷ",
	jopf: () => jopf,
	jscr: () => jscr,
	jsercy: () => "ј",
	jukcy: () => "є",
	kappa: () => "κ",
	kappav: () => "ϰ",
	kcedil: () => "ķ",
	kcy: () => "к",
	kfr: () => kfr,
	kgreen: () => "ĸ",
	khcy: () => "х",
	kjcy: () => "ќ",
	kopf: () => kopf,
	kscr: () => kscr,
	lAarr: () => "⇚",
	lArr: () => "⇐",
	lAtail: () => "⤛",
	lBarr: () => "⤎",
	lE: () => "≦",
	lEg: () => "⪋",
	lHar: () => "⥢",
	lacute: () => "ĺ",
	laemptyv: () => "⦴",
	lagran: () => "ℒ",
	lambda: () => "λ",
	lang: () => "⟨",
	langd: () => "⦑",
	langle: () => "⟨",
	lap: () => "⪅",
	laquo: () => "«",
	larr: () => "←",
	larrb: () => "⇤",
	larrbfs: () => "⤟",
	larrfs: () => "⤝",
	larrhk: () => "↩",
	larrlp: () => "↫",
	larrpl: () => "⤹",
	larrsim: () => "⥳",
	larrtl: () => "↢",
	lat: () => "⪫",
	latail: () => "⤙",
	late: () => "⪭",
	lates: () => lates,
	lbarr: () => "⤌",
	lbbrk: () => "❲",
	lbrace: () => "{",
	lbrack: () => "[",
	lbrke: () => "⦋",
	lbrksld: () => "⦏",
	lbrkslu: () => "⦍",
	lcaron: () => "ľ",
	lcedil: () => "ļ",
	lceil: () => "⌈",
	lcub: () => "{",
	lcy: () => "л",
	ldca: () => "⤶",
	ldquo: () => "“",
	ldquor: () => "„",
	ldrdhar: () => "⥧",
	ldrushar: () => "⥋",
	ldsh: () => "↲",
	le: () => "≤",
	leftarrow: () => "←",
	leftarrowtail: () => "↢",
	leftharpoondown: () => "↽",
	leftharpoonup: () => "↼",
	leftleftarrows: () => "⇇",
	leftrightarrow: () => "↔",
	leftrightarrows: () => "⇆",
	leftrightharpoons: () => "⇋",
	leftrightsquigarrow: () => "↭",
	leftthreetimes: () => "⋋",
	leg: () => "⋚",
	leq: () => "≤",
	leqq: () => "≦",
	leqslant: () => "⩽",
	les: () => "⩽",
	lescc: () => "⪨",
	lesdot: () => "⩿",
	lesdoto: () => "⪁",
	lesdotor: () => "⪃",
	lesg: () => lesg,
	lesges: () => "⪓",
	lessapprox: () => "⪅",
	lessdot: () => "⋖",
	lesseqgtr: () => "⋚",
	lesseqqgtr: () => "⪋",
	lessgtr: () => "≶",
	lesssim: () => "≲",
	lfisht: () => "⥼",
	lfloor: () => "⌊",
	lfr: () => lfr,
	lg: () => "≶",
	lgE: () => "⪑",
	lhard: () => "↽",
	lharu: () => "↼",
	lharul: () => "⥪",
	lhblk: () => "▄",
	ljcy: () => "љ",
	ll: () => "≪",
	llarr: () => "⇇",
	llcorner: () => "⌞",
	llhard: () => "⥫",
	lltri: () => "◺",
	lmidot: () => "ŀ",
	lmoust: () => "⎰",
	lmoustache: () => "⎰",
	lnE: () => "≨",
	lnap: () => "⪉",
	lnapprox: () => "⪉",
	lne: () => "⪇",
	lneq: () => "⪇",
	lneqq: () => "≨",
	lnsim: () => "⋦",
	loang: () => "⟬",
	loarr: () => "⇽",
	lobrk: () => "⟦",
	longleftarrow: () => "⟵",
	longleftrightarrow: () => "⟷",
	longmapsto: () => "⟼",
	longrightarrow: () => "⟶",
	looparrowleft: () => "↫",
	looparrowright: () => "↬",
	lopar: () => "⦅",
	lopf: () => lopf,
	loplus: () => "⨭",
	lotimes: () => "⨴",
	lowast: () => "∗",
	lowbar: () => "_",
	loz: () => "◊",
	lozenge: () => "◊",
	lozf: () => "⧫",
	lpar: () => "(",
	lparlt: () => "⦓",
	lrarr: () => "⇆",
	lrcorner: () => "⌟",
	lrhar: () => "⇋",
	lrhard: () => "⥭",
	lrm: () => "‎",
	lrtri: () => "⊿",
	lsaquo: () => "‹",
	lscr: () => lscr,
	lsh: () => "↰",
	lsim: () => "≲",
	lsime: () => "⪍",
	lsimg: () => "⪏",
	lsqb: () => "[",
	lsquo: () => "‘",
	lsquor: () => "‚",
	lstrok: () => "ł",
	lt: () => "<",
	ltcc: () => "⪦",
	ltcir: () => "⩹",
	ltdot: () => "⋖",
	lthree: () => "⋋",
	ltimes: () => "⋉",
	ltlarr: () => "⥶",
	ltquest: () => "⩻",
	ltrPar: () => "⦖",
	ltri: () => "◃",
	ltrie: () => "⊴",
	ltrif: () => "◂",
	lurdshar: () => "⥊",
	luruhar: () => "⥦",
	lvertneqq: () => lvertneqq,
	lvnE: () => lvnE,
	mDDot: () => "∺",
	macr: () => "¯",
	male: () => "♂",
	malt: () => "✠",
	maltese: () => "✠",
	map: () => "↦",
	mapsto: () => "↦",
	mapstodown: () => "↧",
	mapstoleft: () => "↤",
	mapstoup: () => "↥",
	marker: () => "▮",
	mcomma: () => "⨩",
	mcy: () => "м",
	mdash: () => "—",
	measuredangle: () => "∡",
	mfr: () => mfr,
	mho: () => "℧",
	micro: () => "µ",
	mid: () => "∣",
	midast: () => "*",
	midcir: () => "⫰",
	middot: () => "·",
	minus: () => "−",
	minusb: () => "⊟",
	minusd: () => "∸",
	minusdu: () => "⨪",
	mlcp: () => "⫛",
	mldr: () => "…",
	mnplus: () => "∓",
	models: () => "⊧",
	mopf: () => mopf,
	mp: () => "∓",
	mscr: () => mscr,
	mstpos: () => "∾",
	mu: () => "μ",
	multimap: () => "⊸",
	mumap: () => "⊸",
	nGg: () => nGg,
	nGt: () => nGt,
	nGtv: () => nGtv,
	nLeftarrow: () => "⇍",
	nLeftrightarrow: () => "⇎",
	nLl: () => nLl,
	nLt: () => nLt,
	nLtv: () => nLtv,
	nRightarrow: () => "⇏",
	nVDash: () => "⊯",
	nVdash: () => "⊮",
	nabla: () => "∇",
	nacute: () => "ń",
	nang: () => nang,
	nap: () => "≉",
	napE: () => napE,
	napid: () => napid,
	napos: () => "ŉ",
	napprox: () => "≉",
	natur: () => "♮",
	natural: () => "♮",
	naturals: () => "ℕ",
	nbsp: () => "\xA0",
	nbump: () => nbump,
	nbumpe: () => nbumpe,
	ncap: () => "⩃",
	ncaron: () => "ň",
	ncedil: () => "ņ",
	ncong: () => "≇",
	ncongdot: () => ncongdot,
	ncup: () => "⩂",
	ncy: () => "н",
	ndash: () => "–",
	ne: () => "≠",
	neArr: () => "⇗",
	nearhk: () => "⤤",
	nearr: () => "↗",
	nearrow: () => "↗",
	nedot: () => nedot,
	nequiv: () => "≢",
	nesear: () => "⤨",
	nesim: () => nesim,
	nexist: () => "∄",
	nexists: () => "∄",
	nfr: () => nfr,
	ngE: () => ngE,
	nge: () => "≱",
	ngeq: () => "≱",
	ngeqq: () => ngeqq,
	ngeqslant: () => ngeqslant,
	nges: () => nges,
	ngsim: () => "≵",
	ngt: () => "≯",
	ngtr: () => "≯",
	nhArr: () => "⇎",
	nharr: () => "↮",
	nhpar: () => "⫲",
	ni: () => "∋",
	nis: () => "⋼",
	nisd: () => "⋺",
	niv: () => "∋",
	njcy: () => "њ",
	nlArr: () => "⇍",
	nlE: () => nlE,
	nlarr: () => "↚",
	nldr: () => "‥",
	nle: () => "≰",
	nleftarrow: () => "↚",
	nleftrightarrow: () => "↮",
	nleq: () => "≰",
	nleqq: () => nleqq,
	nleqslant: () => nleqslant,
	nles: () => nles,
	nless: () => "≮",
	nlsim: () => "≴",
	nlt: () => "≮",
	nltri: () => "⋪",
	nltrie: () => "⋬",
	nmid: () => "∤",
	nopf: () => nopf,
	not: () => "¬",
	notin: () => "∉",
	notinE: () => notinE,
	notindot: () => notindot,
	notinva: () => "∉",
	notinvb: () => "⋷",
	notinvc: () => "⋶",
	notni: () => "∌",
	notniva: () => "∌",
	notnivb: () => "⋾",
	notnivc: () => "⋽",
	npar: () => "∦",
	nparallel: () => "∦",
	nparsl: () => nparsl,
	npart: () => npart,
	npolint: () => "⨔",
	npr: () => "⊀",
	nprcue: () => "⋠",
	npre: () => npre,
	nprec: () => "⊀",
	npreceq: () => npreceq,
	nrArr: () => "⇏",
	nrarr: () => "↛",
	nrarrc: () => nrarrc,
	nrarrw: () => nrarrw,
	nrightarrow: () => "↛",
	nrtri: () => "⋫",
	nrtrie: () => "⋭",
	nsc: () => "⊁",
	nsccue: () => "⋡",
	nsce: () => nsce,
	nscr: () => nscr,
	nshortmid: () => "∤",
	nshortparallel: () => "∦",
	nsim: () => "≁",
	nsime: () => "≄",
	nsimeq: () => "≄",
	nsmid: () => "∤",
	nspar: () => "∦",
	nsqsube: () => "⋢",
	nsqsupe: () => "⋣",
	nsub: () => "⊄",
	nsubE: () => nsubE,
	nsube: () => "⊈",
	nsubset: () => nsubset,
	nsubseteq: () => "⊈",
	nsubseteqq: () => nsubseteqq,
	nsucc: () => "⊁",
	nsucceq: () => nsucceq,
	nsup: () => "⊅",
	nsupE: () => nsupE,
	nsupe: () => "⊉",
	nsupset: () => nsupset,
	nsupseteq: () => "⊉",
	nsupseteqq: () => nsupseteqq,
	ntgl: () => "≹",
	ntilde: () => "ñ",
	ntlg: () => "≸",
	ntriangleleft: () => "⋪",
	ntrianglelefteq: () => "⋬",
	ntriangleright: () => "⋫",
	ntrianglerighteq: () => "⋭",
	nu: () => "ν",
	num: () => "#",
	numero: () => "№",
	numsp: () => " ",
	nvDash: () => "⊭",
	nvHarr: () => "⤄",
	nvap: () => nvap,
	nvdash: () => "⊬",
	nvge: () => nvge,
	nvgt: () => nvgt,
	nvinfin: () => "⧞",
	nvlArr: () => "⤂",
	nvle: () => nvle,
	nvlt: () => nvlt,
	nvltrie: () => nvltrie,
	nvrArr: () => "⤃",
	nvrtrie: () => nvrtrie,
	nvsim: () => nvsim,
	nwArr: () => "⇖",
	nwarhk: () => "⤣",
	nwarr: () => "↖",
	nwarrow: () => "↖",
	nwnear: () => "⤧",
	oS: () => "Ⓢ",
	oacute: () => "ó",
	oast: () => "⊛",
	ocir: () => "⊚",
	ocirc: () => "ô",
	ocy: () => "о",
	odash: () => "⊝",
	odblac: () => "ő",
	odiv: () => "⨸",
	odot: () => "⊙",
	odsold: () => "⦼",
	oelig: () => "œ",
	ofcir: () => "⦿",
	ofr: () => ofr,
	ogon: () => "˛",
	ograve: () => "ò",
	ogt: () => "⧁",
	ohbar: () => "⦵",
	ohm: () => "Ω",
	oint: () => "∮",
	olarr: () => "↺",
	olcir: () => "⦾",
	olcross: () => "⦻",
	oline: () => "‾",
	olt: () => "⧀",
	omacr: () => "ō",
	omega: () => "ω",
	omicron: () => "ο",
	omid: () => "⦶",
	ominus: () => "⊖",
	oopf: () => oopf,
	opar: () => "⦷",
	operp: () => "⦹",
	oplus: () => "⊕",
	or: () => "∨",
	orarr: () => "↻",
	ord: () => "⩝",
	order: () => "ℴ",
	orderof: () => "ℴ",
	ordf: () => "ª",
	ordm: () => "º",
	origof: () => "⊶",
	oror: () => "⩖",
	orslope: () => "⩗",
	orv: () => "⩛",
	oscr: () => "ℴ",
	oslash: () => "ø",
	osol: () => "⊘",
	otilde: () => "õ",
	otimes: () => "⊗",
	otimesas: () => "⨶",
	ouml: () => "ö",
	ovbar: () => "⌽",
	par: () => "∥",
	para: () => "¶",
	parallel: () => "∥",
	parsim: () => "⫳",
	parsl: () => "⫽",
	part: () => "∂",
	pcy: () => "п",
	percnt: () => "%",
	period: () => ".",
	permil: () => "‰",
	perp: () => "⊥",
	pertenk: () => "‱",
	pfr: () => pfr,
	phi: () => "φ",
	phiv: () => "ϕ",
	phmmat: () => "ℳ",
	phone: () => "☎",
	pi: () => "π",
	pitchfork: () => "⋔",
	piv: () => "ϖ",
	planck: () => "ℏ",
	planckh: () => "ℎ",
	plankv: () => "ℏ",
	plus: () => "+",
	plusacir: () => "⨣",
	plusb: () => "⊞",
	pluscir: () => "⨢",
	plusdo: () => "∔",
	plusdu: () => "⨥",
	pluse: () => "⩲",
	plusmn: () => "±",
	plussim: () => "⨦",
	plustwo: () => "⨧",
	pm: () => "±",
	pointint: () => "⨕",
	popf: () => popf,
	pound: () => "£",
	pr: () => "≺",
	prE: () => "⪳",
	prap: () => "⪷",
	prcue: () => "≼",
	pre: () => "⪯",
	prec: () => "≺",
	precapprox: () => "⪷",
	preccurlyeq: () => "≼",
	preceq: () => "⪯",
	precnapprox: () => "⪹",
	precneqq: () => "⪵",
	precnsim: () => "⋨",
	precsim: () => "≾",
	prime: () => "′",
	primes: () => "ℙ",
	prnE: () => "⪵",
	prnap: () => "⪹",
	prnsim: () => "⋨",
	prod: () => "∏",
	profalar: () => "⌮",
	profline: () => "⌒",
	profsurf: () => "⌓",
	prop: () => "∝",
	propto: () => "∝",
	prsim: () => "≾",
	prurel: () => "⊰",
	pscr: () => pscr,
	psi: () => "ψ",
	puncsp: () => " ",
	qfr: () => qfr,
	qint: () => "⨌",
	qopf: () => qopf,
	qprime: () => "⁗",
	qscr: () => qscr,
	quaternions: () => "ℍ",
	quatint: () => "⨖",
	quest: () => "?",
	questeq: () => "≟",
	quot: () => "\"",
	rAarr: () => "⇛",
	rArr: () => "⇒",
	rAtail: () => "⤜",
	rBarr: () => "⤏",
	rHar: () => "⥤",
	race: () => race,
	racute: () => "ŕ",
	radic: () => "√",
	raemptyv: () => "⦳",
	rang: () => "⟩",
	rangd: () => "⦒",
	range: () => "⦥",
	rangle: () => "⟩",
	raquo: () => "»",
	rarr: () => "→",
	rarrap: () => "⥵",
	rarrb: () => "⇥",
	rarrbfs: () => "⤠",
	rarrc: () => "⤳",
	rarrfs: () => "⤞",
	rarrhk: () => "↪",
	rarrlp: () => "↬",
	rarrpl: () => "⥅",
	rarrsim: () => "⥴",
	rarrtl: () => "↣",
	rarrw: () => "↝",
	ratail: () => "⤚",
	ratio: () => "∶",
	rationals: () => "ℚ",
	rbarr: () => "⤍",
	rbbrk: () => "❳",
	rbrace: () => "}",
	rbrack: () => "]",
	rbrke: () => "⦌",
	rbrksld: () => "⦎",
	rbrkslu: () => "⦐",
	rcaron: () => "ř",
	rcedil: () => "ŗ",
	rceil: () => "⌉",
	rcub: () => "}",
	rcy: () => "р",
	rdca: () => "⤷",
	rdldhar: () => "⥩",
	rdquo: () => "”",
	rdquor: () => "”",
	rdsh: () => "↳",
	real: () => "ℜ",
	realine: () => "ℛ",
	realpart: () => "ℜ",
	reals: () => "ℝ",
	rect: () => "▭",
	reg: () => "®",
	rfisht: () => "⥽",
	rfloor: () => "⌋",
	rfr: () => rfr,
	rhard: () => "⇁",
	rharu: () => "⇀",
	rharul: () => "⥬",
	rho: () => "ρ",
	rhov: () => "ϱ",
	rightarrow: () => "→",
	rightarrowtail: () => "↣",
	rightharpoondown: () => "⇁",
	rightharpoonup: () => "⇀",
	rightleftarrows: () => "⇄",
	rightleftharpoons: () => "⇌",
	rightrightarrows: () => "⇉",
	rightsquigarrow: () => "↝",
	rightthreetimes: () => "⋌",
	ring: () => "˚",
	risingdotseq: () => "≓",
	rlarr: () => "⇄",
	rlhar: () => "⇌",
	rlm: () => "‏",
	rmoust: () => "⎱",
	rmoustache: () => "⎱",
	rnmid: () => "⫮",
	roang: () => "⟭",
	roarr: () => "⇾",
	robrk: () => "⟧",
	ropar: () => "⦆",
	ropf: () => ropf,
	roplus: () => "⨮",
	rotimes: () => "⨵",
	rpar: () => ")",
	rpargt: () => "⦔",
	rppolint: () => "⨒",
	rrarr: () => "⇉",
	rsaquo: () => "›",
	rscr: () => rscr,
	rsh: () => "↱",
	rsqb: () => "]",
	rsquo: () => "’",
	rsquor: () => "’",
	rthree: () => "⋌",
	rtimes: () => "⋊",
	rtri: () => "▹",
	rtrie: () => "⊵",
	rtrif: () => "▸",
	rtriltri: () => "⧎",
	ruluhar: () => "⥨",
	rx: () => "℞",
	sacute: () => "ś",
	sbquo: () => "‚",
	sc: () => "≻",
	scE: () => "⪴",
	scap: () => "⪸",
	scaron: () => "š",
	sccue: () => "≽",
	sce: () => "⪰",
	scedil: () => "ş",
	scirc: () => "ŝ",
	scnE: () => "⪶",
	scnap: () => "⪺",
	scnsim: () => "⋩",
	scpolint: () => "⨓",
	scsim: () => "≿",
	scy: () => "с",
	sdot: () => "⋅",
	sdotb: () => "⊡",
	sdote: () => "⩦",
	seArr: () => "⇘",
	searhk: () => "⤥",
	searr: () => "↘",
	searrow: () => "↘",
	sect: () => "§",
	semi: () => ";",
	seswar: () => "⤩",
	setminus: () => "∖",
	setmn: () => "∖",
	sext: () => "✶",
	sfr: () => sfr,
	sfrown: () => "⌢",
	sharp: () => "♯",
	shchcy: () => "щ",
	shcy: () => "ш",
	shortmid: () => "∣",
	shortparallel: () => "∥",
	shy: () => "­",
	sigma: () => "σ",
	sigmaf: () => "ς",
	sigmav: () => "ς",
	sim: () => "∼",
	simdot: () => "⩪",
	sime: () => "≃",
	simeq: () => "≃",
	simg: () => "⪞",
	simgE: () => "⪠",
	siml: () => "⪝",
	simlE: () => "⪟",
	simne: () => "≆",
	simplus: () => "⨤",
	simrarr: () => "⥲",
	slarr: () => "←",
	smallsetminus: () => "∖",
	smashp: () => "⨳",
	smeparsl: () => "⧤",
	smid: () => "∣",
	smile: () => "⌣",
	smt: () => "⪪",
	smte: () => "⪬",
	smtes: () => smtes,
	softcy: () => "ь",
	sol: () => "/",
	solb: () => "⧄",
	solbar: () => "⌿",
	sopf: () => sopf,
	spades: () => "♠",
	spadesuit: () => "♠",
	spar: () => "∥",
	sqcap: () => "⊓",
	sqcaps: () => sqcaps,
	sqcup: () => "⊔",
	sqcups: () => sqcups,
	sqsub: () => "⊏",
	sqsube: () => "⊑",
	sqsubset: () => "⊏",
	sqsubseteq: () => "⊑",
	sqsup: () => "⊐",
	sqsupe: () => "⊒",
	sqsupset: () => "⊐",
	sqsupseteq: () => "⊒",
	squ: () => "□",
	square: () => "□",
	squarf: () => "▪",
	squf: () => "▪",
	srarr: () => "→",
	sscr: () => sscr,
	ssetmn: () => "∖",
	ssmile: () => "⌣",
	sstarf: () => "⋆",
	star: () => "☆",
	starf: () => "★",
	straightepsilon: () => "ϵ",
	straightphi: () => "ϕ",
	strns: () => "¯",
	sub: () => "⊂",
	subE: () => "⫅",
	subdot: () => "⪽",
	sube: () => "⊆",
	subedot: () => "⫃",
	submult: () => "⫁",
	subnE: () => "⫋",
	subne: () => "⊊",
	subplus: () => "⪿",
	subrarr: () => "⥹",
	subset: () => "⊂",
	subseteq: () => "⊆",
	subseteqq: () => "⫅",
	subsetneq: () => "⊊",
	subsetneqq: () => "⫋",
	subsim: () => "⫇",
	subsub: () => "⫕",
	subsup: () => "⫓",
	succ: () => "≻",
	succapprox: () => "⪸",
	succcurlyeq: () => "≽",
	succeq: () => "⪰",
	succnapprox: () => "⪺",
	succneqq: () => "⪶",
	succnsim: () => "⋩",
	succsim: () => "≿",
	sum: () => "∑",
	sung: () => "♪",
	sup: () => "⊃",
	sup1: () => "¹",
	sup2: () => "²",
	sup3: () => "³",
	supE: () => "⫆",
	supdot: () => "⪾",
	supdsub: () => "⫘",
	supe: () => "⊇",
	supedot: () => "⫄",
	suphsol: () => "⟉",
	suphsub: () => "⫗",
	suplarr: () => "⥻",
	supmult: () => "⫂",
	supnE: () => "⫌",
	supne: () => "⊋",
	supplus: () => "⫀",
	supset: () => "⊃",
	supseteq: () => "⊇",
	supseteqq: () => "⫆",
	supsetneq: () => "⊋",
	supsetneqq: () => "⫌",
	supsim: () => "⫈",
	supsub: () => "⫔",
	supsup: () => "⫖",
	swArr: () => "⇙",
	swarhk: () => "⤦",
	swarr: () => "↙",
	swarrow: () => "↙",
	swnwar: () => "⤪",
	szlig: () => "ß",
	target: () => "⌖",
	tau: () => "τ",
	tbrk: () => "⎴",
	tcaron: () => "ť",
	tcedil: () => "ţ",
	tcy: () => "т",
	tdot: () => "⃛",
	telrec: () => "⌕",
	tfr: () => tfr,
	there4: () => "∴",
	therefore: () => "∴",
	theta: () => "θ",
	thetasym: () => "ϑ",
	thetav: () => "ϑ",
	thickapprox: () => "≈",
	thicksim: () => "∼",
	thinsp: () => " ",
	thkap: () => "≈",
	thksim: () => "∼",
	thorn: () => "þ",
	tilde: () => "˜",
	times: () => "×",
	timesb: () => "⊠",
	timesbar: () => "⨱",
	timesd: () => "⨰",
	tint: () => "∭",
	toea: () => "⤨",
	top: () => "⊤",
	topbot: () => "⌶",
	topcir: () => "⫱",
	topf: () => topf,
	topfork: () => "⫚",
	tosa: () => "⤩",
	tprime: () => "‴",
	trade: () => "™",
	triangle: () => "▵",
	triangledown: () => "▿",
	triangleleft: () => "◃",
	trianglelefteq: () => "⊴",
	triangleq: () => "≜",
	triangleright: () => "▹",
	trianglerighteq: () => "⊵",
	tridot: () => "◬",
	trie: () => "≜",
	triminus: () => "⨺",
	triplus: () => "⨹",
	trisb: () => "⧍",
	tritime: () => "⨻",
	trpezium: () => "⏢",
	tscr: () => tscr,
	tscy: () => "ц",
	tshcy: () => "ћ",
	tstrok: () => "ŧ",
	twixt: () => "≬",
	twoheadleftarrow: () => "↞",
	twoheadrightarrow: () => "↠",
	uArr: () => "⇑",
	uHar: () => "⥣",
	uacute: () => "ú",
	uarr: () => "↑",
	ubrcy: () => "ў",
	ubreve: () => "ŭ",
	ucirc: () => "û",
	ucy: () => "у",
	udarr: () => "⇅",
	udblac: () => "ű",
	udhar: () => "⥮",
	ufisht: () => "⥾",
	ufr: () => ufr,
	ugrave: () => "ù",
	uharl: () => "↿",
	uharr: () => "↾",
	uhblk: () => "▀",
	ulcorn: () => "⌜",
	ulcorner: () => "⌜",
	ulcrop: () => "⌏",
	ultri: () => "◸",
	umacr: () => "ū",
	uml: () => "¨",
	uogon: () => "ų",
	uopf: () => uopf,
	uparrow: () => "↑",
	updownarrow: () => "↕",
	upharpoonleft: () => "↿",
	upharpoonright: () => "↾",
	uplus: () => "⊎",
	upsi: () => "υ",
	upsih: () => "ϒ",
	upsilon: () => "υ",
	upuparrows: () => "⇈",
	urcorn: () => "⌝",
	urcorner: () => "⌝",
	urcrop: () => "⌎",
	uring: () => "ů",
	urtri: () => "◹",
	uscr: () => uscr,
	utdot: () => "⋰",
	utilde: () => "ũ",
	utri: () => "▵",
	utrif: () => "▴",
	uuarr: () => "⇈",
	uuml: () => "ü",
	uwangle: () => "⦧",
	vArr: () => "⇕",
	vBar: () => "⫨",
	vBarv: () => "⫩",
	vDash: () => "⊨",
	vangrt: () => "⦜",
	varepsilon: () => "ϵ",
	varkappa: () => "ϰ",
	varnothing: () => "∅",
	varphi: () => "ϕ",
	varpi: () => "ϖ",
	varpropto: () => "∝",
	varr: () => "↕",
	varrho: () => "ϱ",
	varsigma: () => "ς",
	varsubsetneq: () => varsubsetneq,
	varsubsetneqq: () => varsubsetneqq,
	varsupsetneq: () => varsupsetneq,
	varsupsetneqq: () => varsupsetneqq,
	vartheta: () => "ϑ",
	vartriangleleft: () => "⊲",
	vartriangleright: () => "⊳",
	vcy: () => "в",
	vdash: () => "⊢",
	vee: () => "∨",
	veebar: () => "⊻",
	veeeq: () => "≚",
	vellip: () => "⋮",
	verbar: () => "|",
	vert: () => "|",
	vfr: () => vfr,
	vltri: () => "⊲",
	vnsub: () => vnsub,
	vnsup: () => vnsup,
	vopf: () => vopf,
	vprop: () => "∝",
	vrtri: () => "⊳",
	vscr: () => vscr,
	vsubnE: () => vsubnE,
	vsubne: () => vsubne,
	vsupnE: () => vsupnE,
	vsupne: () => vsupne,
	vzigzag: () => "⦚",
	wcirc: () => "ŵ",
	wedbar: () => "⩟",
	wedge: () => "∧",
	wedgeq: () => "≙",
	weierp: () => "℘",
	wfr: () => wfr,
	wopf: () => wopf,
	wp: () => "℘",
	wr: () => "≀",
	wreath: () => "≀",
	wscr: () => wscr,
	xcap: () => "⋂",
	xcirc: () => "◯",
	xcup: () => "⋃",
	xdtri: () => "▽",
	xfr: () => xfr,
	xhArr: () => "⟺",
	xharr: () => "⟷",
	xi: () => "ξ",
	xlArr: () => "⟸",
	xlarr: () => "⟵",
	xmap: () => "⟼",
	xnis: () => "⋻",
	xodot: () => "⨀",
	xopf: () => xopf,
	xoplus: () => "⨁",
	xotime: () => "⨂",
	xrArr: () => "⟹",
	xrarr: () => "⟶",
	xscr: () => xscr,
	xsqcup: () => "⨆",
	xuplus: () => "⨄",
	xutri: () => "△",
	xvee: () => "⋁",
	xwedge: () => "⋀",
	yacute: () => "ý",
	yacy: () => "я",
	ycirc: () => "ŷ",
	ycy: () => "ы",
	yen: () => "¥",
	yfr: () => yfr,
	yicy: () => "ї",
	yopf: () => yopf,
	yscr: () => yscr,
	yucy: () => "ю",
	yuml: () => "ÿ",
	zacute: () => "ź",
	zcaron: () => "ž",
	zcy: () => "з",
	zdot: () => "ż",
	zeetrf: () => "ℨ",
	zeta: () => "ζ",
	zfr: () => zfr,
	zhcy: () => "ж",
	zigrarr: () => "⇝",
	zopf: () => zopf,
	zscr: () => zscr,
	zwj: () => "‍",
	zwnj: () => "‌"
}), acE, Afr, afr, Aopf, aopf, Ascr, ascr, Bfr, bfr, bne, bnequiv, Bopf, bopf, bscr, caps, cfr, copf, Cscr, cscr, cups, Dfr, dfr, Dopf, dopf, Dscr, dscr, Efr, efr, Eopf, eopf, Ffr, ffr, Fopf, fopf, fscr, gesl, Gfr, gfr, Gopf, gopf, Gscr, gvertneqq, gvnE, hfr, hopf, hscr, ifr, Iopf, iopf, iscr, Jfr, jfr, Jopf, jopf, Jscr, jscr, Kfr, kfr, Kopf, kopf, Kscr, kscr, lates, lesg, Lfr, lfr, Lopf, lopf, lscr, lvertneqq, lvnE, Mfr, mfr, Mopf, mopf, mscr, nang, napE, napid, nbump, nbumpe, ncongdot, nedot, nesim, Nfr, nfr, ngE, ngeqq, ngeqslant, nges, nGg, nGt, nGtv, nlE, nleqq, nleqslant, nles, nLl, nLt, nLtv, nopf, NotEqualTilde, NotGreaterFullEqual, NotGreaterGreater, NotGreaterSlantEqual, NotHumpDownHump, NotHumpEqual, notindot, notinE, NotLeftTriangleBar, NotLessLess, NotLessSlantEqual, NotNestedGreaterGreater, NotNestedLessLess, NotPrecedesEqual, NotRightTriangleBar, NotSquareSubset, NotSquareSuperset, NotSubset, NotSucceedsEqual, NotSucceedsTilde, NotSuperset, nparsl, npart, npreceq, npre, nrarrc, nrarrw, nsce, Nscr, nscr, nsubE, nsubset, nsubseteqq, nsucceq, nsupE, nsupset, nsupseteqq, nvap, nvge, nvgt, nvle, nvlt, nvltrie, nvrtrie, nvsim, Ofr, ofr, Oopf, oopf, Oscr, Pfr, pfr, popf, Pscr, pscr, Qfr, qfr, qopf, Qscr, qscr, race, rfr, ropf, rscr, Sfr, sfr, smtes, Sopf, sopf, sqcaps, sqcups, Sscr, sscr, Tfr, tfr, ThickSpace, Topf, topf, Tscr, tscr, Ufr, ufr, Uopf, uopf, Uscr, uscr, varsubsetneq, varsubsetneqq, varsupsetneq, varsupsetneqq, Vfr, vfr, vnsub, vnsup, Vopf, vopf, Vscr, vscr, vsubnE, vsubne, vsupnE, vsupne, Wfr, wfr, Wopf, wopf, Wscr, wscr, Xfr, xfr, Xopf, xopf, Xscr, xscr, Yfr, yfr, Yopf, yopf, Yscr, yscr, zfr, zopf, Zscr, zscr, entities_default;
var init_entities = __esmMin((() => {
	acE = "∾̳";
	Afr = "𝔄";
	afr = "𝔞";
	Aopf = "𝔸";
	aopf = "𝕒";
	Ascr = "𝒜";
	ascr = "𝒶";
	Bfr = "𝔅";
	bfr = "𝔟";
	bne = "=⃥";
	bnequiv = "≡⃥";
	Bopf = "𝔹";
	bopf = "𝕓";
	bscr = "𝒷";
	caps = "∩︀";
	cfr = "𝔠";
	copf = "𝕔";
	Cscr = "𝒞";
	cscr = "𝒸";
	cups = "∪︀";
	Dfr = "𝔇";
	dfr = "𝔡";
	Dopf = "𝔻";
	dopf = "𝕕";
	Dscr = "𝒟";
	dscr = "𝒹";
	Efr = "𝔈";
	efr = "𝔢";
	Eopf = "𝔼";
	eopf = "𝕖";
	Ffr = "𝔉";
	ffr = "𝔣";
	Fopf = "𝔽";
	fopf = "𝕗";
	fscr = "𝒻";
	gesl = "⋛︀";
	Gfr = "𝔊";
	gfr = "𝔤";
	Gopf = "𝔾";
	gopf = "𝕘";
	Gscr = "𝒢";
	gvertneqq = "≩︀";
	gvnE = "≩︀";
	hfr = "𝔥";
	hopf = "𝕙";
	hscr = "𝒽";
	ifr = "𝔦";
	Iopf = "𝕀";
	iopf = "𝕚";
	iscr = "𝒾";
	Jfr = "𝔍";
	jfr = "𝔧";
	Jopf = "𝕁";
	jopf = "𝕛";
	Jscr = "𝒥";
	jscr = "𝒿";
	Kfr = "𝔎";
	kfr = "𝔨";
	Kopf = "𝕂";
	kopf = "𝕜";
	Kscr = "𝒦";
	kscr = "𝓀";
	lates = "⪭︀";
	lesg = "⋚︀";
	Lfr = "𝔏";
	lfr = "𝔩";
	Lopf = "𝕃";
	lopf = "𝕝";
	lscr = "𝓁";
	lvertneqq = "≨︀";
	lvnE = "≨︀";
	Mfr = "𝔐";
	mfr = "𝔪";
	Mopf = "𝕄";
	mopf = "𝕞";
	mscr = "𝓂";
	nang = "∠⃒";
	napE = "⩰̸";
	napid = "≋̸";
	nbump = "≎̸";
	nbumpe = "≏̸";
	ncongdot = "⩭̸";
	nedot = "≐̸";
	nesim = "≂̸";
	Nfr = "𝔑";
	nfr = "𝔫";
	ngE = "≧̸";
	ngeqq = "≧̸";
	ngeqslant = "⩾̸";
	nges = "⩾̸";
	nGg = "⋙̸";
	nGt = "≫⃒";
	nGtv = "≫̸";
	nlE = "≦̸";
	nleqq = "≦̸";
	nleqslant = "⩽̸";
	nles = "⩽̸";
	nLl = "⋘̸";
	nLt = "≪⃒";
	nLtv = "≪̸";
	nopf = "𝕟";
	NotEqualTilde = "≂̸";
	NotGreaterFullEqual = "≧̸";
	NotGreaterGreater = "≫̸";
	NotGreaterSlantEqual = "⩾̸";
	NotHumpDownHump = "≎̸";
	NotHumpEqual = "≏̸";
	notindot = "⋵̸";
	notinE = "⋹̸";
	NotLeftTriangleBar = "⧏̸";
	NotLessLess = "≪̸";
	NotLessSlantEqual = "⩽̸";
	NotNestedGreaterGreater = "⪢̸";
	NotNestedLessLess = "⪡̸";
	NotPrecedesEqual = "⪯̸";
	NotRightTriangleBar = "⧐̸";
	NotSquareSubset = "⊏̸";
	NotSquareSuperset = "⊐̸";
	NotSubset = "⊂⃒";
	NotSucceedsEqual = "⪰̸";
	NotSucceedsTilde = "≿̸";
	NotSuperset = "⊃⃒";
	nparsl = "⫽⃥";
	npart = "∂̸";
	npreceq = "⪯̸";
	npre = "⪯̸";
	nrarrc = "⤳̸";
	nrarrw = "↝̸";
	nsce = "⪰̸";
	Nscr = "𝒩";
	nscr = "𝓃";
	nsubE = "⫅̸";
	nsubset = "⊂⃒";
	nsubseteqq = "⫅̸";
	nsucceq = "⪰̸";
	nsupE = "⫆̸";
	nsupset = "⊃⃒";
	nsupseteqq = "⫆̸";
	nvap = "≍⃒";
	nvge = "≥⃒";
	nvgt = ">⃒";
	nvle = "≤⃒";
	nvlt = "<⃒";
	nvltrie = "⊴⃒";
	nvrtrie = "⊵⃒";
	nvsim = "∼⃒";
	Ofr = "𝔒";
	ofr = "𝔬";
	Oopf = "𝕆";
	oopf = "𝕠";
	Oscr = "𝒪";
	Pfr = "𝔓";
	pfr = "𝔭";
	popf = "𝕡";
	Pscr = "𝒫";
	pscr = "𝓅";
	Qfr = "𝔔";
	qfr = "𝔮";
	qopf = "𝕢";
	Qscr = "𝒬";
	qscr = "𝓆";
	race = "∽̱";
	rfr = "𝔯";
	ropf = "𝕣";
	rscr = "𝓇";
	Sfr = "𝔖";
	sfr = "𝔰";
	smtes = "⪬︀";
	Sopf = "𝕊";
	sopf = "𝕤";
	sqcaps = "⊓︀";
	sqcups = "⊔︀";
	Sscr = "𝒮";
	sscr = "𝓈";
	Tfr = "𝔗";
	tfr = "𝔱";
	ThickSpace = "  ";
	Topf = "𝕋";
	topf = "𝕥";
	Tscr = "𝒯";
	tscr = "𝓉";
	Ufr = "𝔘";
	ufr = "𝔲";
	Uopf = "𝕌";
	uopf = "𝕦";
	Uscr = "𝒰";
	uscr = "𝓊";
	varsubsetneq = "⊊︀";
	varsubsetneqq = "⫋︀";
	varsupsetneq = "⊋︀";
	varsupsetneqq = "⫌︀";
	Vfr = "𝔙";
	vfr = "𝔳";
	vnsub = "⊂⃒";
	vnsup = "⊃⃒";
	Vopf = "𝕍";
	vopf = "𝕧";
	Vscr = "𝒱";
	vscr = "𝓋";
	vsubnE = "⫋︀";
	vsubne = "⊊︀";
	vsupnE = "⫌︀";
	vsupne = "⊋︀";
	Wfr = "𝔚";
	wfr = "𝔴";
	Wopf = "𝕎";
	wopf = "𝕨";
	Wscr = "𝒲";
	wscr = "𝓌";
	Xfr = "𝔛";
	xfr = "𝔵";
	Xopf = "𝕏";
	xopf = "𝕩";
	Xscr = "𝒳";
	xscr = "𝓍";
	Yfr = "𝔜";
	yfr = "𝔶";
	Yopf = "𝕐";
	yopf = "𝕪";
	Yscr = "𝒴";
	yscr = "𝓎";
	zfr = "𝔷";
	zopf = "𝕫";
	Zscr = "𝒵";
	zscr = "𝓏";
	entities_default = {
		Aacute: "Á",
		aacute: "á",
		Abreve: "Ă",
		abreve: "ă",
		ac: "∾",
		acd: "∿",
		acE,
		Acirc: "Â",
		acirc: "â",
		acute: "´",
		Acy: "А",
		acy: "а",
		AElig: "Æ",
		aelig: "æ",
		af: "⁡",
		Afr,
		afr,
		Agrave: "À",
		agrave: "à",
		alefsym: "ℵ",
		aleph: "ℵ",
		Alpha: "Α",
		alpha: "α",
		Amacr: "Ā",
		amacr: "ā",
		amalg: "⨿",
		amp: "&",
		AMP: "&",
		andand: "⩕",
		And: "⩓",
		and: "∧",
		andd: "⩜",
		andslope: "⩘",
		andv: "⩚",
		ang: "∠",
		ange: "⦤",
		angle: "∠",
		angmsdaa: "⦨",
		angmsdab: "⦩",
		angmsdac: "⦪",
		angmsdad: "⦫",
		angmsdae: "⦬",
		angmsdaf: "⦭",
		angmsdag: "⦮",
		angmsdah: "⦯",
		angmsd: "∡",
		angrt: "∟",
		angrtvb: "⊾",
		angrtvbd: "⦝",
		angsph: "∢",
		angst: "Å",
		angzarr: "⍼",
		Aogon: "Ą",
		aogon: "ą",
		Aopf,
		aopf,
		apacir: "⩯",
		ap: "≈",
		apE: "⩰",
		ape: "≊",
		apid: "≋",
		apos: "'",
		ApplyFunction: "⁡",
		approx: "≈",
		approxeq: "≊",
		Aring: "Å",
		aring: "å",
		Ascr,
		ascr,
		Assign: "≔",
		ast: "*",
		asymp: "≈",
		asympeq: "≍",
		Atilde: "Ã",
		atilde: "ã",
		Auml: "Ä",
		auml: "ä",
		awconint: "∳",
		awint: "⨑",
		backcong: "≌",
		backepsilon: "϶",
		backprime: "‵",
		backsim: "∽",
		backsimeq: "⋍",
		Backslash: "∖",
		Barv: "⫧",
		barvee: "⊽",
		barwed: "⌅",
		Barwed: "⌆",
		barwedge: "⌅",
		bbrk: "⎵",
		bbrktbrk: "⎶",
		bcong: "≌",
		Bcy: "Б",
		bcy: "б",
		bdquo: "„",
		becaus: "∵",
		because: "∵",
		Because: "∵",
		bemptyv: "⦰",
		bepsi: "϶",
		bernou: "ℬ",
		Bernoullis: "ℬ",
		Beta: "Β",
		beta: "β",
		beth: "ℶ",
		between: "≬",
		Bfr,
		bfr,
		bigcap: "⋂",
		bigcirc: "◯",
		bigcup: "⋃",
		bigodot: "⨀",
		bigoplus: "⨁",
		bigotimes: "⨂",
		bigsqcup: "⨆",
		bigstar: "★",
		bigtriangledown: "▽",
		bigtriangleup: "△",
		biguplus: "⨄",
		bigvee: "⋁",
		bigwedge: "⋀",
		bkarow: "⤍",
		blacklozenge: "⧫",
		blacksquare: "▪",
		blacktriangle: "▴",
		blacktriangledown: "▾",
		blacktriangleleft: "◂",
		blacktriangleright: "▸",
		blank: "␣",
		blk12: "▒",
		blk14: "░",
		blk34: "▓",
		block: "█",
		bne,
		bnequiv,
		bNot: "⫭",
		bnot: "⌐",
		Bopf,
		bopf,
		bot: "⊥",
		bottom: "⊥",
		bowtie: "⋈",
		boxbox: "⧉",
		boxdl: "┐",
		boxdL: "╕",
		boxDl: "╖",
		boxDL: "╗",
		boxdr: "┌",
		boxdR: "╒",
		boxDr: "╓",
		boxDR: "╔",
		boxh: "─",
		boxH: "═",
		boxhd: "┬",
		boxHd: "╤",
		boxhD: "╥",
		boxHD: "╦",
		boxhu: "┴",
		boxHu: "╧",
		boxhU: "╨",
		boxHU: "╩",
		boxminus: "⊟",
		boxplus: "⊞",
		boxtimes: "⊠",
		boxul: "┘",
		boxuL: "╛",
		boxUl: "╜",
		boxUL: "╝",
		boxur: "└",
		boxuR: "╘",
		boxUr: "╙",
		boxUR: "╚",
		boxv: "│",
		boxV: "║",
		boxvh: "┼",
		boxvH: "╪",
		boxVh: "╫",
		boxVH: "╬",
		boxvl: "┤",
		boxvL: "╡",
		boxVl: "╢",
		boxVL: "╣",
		boxvr: "├",
		boxvR: "╞",
		boxVr: "╟",
		boxVR: "╠",
		bprime: "‵",
		breve: "˘",
		Breve: "˘",
		brvbar: "¦",
		bscr,
		Bscr: "ℬ",
		bsemi: "⁏",
		bsim: "∽",
		bsime: "⋍",
		bsolb: "⧅",
		bsol: "\\",
		bsolhsub: "⟈",
		bull: "•",
		bullet: "•",
		bump: "≎",
		bumpE: "⪮",
		bumpe: "≏",
		Bumpeq: "≎",
		bumpeq: "≏",
		Cacute: "Ć",
		cacute: "ć",
		capand: "⩄",
		capbrcup: "⩉",
		capcap: "⩋",
		cap: "∩",
		Cap: "⋒",
		capcup: "⩇",
		capdot: "⩀",
		CapitalDifferentialD: "ⅅ",
		caps,
		caret: "⁁",
		caron: "ˇ",
		Cayleys: "ℭ",
		ccaps: "⩍",
		Ccaron: "Č",
		ccaron: "č",
		Ccedil: "Ç",
		ccedil: "ç",
		Ccirc: "Ĉ",
		ccirc: "ĉ",
		Cconint: "∰",
		ccups: "⩌",
		ccupssm: "⩐",
		Cdot: "Ċ",
		cdot: "ċ",
		cedil: "¸",
		Cedilla: "¸",
		cemptyv: "⦲",
		cent: "¢",
		centerdot: "·",
		CenterDot: "·",
		cfr,
		Cfr: "ℭ",
		CHcy: "Ч",
		chcy: "ч",
		check: "✓",
		checkmark: "✓",
		Chi: "Χ",
		chi: "χ",
		circ: "ˆ",
		circeq: "≗",
		circlearrowleft: "↺",
		circlearrowright: "↻",
		circledast: "⊛",
		circledcirc: "⊚",
		circleddash: "⊝",
		CircleDot: "⊙",
		circledR: "®",
		circledS: "Ⓢ",
		CircleMinus: "⊖",
		CirclePlus: "⊕",
		CircleTimes: "⊗",
		cir: "○",
		cirE: "⧃",
		cire: "≗",
		cirfnint: "⨐",
		cirmid: "⫯",
		cirscir: "⧂",
		ClockwiseContourIntegral: "∲",
		CloseCurlyDoubleQuote: "”",
		CloseCurlyQuote: "’",
		clubs: "♣",
		clubsuit: "♣",
		colon: ":",
		Colon: "∷",
		Colone: "⩴",
		colone: "≔",
		coloneq: "≔",
		comma: ",",
		commat: "@",
		comp: "∁",
		compfn: "∘",
		complement: "∁",
		complexes: "ℂ",
		cong: "≅",
		congdot: "⩭",
		Congruent: "≡",
		conint: "∮",
		Conint: "∯",
		ContourIntegral: "∮",
		copf,
		Copf: "ℂ",
		coprod: "∐",
		Coproduct: "∐",
		copy: "©",
		COPY: "©",
		copysr: "℗",
		CounterClockwiseContourIntegral: "∳",
		crarr: "↵",
		cross: "✗",
		Cross: "⨯",
		Cscr,
		cscr,
		csub: "⫏",
		csube: "⫑",
		csup: "⫐",
		csupe: "⫒",
		ctdot: "⋯",
		cudarrl: "⤸",
		cudarrr: "⤵",
		cuepr: "⋞",
		cuesc: "⋟",
		cularr: "↶",
		cularrp: "⤽",
		cupbrcap: "⩈",
		cupcap: "⩆",
		CupCap: "≍",
		cup: "∪",
		Cup: "⋓",
		cupcup: "⩊",
		cupdot: "⊍",
		cupor: "⩅",
		cups,
		curarr: "↷",
		curarrm: "⤼",
		curlyeqprec: "⋞",
		curlyeqsucc: "⋟",
		curlyvee: "⋎",
		curlywedge: "⋏",
		curren: "¤",
		curvearrowleft: "↶",
		curvearrowright: "↷",
		cuvee: "⋎",
		cuwed: "⋏",
		cwconint: "∲",
		cwint: "∱",
		cylcty: "⌭",
		dagger: "†",
		Dagger: "‡",
		daleth: "ℸ",
		darr: "↓",
		Darr: "↡",
		dArr: "⇓",
		dash: "‐",
		Dashv: "⫤",
		dashv: "⊣",
		dbkarow: "⤏",
		dblac: "˝",
		Dcaron: "Ď",
		dcaron: "ď",
		Dcy: "Д",
		dcy: "д",
		ddagger: "‡",
		ddarr: "⇊",
		DD: "ⅅ",
		dd: "ⅆ",
		DDotrahd: "⤑",
		ddotseq: "⩷",
		deg: "°",
		Del: "∇",
		Delta: "Δ",
		delta: "δ",
		demptyv: "⦱",
		dfisht: "⥿",
		Dfr,
		dfr,
		dHar: "⥥",
		dharl: "⇃",
		dharr: "⇂",
		DiacriticalAcute: "´",
		DiacriticalDot: "˙",
		DiacriticalDoubleAcute: "˝",
		DiacriticalGrave: "`",
		DiacriticalTilde: "˜",
		diam: "⋄",
		diamond: "⋄",
		Diamond: "⋄",
		diamondsuit: "♦",
		diams: "♦",
		die: "¨",
		DifferentialD: "ⅆ",
		digamma: "ϝ",
		disin: "⋲",
		div: "÷",
		divide: "÷",
		divideontimes: "⋇",
		divonx: "⋇",
		DJcy: "Ђ",
		djcy: "ђ",
		dlcorn: "⌞",
		dlcrop: "⌍",
		dollar: "$",
		Dopf,
		dopf,
		Dot: "¨",
		dot: "˙",
		DotDot: "⃜",
		doteq: "≐",
		doteqdot: "≑",
		DotEqual: "≐",
		dotminus: "∸",
		dotplus: "∔",
		dotsquare: "⊡",
		doublebarwedge: "⌆",
		DoubleContourIntegral: "∯",
		DoubleDot: "¨",
		DoubleDownArrow: "⇓",
		DoubleLeftArrow: "⇐",
		DoubleLeftRightArrow: "⇔",
		DoubleLeftTee: "⫤",
		DoubleLongLeftArrow: "⟸",
		DoubleLongLeftRightArrow: "⟺",
		DoubleLongRightArrow: "⟹",
		DoubleRightArrow: "⇒",
		DoubleRightTee: "⊨",
		DoubleUpArrow: "⇑",
		DoubleUpDownArrow: "⇕",
		DoubleVerticalBar: "∥",
		DownArrowBar: "⤓",
		downarrow: "↓",
		DownArrow: "↓",
		Downarrow: "⇓",
		DownArrowUpArrow: "⇵",
		DownBreve: "̑",
		downdownarrows: "⇊",
		downharpoonleft: "⇃",
		downharpoonright: "⇂",
		DownLeftRightVector: "⥐",
		DownLeftTeeVector: "⥞",
		DownLeftVectorBar: "⥖",
		DownLeftVector: "↽",
		DownRightTeeVector: "⥟",
		DownRightVectorBar: "⥗",
		DownRightVector: "⇁",
		DownTeeArrow: "↧",
		DownTee: "⊤",
		drbkarow: "⤐",
		drcorn: "⌟",
		drcrop: "⌌",
		Dscr,
		dscr,
		DScy: "Ѕ",
		dscy: "ѕ",
		dsol: "⧶",
		Dstrok: "Đ",
		dstrok: "đ",
		dtdot: "⋱",
		dtri: "▿",
		dtrif: "▾",
		duarr: "⇵",
		duhar: "⥯",
		dwangle: "⦦",
		DZcy: "Џ",
		dzcy: "џ",
		dzigrarr: "⟿",
		Eacute: "É",
		eacute: "é",
		easter: "⩮",
		Ecaron: "Ě",
		ecaron: "ě",
		Ecirc: "Ê",
		ecirc: "ê",
		ecir: "≖",
		ecolon: "≕",
		Ecy: "Э",
		ecy: "э",
		eDDot: "⩷",
		Edot: "Ė",
		edot: "ė",
		eDot: "≑",
		ee: "ⅇ",
		efDot: "≒",
		Efr,
		efr,
		eg: "⪚",
		Egrave: "È",
		egrave: "è",
		egs: "⪖",
		egsdot: "⪘",
		el: "⪙",
		Element: "∈",
		elinters: "⏧",
		ell: "ℓ",
		els: "⪕",
		elsdot: "⪗",
		Emacr: "Ē",
		emacr: "ē",
		empty: "∅",
		emptyset: "∅",
		EmptySmallSquare: "◻",
		emptyv: "∅",
		EmptyVerySmallSquare: "▫",
		emsp13: " ",
		emsp14: " ",
		emsp: " ",
		ENG: "Ŋ",
		eng: "ŋ",
		ensp: " ",
		Eogon: "Ę",
		eogon: "ę",
		Eopf,
		eopf,
		epar: "⋕",
		eparsl: "⧣",
		eplus: "⩱",
		epsi: "ε",
		Epsilon: "Ε",
		epsilon: "ε",
		epsiv: "ϵ",
		eqcirc: "≖",
		eqcolon: "≕",
		eqsim: "≂",
		eqslantgtr: "⪖",
		eqslantless: "⪕",
		Equal: "⩵",
		equals: "=",
		EqualTilde: "≂",
		equest: "≟",
		Equilibrium: "⇌",
		equiv: "≡",
		equivDD: "⩸",
		eqvparsl: "⧥",
		erarr: "⥱",
		erDot: "≓",
		escr: "ℯ",
		Escr: "ℰ",
		esdot: "≐",
		Esim: "⩳",
		esim: "≂",
		Eta: "Η",
		eta: "η",
		ETH: "Ð",
		eth: "ð",
		Euml: "Ë",
		euml: "ë",
		euro: "€",
		excl: "!",
		exist: "∃",
		Exists: "∃",
		expectation: "ℰ",
		exponentiale: "ⅇ",
		ExponentialE: "ⅇ",
		fallingdotseq: "≒",
		Fcy: "Ф",
		fcy: "ф",
		female: "♀",
		ffilig: "ﬃ",
		fflig: "ﬀ",
		ffllig: "ﬄ",
		Ffr,
		ffr,
		filig: "ﬁ",
		FilledSmallSquare: "◼",
		FilledVerySmallSquare: "▪",
		fjlig: "fj",
		flat: "♭",
		fllig: "ﬂ",
		fltns: "▱",
		fnof: "ƒ",
		Fopf,
		fopf,
		forall: "∀",
		ForAll: "∀",
		fork: "⋔",
		forkv: "⫙",
		Fouriertrf: "ℱ",
		fpartint: "⨍",
		frac12: "½",
		frac13: "⅓",
		frac14: "¼",
		frac15: "⅕",
		frac16: "⅙",
		frac18: "⅛",
		frac23: "⅔",
		frac25: "⅖",
		frac34: "¾",
		frac35: "⅗",
		frac38: "⅜",
		frac45: "⅘",
		frac56: "⅚",
		frac58: "⅝",
		frac78: "⅞",
		frasl: "⁄",
		frown: "⌢",
		fscr,
		Fscr: "ℱ",
		gacute: "ǵ",
		Gamma: "Γ",
		gamma: "γ",
		Gammad: "Ϝ",
		gammad: "ϝ",
		gap: "⪆",
		Gbreve: "Ğ",
		gbreve: "ğ",
		Gcedil: "Ģ",
		Gcirc: "Ĝ",
		gcirc: "ĝ",
		Gcy: "Г",
		gcy: "г",
		Gdot: "Ġ",
		gdot: "ġ",
		ge: "≥",
		gE: "≧",
		gEl: "⪌",
		gel: "⋛",
		geq: "≥",
		geqq: "≧",
		geqslant: "⩾",
		gescc: "⪩",
		ges: "⩾",
		gesdot: "⪀",
		gesdoto: "⪂",
		gesdotol: "⪄",
		gesl,
		gesles: "⪔",
		Gfr,
		gfr,
		gg: "≫",
		Gg: "⋙",
		ggg: "⋙",
		gimel: "ℷ",
		GJcy: "Ѓ",
		gjcy: "ѓ",
		gla: "⪥",
		gl: "≷",
		glE: "⪒",
		glj: "⪤",
		gnap: "⪊",
		gnapprox: "⪊",
		gne: "⪈",
		gnE: "≩",
		gneq: "⪈",
		gneqq: "≩",
		gnsim: "⋧",
		Gopf,
		gopf,
		grave: "`",
		GreaterEqual: "≥",
		GreaterEqualLess: "⋛",
		GreaterFullEqual: "≧",
		GreaterGreater: "⪢",
		GreaterLess: "≷",
		GreaterSlantEqual: "⩾",
		GreaterTilde: "≳",
		Gscr,
		gscr: "ℊ",
		gsim: "≳",
		gsime: "⪎",
		gsiml: "⪐",
		gtcc: "⪧",
		gtcir: "⩺",
		gt: ">",
		GT: ">",
		Gt: "≫",
		gtdot: "⋗",
		gtlPar: "⦕",
		gtquest: "⩼",
		gtrapprox: "⪆",
		gtrarr: "⥸",
		gtrdot: "⋗",
		gtreqless: "⋛",
		gtreqqless: "⪌",
		gtrless: "≷",
		gtrsim: "≳",
		gvertneqq,
		gvnE,
		Hacek: "ˇ",
		hairsp: " ",
		half: "½",
		hamilt: "ℋ",
		HARDcy: "Ъ",
		hardcy: "ъ",
		harrcir: "⥈",
		harr: "↔",
		hArr: "⇔",
		harrw: "↭",
		Hat: "^",
		hbar: "ℏ",
		Hcirc: "Ĥ",
		hcirc: "ĥ",
		hearts: "♥",
		heartsuit: "♥",
		hellip: "…",
		hercon: "⊹",
		hfr,
		Hfr: "ℌ",
		HilbertSpace: "ℋ",
		hksearow: "⤥",
		hkswarow: "⤦",
		hoarr: "⇿",
		homtht: "∻",
		hookleftarrow: "↩",
		hookrightarrow: "↪",
		hopf,
		Hopf: "ℍ",
		horbar: "―",
		HorizontalLine: "─",
		hscr,
		Hscr: "ℋ",
		hslash: "ℏ",
		Hstrok: "Ħ",
		hstrok: "ħ",
		HumpDownHump: "≎",
		HumpEqual: "≏",
		hybull: "⁃",
		hyphen: "‐",
		Iacute: "Í",
		iacute: "í",
		ic: "⁣",
		Icirc: "Î",
		icirc: "î",
		Icy: "И",
		icy: "и",
		Idot: "İ",
		IEcy: "Е",
		iecy: "е",
		iexcl: "¡",
		iff: "⇔",
		ifr,
		Ifr: "ℑ",
		Igrave: "Ì",
		igrave: "ì",
		ii: "ⅈ",
		iiiint: "⨌",
		iiint: "∭",
		iinfin: "⧜",
		iiota: "℩",
		IJlig: "Ĳ",
		ijlig: "ĳ",
		Imacr: "Ī",
		imacr: "ī",
		image: "ℑ",
		ImaginaryI: "ⅈ",
		imagline: "ℐ",
		imagpart: "ℑ",
		imath: "ı",
		Im: "ℑ",
		imof: "⊷",
		imped: "Ƶ",
		Implies: "⇒",
		incare: "℅",
		"in": "∈",
		infin: "∞",
		infintie: "⧝",
		inodot: "ı",
		intcal: "⊺",
		int: "∫",
		Int: "∬",
		integers: "ℤ",
		Integral: "∫",
		intercal: "⊺",
		Intersection: "⋂",
		intlarhk: "⨗",
		intprod: "⨼",
		InvisibleComma: "⁣",
		InvisibleTimes: "⁢",
		IOcy: "Ё",
		iocy: "ё",
		Iogon: "Į",
		iogon: "į",
		Iopf,
		iopf,
		Iota: "Ι",
		iota: "ι",
		iprod: "⨼",
		iquest: "¿",
		iscr,
		Iscr: "ℐ",
		isin: "∈",
		isindot: "⋵",
		isinE: "⋹",
		isins: "⋴",
		isinsv: "⋳",
		isinv: "∈",
		it: "⁢",
		Itilde: "Ĩ",
		itilde: "ĩ",
		Iukcy: "І",
		iukcy: "і",
		Iuml: "Ï",
		iuml: "ï",
		Jcirc: "Ĵ",
		jcirc: "ĵ",
		Jcy: "Й",
		jcy: "й",
		Jfr,
		jfr,
		jmath: "ȷ",
		Jopf,
		jopf,
		Jscr,
		jscr,
		Jsercy: "Ј",
		jsercy: "ј",
		Jukcy: "Є",
		jukcy: "є",
		Kappa: "Κ",
		kappa: "κ",
		kappav: "ϰ",
		Kcedil: "Ķ",
		kcedil: "ķ",
		Kcy: "К",
		kcy: "к",
		Kfr,
		kfr,
		kgreen: "ĸ",
		KHcy: "Х",
		khcy: "х",
		KJcy: "Ќ",
		kjcy: "ќ",
		Kopf,
		kopf,
		Kscr,
		kscr,
		lAarr: "⇚",
		Lacute: "Ĺ",
		lacute: "ĺ",
		laemptyv: "⦴",
		lagran: "ℒ",
		Lambda: "Λ",
		lambda: "λ",
		lang: "⟨",
		Lang: "⟪",
		langd: "⦑",
		langle: "⟨",
		lap: "⪅",
		Laplacetrf: "ℒ",
		laquo: "«",
		larrb: "⇤",
		larrbfs: "⤟",
		larr: "←",
		Larr: "↞",
		lArr: "⇐",
		larrfs: "⤝",
		larrhk: "↩",
		larrlp: "↫",
		larrpl: "⤹",
		larrsim: "⥳",
		larrtl: "↢",
		latail: "⤙",
		lAtail: "⤛",
		lat: "⪫",
		late: "⪭",
		lates,
		lbarr: "⤌",
		lBarr: "⤎",
		lbbrk: "❲",
		lbrace: "{",
		lbrack: "[",
		lbrke: "⦋",
		lbrksld: "⦏",
		lbrkslu: "⦍",
		Lcaron: "Ľ",
		lcaron: "ľ",
		Lcedil: "Ļ",
		lcedil: "ļ",
		lceil: "⌈",
		lcub: "{",
		Lcy: "Л",
		lcy: "л",
		ldca: "⤶",
		ldquo: "“",
		ldquor: "„",
		ldrdhar: "⥧",
		ldrushar: "⥋",
		ldsh: "↲",
		le: "≤",
		lE: "≦",
		LeftAngleBracket: "⟨",
		LeftArrowBar: "⇤",
		leftarrow: "←",
		LeftArrow: "←",
		Leftarrow: "⇐",
		LeftArrowRightArrow: "⇆",
		leftarrowtail: "↢",
		LeftCeiling: "⌈",
		LeftDoubleBracket: "⟦",
		LeftDownTeeVector: "⥡",
		LeftDownVectorBar: "⥙",
		LeftDownVector: "⇃",
		LeftFloor: "⌊",
		leftharpoondown: "↽",
		leftharpoonup: "↼",
		leftleftarrows: "⇇",
		leftrightarrow: "↔",
		LeftRightArrow: "↔",
		Leftrightarrow: "⇔",
		leftrightarrows: "⇆",
		leftrightharpoons: "⇋",
		leftrightsquigarrow: "↭",
		LeftRightVector: "⥎",
		LeftTeeArrow: "↤",
		LeftTee: "⊣",
		LeftTeeVector: "⥚",
		leftthreetimes: "⋋",
		LeftTriangleBar: "⧏",
		LeftTriangle: "⊲",
		LeftTriangleEqual: "⊴",
		LeftUpDownVector: "⥑",
		LeftUpTeeVector: "⥠",
		LeftUpVectorBar: "⥘",
		LeftUpVector: "↿",
		LeftVectorBar: "⥒",
		LeftVector: "↼",
		lEg: "⪋",
		leg: "⋚",
		leq: "≤",
		leqq: "≦",
		leqslant: "⩽",
		lescc: "⪨",
		les: "⩽",
		lesdot: "⩿",
		lesdoto: "⪁",
		lesdotor: "⪃",
		lesg,
		lesges: "⪓",
		lessapprox: "⪅",
		lessdot: "⋖",
		lesseqgtr: "⋚",
		lesseqqgtr: "⪋",
		LessEqualGreater: "⋚",
		LessFullEqual: "≦",
		LessGreater: "≶",
		lessgtr: "≶",
		LessLess: "⪡",
		lesssim: "≲",
		LessSlantEqual: "⩽",
		LessTilde: "≲",
		lfisht: "⥼",
		lfloor: "⌊",
		Lfr,
		lfr,
		lg: "≶",
		lgE: "⪑",
		lHar: "⥢",
		lhard: "↽",
		lharu: "↼",
		lharul: "⥪",
		lhblk: "▄",
		LJcy: "Љ",
		ljcy: "љ",
		llarr: "⇇",
		ll: "≪",
		Ll: "⋘",
		llcorner: "⌞",
		Lleftarrow: "⇚",
		llhard: "⥫",
		lltri: "◺",
		Lmidot: "Ŀ",
		lmidot: "ŀ",
		lmoustache: "⎰",
		lmoust: "⎰",
		lnap: "⪉",
		lnapprox: "⪉",
		lne: "⪇",
		lnE: "≨",
		lneq: "⪇",
		lneqq: "≨",
		lnsim: "⋦",
		loang: "⟬",
		loarr: "⇽",
		lobrk: "⟦",
		longleftarrow: "⟵",
		LongLeftArrow: "⟵",
		Longleftarrow: "⟸",
		longleftrightarrow: "⟷",
		LongLeftRightArrow: "⟷",
		Longleftrightarrow: "⟺",
		longmapsto: "⟼",
		longrightarrow: "⟶",
		LongRightArrow: "⟶",
		Longrightarrow: "⟹",
		looparrowleft: "↫",
		looparrowright: "↬",
		lopar: "⦅",
		Lopf,
		lopf,
		loplus: "⨭",
		lotimes: "⨴",
		lowast: "∗",
		lowbar: "_",
		LowerLeftArrow: "↙",
		LowerRightArrow: "↘",
		loz: "◊",
		lozenge: "◊",
		lozf: "⧫",
		lpar: "(",
		lparlt: "⦓",
		lrarr: "⇆",
		lrcorner: "⌟",
		lrhar: "⇋",
		lrhard: "⥭",
		lrm: "‎",
		lrtri: "⊿",
		lsaquo: "‹",
		lscr,
		Lscr: "ℒ",
		lsh: "↰",
		Lsh: "↰",
		lsim: "≲",
		lsime: "⪍",
		lsimg: "⪏",
		lsqb: "[",
		lsquo: "‘",
		lsquor: "‚",
		Lstrok: "Ł",
		lstrok: "ł",
		ltcc: "⪦",
		ltcir: "⩹",
		lt: "<",
		LT: "<",
		Lt: "≪",
		ltdot: "⋖",
		lthree: "⋋",
		ltimes: "⋉",
		ltlarr: "⥶",
		ltquest: "⩻",
		ltri: "◃",
		ltrie: "⊴",
		ltrif: "◂",
		ltrPar: "⦖",
		lurdshar: "⥊",
		luruhar: "⥦",
		lvertneqq,
		lvnE,
		macr: "¯",
		male: "♂",
		malt: "✠",
		maltese: "✠",
		Map: "⤅",
		map: "↦",
		mapsto: "↦",
		mapstodown: "↧",
		mapstoleft: "↤",
		mapstoup: "↥",
		marker: "▮",
		mcomma: "⨩",
		Mcy: "М",
		mcy: "м",
		mdash: "—",
		mDDot: "∺",
		measuredangle: "∡",
		MediumSpace: " ",
		Mellintrf: "ℳ",
		Mfr,
		mfr,
		mho: "℧",
		micro: "µ",
		midast: "*",
		midcir: "⫰",
		mid: "∣",
		middot: "·",
		minusb: "⊟",
		minus: "−",
		minusd: "∸",
		minusdu: "⨪",
		MinusPlus: "∓",
		mlcp: "⫛",
		mldr: "…",
		mnplus: "∓",
		models: "⊧",
		Mopf,
		mopf,
		mp: "∓",
		mscr,
		Mscr: "ℳ",
		mstpos: "∾",
		Mu: "Μ",
		mu: "μ",
		multimap: "⊸",
		mumap: "⊸",
		nabla: "∇",
		Nacute: "Ń",
		nacute: "ń",
		nang,
		nap: "≉",
		napE,
		napid,
		napos: "ŉ",
		napprox: "≉",
		natural: "♮",
		naturals: "ℕ",
		natur: "♮",
		nbsp: "\xA0",
		nbump,
		nbumpe,
		ncap: "⩃",
		Ncaron: "Ň",
		ncaron: "ň",
		Ncedil: "Ņ",
		ncedil: "ņ",
		ncong: "≇",
		ncongdot,
		ncup: "⩂",
		Ncy: "Н",
		ncy: "н",
		ndash: "–",
		nearhk: "⤤",
		nearr: "↗",
		neArr: "⇗",
		nearrow: "↗",
		ne: "≠",
		nedot,
		NegativeMediumSpace: "​",
		NegativeThickSpace: "​",
		NegativeThinSpace: "​",
		NegativeVeryThinSpace: "​",
		nequiv: "≢",
		nesear: "⤨",
		nesim,
		NestedGreaterGreater: "≫",
		NestedLessLess: "≪",
		NewLine: "\n",
		nexist: "∄",
		nexists: "∄",
		Nfr,
		nfr,
		ngE,
		nge: "≱",
		ngeq: "≱",
		ngeqq,
		ngeqslant,
		nges,
		nGg,
		ngsim: "≵",
		nGt,
		ngt: "≯",
		ngtr: "≯",
		nGtv,
		nharr: "↮",
		nhArr: "⇎",
		nhpar: "⫲",
		ni: "∋",
		nis: "⋼",
		nisd: "⋺",
		niv: "∋",
		NJcy: "Њ",
		njcy: "њ",
		nlarr: "↚",
		nlArr: "⇍",
		nldr: "‥",
		nlE,
		nle: "≰",
		nleftarrow: "↚",
		nLeftarrow: "⇍",
		nleftrightarrow: "↮",
		nLeftrightarrow: "⇎",
		nleq: "≰",
		nleqq,
		nleqslant,
		nles,
		nless: "≮",
		nLl,
		nlsim: "≴",
		nLt,
		nlt: "≮",
		nltri: "⋪",
		nltrie: "⋬",
		nLtv,
		nmid: "∤",
		NoBreak: "⁠",
		NonBreakingSpace: "\xA0",
		nopf,
		Nopf: "ℕ",
		Not: "⫬",
		not: "¬",
		NotCongruent: "≢",
		NotCupCap: "≭",
		NotDoubleVerticalBar: "∦",
		NotElement: "∉",
		NotEqual: "≠",
		NotEqualTilde,
		NotExists: "∄",
		NotGreater: "≯",
		NotGreaterEqual: "≱",
		NotGreaterFullEqual,
		NotGreaterGreater,
		NotGreaterLess: "≹",
		NotGreaterSlantEqual,
		NotGreaterTilde: "≵",
		NotHumpDownHump,
		NotHumpEqual,
		notin: "∉",
		notindot,
		notinE,
		notinva: "∉",
		notinvb: "⋷",
		notinvc: "⋶",
		NotLeftTriangleBar,
		NotLeftTriangle: "⋪",
		NotLeftTriangleEqual: "⋬",
		NotLess: "≮",
		NotLessEqual: "≰",
		NotLessGreater: "≸",
		NotLessLess,
		NotLessSlantEqual,
		NotLessTilde: "≴",
		NotNestedGreaterGreater,
		NotNestedLessLess,
		notni: "∌",
		notniva: "∌",
		notnivb: "⋾",
		notnivc: "⋽",
		NotPrecedes: "⊀",
		NotPrecedesEqual,
		NotPrecedesSlantEqual: "⋠",
		NotReverseElement: "∌",
		NotRightTriangleBar,
		NotRightTriangle: "⋫",
		NotRightTriangleEqual: "⋭",
		NotSquareSubset,
		NotSquareSubsetEqual: "⋢",
		NotSquareSuperset,
		NotSquareSupersetEqual: "⋣",
		NotSubset,
		NotSubsetEqual: "⊈",
		NotSucceeds: "⊁",
		NotSucceedsEqual,
		NotSucceedsSlantEqual: "⋡",
		NotSucceedsTilde,
		NotSuperset,
		NotSupersetEqual: "⊉",
		NotTilde: "≁",
		NotTildeEqual: "≄",
		NotTildeFullEqual: "≇",
		NotTildeTilde: "≉",
		NotVerticalBar: "∤",
		nparallel: "∦",
		npar: "∦",
		nparsl,
		npart,
		npolint: "⨔",
		npr: "⊀",
		nprcue: "⋠",
		nprec: "⊀",
		npreceq,
		npre,
		nrarrc,
		nrarr: "↛",
		nrArr: "⇏",
		nrarrw,
		nrightarrow: "↛",
		nRightarrow: "⇏",
		nrtri: "⋫",
		nrtrie: "⋭",
		nsc: "⊁",
		nsccue: "⋡",
		nsce,
		Nscr,
		nscr,
		nshortmid: "∤",
		nshortparallel: "∦",
		nsim: "≁",
		nsime: "≄",
		nsimeq: "≄",
		nsmid: "∤",
		nspar: "∦",
		nsqsube: "⋢",
		nsqsupe: "⋣",
		nsub: "⊄",
		nsubE,
		nsube: "⊈",
		nsubset,
		nsubseteq: "⊈",
		nsubseteqq,
		nsucc: "⊁",
		nsucceq,
		nsup: "⊅",
		nsupE,
		nsupe: "⊉",
		nsupset,
		nsupseteq: "⊉",
		nsupseteqq,
		ntgl: "≹",
		Ntilde: "Ñ",
		ntilde: "ñ",
		ntlg: "≸",
		ntriangleleft: "⋪",
		ntrianglelefteq: "⋬",
		ntriangleright: "⋫",
		ntrianglerighteq: "⋭",
		Nu: "Ν",
		nu: "ν",
		num: "#",
		numero: "№",
		numsp: " ",
		nvap,
		nvdash: "⊬",
		nvDash: "⊭",
		nVdash: "⊮",
		nVDash: "⊯",
		nvge,
		nvgt,
		nvHarr: "⤄",
		nvinfin: "⧞",
		nvlArr: "⤂",
		nvle,
		nvlt,
		nvltrie,
		nvrArr: "⤃",
		nvrtrie,
		nvsim,
		nwarhk: "⤣",
		nwarr: "↖",
		nwArr: "⇖",
		nwarrow: "↖",
		nwnear: "⤧",
		Oacute: "Ó",
		oacute: "ó",
		oast: "⊛",
		Ocirc: "Ô",
		ocirc: "ô",
		ocir: "⊚",
		Ocy: "О",
		ocy: "о",
		odash: "⊝",
		Odblac: "Ő",
		odblac: "ő",
		odiv: "⨸",
		odot: "⊙",
		odsold: "⦼",
		OElig: "Œ",
		oelig: "œ",
		ofcir: "⦿",
		Ofr,
		ofr,
		ogon: "˛",
		Ograve: "Ò",
		ograve: "ò",
		ogt: "⧁",
		ohbar: "⦵",
		ohm: "Ω",
		oint: "∮",
		olarr: "↺",
		olcir: "⦾",
		olcross: "⦻",
		oline: "‾",
		olt: "⧀",
		Omacr: "Ō",
		omacr: "ō",
		Omega: "Ω",
		omega: "ω",
		Omicron: "Ο",
		omicron: "ο",
		omid: "⦶",
		ominus: "⊖",
		Oopf,
		oopf,
		opar: "⦷",
		OpenCurlyDoubleQuote: "“",
		OpenCurlyQuote: "‘",
		operp: "⦹",
		oplus: "⊕",
		orarr: "↻",
		Or: "⩔",
		or: "∨",
		ord: "⩝",
		order: "ℴ",
		orderof: "ℴ",
		ordf: "ª",
		ordm: "º",
		origof: "⊶",
		oror: "⩖",
		orslope: "⩗",
		orv: "⩛",
		oS: "Ⓢ",
		Oscr,
		oscr: "ℴ",
		Oslash: "Ø",
		oslash: "ø",
		osol: "⊘",
		Otilde: "Õ",
		otilde: "õ",
		otimesas: "⨶",
		Otimes: "⨷",
		otimes: "⊗",
		Ouml: "Ö",
		ouml: "ö",
		ovbar: "⌽",
		OverBar: "‾",
		OverBrace: "⏞",
		OverBracket: "⎴",
		OverParenthesis: "⏜",
		para: "¶",
		parallel: "∥",
		par: "∥",
		parsim: "⫳",
		parsl: "⫽",
		part: "∂",
		PartialD: "∂",
		Pcy: "П",
		pcy: "п",
		percnt: "%",
		period: ".",
		permil: "‰",
		perp: "⊥",
		pertenk: "‱",
		Pfr,
		pfr,
		Phi: "Φ",
		phi: "φ",
		phiv: "ϕ",
		phmmat: "ℳ",
		phone: "☎",
		Pi: "Π",
		pi: "π",
		pitchfork: "⋔",
		piv: "ϖ",
		planck: "ℏ",
		planckh: "ℎ",
		plankv: "ℏ",
		plusacir: "⨣",
		plusb: "⊞",
		pluscir: "⨢",
		plus: "+",
		plusdo: "∔",
		plusdu: "⨥",
		pluse: "⩲",
		PlusMinus: "±",
		plusmn: "±",
		plussim: "⨦",
		plustwo: "⨧",
		pm: "±",
		Poincareplane: "ℌ",
		pointint: "⨕",
		popf,
		Popf: "ℙ",
		pound: "£",
		prap: "⪷",
		Pr: "⪻",
		pr: "≺",
		prcue: "≼",
		precapprox: "⪷",
		prec: "≺",
		preccurlyeq: "≼",
		Precedes: "≺",
		PrecedesEqual: "⪯",
		PrecedesSlantEqual: "≼",
		PrecedesTilde: "≾",
		preceq: "⪯",
		precnapprox: "⪹",
		precneqq: "⪵",
		precnsim: "⋨",
		pre: "⪯",
		prE: "⪳",
		precsim: "≾",
		prime: "′",
		Prime: "″",
		primes: "ℙ",
		prnap: "⪹",
		prnE: "⪵",
		prnsim: "⋨",
		prod: "∏",
		Product: "∏",
		profalar: "⌮",
		profline: "⌒",
		profsurf: "⌓",
		prop: "∝",
		Proportional: "∝",
		Proportion: "∷",
		propto: "∝",
		prsim: "≾",
		prurel: "⊰",
		Pscr,
		pscr,
		Psi: "Ψ",
		psi: "ψ",
		puncsp: " ",
		Qfr,
		qfr,
		qint: "⨌",
		qopf,
		Qopf: "ℚ",
		qprime: "⁗",
		Qscr,
		qscr,
		quaternions: "ℍ",
		quatint: "⨖",
		quest: "?",
		questeq: "≟",
		quot: "\"",
		QUOT: "\"",
		rAarr: "⇛",
		race,
		Racute: "Ŕ",
		racute: "ŕ",
		radic: "√",
		raemptyv: "⦳",
		rang: "⟩",
		Rang: "⟫",
		rangd: "⦒",
		range: "⦥",
		rangle: "⟩",
		raquo: "»",
		rarrap: "⥵",
		rarrb: "⇥",
		rarrbfs: "⤠",
		rarrc: "⤳",
		rarr: "→",
		Rarr: "↠",
		rArr: "⇒",
		rarrfs: "⤞",
		rarrhk: "↪",
		rarrlp: "↬",
		rarrpl: "⥅",
		rarrsim: "⥴",
		Rarrtl: "⤖",
		rarrtl: "↣",
		rarrw: "↝",
		ratail: "⤚",
		rAtail: "⤜",
		ratio: "∶",
		rationals: "ℚ",
		rbarr: "⤍",
		rBarr: "⤏",
		RBarr: "⤐",
		rbbrk: "❳",
		rbrace: "}",
		rbrack: "]",
		rbrke: "⦌",
		rbrksld: "⦎",
		rbrkslu: "⦐",
		Rcaron: "Ř",
		rcaron: "ř",
		Rcedil: "Ŗ",
		rcedil: "ŗ",
		rceil: "⌉",
		rcub: "}",
		Rcy: "Р",
		rcy: "р",
		rdca: "⤷",
		rdldhar: "⥩",
		rdquo: "”",
		rdquor: "”",
		rdsh: "↳",
		real: "ℜ",
		realine: "ℛ",
		realpart: "ℜ",
		reals: "ℝ",
		Re: "ℜ",
		rect: "▭",
		reg: "®",
		REG: "®",
		ReverseElement: "∋",
		ReverseEquilibrium: "⇋",
		ReverseUpEquilibrium: "⥯",
		rfisht: "⥽",
		rfloor: "⌋",
		rfr,
		Rfr: "ℜ",
		rHar: "⥤",
		rhard: "⇁",
		rharu: "⇀",
		rharul: "⥬",
		Rho: "Ρ",
		rho: "ρ",
		rhov: "ϱ",
		RightAngleBracket: "⟩",
		RightArrowBar: "⇥",
		rightarrow: "→",
		RightArrow: "→",
		Rightarrow: "⇒",
		RightArrowLeftArrow: "⇄",
		rightarrowtail: "↣",
		RightCeiling: "⌉",
		RightDoubleBracket: "⟧",
		RightDownTeeVector: "⥝",
		RightDownVectorBar: "⥕",
		RightDownVector: "⇂",
		RightFloor: "⌋",
		rightharpoondown: "⇁",
		rightharpoonup: "⇀",
		rightleftarrows: "⇄",
		rightleftharpoons: "⇌",
		rightrightarrows: "⇉",
		rightsquigarrow: "↝",
		RightTeeArrow: "↦",
		RightTee: "⊢",
		RightTeeVector: "⥛",
		rightthreetimes: "⋌",
		RightTriangleBar: "⧐",
		RightTriangle: "⊳",
		RightTriangleEqual: "⊵",
		RightUpDownVector: "⥏",
		RightUpTeeVector: "⥜",
		RightUpVectorBar: "⥔",
		RightUpVector: "↾",
		RightVectorBar: "⥓",
		RightVector: "⇀",
		ring: "˚",
		risingdotseq: "≓",
		rlarr: "⇄",
		rlhar: "⇌",
		rlm: "‏",
		rmoustache: "⎱",
		rmoust: "⎱",
		rnmid: "⫮",
		roang: "⟭",
		roarr: "⇾",
		robrk: "⟧",
		ropar: "⦆",
		ropf,
		Ropf: "ℝ",
		roplus: "⨮",
		rotimes: "⨵",
		RoundImplies: "⥰",
		rpar: ")",
		rpargt: "⦔",
		rppolint: "⨒",
		rrarr: "⇉",
		Rrightarrow: "⇛",
		rsaquo: "›",
		rscr,
		Rscr: "ℛ",
		rsh: "↱",
		Rsh: "↱",
		rsqb: "]",
		rsquo: "’",
		rsquor: "’",
		rthree: "⋌",
		rtimes: "⋊",
		rtri: "▹",
		rtrie: "⊵",
		rtrif: "▸",
		rtriltri: "⧎",
		RuleDelayed: "⧴",
		ruluhar: "⥨",
		rx: "℞",
		Sacute: "Ś",
		sacute: "ś",
		sbquo: "‚",
		scap: "⪸",
		Scaron: "Š",
		scaron: "š",
		Sc: "⪼",
		sc: "≻",
		sccue: "≽",
		sce: "⪰",
		scE: "⪴",
		Scedil: "Ş",
		scedil: "ş",
		Scirc: "Ŝ",
		scirc: "ŝ",
		scnap: "⪺",
		scnE: "⪶",
		scnsim: "⋩",
		scpolint: "⨓",
		scsim: "≿",
		Scy: "С",
		scy: "с",
		sdotb: "⊡",
		sdot: "⋅",
		sdote: "⩦",
		searhk: "⤥",
		searr: "↘",
		seArr: "⇘",
		searrow: "↘",
		sect: "§",
		semi: ";",
		seswar: "⤩",
		setminus: "∖",
		setmn: "∖",
		sext: "✶",
		Sfr,
		sfr,
		sfrown: "⌢",
		sharp: "♯",
		SHCHcy: "Щ",
		shchcy: "щ",
		SHcy: "Ш",
		shcy: "ш",
		ShortDownArrow: "↓",
		ShortLeftArrow: "←",
		shortmid: "∣",
		shortparallel: "∥",
		ShortRightArrow: "→",
		ShortUpArrow: "↑",
		shy: "­",
		Sigma: "Σ",
		sigma: "σ",
		sigmaf: "ς",
		sigmav: "ς",
		sim: "∼",
		simdot: "⩪",
		sime: "≃",
		simeq: "≃",
		simg: "⪞",
		simgE: "⪠",
		siml: "⪝",
		simlE: "⪟",
		simne: "≆",
		simplus: "⨤",
		simrarr: "⥲",
		slarr: "←",
		SmallCircle: "∘",
		smallsetminus: "∖",
		smashp: "⨳",
		smeparsl: "⧤",
		smid: "∣",
		smile: "⌣",
		smt: "⪪",
		smte: "⪬",
		smtes,
		SOFTcy: "Ь",
		softcy: "ь",
		solbar: "⌿",
		solb: "⧄",
		sol: "/",
		Sopf,
		sopf,
		spades: "♠",
		spadesuit: "♠",
		spar: "∥",
		sqcap: "⊓",
		sqcaps,
		sqcup: "⊔",
		sqcups,
		Sqrt: "√",
		sqsub: "⊏",
		sqsube: "⊑",
		sqsubset: "⊏",
		sqsubseteq: "⊑",
		sqsup: "⊐",
		sqsupe: "⊒",
		sqsupset: "⊐",
		sqsupseteq: "⊒",
		square: "□",
		Square: "□",
		SquareIntersection: "⊓",
		SquareSubset: "⊏",
		SquareSubsetEqual: "⊑",
		SquareSuperset: "⊐",
		SquareSupersetEqual: "⊒",
		SquareUnion: "⊔",
		squarf: "▪",
		squ: "□",
		squf: "▪",
		srarr: "→",
		Sscr,
		sscr,
		ssetmn: "∖",
		ssmile: "⌣",
		sstarf: "⋆",
		Star: "⋆",
		star: "☆",
		starf: "★",
		straightepsilon: "ϵ",
		straightphi: "ϕ",
		strns: "¯",
		sub: "⊂",
		Sub: "⋐",
		subdot: "⪽",
		subE: "⫅",
		sube: "⊆",
		subedot: "⫃",
		submult: "⫁",
		subnE: "⫋",
		subne: "⊊",
		subplus: "⪿",
		subrarr: "⥹",
		subset: "⊂",
		Subset: "⋐",
		subseteq: "⊆",
		subseteqq: "⫅",
		SubsetEqual: "⊆",
		subsetneq: "⊊",
		subsetneqq: "⫋",
		subsim: "⫇",
		subsub: "⫕",
		subsup: "⫓",
		succapprox: "⪸",
		succ: "≻",
		succcurlyeq: "≽",
		Succeeds: "≻",
		SucceedsEqual: "⪰",
		SucceedsSlantEqual: "≽",
		SucceedsTilde: "≿",
		succeq: "⪰",
		succnapprox: "⪺",
		succneqq: "⪶",
		succnsim: "⋩",
		succsim: "≿",
		SuchThat: "∋",
		sum: "∑",
		Sum: "∑",
		sung: "♪",
		sup1: "¹",
		sup2: "²",
		sup3: "³",
		sup: "⊃",
		Sup: "⋑",
		supdot: "⪾",
		supdsub: "⫘",
		supE: "⫆",
		supe: "⊇",
		supedot: "⫄",
		Superset: "⊃",
		SupersetEqual: "⊇",
		suphsol: "⟉",
		suphsub: "⫗",
		suplarr: "⥻",
		supmult: "⫂",
		supnE: "⫌",
		supne: "⊋",
		supplus: "⫀",
		supset: "⊃",
		Supset: "⋑",
		supseteq: "⊇",
		supseteqq: "⫆",
		supsetneq: "⊋",
		supsetneqq: "⫌",
		supsim: "⫈",
		supsub: "⫔",
		supsup: "⫖",
		swarhk: "⤦",
		swarr: "↙",
		swArr: "⇙",
		swarrow: "↙",
		swnwar: "⤪",
		szlig: "ß",
		Tab: "	",
		target: "⌖",
		Tau: "Τ",
		tau: "τ",
		tbrk: "⎴",
		Tcaron: "Ť",
		tcaron: "ť",
		Tcedil: "Ţ",
		tcedil: "ţ",
		Tcy: "Т",
		tcy: "т",
		tdot: "⃛",
		telrec: "⌕",
		Tfr,
		tfr,
		there4: "∴",
		therefore: "∴",
		Therefore: "∴",
		Theta: "Θ",
		theta: "θ",
		thetasym: "ϑ",
		thetav: "ϑ",
		thickapprox: "≈",
		thicksim: "∼",
		ThickSpace,
		ThinSpace: " ",
		thinsp: " ",
		thkap: "≈",
		thksim: "∼",
		THORN: "Þ",
		thorn: "þ",
		tilde: "˜",
		Tilde: "∼",
		TildeEqual: "≃",
		TildeFullEqual: "≅",
		TildeTilde: "≈",
		timesbar: "⨱",
		timesb: "⊠",
		times: "×",
		timesd: "⨰",
		tint: "∭",
		toea: "⤨",
		topbot: "⌶",
		topcir: "⫱",
		top: "⊤",
		Topf,
		topf,
		topfork: "⫚",
		tosa: "⤩",
		tprime: "‴",
		trade: "™",
		TRADE: "™",
		triangle: "▵",
		triangledown: "▿",
		triangleleft: "◃",
		trianglelefteq: "⊴",
		triangleq: "≜",
		triangleright: "▹",
		trianglerighteq: "⊵",
		tridot: "◬",
		trie: "≜",
		triminus: "⨺",
		TripleDot: "⃛",
		triplus: "⨹",
		trisb: "⧍",
		tritime: "⨻",
		trpezium: "⏢",
		Tscr,
		tscr,
		TScy: "Ц",
		tscy: "ц",
		TSHcy: "Ћ",
		tshcy: "ћ",
		Tstrok: "Ŧ",
		tstrok: "ŧ",
		twixt: "≬",
		twoheadleftarrow: "↞",
		twoheadrightarrow: "↠",
		Uacute: "Ú",
		uacute: "ú",
		uarr: "↑",
		Uarr: "↟",
		uArr: "⇑",
		Uarrocir: "⥉",
		Ubrcy: "Ў",
		ubrcy: "ў",
		Ubreve: "Ŭ",
		ubreve: "ŭ",
		Ucirc: "Û",
		ucirc: "û",
		Ucy: "У",
		ucy: "у",
		udarr: "⇅",
		Udblac: "Ű",
		udblac: "ű",
		udhar: "⥮",
		ufisht: "⥾",
		Ufr,
		ufr,
		Ugrave: "Ù",
		ugrave: "ù",
		uHar: "⥣",
		uharl: "↿",
		uharr: "↾",
		uhblk: "▀",
		ulcorn: "⌜",
		ulcorner: "⌜",
		ulcrop: "⌏",
		ultri: "◸",
		Umacr: "Ū",
		umacr: "ū",
		uml: "¨",
		UnderBar: "_",
		UnderBrace: "⏟",
		UnderBracket: "⎵",
		UnderParenthesis: "⏝",
		Union: "⋃",
		UnionPlus: "⊎",
		Uogon: "Ų",
		uogon: "ų",
		Uopf,
		uopf,
		UpArrowBar: "⤒",
		uparrow: "↑",
		UpArrow: "↑",
		Uparrow: "⇑",
		UpArrowDownArrow: "⇅",
		updownarrow: "↕",
		UpDownArrow: "↕",
		Updownarrow: "⇕",
		UpEquilibrium: "⥮",
		upharpoonleft: "↿",
		upharpoonright: "↾",
		uplus: "⊎",
		UpperLeftArrow: "↖",
		UpperRightArrow: "↗",
		upsi: "υ",
		Upsi: "ϒ",
		upsih: "ϒ",
		Upsilon: "Υ",
		upsilon: "υ",
		UpTeeArrow: "↥",
		UpTee: "⊥",
		upuparrows: "⇈",
		urcorn: "⌝",
		urcorner: "⌝",
		urcrop: "⌎",
		Uring: "Ů",
		uring: "ů",
		urtri: "◹",
		Uscr,
		uscr,
		utdot: "⋰",
		Utilde: "Ũ",
		utilde: "ũ",
		utri: "▵",
		utrif: "▴",
		uuarr: "⇈",
		Uuml: "Ü",
		uuml: "ü",
		uwangle: "⦧",
		vangrt: "⦜",
		varepsilon: "ϵ",
		varkappa: "ϰ",
		varnothing: "∅",
		varphi: "ϕ",
		varpi: "ϖ",
		varpropto: "∝",
		varr: "↕",
		vArr: "⇕",
		varrho: "ϱ",
		varsigma: "ς",
		varsubsetneq,
		varsubsetneqq,
		varsupsetneq,
		varsupsetneqq,
		vartheta: "ϑ",
		vartriangleleft: "⊲",
		vartriangleright: "⊳",
		vBar: "⫨",
		Vbar: "⫫",
		vBarv: "⫩",
		Vcy: "В",
		vcy: "в",
		vdash: "⊢",
		vDash: "⊨",
		Vdash: "⊩",
		VDash: "⊫",
		Vdashl: "⫦",
		veebar: "⊻",
		vee: "∨",
		Vee: "⋁",
		veeeq: "≚",
		vellip: "⋮",
		verbar: "|",
		Verbar: "‖",
		vert: "|",
		Vert: "‖",
		VerticalBar: "∣",
		VerticalLine: "|",
		VerticalSeparator: "❘",
		VerticalTilde: "≀",
		VeryThinSpace: " ",
		Vfr,
		vfr,
		vltri: "⊲",
		vnsub,
		vnsup,
		Vopf,
		vopf,
		vprop: "∝",
		vrtri: "⊳",
		Vscr,
		vscr,
		vsubnE,
		vsubne,
		vsupnE,
		vsupne,
		Vvdash: "⊪",
		vzigzag: "⦚",
		Wcirc: "Ŵ",
		wcirc: "ŵ",
		wedbar: "⩟",
		wedge: "∧",
		Wedge: "⋀",
		wedgeq: "≙",
		weierp: "℘",
		Wfr,
		wfr,
		Wopf,
		wopf,
		wp: "℘",
		wr: "≀",
		wreath: "≀",
		Wscr,
		wscr,
		xcap: "⋂",
		xcirc: "◯",
		xcup: "⋃",
		xdtri: "▽",
		Xfr,
		xfr,
		xharr: "⟷",
		xhArr: "⟺",
		Xi: "Ξ",
		xi: "ξ",
		xlarr: "⟵",
		xlArr: "⟸",
		xmap: "⟼",
		xnis: "⋻",
		xodot: "⨀",
		Xopf,
		xopf,
		xoplus: "⨁",
		xotime: "⨂",
		xrarr: "⟶",
		xrArr: "⟹",
		Xscr,
		xscr,
		xsqcup: "⨆",
		xuplus: "⨄",
		xutri: "△",
		xvee: "⋁",
		xwedge: "⋀",
		Yacute: "Ý",
		yacute: "ý",
		YAcy: "Я",
		yacy: "я",
		Ycirc: "Ŷ",
		ycirc: "ŷ",
		Ycy: "Ы",
		ycy: "ы",
		yen: "¥",
		Yfr,
		yfr,
		YIcy: "Ї",
		yicy: "ї",
		Yopf,
		yopf,
		Yscr,
		yscr,
		YUcy: "Ю",
		yucy: "ю",
		yuml: "ÿ",
		Yuml: "Ÿ",
		Zacute: "Ź",
		zacute: "ź",
		Zcaron: "Ž",
		zcaron: "ž",
		Zcy: "З",
		zcy: "з",
		Zdot: "Ż",
		zdot: "ż",
		zeetrf: "ℨ",
		ZeroWidthSpace: "​",
		Zeta: "Ζ",
		zeta: "ζ",
		zfr,
		Zfr: "ℨ",
		ZHcy: "Ж",
		zhcy: "ж",
		zigrarr: "⇝",
		zopf,
		Zopf: "ℤ",
		Zscr,
		zscr,
		zwj: "‍",
		zwnj: "‌"
	};
}));
//#endregion
//#region extension/node_modules/entities/lib/maps/legacy.json
var legacy_exports = /* @__PURE__ */ __exportAll({
	AElig: () => "Æ",
	AMP: () => "&",
	Aacute: () => "Á",
	Acirc: () => "Â",
	Agrave: () => "À",
	Aring: () => "Å",
	Atilde: () => "Ã",
	Auml: () => "Ä",
	COPY: () => "©",
	Ccedil: () => "Ç",
	ETH: () => "Ð",
	Eacute: () => "É",
	Ecirc: () => "Ê",
	Egrave: () => "È",
	Euml: () => "Ë",
	GT: () => ">",
	Iacute: () => "Í",
	Icirc: () => "Î",
	Igrave: () => "Ì",
	Iuml: () => "Ï",
	LT: () => "<",
	Ntilde: () => "Ñ",
	Oacute: () => "Ó",
	Ocirc: () => "Ô",
	Ograve: () => "Ò",
	Oslash: () => "Ø",
	Otilde: () => "Õ",
	Ouml: () => "Ö",
	QUOT: () => "\"",
	REG: () => "®",
	THORN: () => "Þ",
	Uacute: () => "Ú",
	Ucirc: () => "Û",
	Ugrave: () => "Ù",
	Uuml: () => "Ü",
	Yacute: () => "Ý",
	aacute: () => "á",
	acirc: () => "â",
	acute: () => "´",
	aelig: () => "æ",
	agrave: () => "à",
	amp: () => "&",
	aring: () => "å",
	atilde: () => "ã",
	auml: () => "ä",
	brvbar: () => "¦",
	ccedil: () => "ç",
	cedil: () => "¸",
	cent: () => "¢",
	copy: () => "©",
	curren: () => "¤",
	default: () => legacy_default,
	deg: () => "°",
	divide: () => "÷",
	eacute: () => "é",
	ecirc: () => "ê",
	egrave: () => "è",
	eth: () => "ð",
	euml: () => "ë",
	frac12: () => "½",
	frac14: () => "¼",
	frac34: () => "¾",
	gt: () => ">",
	iacute: () => "í",
	icirc: () => "î",
	iexcl: () => "¡",
	igrave: () => "ì",
	iquest: () => "¿",
	iuml: () => "ï",
	laquo: () => "«",
	lt: () => "<",
	macr: () => "¯",
	micro: () => "µ",
	middot: () => "·",
	nbsp: () => "\xA0",
	not: () => "¬",
	ntilde: () => "ñ",
	oacute: () => "ó",
	ocirc: () => "ô",
	ograve: () => "ò",
	ordf: () => "ª",
	ordm: () => "º",
	oslash: () => "ø",
	otilde: () => "õ",
	ouml: () => "ö",
	para: () => "¶",
	plusmn: () => "±",
	pound: () => "£",
	quot: () => "\"",
	raquo: () => "»",
	reg: () => "®",
	sect: () => "§",
	shy: () => "­",
	sup1: () => "¹",
	sup2: () => "²",
	sup3: () => "³",
	szlig: () => "ß",
	thorn: () => "þ",
	times: () => "×",
	uacute: () => "ú",
	ucirc: () => "û",
	ugrave: () => "ù",
	uml: () => "¨",
	uuml: () => "ü",
	yacute: () => "ý",
	yen: () => "¥",
	yuml: () => "ÿ"
}), legacy_default;
var init_legacy = __esmMin((() => {
	legacy_default = {
		Aacute: "Á",
		aacute: "á",
		Acirc: "Â",
		acirc: "â",
		acute: "´",
		AElig: "Æ",
		aelig: "æ",
		Agrave: "À",
		agrave: "à",
		amp: "&",
		AMP: "&",
		Aring: "Å",
		aring: "å",
		Atilde: "Ã",
		atilde: "ã",
		Auml: "Ä",
		auml: "ä",
		brvbar: "¦",
		Ccedil: "Ç",
		ccedil: "ç",
		cedil: "¸",
		cent: "¢",
		copy: "©",
		COPY: "©",
		curren: "¤",
		deg: "°",
		divide: "÷",
		Eacute: "É",
		eacute: "é",
		Ecirc: "Ê",
		ecirc: "ê",
		Egrave: "È",
		egrave: "è",
		ETH: "Ð",
		eth: "ð",
		Euml: "Ë",
		euml: "ë",
		frac12: "½",
		frac14: "¼",
		frac34: "¾",
		gt: ">",
		GT: ">",
		Iacute: "Í",
		iacute: "í",
		Icirc: "Î",
		icirc: "î",
		iexcl: "¡",
		Igrave: "Ì",
		igrave: "ì",
		iquest: "¿",
		Iuml: "Ï",
		iuml: "ï",
		laquo: "«",
		lt: "<",
		LT: "<",
		macr: "¯",
		micro: "µ",
		middot: "·",
		nbsp: "\xA0",
		not: "¬",
		Ntilde: "Ñ",
		ntilde: "ñ",
		Oacute: "Ó",
		oacute: "ó",
		Ocirc: "Ô",
		ocirc: "ô",
		Ograve: "Ò",
		ograve: "ò",
		ordf: "ª",
		ordm: "º",
		Oslash: "Ø",
		oslash: "ø",
		Otilde: "Õ",
		otilde: "õ",
		Ouml: "Ö",
		ouml: "ö",
		para: "¶",
		plusmn: "±",
		pound: "£",
		quot: "\"",
		QUOT: "\"",
		raquo: "»",
		reg: "®",
		REG: "®",
		sect: "§",
		shy: "­",
		sup1: "¹",
		sup2: "²",
		sup3: "³",
		szlig: "ß",
		THORN: "Þ",
		thorn: "þ",
		times: "×",
		Uacute: "Ú",
		uacute: "ú",
		Ucirc: "Û",
		ucirc: "û",
		Ugrave: "Ù",
		ugrave: "ù",
		uml: "¨",
		Uuml: "Ü",
		uuml: "ü",
		Yacute: "Ý",
		yacute: "ý",
		yen: "¥",
		yuml: "ÿ"
	};
}));
//#endregion
//#region extension/node_modules/entities/lib/maps/xml.json
var xml_exports = /* @__PURE__ */ __exportAll({
	amp: () => "&",
	apos: () => "'",
	default: () => xml_default,
	gt: () => ">",
	lt: () => "<",
	quot: () => "\""
}), xml_default;
var init_xml = __esmMin((() => {
	xml_default = {
		amp: "&",
		apos: "'",
		gt: ">",
		lt: "<",
		quot: "\""
	};
}));
//#endregion
//#region extension/node_modules/entities/lib/maps/decode.json
var decode_exports = /* @__PURE__ */ __exportAll({ default: () => decode_default });
var decode_default;
var init_decode = __esmMin((() => {
	decode_default = {
		"0": 65533,
		"128": 8364,
		"130": 8218,
		"131": 402,
		"132": 8222,
		"133": 8230,
		"134": 8224,
		"135": 8225,
		"136": 710,
		"137": 8240,
		"138": 352,
		"139": 8249,
		"140": 338,
		"142": 381,
		"145": 8216,
		"146": 8217,
		"147": 8220,
		"148": 8221,
		"149": 8226,
		"150": 8211,
		"151": 8212,
		"152": 732,
		"153": 8482,
		"154": 353,
		"155": 8250,
		"156": 339,
		"158": 382,
		"159": 376
	};
}));
//#endregion
//#region extension/node_modules/entities/lib/decode_codepoint.js
var require_decode_codepoint = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	var decode_json_1 = __importDefault((init_decode(), __toCommonJS(decode_exports).default));
	var fromCodePoint = String.fromCodePoint || function(codePoint) {
		var output = "";
		if (codePoint > 65535) {
			codePoint -= 65536;
			output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
			codePoint = 56320 | codePoint & 1023;
		}
		output += String.fromCharCode(codePoint);
		return output;
	};
	function decodeCodePoint(codePoint) {
		if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) return "�";
		if (codePoint in decode_json_1.default) codePoint = decode_json_1.default[codePoint];
		return fromCodePoint(codePoint);
	}
	exports.default = decodeCodePoint;
}));
//#endregion
//#region extension/node_modules/entities/lib/decode.js
var require_decode = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;
	var entities_json_1 = __importDefault((init_entities(), __toCommonJS(entities_exports).default));
	var legacy_json_1 = __importDefault((init_legacy(), __toCommonJS(legacy_exports).default));
	var xml_json_1 = __importDefault((init_xml(), __toCommonJS(xml_exports).default));
	var decode_codepoint_1 = __importDefault(require_decode_codepoint());
	var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
	exports.decodeXML = getStrictDecoder(xml_json_1.default);
	exports.decodeHTMLStrict = getStrictDecoder(entities_json_1.default);
	function getStrictDecoder(map) {
		var replace = getReplacer(map);
		return function(str) {
			return String(str).replace(strictEntityRe, replace);
		};
	}
	var sorter = function(a, b) {
		return a < b ? 1 : -1;
	};
	exports.decodeHTML = (function() {
		var legacy = Object.keys(legacy_json_1.default).sort(sorter);
		var keys = Object.keys(entities_json_1.default).sort(sorter);
		for (var i = 0, j = 0; i < keys.length; i++) if (legacy[j] === keys[i]) {
			keys[i] += ";?";
			j++;
		} else keys[i] += ";";
		var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
		var replace = getReplacer(entities_json_1.default);
		function replacer(str) {
			if (str.substr(-1) !== ";") str += ";";
			return replace(str);
		}
		return function(str) {
			return String(str).replace(re, replacer);
		};
	})();
	function getReplacer(map) {
		return function replace(str) {
			if (str.charAt(1) === "#") {
				var secondChar = str.charAt(2);
				if (secondChar === "X" || secondChar === "x") return decode_codepoint_1.default(parseInt(str.substr(3), 16));
				return decode_codepoint_1.default(parseInt(str.substr(2), 10));
			}
			return map[str.slice(1, -1)] || str;
		};
	}
}));
//#endregion
//#region extension/node_modules/entities/lib/encode.js
var require_encode = /* @__PURE__ */ __commonJSMin(((exports) => {
	var __importDefault = exports && exports.__importDefault || function(mod) {
		return mod && mod.__esModule ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = void 0;
	var inverseXML = getInverseObj(__importDefault((init_xml(), __toCommonJS(xml_exports).default)).default);
	var xmlReplacer = getInverseReplacer(inverseXML);
	/**
	* Encodes all non-ASCII characters, as well as characters not valid in XML
	* documents using XML entities.
	*
	* If a character has no equivalent entity, a
	* numeric hexadecimal reference (eg. `&#xfc;`) will be used.
	*/
	exports.encodeXML = getASCIIEncoder(inverseXML);
	var inverseHTML = getInverseObj(__importDefault((init_entities(), __toCommonJS(entities_exports).default)).default);
	/**
	* Encodes all entities and non-ASCII characters in the input.
	*
	* This includes characters that are valid ASCII characters in HTML documents.
	* For example `#` will be encoded as `&num;`. To get a more compact output,
	* consider using the `encodeNonAsciiHTML` function.
	*
	* If a character has no equivalent entity, a
	* numeric hexadecimal reference (eg. `&#xfc;`) will be used.
	*/
	exports.encodeHTML = getInverse(inverseHTML, getInverseReplacer(inverseHTML));
	/**
	* Encodes all non-ASCII characters, as well as characters not valid in HTML
	* documents using HTML entities.
	*
	* If a character has no equivalent entity, a
	* numeric hexadecimal reference (eg. `&#xfc;`) will be used.
	*/
	exports.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
	function getInverseObj(obj) {
		return Object.keys(obj).sort().reduce(function(inverse, name) {
			inverse[obj[name]] = "&" + name + ";";
			return inverse;
		}, {});
	}
	function getInverseReplacer(inverse) {
		var single = [];
		var multiple = [];
		for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
			var k = _a[_i];
			if (k.length === 1) single.push("\\" + k);
			else multiple.push(k);
		}
		single.sort();
		for (var start = 0; start < single.length - 1; start++) {
			var end = start;
			while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) end += 1;
			var count = 1 + end - start;
			if (count < 3) continue;
			single.splice(start, count, single[start] + "-" + single[end]);
		}
		multiple.unshift("[" + single.join("") + "]");
		return new RegExp(multiple.join("|"), "g");
	}
	var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
	var getCodePoint = String.prototype.codePointAt != null ? function(str) {
		return str.codePointAt(0);
	} : function(c) {
		return (c.charCodeAt(0) - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536;
	};
	function singleCharReplacer(c) {
		return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
	}
	function getInverse(inverse, re) {
		return function(data) {
			return data.replace(re, function(name) {
				return inverse[name];
			}).replace(reNonASCII, singleCharReplacer);
		};
	}
	var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
	/**
	* Encodes all non-ASCII characters, as well as characters not valid in XML
	* documents using numeric hexadecimal reference (eg. `&#xfc;`).
	*
	* Have a look at `escapeUTF8` if you want a more concise output at the expense
	* of reduced transportability.
	*
	* @param data String to escape.
	*/
	function escape(data) {
		return data.replace(reEscapeChars, singleCharReplacer);
	}
	exports.escape = escape;
	/**
	* Encodes all characters not valid in XML documents using numeric hexadecimal
	* reference (eg. `&#xfc;`).
	*
	* Note that the output will be character-set dependent.
	*
	* @param data String to escape.
	*/
	function escapeUTF8(data) {
		return data.replace(xmlReplacer, singleCharReplacer);
	}
	exports.escapeUTF8 = escapeUTF8;
	function getASCIIEncoder(obj) {
		return function(data) {
			return data.replace(reEscapeChars, function(c) {
				return obj[c] || singleCharReplacer(c);
			});
		};
	}
}));
//#endregion
//#region extension/node_modules/entities/lib/index.js
var require_lib = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
	var decode_1 = require_decode();
	var encode_1 = require_encode();
	/**
	* Decodes a string with entities.
	*
	* @param data String to decode.
	* @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
	* @deprecated Use `decodeXML` or `decodeHTML` directly.
	*/
	function decode(data, level) {
		return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
	}
	exports.decode = decode;
	/**
	* Decodes a string with entities. Does not allow missing trailing semicolons for entities.
	*
	* @param data String to decode.
	* @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
	* @deprecated Use `decodeHTMLStrict` or `decodeXML` directly.
	*/
	function decodeStrict(data, level) {
		return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
	}
	exports.decodeStrict = decodeStrict;
	/**
	* Encodes a string with entities.
	*
	* @param data String to encode.
	* @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
	* @deprecated Use `encodeHTML`, `encodeXML` or `encodeNonAsciiHTML` directly.
	*/
	function encode(data, level) {
		return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
	}
	exports.encode = encode;
	var encode_2 = require_encode();
	Object.defineProperty(exports, "encodeXML", {
		enumerable: true,
		get: function() {
			return encode_2.encodeXML;
		}
	});
	Object.defineProperty(exports, "encodeHTML", {
		enumerable: true,
		get: function() {
			return encode_2.encodeHTML;
		}
	});
	Object.defineProperty(exports, "encodeNonAsciiHTML", {
		enumerable: true,
		get: function() {
			return encode_2.encodeNonAsciiHTML;
		}
	});
	Object.defineProperty(exports, "escape", {
		enumerable: true,
		get: function() {
			return encode_2.escape;
		}
	});
	Object.defineProperty(exports, "escapeUTF8", {
		enumerable: true,
		get: function() {
			return encode_2.escapeUTF8;
		}
	});
	Object.defineProperty(exports, "encodeHTML4", {
		enumerable: true,
		get: function() {
			return encode_2.encodeHTML;
		}
	});
	Object.defineProperty(exports, "encodeHTML5", {
		enumerable: true,
		get: function() {
			return encode_2.encodeHTML;
		}
	});
	var decode_2 = require_decode();
	Object.defineProperty(exports, "decodeXML", {
		enumerable: true,
		get: function() {
			return decode_2.decodeXML;
		}
	});
	Object.defineProperty(exports, "decodeHTML", {
		enumerable: true,
		get: function() {
			return decode_2.decodeHTML;
		}
	});
	Object.defineProperty(exports, "decodeHTMLStrict", {
		enumerable: true,
		get: function() {
			return decode_2.decodeHTMLStrict;
		}
	});
	Object.defineProperty(exports, "decodeHTML4", {
		enumerable: true,
		get: function() {
			return decode_2.decodeHTML;
		}
	});
	Object.defineProperty(exports, "decodeHTML5", {
		enumerable: true,
		get: function() {
			return decode_2.decodeHTML;
		}
	});
	Object.defineProperty(exports, "decodeHTML4Strict", {
		enumerable: true,
		get: function() {
			return decode_2.decodeHTMLStrict;
		}
	});
	Object.defineProperty(exports, "decodeHTML5Strict", {
		enumerable: true,
		get: function() {
			return decode_2.decodeHTMLStrict;
		}
	});
	Object.defineProperty(exports, "decodeXMLStrict", {
		enumerable: true,
		get: function() {
			return decode_2.decodeXML;
		}
	});
}));
//#endregion
//#region extension/node_modules/rss-parser/lib/utils.js
var require_utils = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var utils = module.exports = {};
	var entities = require_lib();
	var xml2js = require_xml2js();
	utils.stripHtml = function(str) {
		str = str.replace(/([^\n])<\/?(h|br|p|ul|ol|li|blockquote|section|table|tr|div)(?:.|\n)*?>([^\n])/gm, "$1\n$3");
		str = str.replace(/<(?:.|\n)*?>/gm, "");
		return str;
	};
	utils.getSnippet = function(str) {
		return entities.decodeHTML(utils.stripHtml(str)).trim();
	};
	utils.getLink = function(links, rel, fallbackIdx) {
		if (!links) return;
		for (let i = 0; i < links.length; ++i) if (links[i].$.rel === rel) return links[i].$.href;
		if (links[fallbackIdx]) return links[fallbackIdx].$.href;
	};
	utils.getContent = function(content) {
		if (typeof content._ === "string") return content._;
		else if (typeof content === "object") return new xml2js.Builder({
			headless: true,
			explicitRoot: true,
			rootName: "div",
			renderOpts: { pretty: false }
		}).buildObject(content);
		else return content;
	};
	utils.copyFromXML = function(xml, dest, fields) {
		fields.forEach(function(f) {
			let from = f;
			let to = f;
			let options = {};
			if (Array.isArray(f)) {
				from = f[0];
				to = f[1];
				if (f.length > 2) options = f[2];
			}
			const { keepArray, includeSnippet } = options;
			if (xml[from] !== void 0) dest[to] = keepArray ? xml[from] : xml[from][0];
			if (dest[to] && typeof dest[to]._ === "string") dest[to] = dest[to]._;
			if (includeSnippet && dest[to] && typeof dest[to] === "string") dest[to + "Snippet"] = utils.getSnippet(dest[to]);
		});
	};
	utils.maybePromisify = function(callback, promise) {
		if (!callback) return promise;
		return promise.then((data) => setTimeout(() => callback(null, data)), (err) => setTimeout(() => callback(err)));
	};
	var DEFAULT_ENCODING = "utf8";
	var ENCODING_REGEX = /(encoding|charset)\s*=\s*(\S+)/;
	var SUPPORTED_ENCODINGS = [
		"ascii",
		"utf8",
		"utf16le",
		"ucs2",
		"base64",
		"latin1",
		"binary",
		"hex"
	];
	var ENCODING_ALIASES = {
		"utf-8": "utf8",
		"iso-8859-1": "latin1"
	};
	utils.getEncodingFromContentType = function(contentType) {
		contentType = contentType || "";
		let encoding = (contentType.match(ENCODING_REGEX) || [])[2] || "";
		encoding = encoding.toLowerCase();
		encoding = ENCODING_ALIASES[encoding] || encoding;
		if (!encoding || SUPPORTED_ENCODINGS.indexOf(encoding) === -1) encoding = DEFAULT_ENCODING;
		return encoding;
	};
}));
//#endregion
//#region extension/node_modules/rss-parser/lib/parser.js
var require_parser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var http = require("http");
	var https = require("https");
	var xml2js = require_xml2js();
	var url = require("url");
	var fields = require_fields();
	var utils = require_utils();
	var DEFAULT_HEADERS = {
		"User-Agent": "rss-parser",
		"Accept": "application/rss+xml"
	};
	var DEFAULT_MAX_REDIRECTS = 5;
	var DEFAULT_TIMEOUT = 6e4;
	var Parser = class {
		constructor(options = {}) {
			options.headers = options.headers || {};
			options.xml2js = options.xml2js || {};
			options.customFields = options.customFields || {};
			options.customFields.item = options.customFields.item || [];
			options.customFields.feed = options.customFields.feed || [];
			options.requestOptions = options.requestOptions || {};
			if (!options.maxRedirects) options.maxRedirects = DEFAULT_MAX_REDIRECTS;
			if (!options.timeout) options.timeout = DEFAULT_TIMEOUT;
			this.options = options;
			this.xmlParser = new xml2js.Parser(this.options.xml2js);
		}
		parseString(xml, callback) {
			let prom = new Promise((resolve, reject) => {
				this.xmlParser.parseString(xml, (err, result) => {
					if (err) return reject(err);
					if (!result) return reject(/* @__PURE__ */ new Error("Unable to parse XML."));
					let feed = null;
					if (result.feed) feed = this.buildAtomFeed(result);
					else if (result.rss && result.rss.$ && result.rss.$.version && result.rss.$.version.match(/^2/)) feed = this.buildRSS2(result);
					else if (result["rdf:RDF"]) feed = this.buildRSS1(result);
					else if (result.rss && result.rss.$ && result.rss.$.version && result.rss.$.version.match(/0\.9/)) feed = this.buildRSS0_9(result);
					else if (result.rss && this.options.defaultRSS) switch (this.options.defaultRSS) {
						case .9:
							feed = this.buildRSS0_9(result);
							break;
						case 1:
							feed = this.buildRSS1(result);
							break;
						case 2:
							feed = this.buildRSS2(result);
							break;
						default: return reject(/* @__PURE__ */ new Error("default RSS version not recognized."));
					}
					else return reject(/* @__PURE__ */ new Error("Feed not recognized as RSS 1 or 2."));
					resolve(feed);
				});
			});
			prom = utils.maybePromisify(callback, prom);
			return prom;
		}
		parseURL(feedUrl, callback, redirectCount = 0) {
			let xml = "";
			let get = feedUrl.indexOf("https") === 0 ? https.get : http.get;
			let urlParts = url.parse(feedUrl);
			let headers = Object.assign({}, DEFAULT_HEADERS, this.options.headers);
			let timeout = null;
			let prom = new Promise((resolve, reject) => {
				const requestOpts = Object.assign({ headers }, urlParts, this.options.requestOptions);
				get(requestOpts, (res) => {
					if (this.options.maxRedirects && res.statusCode >= 300 && res.statusCode < 400 && res.headers["location"]) if (redirectCount === this.options.maxRedirects) return reject(/* @__PURE__ */ new Error("Too many redirects"));
					else {
						const newLocation = url.resolve(feedUrl, res.headers["location"]);
						return this.parseURL(newLocation, null, redirectCount + 1).then(resolve, reject);
					}
					else if (res.statusCode >= 300) return reject(/* @__PURE__ */ new Error("Status code " + res.statusCode));
					let encoding = utils.getEncodingFromContentType(res.headers["content-type"]);
					res.setEncoding(encoding);
					res.on("data", (chunk) => {
						xml += chunk;
					});
					res.on("end", () => {
						return this.parseString(xml).then(resolve, reject);
					});
				}).on("error", reject);
				timeout = setTimeout(() => {
					return reject(/* @__PURE__ */ new Error("Request timed out after " + this.options.timeout + "ms"));
				}, this.options.timeout);
			}).then((data) => {
				clearTimeout(timeout);
				return Promise.resolve(data);
			}, (e) => {
				clearTimeout(timeout);
				return Promise.reject(e);
			});
			prom = utils.maybePromisify(callback, prom);
			return prom;
		}
		buildAtomFeed(xmlObj) {
			let feed = { items: [] };
			utils.copyFromXML(xmlObj.feed, feed, this.options.customFields.feed);
			if (xmlObj.feed.link) {
				feed.link = utils.getLink(xmlObj.feed.link, "alternate", 0);
				feed.feedUrl = utils.getLink(xmlObj.feed.link, "self", 1);
			}
			if (xmlObj.feed.title) {
				let title = xmlObj.feed.title[0] || "";
				if (title._) title = title._;
				if (title) feed.title = title;
			}
			if (xmlObj.feed.updated) feed.lastBuildDate = xmlObj.feed.updated[0];
			feed.items = (xmlObj.feed.entry || []).map((entry) => this.parseItemAtom(entry));
			return feed;
		}
		parseItemAtom(entry) {
			let item = {};
			utils.copyFromXML(entry, item, this.options.customFields.item);
			if (entry.title) {
				let title = entry.title[0] || "";
				if (title._) title = title._;
				if (title) item.title = title;
			}
			if (entry.link && entry.link.length) item.link = utils.getLink(entry.link, "alternate", 0);
			if (entry.published && entry.published.length && entry.published[0].length) item.pubDate = new Date(entry.published[0]).toISOString();
			if (!item.pubDate && entry.updated && entry.updated.length && entry.updated[0].length) item.pubDate = new Date(entry.updated[0]).toISOString();
			if (entry.author && entry.author.length && entry.author[0].name && entry.author[0].name.length) item.author = entry.author[0].name[0];
			if (entry.content && entry.content.length) {
				item.content = utils.getContent(entry.content[0]);
				item.contentSnippet = utils.getSnippet(item.content);
			}
			if (entry.summary && entry.summary.length) item.summary = utils.getContent(entry.summary[0]);
			if (entry.id) item.id = entry.id[0];
			this.setISODate(item);
			return item;
		}
		buildRSS0_9(xmlObj) {
			var channel = xmlObj.rss.channel[0];
			var items = channel.item;
			return this.buildRSS(channel, items);
		}
		buildRSS1(xmlObj) {
			xmlObj = xmlObj["rdf:RDF"];
			let channel = xmlObj.channel[0];
			let items = xmlObj.item;
			return this.buildRSS(channel, items);
		}
		buildRSS2(xmlObj) {
			let channel = xmlObj.rss.channel[0];
			let items = channel.item;
			let feed = this.buildRSS(channel, items);
			if (xmlObj.rss.$ && xmlObj.rss.$["xmlns:itunes"]) this.decorateItunes(feed, channel);
			return feed;
		}
		buildRSS(channel, items) {
			items = items || [];
			let feed = { items: [] };
			let feedFields = fields.feed.concat(this.options.customFields.feed);
			let itemFields = fields.item.concat(this.options.customFields.item);
			if (channel["atom:link"] && channel["atom:link"][0] && channel["atom:link"][0].$) feed.feedUrl = channel["atom:link"][0].$.href;
			if (channel.image && channel.image[0] && channel.image[0].url) {
				feed.image = {};
				let image = channel.image[0];
				if (image.link) feed.image.link = image.link[0];
				if (image.url) feed.image.url = image.url[0];
				if (image.title) feed.image.title = image.title[0];
				if (image.width) feed.image.width = image.width[0];
				if (image.height) feed.image.height = image.height[0];
			}
			const paginationLinks = this.generatePaginationLinks(channel);
			if (Object.keys(paginationLinks).length) feed.paginationLinks = paginationLinks;
			utils.copyFromXML(channel, feed, feedFields);
			feed.items = items.map((xmlItem) => this.parseItemRss(xmlItem, itemFields));
			return feed;
		}
		parseItemRss(xmlItem, itemFields) {
			let item = {};
			utils.copyFromXML(xmlItem, item, itemFields);
			if (xmlItem.enclosure) item.enclosure = xmlItem.enclosure[0].$;
			if (xmlItem.description) {
				item.content = utils.getContent(xmlItem.description[0]);
				item.contentSnippet = utils.getSnippet(item.content);
			}
			if (xmlItem.guid) {
				item.guid = xmlItem.guid[0];
				if (item.guid._) item.guid = item.guid._;
			}
			if (xmlItem.$ && xmlItem.$["rdf:about"]) item["rdf:about"] = xmlItem.$["rdf:about"];
			if (xmlItem.category) item.categories = xmlItem.category;
			this.setISODate(item);
			return item;
		}
		/**
		* Add iTunes specific fields from XML to extracted JSON
		*
		* @access public
		* @param {object} feed extracted
		* @param {object} channel parsed XML
		*/
		decorateItunes(feed, channel) {
			let items = channel.item || [];
			feed.itunes = {};
			if (channel["itunes:owner"]) {
				let owner = {};
				if (channel["itunes:owner"][0]["itunes:name"]) owner.name = channel["itunes:owner"][0]["itunes:name"][0];
				if (channel["itunes:owner"][0]["itunes:email"]) owner.email = channel["itunes:owner"][0]["itunes:email"][0];
				feed.itunes.owner = owner;
			}
			if (channel["itunes:image"]) {
				let image;
				image = channel["itunes:image"][0] && channel["itunes:image"][0].$ && channel["itunes:image"][0].$.href ? channel["itunes:image"][0].$.href : null;
				if (image) feed.itunes.image = image;
			}
			if (channel["itunes:category"]) {
				const categoriesWithSubs = channel["itunes:category"].map((category) => {
					return {
						name: category && category.$ && category.$.text,
						subs: category["itunes:category"] ? category["itunes:category"].map((subcategory) => ({ name: subcategory && subcategory.$ && subcategory.$.text })) : null
					};
				});
				feed.itunes.categories = categoriesWithSubs.map((category) => category.name);
				feed.itunes.categoriesWithSubs = categoriesWithSubs;
			}
			if (channel["itunes:keywords"]) if (channel["itunes:keywords"].length > 1) feed.itunes.keywords = channel["itunes:keywords"].map((keyword) => keyword && keyword.$ && keyword.$.text);
			else {
				let keywords = channel["itunes:keywords"][0];
				if (keywords && typeof keywords._ === "string") keywords = keywords._;
				if (keywords && keywords.$ && keywords.$.text) feed.itunes.keywords = keywords.$.text.split(",");
				else if (typeof keywords === "string") feed.itunes.keywords = keywords.split(",");
			}
			utils.copyFromXML(channel, feed.itunes, fields.podcastFeed);
			items.forEach((item, index) => {
				let entry = feed.items[index];
				entry.itunes = {};
				utils.copyFromXML(item, entry.itunes, fields.podcastItem);
				let image = item["itunes:image"];
				if (image && image[0] && image[0].$ && image[0].$.href) entry.itunes.image = image[0].$.href;
			});
		}
		setISODate(item) {
			let date = item.pubDate || item.date;
			if (date) try {
				item.isoDate = new Date(date.trim()).toISOString();
			} catch (e) {}
		}
		/**
		* Generates a pagination object where the rel attribute is the key and href attribute is the value
		*  { self: 'self-url', first: 'first-url', ...  }
		*
		* @access private
		* @param {Object} channel parsed XML
		* @returns {Object}
		*/
		generatePaginationLinks(channel) {
			if (!channel["atom:link"]) return {};
			const paginationRelAttributes = [
				"self",
				"first",
				"next",
				"prev",
				"last"
			];
			return channel["atom:link"].reduce((paginationLinks, link) => {
				if (!link.$ || !paginationRelAttributes.includes(link.$.rel)) return paginationLinks;
				paginationLinks[link.$.rel] = link.$.href;
				return paginationLinks;
			}, {});
		}
	};
	module.exports = Parser;
}));
//#endregion
//#region extension/src/main/defaultSources.ts
var import_rss_parser = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_parser();
})))(), 1);
var DEFAULT_SOURCES_VERSION = "1.0.2";
var DEFAULT_SOURCES = [
	{
		id: "venturebeat-ai",
		name: "VentureBeat AI",
		type: "website",
		url: "https://venturebeat.com/category/ai",
		feedUrl: "https://venturebeat.com/feed",
		enabled: true,
		isDefault: true
	},
	{
		id: "techcrunch-ai",
		name: "TechCrunch AI",
		type: "website",
		url: "https://techcrunch.com/category/artificial-intelligence/",
		feedUrl: "https://techcrunch.com/category/artificial-intelligence/feed/",
		enabled: true,
		isDefault: true
	},
	{
		id: "theverge-ai",
		name: "The Verge AI",
		type: "website",
		url: "https://www.theverge.com/ai-artificial-intelligence",
		feedUrl: "https://www.theverge.com/rss/ai-artificial-intelligence/index.xml",
		enabled: true,
		isDefault: true
	},
	{
		id: "arstechnica-ai",
		name: "Ars Technica AI",
		type: "website",
		url: "https://arstechnica.com/ai/",
		feedUrl: "https://feeds.arstechnica.com/arstechnica/technology-lab",
		enabled: true,
		isDefault: true
	},
	{
		id: "mit-tech-review-ai",
		name: "MIT Technology Review AI",
		type: "website",
		url: "https://www.technologyreview.com/topic/artificial-intelligence/",
		feedUrl: "https://www.technologyreview.com/feed/",
		enabled: true,
		isDefault: true
	},
	{
		id: "arxiv-ai",
		name: "arXiv AI",
		type: "website",
		url: "https://arxiv.org/list/cs.AI/recent",
		feedUrl: "https://export.arxiv.org/api/query?search_query=cat:cs.AI&sortBy=submittedDate&sortOrder=descending&max_results=40",
		enabled: true,
		isDefault: true
	},
	{
		id: "latent-space",
		name: "Latent Space",
		type: "website",
		url: "https://www.latent.space/archive",
		feedUrl: "https://www.latent.space/feed",
		enabled: true,
		isDefault: true
	},
	{
		id: "therundown-ai",
		name: "The Rundown AI",
		type: "website",
		url: "https://www.therundown.ai/",
		feedUrl: "https://rss.beehiiv.com/feeds/2R3C6Bt5wj.xml",
		enabled: true,
		isDefault: true
	},
	{
		id: "openai-news",
		name: "OpenAI News",
		type: "website",
		url: "https://openai.com/news",
		feedUrl: "https://openai.com/news/rss.xml",
		enabled: true,
		isDefault: true
	},
	{
		id: "deepmind-blog",
		name: "Google DeepMind Blog",
		type: "website",
		url: "https://deepmind.google/blog/",
		feedUrl: "https://deepmind.google/blog/rss.xml",
		enabled: true,
		isDefault: true
	},
	{
		id: "huggingface-blog",
		name: "Hugging Face Blog",
		type: "website",
		url: "https://huggingface.co/blog",
		feedUrl: "https://huggingface.co/blog/feed.xml",
		enabled: true,
		isDefault: true
	},
	{
		id: "youtube-mreflow",
		name: "Matt Wolfe",
		type: "youtube",
		url: "https://www.youtube.com/@mreflow",
		feedUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UChpleBmo18P08aKCIgti38g",
		enabled: true,
		isDefault: true
	},
	{
		id: "youtube-fireship",
		name: "Fireship",
		type: "youtube",
		url: "https://www.youtube.com/@Fireship",
		feedUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UCsBjURrPoezykLs9EqgamOA",
		enabled: true,
		isDefault: true
	},
	{
		id: "youtube-aiexplained",
		name: "AI Explained",
		type: "youtube",
		url: "https://www.youtube.com/@aiexplained-official",
		feedUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UCNJ1Ymd5yFuUPtn21xtRbbw",
		enabled: true,
		isDefault: true
	},
	{
		id: "youtube-twominutepapers",
		name: "Two Minute Papers",
		type: "youtube",
		url: "https://www.youtube.com/@TwoMinutePapers",
		feedUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UCbfYPyITQ-7l4upoX8nvctg",
		enabled: true,
		isDefault: true
	},
	{
		id: "youtube-matthewberman",
		name: "Matthew Berman",
		type: "youtube",
		url: "https://www.youtube.com/@matthew_berman",
		feedUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UCawZsQWqfGSbCI5yjkdVkTA",
		enabled: true,
		isDefault: true
	},
	{
		id: "youtube-theaisearch",
		name: "AI Search",
		type: "youtube",
		url: "https://www.youtube.com/@theAIsearch",
		feedUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UCIgnGlGkVRhd4qNFcEwLL4A",
		enabled: true,
		isDefault: true
	},
	{
		id: "youtube-bycloud",
		name: "bycloud",
		type: "youtube",
		url: "https://www.youtube.com/@bycloudAI",
		feedUrl: "https://www.youtube.com/feeds/videos.xml?channel_id=UCgfe2ooZD3VJPB6aJAnuQng",
		enabled: true,
		isDefault: true
	}
];
//#endregion
//#region extension/src/main/lynxExtension.ts
var BROWSER_HEADERS = {
	"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
	Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
	"Accept-Language": "en-US,en;q=0.9"
};
async function initialExtension(lynxApi, utils, _mainIpc) {
	const storageManager = await utils.getStorageManager();
	const appManager = await utils.getAppManager();
	storageManager.getCustomData("ai-news::sources");
	storageManager.getCustomData("ai-news::sourcesVersion");
	storageManager.getCustomData("ai-news::filterSelection");
	storageManager.getCustomData("ai-news::cache");
	storageManager.getCustomData("ai-news::lastFetched");
	storageManager.getCustomData("ai-news::homeView");
	storageManager.getCustomData("ai-news::showInHome");
	storageManager.getCustomData("ai-news::itemsPerPage");
	const parser = new import_rss_parser.default({ customFields: { item: [["yt:videoId", "videoId"], ["media:group", "mediaGroup"]] } });
	const getSources = () => {
		let stored = storageManager.getCustomData("ai-news::sources");
		const storedVersion = storageManager.getCustomData("ai-news::sourcesVersion");
		if (!stored || !Array.isArray(stored) || stored.length === 0) {
			storageManager.setCustomData("ai-news::sources", DEFAULT_SOURCES);
			storageManager.setCustomData("ai-news::sourcesVersion", DEFAULT_SOURCES_VERSION);
			storageManager.write();
			return DEFAULT_SOURCES;
		}
		if (storedVersion !== "1.0.2") {
			console.log(`AI News: Migrating default sources from ${storedVersion || "initial"} to ${DEFAULT_SOURCES_VERSION}`);
			const defaultIds = new Set(DEFAULT_SOURCES.map((d) => d.id));
			const customSources = stored.filter((s) => !defaultIds.has(s.id));
			const updated = [...DEFAULT_SOURCES.map((def) => {
				const existing = stored.find((s) => s.id === def.id);
				return {
					...def,
					enabled: existing ? existing.enabled : def.enabled
				};
			}), ...customSources];
			storageManager.setCustomData("ai-news::sources", updated);
			storageManager.setCustomData("ai-news::sourcesVersion", DEFAULT_SOURCES_VERSION);
			storageManager.write();
			stored = updated;
		}
		return stored;
	};
	const getFilterSelection = () => {
		const sel = storageManager.getCustomData("ai-news::filterSelection");
		return sel && typeof sel === "object" && !Array.isArray(sel) ? sel : {};
	};
	const getCachedItems = () => {
		const cached = storageManager.getCustomData("ai-news::cache");
		return Array.isArray(cached) ? cached : [];
	};
	const getLastFetched = () => {
		const lf = storageManager.getCustomData("ai-news::lastFetched");
		return typeof lf === "number" ? lf : 0;
	};
	const getHomeView = () => {
		return storageManager.getCustomData("ai-news::homeView") === "compact" ? "compact" : "default";
	};
	const getShowInHome = () => {
		return storageManager.getCustomData("ai-news::showInHome") === false ? false : true;
	};
	const getItemsPerPage = () => {
		const value = storageManager.getCustomData("ai-news::itemsPerPage");
		return typeof value === "number" && value > 0 ? value : 20;
	};
	const getYoutubeVideoId = (item) => {
		if (item.videoId) return item.videoId;
		const linkMatch = item.link?.match(/(?:v=|\/embed\/|\/watch\?v=)([a-zA-Z0-9_-]{11})/);
		if (linkMatch) return linkMatch[1];
		const idMatch = item.id?.match(/yt:video:([a-zA-Z0-9_-]{11})/);
		if (idMatch) return idMatch[1];
		return "";
	};
	const extractImageFromHtml = (content) => {
		if (!content) return "";
		const match = content.match(/<img[^>]+src=["']([^"']+)["']/i);
		return match ? match[1] : "";
	};
	const decodeHtmlEntities = (str) => {
		if (!str) return "";
		return str.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, "\"").replace(/&#x27;/g, "'").replace(/&#x2F;/g, "/").replace(/&#39;/g, "'");
	};
	const extractOgImage = (html) => {
		if (!html) return "";
		const match = html.match(/<meta[^>]+property=["']?og:image["']?[^>]+content=["']([^"']+)["']/i) || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']?og:image["']?/i);
		if (match) return decodeHtmlEntities(match[1]);
		const matchTwitter = html.match(/<meta[^>]+name=["']?twitter:image["']?[^>]+content=["']([^"']+)["']/i) || html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']?twitter:image["']?/i);
		return matchTwitter ? decodeHtmlEntities(matchTwitter[1]) : "";
	};
	const fetchOgImage = async (url) => {
		if (!url) return "";
		try {
			const res = await electron.net.fetch(url, {
				headers: BROWSER_HEADERS,
				signal: AbortSignal.timeout(3e3)
			});
			if (!res.ok) {
				console.warn(`AI News: Failed to fetch webpage for ${url}, status: ${res.status}`);
				return "";
			}
			const html = await res.text();
			let ogImage = extractOgImage(html);
			if (ogImage) {
				if (ogImage.startsWith("//")) try {
					ogImage = `${new URL(url).protocol}${ogImage}`;
				} catch {
					ogImage = `https:${ogImage}`;
				}
				else if (!ogImage.startsWith("http://") && !ogImage.startsWith("https://")) try {
					const base = new URL(url);
					ogImage = new URL(ogImage, base.origin).toString();
				} catch {}
			}
			return ogImage;
		} catch (err) {
			console.warn(`AI News: Failed to scrape OG image for ${url}:`, err.message);
			return "";
		}
	};
	const fetchAndCacheAllFeeds = async (force = false, onlySourceIds) => {
		const sources = getSources();
		const currentCache = getCachedItems();
		const now = Date.now();
		const existingThumbnails = /* @__PURE__ */ new Map();
		for (const item of currentCache) if (item.thumbnail) existingThumbnails.set(item.id, item.thumbnail);
		if (!force && now - getLastFetched() < 300 * 1e3) {
			console.log("AI News: Skipping background fetch (fetched recently)");
			return;
		}
		const totalSources = sources.filter((s) => s.enabled && (!onlySourceIds || onlySourceIds.has(s.id))).length;
		let completedSources = 0;
		const emitProgress = (sourceName) => {
			appManager.sendMessage("lynxhub-ai-news:fetch-progress", {
				sourceName,
				completed: completedSources,
				total: totalSources
			});
		};
		console.log("AI News: Fetching feeds started...");
		const updatedCacheMap = /* @__PURE__ */ new Map();
		for (const item of currentCache) {
			if (!updatedCacheMap.has(item.sourceId)) updatedCacheMap.set(item.sourceId, []);
			updatedCacheMap.get(item.sourceId).push(item);
		}
		for (const src of sources) {
			if (!src.enabled || onlySourceIds && !onlySourceIds.has(src.id)) continue;
			emitProgress(src.name);
			try {
				console.log(`AI News: Fetching source ${src.name} (${src.feedUrl})...`);
				const feed = await parser.parseURL(src.feedUrl);
				const parsedItems = [];
				const itemsToProcess = feed.items.slice(0, 40);
				let scrapeCount = 0;
				for (const item of itemsToProcess) {
					let thumbnail = "";
					let snippet = item.contentSnippet || item.content || "";
					if (snippet.length > 250) snippet = snippet.substring(0, 247) + "...";
					const id = item.guid || item.id || item.link || Math.random().toString(36).substring(7);
					if (existingThumbnails.has(id)) thumbnail = existingThumbnails.get(id);
					else if (src.type === "youtube") {
						const videoId = getYoutubeVideoId(item);
						if (videoId) thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
					} else {
						thumbnail = extractImageFromHtml(item.content || "") || item.enclosure?.url || "";
						if (!thumbnail && item.link && scrapeCount < 10) {
							scrapeCount++;
							thumbnail = await fetchOgImage(item.link);
						}
					}
					parsedItems.push({
						id,
						sourceId: src.id,
						sourceName: src.name,
						title: item.title || "Untitled",
						link: item.link || "",
						pubDate: item.pubDate || item.isoDate || (/* @__PURE__ */ new Date()).toISOString(),
						isoDate: item.isoDate || (/* @__PURE__ */ new Date()).toISOString(),
						thumbnail,
						snippet,
						type: src.type
					});
				}
				updatedCacheMap.set(src.id, parsedItems);
			} catch (err) {
				console.error(`AI News: Failed to fetch feed for source ${src.name}:`, err);
			} finally {
				completedSources++;
				emitProgress(src.name);
			}
		}
		appManager.sendMessage("lynxhub-ai-news:fetch-progress", {
			sourceName: "",
			completed: totalSources,
			total: totalSources
		});
		const activeSourceIds = new Set(sources.filter((s) => s.enabled).map((s) => s.id));
		let newMergedCache = [];
		for (const [sourceId, items] of updatedCacheMap.entries()) if (activeSourceIds.has(sourceId)) newMergedCache.push(...items);
		newMergedCache.sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());
		if (newMergedCache.length > 200) newMergedCache = newMergedCache.slice(0, 200);
		storageManager.setCustomData("ai-news::cache", newMergedCache);
		storageManager.setCustomData("ai-news::lastFetched", Date.now());
		storageManager.write();
		console.log("AI News: Cache successfully updated. Broadcasting state...");
		appManager.sendMessage("lynxhub-ai-news:state-updated", {
			sources,
			cache: newMergedCache,
			lastFetched: Date.now(),
			homeView: getHomeView()
		});
	};
	lynxApi.onAppReady(async () => {
		console.log("AI News backend ready, starting initial feed load...");
		fetchAndCacheAllFeeds(false).catch((err) => console.error("AI News initial load failed:", err));
		setInterval(() => {
			fetchAndCacheAllFeeds(false).catch((err) => console.error("AI News background load failed:", err));
		}, 1800 * 1e3);
	});
	const activeScrapes = /* @__PURE__ */ new Set();
	lynxApi.listenForChannels(() => {
		electron.ipcMain.handle("lynxhub-ai-news:get-state", () => {
			return {
				sources: getSources(),
				cache: getCachedItems(),
				lastFetched: getLastFetched(),
				homeView: getHomeView(),
				showInHome: getShowInHome(),
				filterSelection: getFilterSelection(),
				itemsPerPage: getItemsPerPage()
			};
		});
		electron.ipcMain.handle("lynxhub-ai-news:update-items-per-page", (_, count) => {
			storageManager.setCustomData("ai-news::itemsPerPage", count);
			storageManager.write();
			return getItemsPerPage();
		});
		electron.ipcMain.handle("lynxhub-ai-news:update-filter-selection", (_, selection) => {
			storageManager.setCustomData("ai-news::filterSelection", selection);
			storageManager.write();
			return getFilterSelection();
		});
		electron.ipcMain.handle("lynxhub-ai-news:refresh", async () => {
			await fetchAndCacheAllFeeds(true);
			return {
				sources: getSources(),
				cache: getCachedItems(),
				lastFetched: getLastFetched(),
				homeView: getHomeView(),
				showInHome: getShowInHome(),
				filterSelection: getFilterSelection()
			};
		});
		electron.ipcMain.handle("lynxhub-ai-news:update-sources", async (_, updatedSources) => {
			const previousSources = getSources();
			storageManager.setCustomData("ai-news::sources", updatedSources);
			storageManager.write();
			const currentCache = getCachedItems();
			const cachedSourceIds = new Set(currentCache.map((item) => item.sourceId));
			const previouslyEnabled = new Set(previousSources.filter((s) => s.enabled).map((s) => s.id));
			const newlyEnabled = updatedSources.filter((s) => s.enabled && !previouslyEnabled.has(s.id) && !cachedSourceIds.has(s.id));
			if (newlyEnabled.length > 0) await fetchAndCacheAllFeeds(true, new Set(newlyEnabled.map((s) => s.id)));
			const newState = {
				sources: getSources(),
				cache: getCachedItems(),
				lastFetched: getLastFetched(),
				homeView: getHomeView(),
				showInHome: getShowInHome(),
				filterSelection: getFilterSelection()
			};
			appManager.sendMessage("lynxhub-ai-news:state-updated", newState);
			return newState;
		});
		electron.ipcMain.handle("lynxhub-ai-news:update-home-view", (_, view) => {
			storageManager.setCustomData("ai-news::homeView", view);
			storageManager.write();
			appManager.sendMessage("lynxhub-ai-news:state-updated", {
				sources: getSources(),
				cache: getCachedItems(),
				lastFetched: getLastFetched(),
				homeView: view,
				showInHome: getShowInHome(),
				filterSelection: getFilterSelection()
			});
			return {
				sources: getSources(),
				cache: getCachedItems(),
				lastFetched: getLastFetched(),
				homeView: view,
				showInHome: getShowInHome(),
				filterSelection: getFilterSelection()
			};
		});
		electron.ipcMain.handle("lynxhub-ai-news:update-show-in-home", (_, show) => {
			storageManager.setCustomData("ai-news::showInHome", show);
			storageManager.write();
			appManager.sendMessage("lynxhub-ai-news:state-updated", {
				sources: getSources(),
				cache: getCachedItems(),
				lastFetched: getLastFetched(),
				homeView: getHomeView(),
				showInHome: show,
				filterSelection: getFilterSelection()
			});
			return {
				sources: getSources(),
				cache: getCachedItems(),
				lastFetched: getLastFetched(),
				homeView: getHomeView(),
				showInHome: show,
				filterSelection: getFilterSelection()
			};
		});
		electron.ipcMain.handle("lynxhub-ai-news:add-custom-source", async (_, type, url) => {
			const sources = getSources();
			const cleanUrl = url.trim();
			if (type === "youtube") {
				const discovered = await getYoutubeChannelId(cleanUrl);
				if (!discovered) throw new Error("Could not find YouTube channel details for this URL/handle.");
				const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${discovered.channelId}`;
				if (sources.some((s) => s.feedUrl === feedUrl)) throw new Error("This channel is already added.");
				const newSource = {
					id: `youtube-${discovered.channelId}`,
					name: discovered.name,
					type: "youtube",
					url: cleanUrl.startsWith("http") ? cleanUrl : `https://www.youtube.com/${cleanUrl.startsWith("@") ? "" : "@"}${cleanUrl}`,
					feedUrl,
					enabled: true,
					isDefault: false
				};
				const updated = [...sources, newSource];
				storageManager.setCustomData("ai-news::sources", updated);
				storageManager.write();
				await fetchAndCacheAllFeeds(true);
				return {
					sources: getSources(),
					cache: getCachedItems(),
					lastFetched: getLastFetched(),
					filterSelection: getFilterSelection()
				};
			} else {
				const discovered = await getWebsiteFeedDetails(cleanUrl);
				if (!discovered) throw new Error("Could not find working RSS feed for this website.");
				if (sources.some((s) => s.feedUrl === discovered.feedUrl)) throw new Error("This website feed is already added.");
				const newSource = {
					id: `website-${Math.random().toString(36).substring(7)}`,
					name: discovered.name,
					type: "website",
					url: cleanUrl.startsWith("http") ? cleanUrl : `https://${cleanUrl}`,
					feedUrl: discovered.feedUrl,
					enabled: true,
					isDefault: false
				};
				const updated = [...sources, newSource];
				storageManager.setCustomData("ai-news::sources", updated);
				storageManager.write();
				await fetchAndCacheAllFeeds(true);
				return {
					sources: getSources(),
					cache: getCachedItems(),
					lastFetched: getLastFetched(),
					filterSelection: getFilterSelection()
				};
			}
		});
		electron.ipcMain.handle("lynxhub-ai-news:fetch-item-thumbnail", async (_, itemId, itemLink) => {
			console.log(`[AI News] IPC fetch-item-thumbnail invoked for item: ${itemId}, link: ${itemLink}`);
			if (activeScrapes.has(itemId)) {
				console.log(`[AI News] Already scraping item: ${itemId}`);
				return "";
			}
			const currentCache = getCachedItems();
			const item = currentCache.find((i) => i.id === itemId);
			if (!item) {
				console.log(`[AI News] Item not found in cache: ${itemId}`);
				return "";
			}
			if (item.thumbnail) {
				console.log(`[AI News] Item already has thumbnail in cache: ${item.thumbnail}`);
				return item.thumbnail;
			}
			activeScrapes.add(itemId);
			try {
				console.log(`[AI News] Scraping OG image for: ${itemLink}`);
				const thumbnail = await fetchOgImage(itemLink);
				console.log(`[AI News] Scraped thumbnail result: ${thumbnail}`);
				if (thumbnail) {
					item.thumbnail = thumbnail;
					storageManager.setCustomData("ai-news::cache", currentCache);
					storageManager.write();
					appManager.sendMessage("lynxhub-ai-news:state-updated", {
						sources: getSources(),
						cache: currentCache,
						lastFetched: getLastFetched(),
						homeView: getHomeView(),
						showInHome: getShowInHome(),
						filterSelection: getFilterSelection()
					});
					console.log(`[AI News] Successfully updated cache & broadcast state for item: ${itemId}`);
					return thumbnail;
				} else console.log(`[AI News] Scraper returned empty thumbnail for: ${itemLink}`);
			} catch (err) {
				console.error(`AI News: Failed to fetch item thumbnail on demand for ${itemId}:`, err);
			} finally {
				activeScrapes.delete(itemId);
			}
			return "";
		});
	});
}
async function getYoutubeChannelId(input) {
	let url = input.trim();
	if (!url.startsWith("http")) if (url.startsWith("@")) url = `https://www.youtube.com/${url}`;
	else url = `https://www.youtube.com/@${url}`;
	const directMatch = url.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/);
	if (directMatch) return {
		channelId: directMatch[1],
		name: directMatch[1]
	};
	try {
		const html = (await axios.default.get(url, {
			headers: BROWSER_HEADERS,
			timeout: 1e4
		})).data;
		const channelIdMatch = html.match(/meta itemprop="channelId" content="([^"]+)"/) || html.match(/"channelId":"(UC[^"]+)"/) || html.match(/youtube\.com\/channel\/(UC[a-zA-Z0-9_-]{22})/);
		const nameMatch = html.match(/meta property="og:title" content="([^"]+)"/) || html.match(/"title":"([^"]+)"/) || html.match(/<title>([^<]+)<\/title>/);
		if (channelIdMatch) {
			const channelId = channelIdMatch[1];
			let name = nameMatch ? nameMatch[1] : "";
			if (name.endsWith(" - YouTube")) name = name.replace(" - YouTube", "");
			return {
				channelId,
				name: name || channelId
			};
		}
	} catch (err) {
		console.error("Failed to get Youtube channel ID:", err);
	}
	return null;
}
async function getWebsiteFeedDetails(input) {
	let url = input.trim();
	if (!url.startsWith("http")) url = `https://${url}`;
	try {
		const html = (await axios.default.get(url, {
			headers: BROWSER_HEADERS,
			timeout: 1e4
		})).data;
		const rssMatch = html.match(/<link[^>]+type=["'](application\/rss\+xml|application\/atom\+xml)["'][^>]+href=["']([^"']+)["']/i) || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+type=["'](application\/rss\+xml|application\/atom\+xml)["']/i);
		let feedUrl = "";
		if (rssMatch) feedUrl = rssMatch[2] || rssMatch[1];
		else {
			const urlObj = new URL(url);
			for (const path of [
				"/feed",
				"/rss",
				"/feed.xml",
				"/rss.xml"
			]) try {
				const checkUrl = urlObj.origin + path;
				const checkRes = await axios.default.get(checkUrl, {
					headers: BROWSER_HEADERS,
					timeout: 3e3
				});
				if (checkRes.status === 200 && (checkRes.data.includes("<rss") || checkRes.data.includes("<feed"))) {
					feedUrl = checkUrl;
					break;
				}
			} catch {}
		}
		if (feedUrl) {
			if (feedUrl.startsWith("/")) feedUrl = new URL(url).origin + feedUrl;
			const titleMatch = html.match(/<title>([^<]+)<\/title>/) || html.match(/meta property="og:title" content="([^"]+)"/);
			let name = titleMatch ? titleMatch[1] : "";
			if (!name) name = new URL(url).hostname;
			return {
				feedUrl,
				name: name.trim()
			};
		}
	} catch (err) {
		console.error("Failed to get website feed details:", err);
	}
	return null;
}
//#endregion
exports.initialExtension = initialExtension;
