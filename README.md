<link rel="stylesheet" href="http://yandex.st/highlightjs/8.0/styles/solarized_dark.min.css">

# ljyTools
<p style="border-bottom: 1px solid #eaecef"></p>

### 说明

写Js也有一段时间了，将平时和工作中遇到的一些繁琐的操作进行封装，在后面遇到的时候可以快速的调用。整个库用webpack4进行打包，打包成library库发布至npm库。

### Installation
<p style="border-bottom: 1px solid #eaecef"></p>

```javascript
$ npm i -g npm
$ npm i ljytoolsnew --save  
```
### repositories 
<p style="border-bottom: 1px solid #eaecef"></p>

<b>仓库地址 :</b>

https://github.com/ljylhm/ljyTools.git

<p>git@github.com:ljylhm/ljyTools.git</p>

    
### import
<p style="border-bottom: 1px solid #eaecef"></p>

```javascript
var {verify,object,util} = require("ljytoolsnew");
```

### examples
<p style="border-bottom: 1px solid #eaecef"></p>
#### <li>verify</li>
返回常用数据类型

`[Object Array]` `[Object String]` `[Object Number]` `[Object Object]` `.....`
```javascript
    var t = 1;
    verify.getDataType(t); // Number
    var s = "1";
    verify.getDataType(t); // String
```

<b>isNumber</b> 
```javascript
    var t = 123;
    verify.isNumber(t); // true
    var s = "张三";
    verify.isNumber(s); // false
```

<b>isBoolean</b> 
```javascript
    var t = true;
    verify.isBoolean(t); // true
    var s = "李四";
    verify.isNumber(s); // false
    var o = new Object();
    verify.isNumber(o); // false
```

<b>isObject</b>
```javascript
    var t = {
        "a":"321"
    };
    verify.isObject(t) // true
    var t = function(){
        console.log(123);
    }
    verify.isObject(t) // 
```

<b>isDate</b>
```javascript
var t = new Date();
verify.isDate(t); // true
```
<b>[isFile] [isBlob] [isArray]</b> 方法使用同上


 

#### <li>storage</li>
<b>对本地存储的封装</b>

session类 localStroage类的封装
```javascript
 sesssionStorage  ||    localStroage
 ==============   ||    ============= 
 sessionSet       ||    localStroageSet
 sessionGet       ||    localStroageGet  
 sessionClear     ||    localStroageClear
      
```
```javascript
// 设置 session
storage.sessionSet();

// 获得 session
storage.sessionGet();

// 清除 session 如果不指定 清除全部的session
storage.sessionClear();

==============================

// 设置 localStroage
storage.localStroageSet();

// 获得 localStroage
storage.localStroageGet();

// 清除 localStroage 如果不指定 清除全部的localStroage
storage.localStroageClear();
```

#### <li>url</li>
<b>对链接的封装</b>

```javascript
// 返回当前页面的链接
url.getUrl();  "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=tengxun%20&rsv_pq=be5accd300021937"
```

<p style="font-size:14px;font-weight:600">getHost</p>

```javascript
// 返回当前页面的主机名
url.getHost();  "www.baidu.com"
```
<p style="font-size:14px;font-weight:600">getHash</p>

```javascript
/**
 * @description 返回一个链接的hash值 没有指定连接的时候返回当前页面的hash
 * @returns {String} hash值
 * @example getHash(https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index) => index
 */

url.getHash();  "#t=1"
url.getHash("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index") "index"
```

<p style="font-size:14px;font-weight:600">setHash</p>

```javascript
 /**
   * @description 设置和替换hash值
   * @param {url} 链接 
   * @param {hash} 设置的hash值 
   * @returns {String} hash值
   * @example setHash(https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index,'index1') 
   * => https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index1
 */

url.setHash('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index','index1');

// return https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index1
```

<p style="font-size:14px;font-weight:600">getSearchParam</p>

```javascript
/**
 * @description 获取url中的search
 * @returns {String} search值
 */
url.getSearchParam("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index")

return "ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()"

```

