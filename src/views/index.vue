<style lang="sass">
    @import "../assets/sass/base/variable";
    @import "../assets/sass/base/reset";
</style>

<template>
    <div id="app">
        <hot-component></hot-component>  
    </div>
</template>

<script>
    require("../libs/flexible");

    var hotComponent = require("./hot.vue");

    module.exports = {
        components: {
            "hot-component": hotComponent
        }
    }

</script>