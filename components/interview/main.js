// 面试题收集
export const dataStructure = {
    /** 基本排序算法和高阶排序算法 */
    /**
     * @description 冒泡排序
     * @summary 冒泡的时间复杂度为O(n2) 
     * */
    bubble(data = []) {
        let len = data.length
        let pubx
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                // 从大到小排序
                if (data[j] < data[j + 1]) {
                    pubx = data[j]
                    data[j] = data[j + 1]
                    data[j + 1] = pubx
                }
            }
        }
    },
    /**
     * @description 选择排序
     * @summary 选择排序的时间复杂度为O(n2) 
     * */
    select(data = []) {
        let len = data.length
        let pubx, minIndex = 0;
        for (let i = 0; i < len; i++) {
            for (let j = ++i; j < len; j++) {
                // 从小到大
                if (data[minIndex] < data[j]) {
                    minIndex = j
                }
            }
            pubx = data[minIndex]
            data[minIndex] = data[i]
            data[i] = pubx
        }
        return data;
    },
    // 快速排序
    /**  
     * @description 快速排序
     * @summary 快速排序的时间复杂度为O(nlogn)
     * 如何计算快速排序的时间复杂度
     * 快排实际是二分法的另外一种实践 假设有一个数组为n每次能够比较出一半的值
     * n / 2K = 1  k = log2n == logn 即我们一共要比较logn次
     * 因为有n个数 每次比较n次
     * 时间复杂度为O(nlogn)
     * 空间复杂度为O(n)最好的情况  O(n2)最差的情况
     **/
    quick(data = []) {
        // 找出中间的位置
        let partition = function (arr, low, high) {
            let pivot = low

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

        return quickSort
    }
}
