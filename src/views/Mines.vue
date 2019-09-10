<template>  
    <div>
        <Header :msg="hmsg"></Header>
        <!-- 未登录状态 -->
        <div class="mui-content">
        <ul class="mui-table-view"  v-show= "!islogin">
			<router-link tag="li" to="/login" class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<span class="mui-media-object mui-pull-left mui-icon mui-icon-contact"></span>
						<div class="mui-media-body">
							登录
						<p class='mui-ellipsis'>您还没有登录，快去登录吧！</p>
					</div>
				</a>
			</router-link>
        </ul>
        <!-- 登录状态 -->
        <ul class="mui-table-view" v-show= "islogin">
			<router-link tag="li" to="/login" class="mui-table-view-cell mui-media">
				<a href="javascript:;">
					<span class="mui-media-object mui-pull-left mui-icon mui-icon-contact"></span>
						<div class="mui-media-body">
							{{ username }}
						<p class='mui-ellipsis'>{{ mesg }}</p>
					</div>
				</a>
			</router-link>
            <button @click="exitlogin" class="mui-but mui-btn-danger">退出登录</button>
        </ul>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
   name:"Mines",
   data() {
       return {
           hmsg:"我的信息",
           username:this.$store.state.user,
           mesg:"这是签名",
           islogin:this.$store.state.islogin  //登录状态
       }
   },
   methods:{
        exitlogin(){
            this.islogin = !this.islogin;
            this.$router.push({path:"/login"})
        }
   },
   components:{
       Header
   }
}
</script>

<style>

.mui-icon-contact{
    font-size: 50px;
}
.mui-media{
    background-color: rgba(65, 129, 247, 0.863);
    border-radius: 10px;
}
</style>

