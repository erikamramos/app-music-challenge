<template>
    <div class="flex sidenav sidenav--hidden">
        <img class="sidenav__title" src="../assets/images/foxbel-music.png">
        <i class="sidenav__close fas fa-times"></i>

        <div class="sidenav__list" v-for="(item, index) in sidenav" :key="index">
            <h2 class="sidenav__list__title bold-white-22">{{item.name}}</h2>
            <ul class="sidenav__list__ul" v-for="(subitem, i) in item.subitems" :key="i">
                <li class="sidenav__list__item">{{subitem}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import sidenav from '../assets/content/sidenav-library'

export default {
    name: "Sidenav",
    data() {
        return {
            sidenav
        }
    },
    methods: {
        closeSidenav () {
            const sidenav = document.getElementsByClassName("sidenav")[0]
            sidenav.classList.add("sidenav--hidden")
        },
    }
}
</script>