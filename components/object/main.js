import verify from "@components/verify/main.js";
let utils = {
    version: "0.0.1",

    /**
     * @description 遍历一个对象
     * @param {obj} 遍历的对象
     * @param {fn} 
     * @return {Void} 
     * @summary 这段代码是copy尤大代码里面
     */
    forEachValue(obj, fn) {
        Object.keys(obj).forEach(key => fn(obj[key], key))
    },

    /**
     * @description 对象的深拷贝
     * @return {Object} 一个新的对象
     * @example let c = {a:123,b:{a:123}} let b = deepClone({a:123,b:{a:123}}) 
     * => b = {a:123,b:{a:123}} b==c false 
     */

    deepClone(data = {}) {
        if (!data && !verify.isObject(data) && verify.isArray(data)) return null;
        // 如果是一个空对象的话
        if (verify.isEmptyObject(data)) return new Object();
        let _new_object_ = verify.isArray(data) ? new Array() : new Object();
        for (let i in data) {
            if (verify.isObject(data[i]) || verify.isFunction(data[i])) {
                _new_object_[i] = this.deepClone(data[i]);
            } else {
                _new_object_[i] = data[i]
            }
        }
        return _new_object_
    },

    /**
     * @description 将两个对象合并成一个对象 val2 合并到 val1
     * @param {val1} 合并的第一个对象
     * @param {val2} 合并的第二个对象
     * @param {isDeep} 是否深度拷贝
     * @return {Object} 一个新的对象
     * @summary 用法与Object.assign一致 最终将合成到第一个对象
     */
    baseMerge(val1, val2, isDeep = false) {
        if (!verify.isObject(val1) || !verify.isObject(val2)) return null;

        for (let i in val2) {
            val1[i] = val2[i];
        }
        if (!isDeep) return val1;
        else return this.deepClone(val1);
    },

    /**
     * @description 将很多对象合并成一个对象 跟Object.assign()用法一致
     * @param {/Object1,Object2...../}
     * @return {Object} 一个新的对象
     * @example merge({ a: 1,b: 2,c: 3},{a: 3,b: 2,c: 1,d: {a: 123}}) => { a: 3, b: 2, c: 1, d: { a: 123 } } 
     */
    merge() {
        let argmentLists = Array.from(arguments);
        if (argmentLists.length < 1) return null;
        else {
            for (let len = argmentLists.length, i = 0; i < len; i++) {
                this.baseMerge(argmentLists[0], argmentLists[i])
            }
            return argmentLists[0];
        }
    },

    /**
    * @description 深度合并 将很多对象合并成一个对象 跟Object.assign()用法一致
    * @param {/Object1,Object2...../}
    * @return {Object} 一个新的对象
    * @example merge({ a: 1,b: 2,c: 3},{a: 3,b: 2,c: 1,d: {a: 123}}) => { a: 3, b: 2, c: 1, d: { a: 123 } } 
    */

    deepMerage() {
        let argmentLists = Array.from(arguments);
        if (argmentLists.length < 1) return null;
        else {
            for (let len = argmentLists.length, i = 0; i < len; i++) {
                argmentLists[0] = this.baseMerge(argmentLists[0], argmentLists[i], true)
            }
            return argmentLists[0];
        }
    }

}
let t = {
    a: 1,
    b: 2,
    c: 3
};
let o = {
    a: 3,
    b: 2,
    c: 1,
    d: [123]
}

// console.log(utils.deepClone(o));
// console.log(utils.deepClone(o).d === o.d);
console.log(utils.deepMerage(t, o).d === o.d);
utils.baseMerge(t, o).d === o.d

export default utils;