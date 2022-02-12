<template>
<!--===== ABOUT =====-->
<section class="about section " id="about">
    <h1 class="section-title">A propos de moi</h1>

    <div class="about__container">
        <div class="about__topBox">
            <div v-show="userAboutPhoto.visible" class="about__img__container">
                <div class="about__img" :style="{background: `url(${ userAboutPhoto.value}) center center no-repeat`, backgroundSize: '150% auto', backgroundPosition: '20% 20%'}"></div>
                <!-- <img :src="userAboutPhoto.value" alt=""> -->
            </div>        
            <div class="about__text__container">
                <div class="about__username">{{username}} Manuella MANGA</div>
                <div class="about__userFunction">{{userFunction}}</div>
                <p class="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.<br/>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
            </div>
        </div>
        <div class="about__bottomBox">
            <ul class="about__userCaracteristics">
                <!-- <li v-show="true" class="about__user__item" :key="index" v-for="(property, index) in userCaracteristics">
                    <span>{{index}}: <strong>{{property}}</strong></span>
                </li> -->
                <li v-show="carac.visible" class="about__user__item" :key="index" v-for="(carac, index) in userCaracteristics">
                    <span>{{carac.name}}: <strong>{{carac.value}}</strong></span>
                </li>                
            </ul>
            <div class="about__certif_language">
                <div v-show="userCertifs.visible" class="about__certif">
                    <div class="about__certif_language_title">Certification(s)</div>
                    <ul class="about__certif_list">
                        <li class="about__certif_language__item" :key="index" v-for="(certif, index) in userCertifs.value">
                            <span>{{certif}}</span>
                        </li> 
                    </ul>
                </div>
                <div v-show="userLanguages.visible" class="about__language">
                    <div class="about__certif_language_title">Langue(s)</div>
                    <div class="about__language_list">
                        <ul class="about__language_list_name">
                            <li class="about__certif_language__item" :key="index" v-for="(lang, index) in userLanguages.value">
                                <div>{{lang.name}}</div>
                            </li> 
                        </ul>
                        <ul class="about__language_list_value">
                            <li class="about__certif_language__item" :key="index" v-for="(lang, index) in userLanguages.value">
                                <div>
                                    <span v-for="index in 4" :key="index">
                                        <i v-if="index <= lang.value"></i>
                                    </span>
                                </div>                            
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped src="./style_About.css"></style>
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

            userAboutPhoto: folioData.sectionAbout.userAboutPhoto,
            userCaracteristics: folioData.sectionAbout.caracteristics,
            userCertifs: folioData.sectionAbout.certifications,
            userLanguages: folioData.sectionAbout.languages,
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