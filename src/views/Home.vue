<template>
	<div class="container">
		<div class="section">
			<div class="section__title section__title_m-b">
				<p>
					Year in review: Our Favourite Apps from 2012
				</p>
			</div>
			<div class="section__textual section__textual_l">
	          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nesciunt unde error amet autem, obcaecati est molestias dignissimos dolore nam non saepe rem iure aspernatur, tempore quos! Laudantium, aperiam amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat nulla sunt quisquam ipsam ut ducimus minima nostrum sapiente, enim, odio optio accusantium, aperiam suscipit maiores. Vero iusto est, debitis.</p>
	          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nesciunt unde error amet autem, obcaecati est molestias dignissimos dolore nam non saepe rem iure aspernatur, tempore quos! Laudantium, aperiam amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat nulla sunt quisquam ipsam ut ducimus minima nostrum sapiente, enim, odio optio accusantium, aperiam suscipit maiores. Vero iusto est, debitis.</p>
	          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, nesciunt unde error amet autem, obcaecati est molestias dignissimos dolore nam non saepe rem iure aspernatur, tempore quos! Laudantium, aperiam amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor fugiat nulla sunt quisquam ipsam ut ducimus minima nostrum sapiente, enim, odio optio accusantium, aperiam suscipit maiores. Vero iusto est, debitis.</p>
	        </div>
		</div>
		<div class="section section_no-m-b">
			<div class="section__title section__title_m-b">
				<p>
					Meet our team
				</p>
			</div>
			<div class="section__persons">
				<Person/>
				<Person/>
				<Person/>
				<Person/>
				<Person/>
			</div>
		</div>
		<Footer/>
	</div>
</template>

<script>
// @ is an alias to /src
import Person from '@/components/Person.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
  	Person,
  	Footer
  }
}
</script>

<style scoped lang="scss">

</style>