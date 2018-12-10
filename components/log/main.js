const log = {
    version: "0.0.1",
    log(mes, color = "black", bg = "white", opts) {  // 打印console的方法;
        let optStr = "",
            baseOpt = Object.assign({}, {
                "color": color,
                "background": bg
            }, opts);
        for (let i in baseOpt) {
            optStr = optStr + `${i}:${baseOpt[i]};`
        }
        console.log("%c" + mes, optStr);
    }
}
export default log;