import { JavaAccessControl, JavaImportType, JavaModify, JavaType } from "./render_type";
import { renderTemplate } from "./util";



export class RenderManager{

    private static _instance: RenderManager;
    public static get instance(): RenderManager {
        if(!RenderManager._instance){
            RenderManager._instance = new RenderManager();
        }
        return RenderManager._instance;
    }

    /**
     * 渲染java函数
     * @param FuncName 
     * @param templateStr 
     * @param returnType 
     * @param modify 
     */
    public renderFunc(FuncName: string,templateStr: string, returnType: JavaType = JavaType.void, modify: JavaAccessControl = JavaAccessControl.public): string{
        return renderTemplate('${modify} ${returnType} ${FuncName} {${templateStr}}',{FuncName, returnType, modify, templateStr});
    }

    public renderClass(className:string, templateStr:string): string {
        return renderTemplate(``,{});
    }

    /**
     * 渲染导入包
     * @param importName 
     * @param importType 
     */
    public renderImport(importName:string | string[], importType: JavaImportType): string {
        if(Array.isArray(importName)){
            let templateStr = '';
            for(let name of importName){
                templateStr += `${importType} ${name}`;
            }
            return templateStr;
        }else{
            return `${importType} ${importName}`;
        }
    }
}

function a(){
    console.log('a');
}


let tes = RenderManager.instance.renderFunc('test','');
console.log(tes);