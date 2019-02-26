// 面试题收集
export const dataStructure = {
    /** 基本排序算法和高阶排序算法 */
    /**
     * @description 冒泡排序
     * @summary 冒泡的时间复杂度为O(n2) 
     * */
    bubble(data=[]){
        let len = data.length
        let pubx
        for(let i = 0; i < len ;i++){
            for(let j = 0; j < len-i-1; j++){
                // 从大到小排序
                if(data[j]<data[j+1]){
                    pubx = data[j]
                    data[j] = data[j+1]
                    data[j+1] = pubx
                }
            }
        }
    },
    /**
     * @description 选择排序
     * @summary 选择排序的时间复杂度为O(n2) 
     * */
    select(data=[]){
        let len = data.length
        let pubx,minIndex=0;
        for(let i=0;i < len; i++){
            for(let j=++i;j < len;j++){
                // 从小到大
                if(data[minIndex] < data[j]){
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
     **/
    quick(data=[]){
        // 随机取中间数 选取中间的一个索引
        let partition = function(arr,low,high){
            let pivotkey = Math.ceil(low + high)
            
        } 
        // 主函数
        let quickSort = function(arr,low,high){
            let pivot;
            if(low < high){
                pivot = partition(low,high);
                quickSort(arr,low,high)
            } 
        }
    } 
}