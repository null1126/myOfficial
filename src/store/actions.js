import axios from 'axios'
export default{
    //请求首页数据 
    async albumsLists({commit}){
      const res = await axios.get("http://jsonplaceholder.typicode.com/albums?_limit=10");
      commit("abLists",res.data)
    },
    //删除点击当前的数据
    async delabList({commit},id){
      await axios.delete(`http://jsonplaceholder.typicode.com/albums/${id}`);
      commit("delablist",id)
    },
    //实现注册
    async regFun({commit},body){
      const res = await axios.post(`http://localhost:3000/registers`,body)    
      commit("regfun",res)
    },
    //实现登录
    async loginFun({commit},users){
      commit("loginfun",users)
    }
}
