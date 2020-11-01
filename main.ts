import { Main, Package, ConfigManager } from "./config";
import { PackageEvents } from "./events";

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

const main: Main = {
    load(){
        console.log('load')
        Editor.log('load')
        this.addEvent && this.addEvent();
    },
    unload(){
        console.log('unload')
        Editor.log('unload')
        this.delEvent && this.delEvent();
    },
    messages:{

        hello(){
            Editor.log('hello');
        },
        trace(){
            
        }
    },
    addEvent(){
        Editor.Builder.on(Editor.Events.BeforeChangeFiles,PackageEvents.instance.onBeforeBuildFinsh);
    },
    delEvent(){
        Editor.Builder.removeListener(Editor.Events.BeforeChangeFiles,PackageEvents.instance.onBeforeBuildFinsh);
    }
}

module.exports = main;

if(main.messages && Object.keys(main.messages).length){
    if(!Package['main-menu']){
        Package['main-menu'] = {};
    }

    let packageObj = Package['main-menu'][`Packages/${Package.name}`] || {};

    for(let key in main.messages){
        packageObj[key]
    }
}

ConfigManager.instance.createPackage('./build/package.json',Package);

