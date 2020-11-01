"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 监听事件处理
 */
var PackageEvents = /** @class */ (function () {
    function PackageEvents() {
    }
    Object.defineProperty(PackageEvents, "instance", {
        get: function () {
            if (!PackageEvents._instance) {
                PackageEvents._instance = new PackageEvents();
            }
            return PackageEvents._instance;
        },
        enumerable: true,
        configurable: true
    });
    PackageEvents.prototype.onBeforeBuildFinsh = function (options, callback) {
        Editor.log(options, callback);
    };
    return PackageEvents;
}());
exports.PackageEvents = PackageEvents;
