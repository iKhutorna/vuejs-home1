
<template>
  <div class="news">
  	<div class="news__head">
  		<Head/>
  	</div>
  	<div class="container">
  		<div class="section">
  			<div class="section__title">
  				<p>
  					NEW1
  				</p>
  			</div>
  			<div class="section__textual">
          		<p>Posted on March 3, 2013</p>
  			</div>
	        <div class="section__photo">
	          <img src="../assets/image-1.png">
	        </div>
	        <div class="section__textual section__textual_l">
	          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nesciunt unde error amet autem, obcaecati est molestias dignissimos dolore nam non saepe rem iure aspernatur, tempore quos! Laudantium, aperiam amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat nulla sunt quisquam ipsam ut ducimus minima nostrum sapiente, enim, odio optio accusantium, aperiam suscipit maiores. Vero iusto est, debitis.</p>
	        </div>
  		</div>
  	</div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Head from '@/components/Head.vue'

export default {
  name: 'home',
  components: {
  	Head,
    
  }
}
</script>


<style scoped lang="scss">
.news {
	&__head {
		margin-bottom: 95px;
	}
}
</style>

