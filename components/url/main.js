import verify from "@components/verify/main.js";
const urlHelper = {
    version: "0.0.1",
    /**
      * @description 返回当前页面完整的URl
      * @returns {String} 页面的URL链接
      */
    getUrl: () => window.location.href,

    /**
      * @description 返回当前网页的主机名
      * @returns {String} 主机名
      * @example 在baidu页面 
      * getHost() => www.baidu.com
      */
    getHost: () => window.location.hostname,

    /**
      * @description 返回一个链接的hash值
      * @returns {String} hash值
      * @example getHash(https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index) => index
      */

    getHash(url) {
        if (!url) return window.location.hash;
        return url.split("#")[1] || "";
    },

    /**
      * @description 设置和替换hash值
      * @param {url} 链接 
      * @param {hash} 设置的hash值 
      * @returns {String} hash值
      * @example setHash(https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index,'index1') 
      * => https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index1
      */

    setHash(url, hash = "") {
        let fn = (data, para) => {
            if (data.indexOf("#") !== -1) return data.split("#")[0] + "#" + para
            else return data + "#" + para
        };

        if (!hash && hash != 0) return;

        if (arguments.length == 1) return fn(this.getUrl(), url);
        else return fn(url, hash);
    },

    /**
      * @description 获取url中的search
      * @returns {String} search值
      */
    getSearchParam(url) {
        if (arguments.length == 0) url = this.getUrl();

        let _splitArr_ = url.split("?")[1];
        if (_splitArr_) {
            let index = _splitArr_.indexOf("#"), // 判断有没有#号
                _splitArr_sub_ = index !== -1 ? _splitArr_.substring(0, index).split("&") : _splitArr_.split("&");

            return _splitArr_sub_;

        } else return null
    },

    /**
      * @description 获取search中的值
      * @returns {String} search值
      * @example getUrlParam(https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index,ie) => ut8
      */
    getUrlParam(url, search) {
        let parse = (url, search) => {
            let para = this.getSearchParam(url, search)
            if (para) {
                for (let i of para) {
                    let searchInfo = i.split("=");
                    if (search === searchInfo[0]) return searchInfo[1];
                }
                return null;
            } else return null;
        };

        if (arguments.length === 1) return parse(this.getUrl(), url);
        else return parse(url, search);
    },
    /**
      * @description 获取search中的值
      * @param {url} 当前链接
      * @param {data} 需要设置的param对象
      * @returns {String} search值
      * @summary 此方法可以获取正常情况下的链接 对于单页面应用 设置的#号 "?" 无效
      */
    setUrlParam(url, data) {

        let fn = (url, data) => {

            // 判断data是否为空
            if (!data || verify.isEmptyObject(data)) return url;

            let _index_1_ = url.indexOf("?"),
                _index_2_ = url.indexOf("#");

            let currentPath = _index_1_ === -1 ? (_index_2_ === -1 ? url : url.substring(0, _index_2_)) : url.substring(0, _index_1_),
                len = currentPath.length;

            // 判断currentPath 最后一段有没有 "/"
            if (currentPath.charAt(len - 1) === "/") currentPath = currentPath.substring(0, len - 1);
            return this.setHash(currentPath + "?" + this.transFormPara(data), this.getHash(url));
        }

        if (arguments.length === 1) return fn(this.getUrl(), url);
        else return fn(url, data);
    },


    /**
      * @description 获取search中的值
      * @param 获取search中的值
      * @returns {String} search值
      */
    transFormPara(data) {
        let _strList_ = [];
        for (let i in data) {
            _strList_.push(i + "=" + data[i]);
        }
        return _strList_.join("&");
    }

}
var url = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index";

console.log(setUrlParam(url, {
    a: 321,
    b: 123
}))
export default urlHelper;