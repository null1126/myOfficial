<template>
    <div class="register">
       <Header :msg="hmsg">
           <a slot="left" @click="$router.go(-1)" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
       </Header>  
       <form class="mui-input-group mui-content">
    <div class="mui-input-row">
        <label>用户昵称</label>
    <input @focus="textFun" type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="user">
    </div>
    <div class="mui-input-row">
        <label>用户密码</label>
        <input @focus="textFun" type="password" class="mui-input-password" placeholder="请输入密码" v-model="password">
    </div>
    <div class="mui-input-row">
        <label>确认密码</label>
        <input @focus="textFun" type="password" class="mui-input-password" placeholder="请确认密码" v-model="password1">
    </div>

     <!-- 提示框 -->
    <div v-if="flog" class="mui-content-padded" style="margin: 5px;text-align: center;">
		<button id='alertBtn' type="button" class="mui-btn mui-btn-red mui-btn-outlined">{{ alerts }}</button>
    </div>

    <div class="mui-input-row">
        <label>手机号码</label>
        <input @focus="passFun" type="text" class="mui-input-clear" placeholder="请输入手机号码" v-model="phone">
    </div>
    <div class="mui-button-row">
        <button type="button" class="mui-btn mui-btn-primary" @click="ffirm">确认</button>
        <!-- 取消登录重定向到主页 -->
        <button type="button" class="mui-btn mui-btn-danger" @click="$router.go(-1)">取消</button>
    </div>
</form>

     {{this.$store.state.regmessage}}
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
  name:"register",
  data() {
      return {
        hmsg:"用户注册",
        user:"",
        password:"",
        password1:'',
        phone:'',
        alerts:"",
        flog:false
      }
  },
  components:{
      Header
  },
  methods: {
     async ffirm(){
      if (this.user != "" && this.password != "") {
        if (this.password != this.password1) {
        this.alerts = "两次密码不一致"
        this.flog = !this.flog
      }else{
        await this.$store.dispatch("regFun",{username:this.user,password:this.password})
      }      
      }else{
         this.alerts = "用户名和密码不能为空"
         this.flog = !this.flog
      }
    if(this.$store.state.regmessage === "ok"){
         await this.$router.push({path:"/home"})
        }
    },
    passFun(){
      if (this.password != this.password1) {
        this.alerts = "两次密码不一致"
        this.flog = !this.flog
      }
    },
    //输入框获得焦点后去掉 提示框
      textFun(){
       this.flog = false
      }
 }
}
</script>

<style scope="scoped">

</style>
