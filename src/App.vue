<template>
  <div id="nav">
    <img class="logo" src="@/assets/loading.gif" alt="" />
    <router-link to="/">Статистика</router-link>
    <router-link to="/world">Мир</router-link>
    <router-link to="/prevent">Профилактика</router-link>
    <router-link to="/news">Новости</router-link>
    <router-link to="/vaccine">Вакцинация</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #324252;
  background-color: #f3f3f3;
  width: 100vw;
  height: 100vh;
}
.logo {
  width: 30px;
  height: 30px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    text-decoration: none;
    color: #2c3e50;
    font-size: 25px;
    margin: 20px;

    &.router-link-exact-active {
      color: #0098df;
    }
  }
}
</style>
