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