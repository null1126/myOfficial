<template>  
    <div>
        <Header :msg="hmsg"></Header>
       <div class="mui-content">
          <div class="mui-card">
		    <ul class="mui-table-view">
		        <li class="mui-table-view-cell">爸爸<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">妈妈<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">哥哥<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">姐姐<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">大傻<span class="mui-badge mui-badge-success"></span></li>
		        <li class="mui-table-view-cell">爸爸<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">妈妈<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">哥哥<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">姐姐<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">大傻<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">爸爸<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">妈妈<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">哥哥<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">姐姐<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">大傻<span class="mui-badge mui-badge-success"></span></li>
		        <li class="mui-table-view-cell">爸爸<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">妈妈<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">哥哥<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">姐姐<span class="mui-badge mui-badge-success"></span></li>
                <li class="mui-table-view-cell">大傻<span class="mui-badge mui-badge-success"></span></li>
            </ul>
        </div>   
    </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
   name:"Linkman",
   data() {
       return {
           hmsg:"联系人"
       }
   },
   components:{
       Header
   }
}
</script>

<style scoped>

</style>

