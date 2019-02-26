let t = require("./dist/main");
module.exports = t;

let bubble = (data=[]) =>{
    let len = data.length
    let pubx
    for(let i = 0; i < len ;i++){
        for(let j = 0; j < len-i-1; j++){
            // 从大到小排序
            if(j == len-i-2) console.log(123,data[j+1]);
            if(data[j]<data[j+1]){
                pubx = data[j]
                data[j] = data[j+1]
                data[j+1] = pubx
            }
        }
    }
    return data
}

