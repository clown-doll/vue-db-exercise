/*
* @Author: Administrator
* @Date:   2016-07-21 15:32:04
* @Last Modified by:   Administrator
* @Last Modified time: 2016-07-21 16:06:54
*/

"use strict";

export default function(router) {
    // 结合webpack处理按需加载
    router.map({
        "/": {
            component: require("./views/index.vue"),
            subRoutes: {
                "/movie": {
                    component: require("./views/movie.vue")
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
            component: function(resolve) {
                require(["./views/detail.vue"], resolve)
            }
        }
    })
}