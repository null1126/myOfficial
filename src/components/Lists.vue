<template>
   <div>
      <h2>标题</h2>
       <div class="con">     
        <mt-cell  v-for="ablist in ablists" :key="ablist.id" icon="more">
        {{ ablist.title | ellipsis }}
        <span @click="delablist(ablist.id)" class="mui-btn mui-btn-success">
			删除
		</span>
    </mt-cell>
    <br>
    <br>
    <br>
   </div>
   </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:"List",
  data() {
      return {
         
      }
  },
  methods:{
    delablist(id){
      //console.log(id)
      this.$store.dispatch("delabList",id)
    }
  },
  computed:{
      ...mapState(["ablists"])
  },
  mounted() {
      this.$store.dispatch("albumsLists")
  },
  filters: {
		ellipsis (value) {
		let len=value.length;
		if (!value) return ''
		if (value.length > 15) {
			return value.substring(0,20) + '...'
		}
		return value
		}
    }
}
</script>

<style scoped>
span {
    width: 40px;
    height: 20px;
    font-size: 10px;
    float: right;  
}
</style>
