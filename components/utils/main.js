import verify from "@components/verify/main.js";
const utils = {

    /** 
     * @description 基础版防抖函数
     * @param {fn | Function} 执行的函数 
     * @param {timeout | Number} 设置的hash值 
     * @summary 重点在于闭包函数 公用内部的一个变量
    */
    debounce(fn, timeout = 500) {
        let timer
        return function () {
            let env = this
            clearTimeout(timer)
            timer = setTimeout(function () {
                fn.apply(env, arguments);
            }, timeout)
        }
    },

    /** 
     * @description 节流函数
     * @param {fn | Function} 执行的函数 
     * @param {timeout | Number} 设置的hash值 
     * @returns {void}
     * @summary 针对高频事件 在固定的时间内执行
    */
    throttle(fn, timeout = 500) {
        let canRun = true
        return function () {
            let env = this
            if (!canRun) return
            canRun = false
            setTimeout(function () {
                fn.apply(env, arguments)
                canRun = true
            }, timeout)
        }
    },

    /**
     * @description 动态载入js 增加兼容IE的写法
     * @param {url | String} 请求的网络地址
     *  
     * @param {opts | Function | object} 回调函数
     *    @param {isBefore | Boolean} 插入的位置 相对于当前的script
     *    @param {sccuess | Function } 成功的回调函数
     *    @param {error | Function} 失败的回调函数
     * @summary 此方法在chorme && microsoft上运行过 IE环境下有待考证 
    */
    dynamicLoadJs(url,opts={}){
        var script = document.createElement("script")
        var tag = document.getElementsByTagName("script")[0]
        var fn = function(){}
        var success,error
        
        if(typeof opts == 'function'){
            success = opts
            error = fn
        }else{
            success = opts.success || fn
            error = opts.error || fn
        }

        // 如果在IE环境下
        if(script.attachEvent){
            script.attachEvent("onload",success)
            script.attachEvent("onerror",error)
        }else { // 其他在FF Chorme
            script.addEventListener("load",success)
            script.addEventListener("error",error)
        }

        script.src = url
        script.type = "text/javascript"
        
        if(opts.isBefore == undefined || opts.isBefore == true){
            tag.parentNode.insertBefore(script,tag)
        } else {
            tag.parentNode.appendChild(script)
        }  
            
    }
}

export default utils;