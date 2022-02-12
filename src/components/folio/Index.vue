<template>
<div class="body0">
	    
<!-- navbar section starts  -->

<nav class="navbar" :class="menuOpen? '':'displayNone'">
    <a href="#home"> <i class="fa fa-home"></i> <span>home</span> </a>
    <a href="#about"> <i class="fa fa-user"></i> <span>about</span> </a>
    <a href="#portfolio"> <i class="fa fa-briefcase"></i> <span>portfolio</span> </a>
    <a href="#blogs"> <i class="fa fa-blog"></i> <span>blogs</span> </a>
    <a href="#contact"> <i class="fa fa-address-book"></i> <span>contact</span> </a>
</nav>

<!-- navbar section ends -->
<!-- <span class="material-icons-outlined">
menu
</span> -->
<!-- header section ends -->

<div id="menu" @click="toggleMenu()"> <i class="material-icons-outlined">{{menuOpen? 'close':'menu'}}</i> </div>

<!-- home section starts  -->

<section id="home" class="home">

    <div class="image">
        <img src="./images/user.png" alt="">
    </div>

    <div class="content">
        <h3>hi, i am sana shaikh</h3>
        <span>front-end developer</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet porro facere expedita ab atque a consectetur odit vel soluta itaque.</p>
        <a href="#" class="btn"> about me <i class="fas fa-user"></i> </a>
    </div>

</section>

<!-- home section ends -->


<!-- about section starts  -->

<section id="about" class="about">

    <h1 class="heading"> about <span>me</span> </h1>

    <div class="row">

        <div class="info-container">

            <h1>personal info</h1>

            <div class="box-container">

                <div class="box">
                    <h3> <span>name : </span> sana shaikh </h3>
                    <h3> <span>age : </span> 22 </h3>
                    <h3> <span>email : </span> sanashaikh@gmail.com </h3>
                    <h3> <span>address : </span> mumbai, india - 400104 </h3>
                </div>
    
                <div class="box">
                    <h3> <span>freelance : </span> available </h3>
                    <h3> <span>skill : </span> front-end </h3>
                    <h3> <span>experience : </span> 2 years </h3>
                    <h3> <span>language : </span> hindi, english </h3>
                </div>

            </div>

            <a href="#" class="btn"> download CV <i class="fas fa-download"></i> </a>

        </div>

        <div class="count-container">

            <div class="box">
                <h3>2+</h3>
                <p>years of experience</p>
            </div>

            <div class="box">
                <h3>450+</h3>
                <p>happy clients</p>
            </div>

            <div class="box">
                <h3>390+</h3>
                <p>project completed</p>
            </div>

            <div class="box">
                <h3>10+</h3>
                <p>awards won</p>
            </div>

        </div>

    </div>

</section>

<!-- about section ends -->

<!-- skills section starts  -->

<section id="skills" class="skills">

    <h1 class="heading"> <span>my</span> skills </h1>

    <div class="box-container">
        <div class="box">
            <img src="./images/icon-1.png">
            <h3>html</h3>
        </div>
        <div class="box">
            <img src="./images/icon-2.png">
            <h3>css</h3>
        </div>
        <div class="box">
            <img src="./images/icon-3.png">
            <h3>javascript</h3>
        </div>
        <div class="box">
            <img src="./images/icon-4.png">
            <h3>sass</h3>
        </div>
        <div class="box">
            <img src="./images/icon-5.png">
            <h3>jquery</h3>
        </div>
        <div class="box">
            <img src="./images/icon-6.png">
            <h3>react.js</h3>
        </div>
    </div>

</section>

<!-- skills section ends -->

<!-- education section starts  -->

<section id="education" class="education">

    <h1 class="heading"> <span>my</span> education </h1>

    <div class="box-container">
        <div class="box-container-left">
            <div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2015 - 2016</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
            </div>

            <div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2016 - 2017</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
            </div>

            <div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2017 - 2018</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
            </div>
        </div>

        <div class="box-container-right">
            
            <div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2018 - 2019</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
            </div>

            <div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2019 - 2020</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
            </div>

            <div class="box">
                <i class="fas fa-graduation-cap"></i>
                <span>2020 - 2021</span>
                <h3>front-end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo magni est quo vitae quis veritatis fugiat optio placeat enim!</p>
            </div>
        </div>

        


    </div>

</section>

<!-- education section ends -->

<!-- portfolio section starts  -->

