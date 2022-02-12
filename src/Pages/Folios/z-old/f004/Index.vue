<template>
<div class="body0">
	<!----hero Section start---->

	<div class="hero" id="hero">
		<div class="site-header">
			<div  class="navbar-toggle collapsed" @click="toggleMenu()" data-target="#portfolio-perfect-collapse" aria-expanded="false" >
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</div>
			<nav >
				<h2 class="logo">Portfo<span>lio</span></h2>
				<ul class="navbar" :class="menuOpen? '':'displayNone'">
					<li><a href="#hero">Home</a></li>
					<li><a href="#about">About Us</a></li>
					<li><a href="#service">Services</a></li>
					<!-- <li><a href="#">Skills</a></li> -->
					<li><a href="#contact-me">Contact Us</a></li>
				</ul>
				<!-- <a href="#" class="btn">Subscribe</a> -->
			</nav>
		</div>

		<div class="content">
			<h4>Hello, my name is</h4>
			<h1>Tahmid <span>Ahmed</span></h1>
			<h3>I'am a Web Developer.</h3>
			<button class="btn">Let's Start</button>
			<!-- <div class="newslatter">
				<form>
					<input type="email" name="email" id="mail" placeholder="Enter Your Email">
					<input type="submit" name="submit" value="Lets Start">
				</form>
			</div> -->
		</div>
	</div>

	<!----About section start---->
	<section class="about" id="about">
		<div class="main">
			<img src="./img/main-img.png">
			<div class="about-text">
				<h2>About Me</h2>
				<h5>Developer <span>& Designer</span></h5>
				<p>I am a front-end web developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations.A responsive design makes your website accessible to all users, regardless of their device.</p>
				<button type="button">Let's Talk</button>
			</div>
		</div>
	</section>

	<!--service section start-->
	<div class="service" id="service">
		<div class="title">
			<h2>Our Services</h2>
		</div>

		<div class="box">
			<div class="card">
				<i class="fas fa-bars"></i>
				<h5>Web Development</h5>
				<div class="pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					<p style="text-align: center;">
						<a class="button" href="#">Read More</a>
					</p>
				</div>
			</div>

			<div class="card">
				<i class="far fa-user"></i>
				<h5>Web Development</h5>
				<div class="pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					<p style="text-align: center;">
						<a class="button" href="#">Read More</a>
					</p>
				</div>
			</div>

			<div class="card">
				<i class="far fa-bell"></i>
				<h5>Web Development</h5>
				<div class="pra">
					<p>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>

					<p style="text-align: center;">
						<a class="button" href="#">Read More</a>
					</p>
				</div>
			</div>
		</div>
	</div>

	<!--Contact Me-->
	<div class="contact-me" id="contact-me">
		<p>Let Me Get You A Beautiful Website.</p>
		<a class="button-two" href="#">Hire Me</a>
	</div>

	<!--footer start-->
	<footer id="footer">
		<p>Tahmid Ahmed</p>
		<p>For more HTML, CSS, and coding tutorial - please click on the link below to subscribe to my channel:</p>
		<div class="social">
			<a href="#"><i class="fab fa-facebook-f"></i></a>
			<a href="#"><i class="fab fa-instagram"></i></a>
			<a href="#"><i class="fab fa-dribbble"></i></a>
		</div>
		<p class="end">CopyRight By Tahmid Ahmed</p>
	</footer>
</div>
</template>
<style scoped src="./css/style.css"></style>
<style scoped src="./css/responsive.css"></style>
<!-- <style scoped src="./css/style.css"></style> -->

<script>
// import './assets/css/bootstrap.min.css';
// import './assets/css/style.css';
// import './assets/css/responsive.css';


// import { Link } from "@inertiajs/inertia-vue3";
export default {
    components: {
        // Link,        
	},
	data () {
        return {
            menuOpen: false
        }
    },
    props: ["about_us"],
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen
        }
    },
    mounted () {
        
    }
};
</script>