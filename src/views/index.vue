<style lang="sass">
    @import "../assets/sass/setting";
    @import "../assets/sass/base/reset";

    $fontClassoutput: arrow-right search;
    @import "../assets/sass/font-face/font-face";

    .index-header{
        position: relative;
        background-color: $panelBgColor;
        height: pxTorem(168px);
        line-height: pxTorem(168px);
        text-align: center;
        font-size: pxTorem(50px);
        .icon-search{
            padding: 4px;
            position: absolute;
            right: pxTorem(42px);
            top: pxTorem(38px);
            font-size: pxTorem(64px);
            color: $green;
        }
    }

    .nav-tab{
        display: flex;
        justify-content: space-between;
        background-color: $panelBgColor;
        border-bottom: pxTorem(4px) solid $grayLighter;
        border-top: pxTorem(4px) solid $grayLighter;
        a{
            width: 16.67%;
            border-bottom: pxTorem(4px) solid transparent;
            text-align: center;
            line-height: pxTorem(120px);
            font-size: pxTorem(44px);
            color: $gray;
            &.v-link-active{
                color: $green;
                border-bottom: pxTorem(4px) solid $green;
            }
        }
    }
</style>

<template>
    <header class="index-header">
        书影音
        <i class="icon-search"></i>
    </header>
    <nav class="nav-tab">
        <a v-link="{ path: '/index/hot' }">热门</a>
        <a v-link="{ path: '/index/movie' }">电影</a>
        <a v-link="{ path: '/index/read' }">读书</a>
        <a v-link="{ path: '/index/tv' }">电视</a>
        <a v-link="{ path: '/index/activity' }">活动</a>
        <a v-link="{ path: '/index/music' }">音乐</a>
    </nav>
    <router-view></router-view>
</template>

<script>
    //require("../libs/flexible");
</script>