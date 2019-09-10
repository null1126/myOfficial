<template>
<div class="home">
  <Header :msg="hmsg">
    <a slot="left" href="#offCanvasSide" class="mui-action-menu mui-pull-left">{{ user }}</a>
    <a slot="right" href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-right"></a>
  </Header>
  <div class="mui-content">
    <!-- 首页轮播图 -->
    <Swiper></Swiper>
    <div class="mui-input mui-search">
			<input type="search" class="mui-input-clear" placeholder="添加一个标题">
      <span @click="addablist" class="mui-btn mui-btn-primary">
					添加
		</span>
		</div>
    
  </div>
  <Lists></Lists>
</div>
</template>
<script>
import Header from "@/components/Header.vue"
import Swiper from "@/components/Swiper.vue"
import Lists from "@/components/Lists.vue"
import {mapState , mapActions ,mapMutations,mapGetters} from "vuex"
export default {

name: 'home',
  data() {
    return {
      hmsg: "首页"
    }
  },
methods: {
  addCont(){
    this.$store.dispatch("addFun")
  },
  redCont(){
    this.$store.dispatch("redFun")
  },
  addablist(){

  }
},
  computed:{
   ...mapState(["user"]),
  },
  components: {
    Header,
    Swiper,
    Lists
  },
  // mounted(){
  //   this.$store.dispatch("regFun",{username:"zzw",password:123})
  // }
}
</script>
<style scoped>
h2{
  text-align: center;
  color:yellowgreen;
}
.mui-input-clear{
  width: 200px !important;
}
</style>