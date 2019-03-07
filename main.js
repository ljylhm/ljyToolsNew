let t = require("./dist/main");
module.exports = t;


// 正则表达日志
// \B 是非单词边界 \b是单词边界（类似于空格 Tab 行首字 行尾 空行 标点）

var arr = [1, 2, 3, 4, 10, 7, 8]
let quick = function (data = []) {
    // 找出中间的位置
    let partition = function (arr, low, high) {
        let pivot = arr[low]

        // 这一次循环之后 low == high
        while (low < high) {
            // 这一次循环找出小于pivot的值
            while (high > low && arr[high] > pivot) {
                --high
            }
            arr[low] = arr[high]
            while (high > low && arr[low] <= pivot) {
                ++low
            }
            arr[high] = arr[low]
        }
        arr[low] = pivot
        return low
    }
    // 主函数
    let quickSort = function (arr, low, high) {
        if (low < high) {
            let pivot = partition(arr, low, high)
            quickSort(arr, low, pivot - 1)
            quickSort(arr, pivot + 1, high)
        }
        return arr
    }

    return quickSort(data, 0, data.length - 1)

}

let x = quick(arr)
console.log("xxxxx", x);
