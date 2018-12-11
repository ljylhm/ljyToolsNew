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




















  




