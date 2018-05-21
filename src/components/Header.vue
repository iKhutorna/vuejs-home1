<template>

<div class="header">
     <div class="header__in">
        <div class="header__name">Classic</div>
        <div class="nav">
          <img src="@/assets/home.png">
          <router-link to="/">Home</router-link>
          <router-link to="/news">News</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
.nav {
  //padding: 30px;
  a {
    font-weight: bold;
    color: #cccccc;
    font-size: 16px;
    margin-left: 32px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    text-transform: uppercase;
    &.router-link-exact-active {
      color: #fff;
      cursor: default;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>

