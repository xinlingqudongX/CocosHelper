"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var events_1 = require("./events");
//  无法用类的方式类进行使用
// class main implements Main {
//     public messages:{} = {};
//     public load(){
//         this.addEvent();
//         Editor.log('load');
//         console.log('load');
//     }
//     public unload(){
//         this.delEvent();
//         console.log('unload');
//         Editor.log('unload');
//     }
//     public addEvent(): void{
//         Editor.Builder.on(Editor.Events.BeforeChangeFiles,this.onBeforeBuildFinsh);
//     }
//     public delEvent(): void{
//         Editor.Builder.removeListener(Editor.Events.BeforeChangeFiles,this.onBeforeBuildFinsh);
//     }
//     public onBeforeBuildFinsh(options:{}, callback: Function){
//         Editor.log(options,callback);
//     }
// }
var main = {
    load: function () {
        console.log('load');
        Editor.log('load');
        this.addEvent && this.addEvent();
    },
    unload: function () {
        console.log('unload');
        Editor.log('unload');
        this.delEvent && this.delEvent();
    },
    messages: {
        hello: function () {
            Editor.log('hello');
        },
        trace: function () {
        }
    },
    addEvent: function () {
        Editor.Builder.on(Editor.Events.BeforeChangeFiles, events_1.PackageEvents.instance.onBeforeBuildFinsh);
    },
    delEvent: function () {
        Editor.Builder.removeListener(Editor.Events.BeforeChangeFiles, events_1.PackageEvents.instance.onBeforeBuildFinsh);
    }
};
module.exports = main;
if (main.messages && Object.keys(main.messages).length) {
    if (!config_1.Package['main-menu']) {
        config_1.Package['main-menu'] = {};
    }
    var packageObj = config_1.Package['main-menu']["Packages/" + config_1.Package.name] || {};
    for (var key in main.messages) {
        packageObj[key];
    }
}
config_1.ConfigManager.instance.createPackage('./build/package.json', config_1.Package);
