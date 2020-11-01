"use strict";
// export const Package:{
//     name: string,
//     version: string,
//     description: string,
//     author?:string,
//     main:"main.js",
// } = {
//     name:'packagePhoto',
//     version:'0.0.1',
//     description:'test',
//     author:'',
//     main:'main.js',
// }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var PackagePanelType;
(function (PackagePanelType) {
    PackagePanelType["dockable"] = "dockable";
    PackagePanelType["simple"] = "simple";
    PackagePanelType["float"] = "float";
    PackagePanelType["fixedSize"] = "fixed-size";
    PackagePanelType["quick"] = "quick";
})(PackagePanelType = exports.PackagePanelType || (exports.PackagePanelType = {}));
exports.Package = {
    name: '压缩图片资源',
    version: '0.0.1',
    description: '',
    main: 'main.js',
    "main-menu": {
        "package/packagePhoto": {
            "message": "packagephoto:hello"
        }
    }
};
var ConfigManager = /** @class */ (function () {
    function ConfigManager() {
        this.packageConfig = exports.Package;
    }
    Object.defineProperty(ConfigManager, "instance", {
        get: function () {
            if (!ConfigManager._instance) {
                ConfigManager._instance = new ConfigManager();
            }
            return ConfigManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 创建扩展配置文件
     * @param config
     * @param path
     */
    ConfigManager.prototype.createPackage = function (path, config) {
        if (config === void 0) { config = exports.Package; }
        if (path_1.default.isAbsolute(path)) {
        }
        ;
        fs_1.default.writeFileSync(path, JSON.stringify(config));
    };
    return ConfigManager;
}());
exports.ConfigManager = ConfigManager;
ConfigManager.instance.createPackage('./build/package.json');
