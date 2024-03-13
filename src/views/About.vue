<template>
  <div>
    <h1>About</h1>
    <router-link to="/about/a">去 a</router-link>
    <router-link to="/about/b">去 b</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>