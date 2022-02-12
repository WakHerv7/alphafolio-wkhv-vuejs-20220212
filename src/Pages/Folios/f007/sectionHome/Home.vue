<template>
<!--===== HOME =====-->
<!-- linear-gradient(0deg, #fff 0%, rgba(255,255,255,0) 100%)  -->
<section class="home" id="home" :style="{background: `url(${userHomeBgImage.visible ? userHomeBgImage.value: ''}) center center no-repeat`, backgroundSize: '100% auto', backgroundPosition: '10% 20%'}">
    <div v-show="userHomeBgImage.visible" class="home__gradientBg"></div>
    <div class="home__data">
        <h1 class="home__title">
            Hey,
            <br/>Je suis <span class="home__title-color">{{username}}</span>,
            <br/> {{userFunction}}
            <br/> <span class="home__shortDescription">{{userShortDescription}}</span>
        </h1>
        

        <div class="buttons">
            <a v-show="button.visible" :href="button.link" class="button" :key="index" v-for="(button, index) in buttons">
                {{button.name}} &nbsp;&nbsp;<FontAwesomeIcon :icon="['fas', button.icon]"/>
            </a>
            <!-- <a href="#contact" class="button">Me Contacter &nbsp;&nbsp;<FontAwesomeIcon :icon="['fas', 'paper-plane']"/></a>
            <a href="#" class="button">Mon CV &nbsp;&nbsp;<FontAwesomeIcon :icon="['fas', 'download']"/></a> -->
        </div>        

        <div class="home__social">
            <a v-show="socialItem.visible" :href="socialItem.link" class="home__social-icon" :key="index" v-for="(socialItem, index) in socialLinks">
                <FontAwesomeIcon :icon="['fab', `${socialItem.icon}`]" size="1.5x"/>
            </a>
        </div>

    </div>                

    <div  class="home__img" :class="userHomePhoto.visible? '':'notVisible'">
        <svg class="home__blob" viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <mask id="mask0" mask-type="alpha">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
            </mask>
            <g mask="url(#mask0)">
                <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"/>
                <!-- <image class="home__blob-img" x="50" y="60" width="360px" :href="userHomePhoto"/> -->
                <image class="home__blob-img" x="0" y="10" width="500px" :href="userHomePhoto.value"/>
                
            </g>
        </svg>
    </div>
</section>
</template>

<style scoped src="./style_Home.css"></style>
<script>
// import { Link } from "@inertiajs/inertia-vue3";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { 
    faLinkedinIn, faFacebookF, faTwitter, faInstagram,
    faDribbble, faBehance, faGithub, faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
    faLinkedinIn, faFacebookF, faTwitter, faInstagram,
    faDribbble, faBehance, faGithub, faWhatsapp,
    faDownload, faPaperPlane
);
// import MenuIcon from 'vue-material-design-icons/Menu.vue';
import folioData from "../../../../Sdata/folioData";

export default {
    components: {
        // 'v-icon': Vicon,
        // MenuIcon,
        FontAwesomeIcon
    },
    data () {
        return {
            username: folioData.sectionHome.username,
            userHomePhoto: folioData.sectionHome.userHomePhoto,
            userFunction: folioData.sectionHome.userFunction,
            userShortDescription: folioData.sectionHome.userShortDescription,
            userHomeBgImage: folioData.sectionHome.userHomeBgImage,            
            socialLinks: folioData.sectionHome.socialLinks,
            buttons: folioData.sectionHome.buttons,
        }
    },
    props: {
        // onglets: Object
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen
        }
    },
};
</script>