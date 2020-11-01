
declare namespace Editor {

    export function clearLog(pattern: RegExp, useRegex: boolean): void;

    export function connectToConsole(): void;

    export function error(...args: any[]): void;

    export function fatal(...args: any[]): void;

    export function failed(...args: any[]): void;

    export function info(...args: any[]): void;

    export function log(...args: any[]): void;

    export function success(...args: any[]): void;

    export function trace(level: string, ...args: any[]): void;

    export function warn(...args: any[]): void;

    export const dev: string;

    export const frameworkPath: string;

    export const isClosing: string;

    export const lang: string;

    export namespace Project {

        export const path: string;
    }

    export const logfile: string;

    export const versions: string;

    export function init(): void;

    export function run(url: string, opts: {}): void;

    export function reset(): void;

    export function loadPackagesAt(path: string, callback: Function): void;

    export function loadAllPackages(callback: Function): void;

    export function require(url: string): void;

    export function url(url: string): void;

    export function watchPackages(callback: Function): void;

    export namespace Ipc {

        export function sendToPanel():void;

        export function sendToMain():void;
    }


    export namespace Builder {

        export function on(eventName: string, callback: Function): void;

        export function once(eventName: string, callback: Function): void;

        export function removeListener(eventName: string, callback: Function): void;

    }

    export enum Events {
        BuildStart = 'build-start',
        BuildFinished = 'build-finished',
        CompileFinished = 'compile-finished',
        BeforeChangeFiles = 'before-change-fiels',
    }


    export class BuildResults {
        /**
         * 指定的 uuid 资源是否包含在构建资源中
         * 
         * @param {String} uuid 需要检测的资源 uuid
         * @param {Boolean} [assertContains=false] 不包含时是否打印报错信息
         * @returns {Boolean}
         */
        containsAsset(uuid: string, assertContains: boolean): boolean;

        /**
         * 返回构建资源中包含的所有资源的 uuid
         *
         * @returns {String[]}
         */
        getAssetUuids(): string[];

        /**
         * 获取指定 uuid 资源中的所有依赖资源，返回的列表中不包含自身
         *
         * @param {String} uuid - 指定的 uuid 资源
         * @returns {String[]}
         */
        getDependencies(uuid: string): string[];

        /**
         * 获取指定 uuid 的资源在引擎中定义的资源类型
         * 同时可以使用 cc.js.getClassByName(type) 进行获取资源的构造函数
         *
         * @param {String} uuid - 指定的 uuid 资源
         * @returns {String}
         */
        getAssetType(uuid: string): string;

        /**
         * 获取指定 uuid 资源（例如纹理）的存放路径（如果找不到，则返回空字符串）
         *
         * @param {String} uuid - 指定的 uuid 资源
         * @returns {String}
         */
        getNativeAssetPath(uuid: string): string;

        /**
         * 获取指定 uuid 资源（例如纹理）的所有存放路径（如果找不到，则返回空数组）
         * 例如：需要获取纹理多种压缩格式的存放资源路径时，即可使用该函数
         *
         * @param {String} uuid - 指定的 uuid 资源
         * @returns {String[]}
         */
        getNativeAssetPaths(uuid: string): string[];
    }

    export interface bundle {
        root: string,  // bundle 的根目录
        dest: string,  // bundle 的输出目录
        scriptDest: string, // 脚本的输出目录
        name: string, // bundle 的名称
        priority: number, // bundle 的优先级
        scenes: string[], // bundle 中包含的场景
        compressionType: 'subpackage' | 'normal' | 'none' | 'merge_all_json' | 'zip', // bundle 的压缩类型
        buildResults: BuildResults, // bundle 所构建出来的所有资源
        version: string, // bundle 的版本信息，由 config 生成
        config: any, // bundle 的 config.json 文件
        isRemote: boolean // bundle 是否是远程包
    }

    export namespace Panel {

        export function close(panelID: string, cb: Function): void;

        export function findWindow(panelID: string): string;

        export function open(panelID: string, argv:{}):void;

        export function popup(panelID: string): void;

        export const templateUrl: string;
    }
}

