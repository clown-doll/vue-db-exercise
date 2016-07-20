<style lang="sass">
    @import "../assets/sass/setting";
    @import "../assets/sass/pages/public";
</style>

<template>
    <loading v-show="showLoading" ></loading>

    <!-- 影院热映 -->
    <div class="panel">
        <panel-header v-bind:title="onlinesPanelTitle"></panel-header>
        <ul class="list-item">
        	<li v-for="item in onlinesData.subjects | limitBy 3">
        		<a v-link="{ name: 'detail', params: { id:item.id} }">
        			<item-content v-bind:img="item.images.medium" v-bind:title="item.original_title"></item-content>
	        		<template v-if="item.rating.average > 0">
                        <stars></stars>
                        <span class="score">{{item.rating.average}}</span>
                    </template>
                    <span v-else>暂无评分</span>
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
	        		<template v-if="item.rating.average > 0">
                        <stars></stars>
                        <span class="score">{{item.rating.average}}</span>
                    </template>
                    <span v-else>暂无评分</span>
        		</a>
        	</li>
        </ul>
    </div>
    <!-- ／影院即将上映 -->

</template>

<script>
    var panelHeaderComponent = require("../components/panel-header.vue"),
		itemContentComponent = require("../components/item-content.vue"),
		starsComponent = require("../components/star.vue"),
        loadingComponent = require("../components/loading.vue");

    
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
    			},
                showLoading: false
    		}
    	},
    	ready: function(){
    		this.getOnlineMovies();
    		this.getComingSoonMovies();
    	},
        components: {
            "panel-header": panelHeaderComponent,
            "item-content": itemContentComponent,
            "stars": starsComponent,
            "loading": loadingComponent
        },
        methods: {
            getOnlineMovies: function() {
                var vm = this;

                vm.$http.jsonp("movie/in_theaters")
                    .then(function(response){
                        vm.onlinesData = response.data;
                    });
            },
            getComingSoonMovies: function() {
                var vm = this;

                vm.$http.jsonp("movie/coming_soon")
                    .then(function(response){
                        vm.comingSoonData = response.data;
                    });
            }
        }
    }
</script>