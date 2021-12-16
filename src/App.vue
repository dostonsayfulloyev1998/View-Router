<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

    <ul class="nav navbar-nav navbar-expand ">
      <li class="nav-item"><a class="nav-link" href="">Home</a> </li>
      <li class="nav-item"><a class="nav-link" href="">About</a> </li>
      <li class="nav-item"><a class="nav-link" href="">News</a> </li>
      <li class="nav-item"><a class="nav-link" href="">Contact</a> </li>
    </ul>

       <router-view> </router-view>

  <footer>
      footer
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
