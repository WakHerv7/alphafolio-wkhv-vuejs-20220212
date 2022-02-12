<template>
<!--===== HEADER =====-->
<header class="l-header">
    <nav class="nav bd-grid">
        <div>
            <a href="#" class="nav__logo">{{username}}</a>
        </div>

        <div class="nav__menu" id="nav-menu" :class="menuOpen? 'show':''">
            <ul class="nav__list">                
                <li :key="index" v-for="(onglet, index) in onglets" class="nav__item" v-show="onglet.visible">
                    <a @click="activateNav(onglet.name)" :href="onglet.link" class="nav__link" :class="activeNav == onglet.name ? 'active':''">{{onglet.value}}</a>
                </li>


                <!-- <li v-if="onglets.home.visible" class="nav__item"><a href="#home" class="nav__link active">{{onglets.home.value}}</a></li>
                <li v-if="onglets.about.visible" class="nav__item"><a href="#about" class="nav__link">{{onglets.about.value}}</a></li>
                <li v-if="onglets.skills.visible" class="nav__item"><a href="#skills" class="nav__link">{{onglets.skills.value}}</a></li>
                <li v-if="onglets.work.visible" class="nav__item"><a href="#work" class="nav__link">{{onglets.work.value}}</a></li>
                <li v-if="onglets.contact.visible" class="nav__item"><a href="#contact" class="nav__link">{{onglets.contact.value}}</a></li> -->
            </ul>
        </div>
        
        <div class="nav__toggle" @click="toggleMenu()" id="nav-toggle">
            <v-icon name="bars" scale="2"/>
            <!-- <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span> -->
        </div>
    </nav>
</header>
</template>

<style scoped src="./style_Navbar.css"></style>
<script>
// import { Link } from "@inertiajs/inertia-vue3";
import 'vue-awesome/icons';
import Vicon from 'vue-awesome/components/Icon';

import folioData from "../../../../Sdata/folioData";

export default {
    components: {
        'v-icon': Vicon,
    },
    data () {
        return {
            activeNav: 'home',
            menuOpen: false,
            onglets: folioData.onglets,
            username: folioData.sectionHome.username
        }
    },
    props: {
        // onglets: Object
    },
    methods: {
        activateNav(name) {
            this.activeNav = name
        },
        toggleMenu() {
            this.menuOpen = !this.menuOpen
        }
    },
};
</script>