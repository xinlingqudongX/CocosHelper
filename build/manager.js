"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var render_type_1 = require("./render_type");
var util_1 = require("./util");
var RenderManager = /** @class */ (function () {
    function RenderManager() {
    }
    Object.defineProperty(RenderManager, "instance", {
        get: function () {
            if (!RenderManager._instance) {
                RenderManager._instance = new RenderManager();
            }
            return RenderManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 渲染java函数
     * @param FuncName
     * @param templateStr
     * @param returnType
     * @param modify
     */
    RenderManager.prototype.renderFunc = function (FuncName, templateStr, returnType, modify) {
        if (returnType === void 0) { returnType = render_type_1.JavaType.void; }
        if (modify === void 0) { modify = render_type_1.JavaAccessControl.public; }
        return util_1.renderTemplate('${modify} ${returnType} ${FuncName} {${templateStr}}', { FuncName: FuncName, returnType: returnType, modify: modify, templateStr: templateStr });
    };
    RenderManager.prototype.renderClass = function (className, templateStr) {
        return util_1.renderTemplate("", {});
    };
    /**
     * 渲染导入包
     * @param importName
     * @param importType
     */
    RenderManager.prototype.renderImport = function (importName, importType) {
        if (Array.isArray(importName)) {
            var templateStr = '';
            for (var _i = 0, importName_1 = importName; _i < importName_1.length; _i++) {
                var name_1 = importName_1[_i];
                templateStr += importType + " " + name_1;
            }
            return templateStr;
        }
        else {
            return importType + " " + importName;
        }
    };
    return RenderManager;
}());
exports.RenderManager = RenderManager;
function a() {
    console.log('a');
}
var tes = RenderManager.instance.renderFunc('test', '');
console.log(tes);
