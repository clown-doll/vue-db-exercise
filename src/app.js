/*
* @Author: Administrator
* @Date:   2016-07-14 09:18:20
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-19 17:19:07
*/


require("./libs/flexible");

var Vue = require("vue"),
    App = Vue.extend({}),
    VueRouter = require("vue-router"),
    VueResource = require('vue-resource');

Vue.use(VueResource);

Vue.http.options.root = "https://api.douban.com/v2";

// loading拦截
Vue.http.interceptors.push(function (request, next) {
    this.showLoading = true;
    next(function (response) {
        this.showLoading = false;
        return response;
    });
});


Vue.use(VueRouter);

var router = new VueRouter({
	//hash路由
	hasbang: true 
});

/*router.map({
	"/index": {
		component: require("./views/index.vue"),
		subRoutes: {
			"/": {
				component: require("./views/movie.vue")
			},
			"/movie": {
				component: require("./views/movie.vue")
			},
			"/read": {
				component: require("./views/read.vue")
			},
			"/activity": {
				component: require("./views/activity.vue")
			},
			"/music": {
				component: require("./views/music.vue")
			}
		}
	},
	"/detail/:id": {
		name: "detail",
		component: require("./views/detail.vue")
	}
})*/
router.map({
    "/index": {
        component: require("./views/index.vue"),
        subRoutes: {
            "/": {
                component: function(resolve) {
                    require(["./views/movie.vue"], resolve)
                }
            },
            "/movie": {
                component: function(resolve) {
                    require(["./views/movie.vue"], resolve)
                }
            },
            "/read": {
                component: function(resolve) {
                    require(["./views/read.vue"], resolve)
                }
            },
            "/activity": {
                component: function(resolve) {
                    require(["./views/activity.vue"], resolve)
                }
            },
            "/music": {
                component: function(resolve) {
                    require(["./views/music.vue"], resolve)
                }
            }
        }
    },
    "/detail/:id": {
        name: "detail",
        component: require("./views/detail.vue")
    }
})


//默认/重定向到home页
router.redirect({
    '/':"index/movie"
})

router.start(App, '#app');