<section id="portfolio" class="portfolio">

    <h1 class="heading"> <span>my</span> work </h1>

    <div class="box-container">

        <div class="box">
            <img src="./images/img-1.jpg" alt="">
            <div class="content">
                <h3>project 01</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <a href="#">read more</a>
            </div>
        </div>

        <div class="box">
            <img src="./images/img-2.jpg" alt="">
            <div class="content">
                <h3>project 02</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <a href="#">read more</a>
            </div>
        </div>
       
        <div class="box">
            <img src="./images/img-3.jpg" alt="">
            <div class="content">
                <h3>project 03</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <a href="#">read more</a>
            </div>
        </div>

        <div class="box">
            <img src="./images/img-4.jpg" alt="">
            <div class="content">
                <h3>project 04</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <a href="#">read more</a>
            </div>
        </div>

        <div class="box">
            <img src="./images/img-5.jpg" alt="">
            <div class="content">
                <h3>project 05</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <a href="#">read more</a>
            </div>
        </div>

        <div class="box">
            <img src="./images/img-6.jpg" alt="">
            <div class="content">
                <h3>project 06</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, praesentium.</p>
                <a href="#">read more</a>
            </div>
        </div>

    </div>

    <a href="#" class="btn"> load more <i class="fas fa-redo"></i> </a>
    
</section>

<!-- portfolio section ends -->

<!-- blogs section starts  -->

<section id="blogs" class="blogs">

    <h1 class="heading"> <span>my</span> blogs </h1>

    <div class="box-container">

        <div class="box">
            <div class="image">
                <img src="./images/blog1.jpg" alt="">
            </div>
            <div class="content">
                <div class="icons">
                    <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                    <a href="#"> <i class="fas fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                <a href="#" class="btn"> read more <i class="fas fa-link"></i> </a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="./images/blog2.jpg" alt="">
            </div>
            <div class="content">
                <div class="icons">
                    <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                    <a href="#"> <i class="fas fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                <a href="#" class="btn"> read more <i class="fas fa-link"></i> </a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="./images/blog3.jpg" alt="">
            </div>
            <div class="content">
                <div class="icons">
                    <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                    <a href="#"> <i class="fas fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                <a href="#" class="btn"> read more <i class="fas fa-link"></i> </a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="./images/blog4.jpg" alt="">
            </div>
            <div class="content">
                <div class="icons">
                    <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                    <a href="#"> <i class="fas fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                <a href="#" class="btn"> read more <i class="fas fa-link"></i> </a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="./images/blog5.jpg" alt="">
            </div>
            <div class="content">
                <div class="icons">
                    <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                    <a href="#"> <i class="fas fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                <a href="#" class="btn"> read more <i class="fas fa-link"></i> </a>
            </div>
        </div>

        <div class="box">
            <div class="image">
                <img src="./images/blog6.jpg" alt="">
            </div>
            <div class="content">
                <div class="icons">
                    <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                    <a href="#"> <i class="fas fa-user"></i> by admin </a>
                </div>
                <h3>blog title goes here.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
                <a href="#" class="btn"> read more <i class="fas fa-link"></i> </a>
            </div>
        </div>

    </div>

</section>

<!-- blogs section ends -->

<!-- contact section starts  -->

<section id="contact" class="contact">

	<h1 class="heading"> contact <span>me</span> </h1>

	<div class="row">

		<div class="info-container">

			<h1>get in touch</h1>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem sunt sapiente vel minus eaque voluptate fugit corrupti omnis tempora?</p>

			<div class="box-container">

				<div class="box">
					<i class="fas fa-map"></i>
					<div class="info">
						<h3>address :</h3>
						<p>mumbai, india - 400104</p>
					</div>
				</div>

				<div class="box">
					<i class="fas fa-envelope"></i>
					<div class="info">
						<h3>email :</h3>
						<p>sanashaikh@gmail.com</p>
					</div>
				</div>

				<div class="box">
					<i class="fas fa-phone"></i>
					<div class="info">
						<h3>number :</h3>
						<p>+123-456-7890</p>
					</div>
				</div>

			</div>

			<div class="share">
				<a href="#" class="fab fa-facebook-f"></a>
				<a href="#" class="fab fa-twitter"></a>
				<a href="#" class="fab fa-instagram"></a>
				<a href="#" class="fab fa-linkedin"></a>
			</div>

		</div>

		<form action="">

			<div class="inputBox">
				<input type="text" placeholder="your name">
				<input type="number" placeholder="your number">
			</div>

			<div class="inputBox">
				<input type="email" placeholder="your email">
				<input type="text" placeholder="your subject">
			</div>

			<textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>

			<input type="submit" value="send message" class="btn">

		</form>

	</div>

</section>

<!-- contact section ends -->

</div>
</template>

<style scoped src="./css/style.css"></style>


<script>
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