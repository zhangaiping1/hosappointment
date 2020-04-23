
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import storage from './storage'
  export default {
    name: "App",
    mounted() {
      // storage.setItem('a','1')                                      //添加一个属性值a:1
      // storage.setItem('user',{a:1})
      // storage.setItem('abc',{a:1},'user')      //向user里添加模块abc,值是a:1
      storage.clear('a','user')      //把user里的a属性删除掉。

    }
  }
</script>

<style>

</style>
