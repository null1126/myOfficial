<template>
  <div class="login">
     <Header :msg="hmsg"></Header>
    <form class="mui-input-group mui-content">
    <div class="mui-input-row">
        <label>用户名</label>
    <input @focus="textFun" type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="user">
    </div>
    <div class="mui-input-row">
        <label>密码</label>
        <input @focus="textFun" type="password" class="mui-input-password" placeholder="请输入密码" v-model="password">
    </div>
    <div class="mui-button-row">
        <button type="button" class="mui-btn mui-btn-primary" @touchstart.prevent="submits()">确认登录</button>
        <!-- 取消登录重定向到主页 -->
        <button type="button" class="mui-btn mui-btn-danger" @touchstart="$router.push({path:'/mines'})">取消</button>
    </div>
    <!-- 提示框 -->
    <div v-if="flog" class="mui-content-padded" style="margin: 5px;text-align: center;">
		<button id='alertBtn' type="button" class="mui-btn mui-btn-red mui-btn-outlined">密码或用户名错误</button>
    </div>
    <p @touchstart="$router.push({path:'/register'})">还没有注册？<span>点击这里</span></p>
</form>
   {{ this.$store.state.logmessage}}
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import {mapState , mapActions , mapMutations} from "vuex"
import axios from 'axios'
export default {
  name:"Login",
  data(){
    return{
    hmsg:"登录",
    user:"",
    password:'',
    flog:false,
    }
  },
  beforeRouteEnter (to, from, next) {
    // ...
    next(vm =>{
      vm.$store.dispatch("loginFun",null)
    })
  },
  computed:{
   //...mapState(["users","passwords"])
  },
  components:{
    Header
  },
   methods: {
      async submits(){      
       const res = await axios.post("http://localhost:3000/login",{username:this.user,password:this.password})
        await this.$store.dispatch("loginFun",res.data.user)
        if(res.data.message === "ok"){
         sessionStorage.setItem("userName",this.$store.state.username)
         sessionStorage.setItem("userToken",this.$store.state.token)
         await this.$router.push({path:"/home"})
        }
       },
      textFun(){
       this.flog = false
      },
    },
      //输入框获得焦点后去掉 提示框
} 
</script>

<style scoped>
/* .mui-content{
  margin-top: 200px;
  border-radius: 20px;
} */
p{
  text-align: center;
  font-size: 16px;
  margin-top: 10px;
}
p span{
  color: red;
}
</style>



