<style lang="sass">
    @import "../assets/sass/setting";

    .panel{
    	margin-top: pxTorem($baseGap);
        padding: pxTorem(46px) pxTorem(42px);
        background-color: $panelBgColor;
        border-bottom: 1px solid $grayLighter;
    }

</style>

<template>
	<div class="panel">
        <panel-header></panel-header>
        <ul>
        	<star-item></star-item>
        </ul>
    </div>
</template>

<script>
	var panelHeaderComponent = require("../components/panel-header.vue"),
		starItemComponent = require("../components/item-has-star.vue");


    module.exports = {
        components: {
            "panel-header": panelHeaderComponent,
            "star-item": starItemComponent
        }
    }
   
</script>