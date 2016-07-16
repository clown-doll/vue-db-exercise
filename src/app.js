/*
* @Author: Administrator
* @Date:   2016-07-14 09:18:20
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-14 10:07:02
*/


require("./libs/flexible");

var Vue = require("vue"),
    App = Vue.extend({}),
    VueRouter = require("vue-router");


Vue.use(VueRouter);

var router = new VueRouter({
	//hash路由
	hasbang: true 
});

router.map({
	"/index": {
		component: require("./views/index.vue"),
		subRoutes: {
			"/": {
				component: require("./views/hot.vue")
			},
			"/hot": {
				component: require("./views/hot.vue")
			},
			"/movie": {
				component: require("./views/movie.vue")
			},
			"/read": {
				component: require("./views/read.vue")
			},
			"/tv": {
				component: require("./views/tv.vue")
			},
			"/activity": {
				component: require("./views/activity.vue")
			},
			"/music": {
				component: require("./views/music.vue")
			}
		}
	}
})


//默认/重定向到home页
router.redirect({
    '/':"index/hot"
})

router.start(App, '#app');




