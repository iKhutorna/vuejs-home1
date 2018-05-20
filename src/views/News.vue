
<template>
  <div class="news">
  	<div class="news__head">
  		<Head/>
  	</div>
  	<div class="container">
  		<div class="section">
  			<div class="section__title">
  				<p>
  					Year in review: Our Favourite Apps from 2012
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
	        <div class="section__btn-more">
	        	<router-link to="/new1">
			        <div class="btn-more">
			        	<div class="btn-more__icon">
			        		<img src="../assets/right-arrow.svg" alt="">
			        	</div>
			        	<div class="btn-more__text">Read more</div>
			        </div>
		        </router-link>
	        </div>
  		</div>
  		<div class="section">
  			<div class="section__title">
  				<p>
  					Year in review: Our Favourite Apps from 2012
  				</p>
  			</div>
  			<div class="section__textual">
          		<p>Posted on March 3, 2013</p>
  			</div>
	        <div class="section__photo">
	          <img src="../assets/image-2.png">
	        </div>
	        <div class="section__textual section__textual_l">
	          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nesciunt unde error amet autem, obcaecati est molestias dignissimos dolore nam non saepe rem iure aspernatur, tempore quos! Laudantium, aperiam amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat nulla sunt quisquam ipsam ut ducimus minima nostrum sapiente, enim, odio optio accusantium, aperiam suscipit maiores. Vero iusto est, debitis.</p>
	        </div>
  		</div>
  		<div class="section section_no-m-b">
  			<div class="section__title">
  				<p>
  					Year in review: Our Favourite Apps from 2012
  				</p>
  			</div>
  			<div class="section__textual">
          		<p>Posted on March 3, 2013</p>
  			</div>
	        <div class="section__photo">
	          <img src="../assets/image-3.png">
	        </div>
	        <div class="section__textual section__textual_l">
	          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nesciunt unde error amet autem, obcaecati est molestias dignissimos dolore nam non saepe rem iure aspernatur, tempore quos! Laudantium, aperiam amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat nulla sunt quisquam ipsam ut ducimus minima nostrum sapiente, enim, odio optio accusantium, aperiam suscipit maiores. Vero iusto est, debitis.</p>
	        </div>
  		</div>
  		<Footer/>
  	</div>

  </div>
</template>

<script>
// @ is an alias to /src
import Head from '@/components/Head.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'home',
  components: {
  	Head,
  	Footer
  }
}
</script>


<style scoped lang="scss">
.news {
	// &__head {
	// 	margin-bottom: 95px;
	// }
}
</style>

