<style lang="sass">
    @import "../assets/sass/setting";

    $fontClassoutput: glass music search times;
    @import "../assets/sass/font-face/font-face";

    .hot-header{
        position: relative;
        background-color: $panelBgColor;
        height: pxTorem(168px);
        line-height: pxTorem(168px);
        text-align: center;
        .icon-search{
            padding: 4px;
            position: absolute;
            right: pxTorem(42px);
            top: pxTorem(38px);
            font-size: pxTorem(64px);
            color: $green;
        }
    }
</style>

<template>
    <header class="hot-header">
        书影音
        <i class="icon-search"></i>
    </header>
    <nav-component></nav-component>
    <panel-component></panel-component>
</template>

<script>
    var navComponent = require("../components/nav.vue"),
        panelComponent = require("../components/panel.vue");

    module.exports = {
        components: {
            "nav-component": navComponent,
            "panel-component": panelComponent
        }
    }
</script>