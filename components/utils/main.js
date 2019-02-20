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
    }
}

export default utils;