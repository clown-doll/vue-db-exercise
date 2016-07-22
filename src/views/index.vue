<style lang="sass">
    @import "../assets/sass/setting";
    @import "../assets/sass/base/reset";

    $fontClassoutput: chevron-right chevron-left search star thumbs-o-up;
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
        <a v-link="{ path: '/movie' }">电影</a>
        <a v-link="{ path: '/read' }">读书</a>
        <a v-link="{ path: '/activity' }">活动</a>
        <a v-link="{ path: '/music' }">音乐</a>
    </nav>
    <!-- keep-alive, 缓存请求数据 -->
    <router-view keep-alive></router-view>
</template>

<script>
   
</script>