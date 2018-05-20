<template>
  <div class="head">
  	<div class="container">
	  	<ul class="head__list">
	  		<li>Business</li>
	  		<li>Mobile</li>
	  		<li>Social Media</li>
	  		<li class="is-active">Technology</li>
	  	</ul>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'Head',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.head {
	background: #f8f8f8;
	height: 60px;
	border-bottom: 1px solid #d4d4d4;
	&__list {
		margin-right: 80px;
		line-height: 60px;
		float: right;
		li {
			display: inline-block;
			color: #6b6b6b;
			cursor: pointer;
			margin-right: 20px;
			&:last-child {
				margin-right: 0;
			}
			&.is-active {
				border-bottom: 1px solid #636363;
			}
		}
	}
}
</style>
