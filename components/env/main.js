/** 对环境判断的js */
// 这一个部分的代码是看vue的源码有感
import verify from "@components/verify/main.js";
// 检验是否可以使用原型指针
export const hasProto = '__proto__' in {};
// 检验是否在浏览器环境中 
export const inBrowser = typeof window !== 'undefined'
// 检验是否有user-agent
export const UA = inBrowser && window.navigator.userAgent.toLowerCase();
// 检验是否在IOS环境中
export const isIos = UA && /iphone|ipad|ipod|ios/.test(UA);
// 检验是否是在android环境中
export const isAndroid = UA && UA.indexOf('android') > 0;

// 检验是否在IE中
export const isIE = UA && /msie|trident/.test(UA);
// 检验是否在IE9中
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
// 检验是否在Edge中
export const isEdge = UA && UA.indexOf('edge/') > 0
// 检验是否在chorme中
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// 检验是否在微信环境中
export const isWx = UA && /MicroMessenger/.test(UA);

// 检验是否是原生的方法而不是自己重写的方法
export function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}