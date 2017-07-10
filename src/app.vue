<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created (){
    let vue = this
      vue.$router.push('./login')
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
*{ margin:0;  padding:0;}
html,body{overflow: hidden}
#app{width: 1024px;margin: 0 auto;border:1px solid #D9D9D9;border-top:none;height: 100%;}
</style>
