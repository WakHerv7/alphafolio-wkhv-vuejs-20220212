<template>
<!--===== SKILLS =====-->
<section class="skills section" id="skills">
    <h2 class="section-title">Compétences</h2>

    <div class="skills__container">          
        <div>
            <h2 class="skills__subtitle">Aptitudes professionnelles</h2>
            <p class="skills__text">Ce que je suis capable de faire.</p>
            
            <div class="skills__data" :key="index" v-for="(skill, index) in userProSkills">
                <div class="skills__names">
                    <i class='bx bxl-html5 skills__icon'></i>
                    <span class="skills__name">{{skill.name}}</span>
                </div>
                <div class="skills__bar" :style="{width: `${skill.value}%`}">

                </div>
                <div>
                    <span class="skills__percentage">{{skill.value}}%</span>
                </div>
            </div>

        </div>

        <div>
            <h2 class="skills__subtitle">Acquis logiciels</h2>
            <p class="skills__text">Les logiciels que je suis capable d'utiliser.</p>
            
            <div class="skills__data" :key="index" v-for="(softwareSkill, index) in userSoftwareSkills">
                <div class="skills__names">
                    <i class='bx bxl-html5 skills__icon'></i>
                    <span class="skills__name">{{softwareSkill.name}}</span>
                </div>
                <div class="skills__bar" :style="{width: `${softwareSkill.value}%`}">

                </div>
                <div>
                    <span class="skills__percentage">{{softwareSkill.value}}%</span>
                </div>
            </div>            

        </div>
        
        <!--         
        <div>              
            <img src="./assets/img/work3.jpg" alt="" class="skills__img">
        </div> -->
    </div>
</section>
</template>

<style scoped src="./style_Skills.css"></style>
<script>
// import { Link } from "@inertiajs/inertia-vue3";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faDownload, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
// import { 
//     faLinkedinIn, faFacebookF, faTwitter, faInstagram,
//     faDribbble, faBehance, faGithub, faWhatsapp,
// } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(
//     faLinkedinIn, faFacebookF, faTwitter, faInstagram,
//     faDribbble, faBehance, faGithub, faWhatsapp,
//     faDownload, faPaperPlane
// );
// import MenuIcon from 'vue-material-design-icons/Menu.vue';
import folioData from "../../../../Sdata/folioData";

export default {
    components: {
        // 'v-icon': Vicon,
        // MenuIcon,
        // FontAwesomeIcon
    },
    data () {
        return {           

            userProSkills: folioData.sectionSkills.skills,
            userSoftwareSkills: folioData.sectionSkills.softwares,
        }
    },
    props: {
        // onglets: Object
    },
    methods: {
    },
};
</script>