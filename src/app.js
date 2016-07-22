/*
* @Author: Administrator
* @Date:   2016-07-14 09:18:20
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-22 09:25:25
*/

"use strict";

import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import routerMap from "./routermap";
import flexible from "./libs/flexible";

let App = Vue.extend({});

Vue.use(VueResource);
Vue.use(VueRouter);

// 设置接口根路径
Vue.http.options.root = "https://api.douban.com/v2";

// loading拦截
Vue.http.interceptors.push(function (request, next) {
    this.showLoading = true;
    next(function (response) {
        this.showLoading = false;
        return response;
    });
});


let router = new VueRouter({
    hashbang: true
});

//默认/重定向到home页
router.redirect({
    '/':"/movie"
});

// 路由列表
routerMap(router);

router.start(App, '#app');






