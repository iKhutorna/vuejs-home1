
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
          <img src="../assets/image-2.png">
        </div>
        <div class="section__textual section__textual_l">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nesciunt unde error amet autem, obcaecati est molestias dignissimos dolore nam non saepe rem iure aspernatur, tempore quos! Laudantium, aperiam amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat nulla sunt quisquam ipsam ut ducimus minima nostrum sapiente, enim, odio optio accusantium, aperiam suscipit maiores. Vero iusto est, debitis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nesciunt unde error amet autem, obcaecati est molestias dignissimos dolore nam non saepe rem iure aspernatur, tempore quos! Laudantium, aperiam amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat nulla sunt quisquam ipsam ut ducimus minima nostrum sapiente, enim, odio optio accusantium, aperiam suscipit maiores. Vero iusto est, debitis.</p>
        </div>
        <div class="section__photo">
          <img src="../assets/image-1.png">
        </div>
        <div class="section__subtitle">
          <p>Features</p>
        </div>
        <div class="section__textual section__textual_l">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nesciunt unde error amet autem, obcaecati est molestias dignissimos dolore nam non saepe rem iure aspernatur, tempore quos! Laudantium, aperiam amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat nulla sunt quisquam ipsam ut ducimus minima nostrum sapiente, enim, odio optio accusantium, aperiam suscipit maiores. Vero iusto est, debitis.</p>
        </div>
        <div class="section__photo">
          <img src="../assets/image-3.png">
        </div>
        <div class="section__textual section__textual_l">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nesciunt unde error amet autem, obcaecati est molestias dignissimos dolore nam non saepe rem iure aspernatur, tempore quos! Laudantium, aperiam amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat nulla sunt quisquam ipsam ut ducimus minima nostrum sapiente, enim, odio optio accusantium, aperiam suscipit maiores. Vero iusto est, debitis.</p>
        </div>
        <div class="section__subtitle">
          <p>Leave a comment</p>
        </div>
        <div class="section__leave-comment">
          <div class="field">
            <div class="field__label">Name*</div>
            <input class="field__input" type="text">
          </div>
          <div class="field">
            <div class="field__label">Email*</div>
            <input class="field__input" type="text">
          </div>
          <div class="field">
            <div class="field__label">Your comment*</div>
            <textarea class="field__message" name="" id="" cols="70" rows="10">
              
            </textarea>
          </div>
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
	&__head {
		margin-bottom: 95px;
	}
}
</style>

