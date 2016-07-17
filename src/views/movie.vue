<style lang="sass">
    @import "../assets/sass/setting";
    @import "../assets/sass/pages/public";
</style>

<template>
    <!-- 影院热映 -->
    <div class="panel">
        <panel-header v-bind:title="onlinesPanelTitle"></panel-header>
        <ul class="list-item">
        	<li v-for="item in onlinesData.subjects | limitBy 3">
        		<a v-link="{ name: 'detail', params: { id:item.id} }">
        			<item-content v-bind:img="item.images.medium" v-bind:title="item.original_title"></item-content>
	        		<stars></stars>
	        		<span class="score">{{item.rating.average}}</span>
        		</a>
        		
        	</li>
        </ul>
    </div>
	<!-- ／影院热映 -->

	<!-- 影院即将上映 -->
    <div class="panel">
        <panel-header v-bind:title="comingSoonPanelTitle"></panel-header>
        <ul class="list-item">
        	<li v-for="item in comingSoonData.subjects | limitBy 3">
        		<a v-link="{ name: 'detail', params: { id:item.id} }">
        			<item-content v-bind:img="item.images.medium" v-bind:title="item.original_title"></item-content>
	        		<stars></stars>
	        		<span class="score">{{item.rating.average}}</span>
        		</a>
        		
        	</li>
        </ul>
    </div>
    <!-- ／影院即将上映 -->

</template>

<script>
    var panelHeaderComponent = require("../components/panel-header.vue"),
		itemContentComponent = require("../components/item-content.vue"),
		starsComponent = require("../components/star.vue");


    module.exports = {
    	data: function(){
    		return {
    			onlinesPanelTitle: "影院热映",
    			comingSoonPanelTitle: "影院即将上映",
    			onlinesData: {
    				subjects: []
    			},
    			comingSoonData: {
    				subjects: []
    			}
    		}
    	},
    	ready: function(){
    		this.$http.jsonp("movie/in_theaters")
    				.then(function(response){
    					this.$set("onlinesData", response.data);
    				});

    		this.$http.jsonp("movie/coming_soon")
    				.then(function(response){
    					this.$set("comingSoonData", response.data);
    				});

    	},
        components: {
            "panel-header": panelHeaderComponent,
            "item-content": itemContentComponent,
            "stars": starsComponent
        }
    }
</script>