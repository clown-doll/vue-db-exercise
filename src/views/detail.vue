<style lang="sass">
	@import "../assets/sass/setting";
    
    .covers{
        position: relative;
        // padding: 0 pxTorem(64px);
        width: 100%;
        height: pxTorem(1039px);
        overflow: hidden;
        // box-sizing: border-box;
        .img-blur{
            width: 100%;
            -webkit-filter: blur(10px); 
            -moz-filter: blur(10px);
            -ms-filter: blur(10px);    
            filter: blur(10px);  
        }
        .back{
            padding-right: pxTorem(40px);
            position: absolute;
            left: pxTorem(64px);
            top: pxTorem(46px);
            font-size: pxTorem(58px);
            color: $white;
        }
        .img{
            position: absolute;
            bottom: pxTorem(60px);
            left: 50%;
            margin-left: pxTorem(-262px);
            width: pxTorem(524px);
        }
    }
</style>

<template>
	<div class="covers">
        <img src="../assets/pic/pic1.jpg" class="img-blur" alt="">
        <a href="#" class="back">&lt;</a> 
        <img src="../assets/pic/pic1.jpg" alt="" class="img">
    </div>
    <article>
        <header>
            <h1>发条城市</h1>
            <div class="evaluate">
                star
                <span>6.4</span>
                1446人评分
            </div>
            <a href="#" class="info">
                江涛（导演）/万宁/修睿/王自健/喜剧/冒险/2016-07-08（中国大陆）
                <i>&gt;</i>
            </a>
        </header>
        <section>
            <h3>简介</h3>
            <p>江涛（导演）/万宁/修睿/王自健/喜剧/冒险/2016-07-08（中国大陆）江涛（导演）/万宁/修睿/王自健/喜剧/冒险/2016-07-08（中国大陆）江涛（导演）/万宁/修睿/王自健/喜剧/冒险/2016-07-08（中国大陆）江涛（导演）/万宁/修睿/王自健/喜剧/冒险/2016-07-08（中国大陆）江涛（导演）/万宁/修睿/王自健/喜剧/冒险/2016-07-08（中国大陆）江涛（导演）/万宁/修睿/王自健/喜剧/冒险/2016-07-08（中国大陆）江涛（导演）/万宁/修睿/王自健/喜剧/冒险/2016-07-08（中国大陆）江涛（导演）/万宁/修睿/王自健/喜剧/冒险/2016-07-08（中国大陆）</p>
            <a href="#">更多</a>
        </section>
        <section>
            <h3>影人</h3>
            <!-- <ul>
                <li>
                    
                </li>
            </ul> -->
        </section>
    </article>
</template>

<script>
	
</script>