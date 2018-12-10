import verify from "@components/verify/main.js";
let storage = {
    version: "0.0.1",
    /**
    * @description 对sessionStorage进行设置
    * @param {String} key
    * @param {String} value
    */
    sessionSet(key, value) {
        sessionStorage.setItem && sessionStorage.setItem(key, value);
    },

    /**
    * @description 得到sessionStorage的值
    * @param {String} key
    * @returns {String}
    */

    sessionGet(key = null) {
        if (!key && key !== 0) return window.sessionStorage;
        return sessionStorage.getItem(key);
    },

    /**
    * @description 清除sessionStorage
    * @param {String} key
    */

    sessionClear(key = "") {
        var sessionJson = window.sessionStorage;
        if (!key && key !== 0) {
            sessionJson.clear();
        }
        sessionJson.removeItem(key);
    },

    /**
    * @description 对localStroage进行设置
    * @param {String} key
    * @param {String} value
    * @returns
    */

    localStroageSet(key, value) {
        localStorage.setItem && localStorage.setItem(key, value);
    },

    /**
    * @description 获得localStroageGet的值
    * @param {String} key
    * @param {String} value
    * @returns
    */

    localStroageGet(key) {
        if (!key && key !== 0) return window.localStroage;
        localStorage.getItem(key);
    },

    /**
    * @description 清除localStroage
    * @param {String} key
    */

    localStroageClear: function (key) {
        var localStroageJson = window.localStroage;
        if (!key && key !== 0) {
            localStroageJson.clear();
        }
        localStroageJson.removeItem(key);
    }
}

export default storage;