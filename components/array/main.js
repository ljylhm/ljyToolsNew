import verify from "@components/verify/main.js";
/**
 * @description 清除数组中重复的对象
 * @return {Object} 一个新的数组
 * @example let c = [{id:1,value:2},{id:2,value:2},{id:2,value:3}] 
 * => [{id:1,value:2},{id:2,value:2}]
 */
export function clearRepeat(arr, key) {
    var o = {};
    return arr.reduce((prev, cur, index, arr) => {
        if (!o[cur.id]) {
            o[cur.id] = true;
            prev.push(cur);
        }
        return prev;
    }, [])
}

// created by ljy 2019/02/25
/**
 * @description 删除数组中的某个元素 
 * @param {arr | Array} 要删除的数组
 * @param {index | (Number | String)} 数组索引
 * @return {Array} 一个新的数组
 */
export function cut(arr, index) {
    if (arguments.length < 2 || verify.isArray(arr)) {
        return new Array()
    }
    arr.splice(index, 1)
    return arr
}