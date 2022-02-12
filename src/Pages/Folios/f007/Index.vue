<template>
<div class="body0">
    <Navbar/>
    <main class="l-main">
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
           

            

           

            <!--===== CONTACT =====-->
            <section class="contact section" id="contact">
                <h2 class="section-title">Contact</h2>

                <div class="contact__container bd-grid">
                    <form action="" class="contact__form">
                        <input type="text" placeholder="Name" class="contact__input">
                        <input type="mail" placeholder="Email" class="contact__input">
                        <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>
                        <input type="button" value="Enviar" class="contact__button button">
                    </form>
                </div>
            </section>
        </main>

        <!--===== FOOTER =====-->
        <footer class="footer">
            <p class="footer__title">Marlon</p>
            <div class="footer__social">
                <a href="#" class="footer__icon"><i class='bx bxl-facebook' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
                <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
            </div>
            <p class="footer__copy">&#169; Bedimcode. All rigths reserved</p>
        </footer>
</div>
</template>
<style scoped src="./assets/css/style.css"></style>
<style scoped src="./assets/assets/css/fontawesome.css"></style>
<style src="./assets/css/variables.css"></style> 

<script>
// import { Link } from "@inertiajs/inertia-vue3";
import 'vue-awesome/icons';
import Vicon from 'vue-awesome/components/Icon';

import Navbar from "./navbar/Navbar";
import Home from "./sectionHome/Home";
import About from "./sectionAbout/About";
import Skills from "./sectionSkills/Skills";
import Projects from "./sectionProjects/Projects";

export default {
    components: {
        'v-icon': Vicon,
        Navbar,
        Home,
        About,
        Skills,
        Projects,  
    },
    
	data () {
        return {
            menuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen
        }
    },
    mounted () {
        
    }
};
</script>