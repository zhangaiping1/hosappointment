
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: "App",
    data() {
      return{

      }
    },
    mounted() {
      this.getUser();
      this.getCartCount();
    },
    methods:{
      getUser() {
        this.axios.get('/user').then((res)=>{
          this.$store.dispatch('saveUserName',res.username)
        })
      },
      getCartCount() {
        this.axios.get('/carts/products/sum').then((res)=>{
          this.$store.dispatch('saveCartCount',res.count)
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "assets/scss/config.scss";
  @import "assets/scss/reset.scss";


</style>
