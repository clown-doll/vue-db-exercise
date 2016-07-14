<style lang="sass">
    @import "../assets/sass/setting";

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
            //font-weight: 700;
            color: $gray;
            &.active{
                color: $green;
                border-bottom: pxTorem(4px) solid $green;
            }
        }
    }
</style>

<template>
    <nav class="nav-tab">
        <a href="#" class="active">热门</a>
        <a href="#">电影</a>
        <a href="#">读书</a>
        <a href="#">电视</a>
        <a href="#">活动</a>
        <a href="#">音乐</a>
    </nav>
</template>

<script>
    
</script>