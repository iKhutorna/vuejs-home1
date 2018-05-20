<template>
  <div class="person">
    <div class="person__photo">
      <img src="../assets/person.jpg">
    </div>
    <div class="person__name">Kimberly</div>
    <div class="person__position">Founder</div>
    <div class="person__desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quasi ullam nam odit placeat rem, quod vel provident, soluta iusto beatae quisquam tempore quo! Architecto similique enim excepturi, nesciunt rerum.</div>
  </div>
</template>

<script>
export default {
  name: 'Person',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .person {
    display: inline-block;
    vertical-align: top;
    margin: 0 20px 30px;
    text-align: center;
    width: 24%;
    &__photo {
      display: inline-block;
      width: 230px;
      height: 230px;
      border-radius: 50%;
      overflow: hidden;
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }
      margin-bottom: 10px;
    }
    &__name {
      font-size: 14px;
      margin-bottom: 5px;
    }
    &__position {
      font-size: 12px;
      margin-bottom: 14px;
    }
    &__desc {
      font-size: 12px;
    }
  }
</style>
