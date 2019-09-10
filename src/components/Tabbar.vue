<template>
    <nav class="mui-bar mui-bar-tab"> 
        <router-link to="/home" tag="a" class="mui-tab-item"  :class="{'mui-active': '/home'=== $route.path}" href="#tabbar-with-map">
            <span class="mui-icon mui-icon-home"></span>
            <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link to="/message" tag="a" class="mui-tab-item"  :class="{'mui-active': '/message'=== $route.path}" href="#tabbar-with-map">
            <span class="mui-icon mui-icon-email"></span>
            <span class="mui-tab-label">消息</span>
        </router-link>
       <router-link to="/linkman" tag="a" class="mui-tab-item"  :class="{'mui-active': '/linkman'=== $route.path}" href="#tabbar-with-map">
            <span class="mui-icon mui-icon-contact"></span>
            <span class="mui-tab-label">联系人</span>
        </router-link>
        <router-link to="/mines" tag="a" class="mui-tab-item"  :class="{'mui-active': '/mines'=== $route.path}" href="#tabbar-with-map">
            <span class="mui-icon mui-icon-gear"></span>
            <span class="mui-tab-label">我的</span>
        </router-link>
    </nav>
</template>

<script>
    export default {
        name: "Tabbar"
    }
</script>

<style>
.mui-bar{
    background: rgb(12, 197, 221) !important;
}
</style>