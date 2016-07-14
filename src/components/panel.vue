<style lang="Sass">
    @import "../assets/sass/setting";

    .panel{
        padding: pxTorem(46px) pxTorem(42px);
        background-color: $panelBgColor;
    }
</style>

<template>
    <div class="panel">
        <panel-header-component></panel-header-component>
    </div>
    
</template>

<script>
    var panelHeaderComponent = require("../components/panel-header.vue");

    module.exports = {
        components: {
            "panel-header-component": panelHeaderComponent
        }
    }
</script>