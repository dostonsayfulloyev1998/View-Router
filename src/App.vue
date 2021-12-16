<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">



    <p>

      <router-link to="/home" class="px-3">Home</router-link>
      <router-link to="/about" class="px-3">About</router-link>
      <router-link to="/news" class="px-3">News</router-link>
      <router-link to="/contact" class="px-3">Contact</router-link>

    </p>

   <router-view>   </router-view>

    <footer>
    </footer>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

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
  margin-top: 60px;
}
</style>
