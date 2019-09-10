<template>
    <header class="mui-bar mui-bar-nav">
        <!-- 具名插槽 导航左边-->
        <slot name="left"></slot>
		<!-- <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a> -->
		<h1 class="mui-title">{{ msg }}</h1>
        <!-- 具名插槽 导航右边-->
        <slot name="right"></slot>
	</header>
</template>

<script>
export default {
    name:"Header",
    props:{
        msg:String
    }
}
</script>

<style>
.mui-title{
    color: aqua !important;
    font-weight: bold;
}
</style>
