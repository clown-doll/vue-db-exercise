<style lang="sass">
	@import "../assets/sass/setting";

	.item-img{
		width: 100%;
		height: pxTorem(380px);
		overflow: hidden;
		img{
			width: 100%;
		}
	}
	.item-title{
		display: block;
		padding: pxTorem(20px) 0 pxTorem(24px);
		@include ellipsis;
		font-weight: 700;
		font-size: pxTorem(38px);
		color: $grayDark;
	}
</style>

<template>
	<div class="item-img">
		<img v-bind:src="img" alt="{{title}}">
	</div>
	<strong class="item-title">{{title}}</strong>
</template>

<script>
	module.exports = {
		props: ["title", "img"]
	}
</script>