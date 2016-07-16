<style lang="sass" scoped>
	@import "../assets/sass/setting";

	.panel-header{
		position: relative;
		h3{
			font-size: pxTorem(48px);
		}
		a{
			position: absolute;
			right: 0;
			top: pxTorem(16px);
			font-size: pxTorem(40px);
		}
	}
</style>

<template>
	<header class="panel-header">
        <h3>影院热映</h3>
        <a href="#">更多 &gt;</i></a>
    </header>
</template>