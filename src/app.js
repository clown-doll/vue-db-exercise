/*
* @Author: Administrator
* @Date:   2016-07-14 09:18:20
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-14 10:07:02
*/

var Vue = require("vue"),
    App = require("./views/index.vue");

new Vue({
    el: "body",
    components: {
        "app": App
    }
})