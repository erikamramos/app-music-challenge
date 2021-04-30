<template>
    <div v-if="song.type == 'track'" class="cards" @click="selectSong(song)">
        <figure class="cards__figure">
            <img class="cards__figure__img" :src="song.album.cover_big" :alt="song.title">
            <i class="fas fa-play cards__figure__icon"></i>
        </figure>
        <h2 class="bold-qs-14">{{ song.title_short }}</h2>
        <h3 class="regular-white-12">{{ song.artist.name }}</h3>
    </div>
</template>

<script>

export default {
    name: "SongCard",
    props: {
        song: {
            type: Object,
            required: true
        }
    },
    methods: {
        selectSong (song) {
            this.$store.dispatch("selectSong", song)
        }
    }
}
</script>
