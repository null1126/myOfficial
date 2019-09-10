
export default {  
        loginfun(state,users){
         if (users) {
            state.user = users;
            state.islogin = true
         }else if(users == null){
            sessionStorage.setItem("userName",null)
            sessionStorage.setItem("userToken","")
            state.user = "未登录";
            state.islogin = false
            state.token = ""
         }
        },
        //将获取到的数据赋给state 的ablists
        abLists(state,ablist){
          state.ablists = ablist
        },
        //不显示点击的当前标题
        delablist(state,id){
          state.ablists = state.ablists.filter((ablist) => { return ablist.id != id})
        },
        regfun(state,body){
         state.regmessage = body.data.message;
         state.islogin = true;
         state.user = body.data.user;
        }
      
}