<template>
  <div id="app">
      <router-view/>
    <Tabbar  v-show="$route.meta.showFooter"></Tabbar>
  </div>
</template>
<script>

import Tabbar from "@/components/Tabbar.vue"
export default {
  data() {
    return {
      user:'123',
      
    }
  },
  components:{
   Tabbar
  }
}
</script>

<style>


</style>
