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
                    //height: pxTorem(390px);
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
        <img v-bind:src="detailData.images.large" class="img-blur" alt="">
        <a href="#" class="back icon-chevron-left"></a> 
        <img v-bind:src="detailData.images.large" alt="" class="img">
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
                {{detailData.directors[0].name}}（导演）/
                <span v-for="people in detailData.casts">
                    {{people.name}}/
                </span>
                <span v-for="genre in detailData.genres">
                    {{genre}}/
                </span>
                {{detailData.year}}（{{detailData.countries[0]}}）
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
                    <li>
                        <item-content v-bind:img="detailData.directors[0].avatars.medium" v-bind:title="detailData.directors[0].name"></item-content>
                    </li>
                    <li v-for="people in detailData.casts">
                        <item-content v-bind:img="people.avatars.medium" v-bind:title="people.name"></item-content>
                    </li>
                </ul>
            </div>
        </section>
        <!-- <section>
            <h3>短评</h3>
            <comment-item></comment-item>
            <a href="#" class="more">更多短评{{detailData.comments_count}}条</a>
        </section>
        <section>
            <h3>影评</h3>
            <comment-item></comment-item>
            <a href="#" class="more">更多影评{{detailData.reviews_count}}条</a>
        </section> -->
    </article>
</template>

<script>
	var itemContentComponent = require("../components/item-content.vue"),
        starsComponent = require("../components/star.vue"),
        //commentItemComponent = require("../components/comment.vue"),
        loadingComponent = require("../components/loading.vue");

    module.exports = {
        data: function(){
            return {
                showLoading: false,
                detailData: {}
            }
        },
        ready: function(){
            var subjectId = this.getId();
            this.getDetail(subjectId);
        },
        components: {
            "item-content": itemContentComponent,
            "stars": starsComponent,
            //"comment-item": commentItemComponent,
            "loading": loadingComponent
        },
        methods: {
            getId: function(){
                var pathArr = window.location.hash.split("/");
                return pathArr[pathArr.length-1];
            },
            getDetail: function(id) {
                var vm = this;
                vm.$http.jsonp("movie/subject/" + id)
                    .then(function(response){
                        vm.$set("detailData", response.data);

                        var castsLen = vm.detailData.casts.length,
                            baseWidth = $("#castsList li").outerWidth();

                        $("#castsList").width(castsLen*baseWidth + castsLen*12);
                    });
            }
            // ,
            // getComments: function(id) {
            //     var vm = this;

            //     vm.$http.jsonp("movie/subject/" + id + "/comments")
            //         .then(function(response){
            //             this.$set("commentsData", response.data);
            //         });
            // },
            // getReviews: function(id) {
            //     var vm = this;

            //     vm.$http.jsonp("movie/subject/" + id + "/reviews")
            //         .then(function(response){
            //             this.$set("reviewsData", response.data);
            //         });
            // }
        }
    }
</script>