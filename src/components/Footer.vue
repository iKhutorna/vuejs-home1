<template>
  <div class="footer">
  	<ul class="footer__menu">
  		<li>Home</li>
  		<li>About</li>
  		<li>Archive</li>
  		<li>Contact</li>
  	</ul>
  	<div class="footer__socials">
  		<div class="socials">
  			<a href="#" class="socials__item">
  				<img class="socials__fb" src="../assets/facebook.svg" alt="">
  			</a>
  			<a href="#" class="socials__item">
  				<img class="socials__in" src="../assets/linkedin.svg" alt="">
  			</a>
  			<a href="#" class="socials__item">
  				<img class="socials__tw" src="../assets/twitter.svg" alt="">
  			</a>
  		</div>
  	</div>
  	<div class="footer__copyright">© Copyright 2013 DesignerFirst.com</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
	padding: 15px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	&__menu {
		li {
			font-size: 14px;
			color: #555555;
			display: inline-block;
			margin-right: 10px;
			cursor: pointer;
			&:last-child {
				margin-right: 0;
			}
		}
	}
	&__copyright {
		font-size: 14px;
		color: #555555;
	}
}
</style>