<p style="font-size:14px;font-weight:600">getUrlParam</p>

```javascript
/**
 * @description 获取search中的值
 * @returns {String} search值
 * @example getUrlParam(https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index,ie) => ut8
 */
 
url.getUrlParam("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index","ie");

// 返回 utf-8
```

<p style="font-size:14px;font-weight:600">setUrlParam</p>

```javascript
/**
 * @description 获取search中的值
 * @param {url} 当前链接
 * @param {data} 需要设置的param对象
 * @returns {String} search值
 * @summary 此方法可以获取正常情况下的链接 对于单页面应用 设置的#号 "?" 无效
 * @summary 生成的链接完全查询值 完全依赖 data中的param对象 原有的查询值会被覆盖 但原来的链接不变
 */
setUrlParam("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=split()#index",{
    a:"123",
    b:"123"
})

return "https://www.baidu.com/s?a=123&b=321#index"

```

#### <li>Utils 工具类函数</li>
```javascript
/** 
     * @description 基础版防抖函数
     * @param {fn | Function} 执行的函数 
     * @param {timeout | Number} 设置的hash值 
     * @summary 重点在于闭包函数 公用内部的一个变量
    */
    debounce(fn, timeout = 500) {
        let timer
        return function () {
            let env = this
            clearTimeout(timer)
            timer = setTimeout(function () {
                fn.apply(env, arguments);
            }, timeout)
        }
    }

    var fn = debeunce(function(){
        console.log("执行完毕here>>")
    }) 
    window.addEventListener("scroll",fn,false)

```

```javascript
    /** 
     * @description 节流函数
     * @param {fn | Function} 执行的函数 
     * @param {timeout | Number} 设置的hash值 
     * @returns {void}
     * @summary 针对高频事件 在固定的时间内执行
    */
    throttle(fn, timeout = 500) {
        let canRun = true
        return function () {
            let env = this
            if (!canRun) return
            canRun = false
            setTimeout(function () {
                fn.apply(env, arguments)
                canRun = true
            }, timeout)
        }
    }

    var fn = throttle(function(){
        console.log("执行完毕here>>")
    }) 
    window.addEventListener("scroll",fn,false)

```
```javascript
    /**
     * @description 动态载入js 增加兼容IE的写法
     * @param {url | String} 请求的网络地址
     *  
     * @param {opts | Function | object} 回调函数
     *    @param {isBefore | Boolean} 插入的位置 相对于当前的script
     *    @param {sccuess | Function } 成功的回调函数
     *    @param {error | Function} 失败的回调函数
     * @summary 此方法在chorme && microsoft上运行过 IE环境下有待考证 
    */
    dynamicLoadJs(url, opts = {}) {
        var script = document.createElement("script")
        var tag = document.getElementsByTagName("script")[0]
        var fn = function () { }
        var success, error

        if (typeof opts == 'function') {
            success = opts
            error = fn
        } else {
            success = opts.success || fn
            error = opts.error || fn
        }

        // 如果在IE环境下
        if (script.attachEvent) {
            script.attachEvent("onload", success)
            script.attachEvent("onerror", error)
        } else { // 其他在FF Chorme
            script.addEventListener("load", success)
            script.addEventListener("error", error)
        }

        script.src = url
        script.type = "text/javascript"

        if (opts.isBefore == undefined || opts.isBefore == true) {
            tag.parentNode.insertBefore(script, tag)
        } else {
            tag.parentNode.appendChild(script)
        }
    }
    dynamicLoadJs("https://cdn.bootcss.com/jquery/3.3.1/jquery.js",function(){
        console.log("加载成功")
    })
    or
    dynamicLoadJs("https://cdn.bootcss.com/jquery/3.3.1/jquery.js",{
        error(){}// 加载失败的情况
        success(){} // 加载成功的时候
        isBefore:true // script标签添加在所有script之前还是之后
    })

    <p>随便改一下</p>
```





















  




