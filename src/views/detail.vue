<style lang="sass">
	@import "../assets/sass/setting";
    
    .covers{
        position: relative;
        // padding: 0 pxTorem(64px);
        width: 100%;
        height: pxTorem(1039px);
        overflow: hidden;
        // box-sizing: border-box;
        .img-blur{
            width: 100%;
            -webkit-filter: blur(10px); 
            -moz-filter: blur(10px);
            -ms-filter: blur(10px);    
            filter: blur(10px);  
        }
        .back{
            padding-right: pxTorem(40px);
            position: absolute;
            left: pxTorem(64px);
            top: pxTorem(46px);
            font-size: pxTorem(58px);
            color: $white;
        }
        .img{
            position: absolute;
            bottom: pxTorem(60px);
            left: 50%;
            margin-left: pxTorem(-262px);
            width: pxTorem(524px);
        }
    }

    .detail{
        padding: 0 pxTorem(44px);
        font-size: pxTorem(42px);
        header{
            padding: pxTorem(60px) 0;
        }
        h1{
            color: $black;
            font-size: pxTorem(50px);
        }
        h3{
            color: $gray;
            font-size: pxTorem(42px);
        }
        .evaluate{
            color: $gray;
            .score{
                padding: 0 pxTorem(20px);
                color: $grayDarker;
            }
        }
        .info{
            position: relative;
            display: block;
            margin-top: pxTorem(20px);
            padding-right: pxTorem(74px);
            color: $grayDarker;
            i{
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: pxTorem(-22px);
                display: block;
                width: pxTorem(44px);
                height: pxTorem(44px);
                line-height: pxTorem(44px);
                text-align: right;
            }
        }
        section{
            padding-bottom: pxTorem(72px);
        }
        .summary{
            color: $grayDarker;
            line-height: pxTorem(74px);
        }
        .more{
            display: block;
            padding: pxTorem(18px) 0;
            margin: pxTorem(30px) 0;
            width: 100%;
            text-align: center;
        }
        .casts{
            width: 100%;
            overflow: hidden;
            .casts-list{
                display: flex;
                flex-wrap: nowrap;
                justify-content: space-between;
                overflow-x: scroll;
                li{
                    padding-right: pxTorem(24px);
                    width: pxTorem(270px);
                    overflow: hidden;
                    text-align: center;
                }
            }
        }
    }
</style>

<template>
	<loading v-show="showLoading" ></loading>
    
    <div class="covers">
        <img v-bind:src="detailData.images.large" class="img-blur" alt="{{detailData.title}}">
        <a v-link="{ path: goBackPath}"  class="back icon-chevron-left"></a> 
        <img v-bind:src="detailData.images.large" alt="{{detailData.title}}" class="img">
    </div>
    <article class="detail">
        <header>
            <h1>{{detailData.title}}</h1>
            <div class="evaluate">
                <stars></stars>
                <span class="score">{{detailData.rating.average}}</span>
                {{detailData.ratings_count}} 人评分
            </div>
            <a href="#" class="info">
                <template v-for="director in detailData.directors">
                    {{director.name}}（导演）/
                </template>
                <template v-for="people in detailData.casts">
                    {{people.name}}/
                </template>
                <template v-for="genre in detailData.genres">
                    {{genre}}/
                </template>
                {{detailData.year}}（<template v-for="country in detailData.countries">{{country}} </template>）
                <i class="icon-chevron-right"></i>
            </a>
        </header>
        <section>
            <h3>简介</h3>
            <p class="summary">{{detailData.summary}}</p>
            <a href="#" class="more">更多</a>
        </section>
        <section>
            <h3>影人</h3>
            <div class="casts">
                <ul class="casts-list" id="castsList">
                    <li v-for="director in detailData.directors">
                        <item-content v-bind:img="director.avatars.medium" v-bind:title="director.name"></item-content>
                        <span>导演</span>
                    </li>
                    <li v-for="people in detailData.casts">
                        <item-content v-bind:img="people.avatars.medium" v-bind:title="people.name"></item-content>
                    </li>
                </ul>
            </div>
        </section>
    </article>
</template>

<script>
	var itemContentComponent = require("../components/item-content.vue"),
        starsComponent = require("../components/star.vue"),
        loadingComponent = require("../components/loading.vue");

    module.exports = {
        data: function(){
            return {
                showLoading: false,
                detailData: {
                    images: {},
                    rating: {}
                },
                goBackPath: ""
            }
        },
        route: {
            // data在每次路由变动时都会被调用
            data: function(transition){
                var backPath = transition.from.path,
                    subjectId = transition.to.params.id;

                /* 
                 *  判断当前请求参数是否与sesstionStorage中保存的值相等
                 *  相等的话重新请求
                 *  否则不重新请求
                */
                if (subjectId === sessionStorage.searchKey) {
                    this.showLoading = false
                }else{
                    this.getDetail(subjectId);
                }

                // 设置sessionStorage值，保存请求参数
                sessionStorage.setItem('searchKey', subjectId);

                return {
                    goBackPath: backPath
                }
            }
        },
        components: {
            "item-content": itemContentComponent,
            "stars": starsComponent,
            "loading": loadingComponent
        },
        methods: {
            getId: function(){
                return this.$route.params.id;
            },
            getDetail: function(id) {
                var vm = this;
                vm.$http.jsonp("movie/subject/" + id)
                    .then(function(response){
                        vm.detailData = response.data;

                        var castsLen = vm.detailData.casts.length,
                            baseWidth = $("#castsList li").outerWidth();

                        $("#castsList").width(castsLen*baseWidth + castsLen*12);
                    });
            }
        }
    }
</script>