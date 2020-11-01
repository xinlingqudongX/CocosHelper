"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
*
* @param {string} template_str 需要渲染的字符串
* @param {Object} params 渲染字符串需要的数据
*/
function renderTemplate(template_str, params) {
    // console.log('模板代码：',template_str);
    function cover(obj) {
        if (typeof obj === 'string') {
            return "`" + obj + "`";
        }
        else if (typeof obj === 'number') {
            return obj;
        }
        else {
            return JSON.stringify(obj);
        }
    }
    var __val;
    var __key;
    var runstr = '';
    for (__key in params) {
        __val = params[__key];
        // console.log(__key,__val)
        runstr += "var " + __key + " = " + cover(__val) + ";";
    }
    var data_str = new Function(runstr + "return `" + template_str + "`")();
    return data_str;
}
exports.renderTemplate = renderTemplate;
