<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import Axios from 'axios'
  import Jsonp from 'jsonp'
  export default {
    name: "App",
    mounted() {
      // CORS跨域  这个easy-mock时常会出问题，要等他本身好了，才能用。
      // let url = 'https://www.easy-mock.com/mock/5b012c1fe6e1035843cd3aff/mockapi/table/list';
      // Axios.get(url).then(()=>{
      // })


      // Jsonp跨域
      // let url = 'https://www.imooc.com/activity/servicetime';
      // Jsonp(url,()=>{})

      // 接口代理跨域
      let url = '/activity/servicetime';
      Jsonp(url,()=>{})

    }

  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
