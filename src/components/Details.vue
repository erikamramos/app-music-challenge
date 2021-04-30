<template>
    <div class="card-detail" v-if="selectedSong">
        <div class="card-detail__img__container" @click="selectSong(selectedSong)">
            <img class="card-detail__img" :src="selectedSong.album.cover_big">
            <i class="fas fa-play card-detail__img__icon"></i>
        </div>
        <div class="card-detail__column">
            <div>
                <h1 class="bold-white-22">{{ selectedSong.title_short }}</h1>
                <div class="card-detail__artist">
                    <span class="regular-white-14">Lo mejor de {{ selectedSong.artist.name }}</span> <br>
                    <span class="card-detail__span txt-secondary">321, 123 seguidores</span>
                </div>
                <p class="regular-white-12">Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.</p>
            </div>
            <div class="card-detail__buttons">
                <button class="card-detail__button" @click="selectSong(selectedSong)">Reproducir</button>
                <button class="card-detail__button">Seguir</button>
            </div>
            <img class="card-detail__column__bg" :src="selectedSong.artist.picture_big" :alt="selectedSong.artist.name">
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: "Details",
    computed: {
        ...mapGetters([
            "selectedSong"
        ])
    },
    mounted () {
        
    },
    methods: {
        selectSong (song) {
            this.$store.dispatch("selectSong", song)
        }
    }
}
</script>