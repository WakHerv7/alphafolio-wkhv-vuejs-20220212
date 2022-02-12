<template>
     <!--===== WORK =====-->
    <section class="work section" id="work">
        <h2 class="section-title">Projets</h2>

        <div class="work__container bd-grid">
            <a href="#" @click="(e)=>e.preventDefault()" class="work__card" :key="index" v-for="(project, index) in userProjects">
                <div class="work__card__boxTop">
                    <img :src="project.img" alt="">
                </div>
                <div class="work__card__boxBottom">
                    <div class="work__card__title">{{project.title}}</div>
                    <div class="work__card__content">{{project.content}}</div>
                    <div class="work__card__infos">
                        <div class="leftSide">
                            <span><span class="icon"><FontAwesomeIcon :icon="['far', `clock`]"/></span>{{project.duration}}</span><br/>
                            <span class="date"><span class="icon"><FontAwesomeIcon :icon="['far', `calendar`]"/></span>{{project.startDate}} <i/> {{project.endDate}}</span>
                        </div>
                        <div class="rightSide">
                            {{project.statut}}
                        </div>
                    </div>
                </div>
            </a>
            <!-- <a href="" class="work__img">
                <img src="./assets/img/work2.jpg" alt="">
            </a>
            <a href="" class="work__img">
                <img src="./assets/img/work3.jpg" alt="">
            </a>
            <a href="" class="work__img">
                <img src="./assets/img/work4.jpg" alt="">
            </a>
            <a href="" class="work__img">
                <img src="./assets/img/work5.jpg" alt="">
            </a>
            <a href="" class="work__img">
                <img src="./assets/img/work6.jpg" alt="">
            </a> -->
        </div>
    </section>
</template>

<style scoped src="./style_Projects.css"></style>
<script>
// import { Link } from "@inertiajs/inertia-vue3";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faCalendar } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(
    faClock, faCalendar
);
// import TimerIcon from 'vue-material-design-icons/Timer.vue';
import folioData from "../../../../Sdata/folioData";

export default {
    components: {
        FontAwesomeIcon,
    },
    data () {
        return { 
            userProjects: folioData.sectionProjects,
        }
    },
    props: {
        // onglets: Object
    },
    methods: {
    },
};
</script>