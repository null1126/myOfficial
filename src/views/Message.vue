<template>  
    <div>
        <Header :msg="hmsg"></Header>
        <div class="mui-content">
          <div class="mui-card">
		    <ul class="mui-table-view">
		        <li class="mui-table-view-cell">陌生人<span class="mui-badge mui-badge-success">5</span></li>
                <li class="mui-table-view-cell">班群<span class="mui-badge mui-badge-success">21</span></li>
                <li class="mui-table-view-cell">寝室群<span class="mui-badge mui-badge-success">16</span></li>
                <li class="mui-table-view-cell">二哈<span class="mui-badge mui-badge-success">5</span></li>
                <li class="mui-table-view-cell">大傻<span class="mui-badge mui-badge-success">7</span></li>
		    </ul>
        </div>   
    </div>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
   name:"Message",
   data() {
       return {
           hmsg:"消息"
       }
   },
   components:{
       Header
   }
}
</script>

<style>

</style>

