export const stringHelper = {
    /** 
     * @description 驼峰转连字符
     * @param {str | String} 匹配的字符串
     * @return {String}
     * @summary copy 尤大 Vue源码
     * \B 是非单词边界 \b是单词边界（类似于空格 Tab 行首字 行尾 空行 标点）
     *【摘要】就是匹配一串连续的且有大小写的字符串
     */
    hyphenate(str) {
        const hyphenateRE = /\B([A-Z])/g
        return str.replace(hyphenateRE, '-$1').toLowerCase()
    },
    /** 
     * @description 连字符转驼峰
     * @param {str | String} 匹配的字符串
     * @return {String}
     * @summary copy 尤大 Vue源码
     * \w 匹配字母或数字或下划线或汉字 等价于 '[^A-Za-z0-9_]'
     */
    camelize(str) {
        const camelizeRE = /-(\w)/g
        return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
    },
    /** 
      * @description 首字符大写
      * @param {str | String} 匹配的字符串
      * @return {String}
      */
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

