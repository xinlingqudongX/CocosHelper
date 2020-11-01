

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

import fs from 'fs';
import Path from 'path';


export interface PackageConfig {
    name: string;
    version: string;
    description: string;
    author?:string;
    main?:"main.js";
    "main-menu"?:{[key: string]: any};
    pannel?: PackagePanel,
    "pannel.02"?: PackagePanel,
    reload?:{[key: string]: any},
    "scene-script"?:"scene-walker.js"
}

export interface PackagePanel {
    main: string,
    type: PackagePanelType,
    icon: string,
    title: string,
    width: number,
    height: number,
    resizable: boolean,
    "min-width":number,
    "min-height": number,
    "max-width": number,
    "max-height": number,
}

export enum PackagePanelType {
    dockable = 'dockable',
    simple = 'simple',
    float = 'float',
    fixedSize = 'fixed-size',
    quick = 'quick',
}

export const Package:PackageConfig = {
    name:'压缩图片资源',
    version:'0.0.1',
    description:'',
    main:'main.js',
    "main-menu":{
        "package/packagePhoto":{
            "message":"packagephoto:hello"
        }
    }
}


export interface Main {

    load(): void;
    unload(): void;
    messages:{};
    addEvent?():void;
    delEvent?(): void;
}

export class ConfigManager {

    private static _instance: ConfigManager;
    public static get instance(): ConfigManager{
        if(!ConfigManager._instance){
            ConfigManager._instance = new ConfigManager();
        }
        return ConfigManager._instance;
    }

    public packageConfig = Package;

    /**
     * 创建扩展配置文件
     * @param config 
     * @param path 
     */
    public createPackage(path: string, config: PackageConfig = Package){
        if(Path.isAbsolute(path)){

        };

        fs.writeFileSync(path,JSON.stringify(config));
    }
}

ConfigManager.instance.createPackage('./build/package.json');