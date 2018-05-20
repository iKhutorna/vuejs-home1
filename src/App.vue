<!-- <template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">News</router-link>
    </div>
    <router-view/>
  </div>
</template> -->

<template>
  <div class="outer">
    <div class="header">
      <div class="header__in">
        <div class="header__name">Classic</div>
        <div class="nav">
          <img src="assets/logo.png">
          <router-link to="/">Home</router-link>
          <router-link to="/news">News</router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&amp;subset=cyrillic-ext');
@import 'styles/reset.scss'; 
@import 'styles/main.scss';

.header {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background: #000;
  &__name {
    font-weight: bold;
    color: #fff;
    font-size: 24px;
  }
  &__in {
    height: 80px;
    max-width: 975px;
    width: 945px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.nav {
  //padding: 30px;
  a {
    font-weight: bold;
    color: #cccccc;
    font-size: 16px;
    margin-right: 32px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:last-child {
      margin-right: 0;
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
