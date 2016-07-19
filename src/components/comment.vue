<style lang="sass">
    @import "../assets/sass/setting";

    .comment-item{
        @include clearfix;
        font-size: pxTorem(42px);
        line-height: pxTorem(74px);
        %public{
            float: right;
            margin-left: pxTorem(32px);
            width: pxTorem(838px);
        }
        .face{
            float: left;
            width: pxTorem(74px);
            height: pxTorem(74px);
            border-radius: 50%;
        }
        dt{
            @extend %public;
            color: $black;
        }
        .content{
            @extend %public;
            color: $grayDark;
        }
        .bar{
            @extend %public;
            color: $grayLight;
            font-size: pxTorem(34px);
            .time{
                float: right;
            }
            i{
                margin-right: pxTorem(20px);
            }
        }
    }
</style>

<template>
    <dl class="comment-item">
        <dd class="face">
            <img src="">
        </dd>
        <dt>谢谢你们的鱼 <Star></Star></dt>
        <dd class="content">
            内容还不错
        </dd>
        <dd class="bar">
            <span class="time">07-04</span>
            <i class="icon-thumbs-o-up"></i> 17
        </dd>
    </dl>
</template>