


/**
 * 监听事件处理
 */
export class PackageEvents {
    private static _instance: PackageEvents;
    public static get instance(): PackageEvents{
        if(!PackageEvents._instance){
            PackageEvents._instance = new PackageEvents();
        }
        return PackageEvents._instance;
    }

    public onBeforeBuildFinsh(options:{}, callback: Function){
        Editor.log(options,callback);
    }
}