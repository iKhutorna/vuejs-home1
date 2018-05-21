<template>
  <div class="outer">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',

   components: {
    Header,
  }

}
</script>

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

</style>
