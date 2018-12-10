import verify from "@components/verify/main.js";
const utils = {

    /** 
     * @description 基础版防抖函数
     * @summary 重点在于闭包函数 公用内部的一个变量
    */
    debounce(fn, delay = 200, retryTimes = 3) {
        // 定义一个时间
        let timeout = "";
        return function () {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(fn, delay);
        }
    }
}

export default utils;