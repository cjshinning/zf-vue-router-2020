<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>

    <router-view a="1" b="2" c="3"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    console.log(this.$route);
    console.log(this.$router);
  }
}
</script>

