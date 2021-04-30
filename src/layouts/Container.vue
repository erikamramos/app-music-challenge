<template>
    <div class="song-app">
        <app-header></app-header>
        <app-detail></app-detail>

        <div class="song-app__results">
            <h1 class="bold-white-22 txt-primary">Resultados</h1>
            <div class="song-app__results__songs">
                <div v-for="song in songs" :key="song.id">
                    <app-song-card
                        :song="song"
                    ></app-song-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppDetail from '@/components/Details.vue';
import AppSongCard from '@/components/SongCard.vue';

export default {
    name: "Container",
    components: {
        AppHeader,
        AppDetail,
        AppSongCard
    },
    props: [
        "songs"
    ]
   
}
</script>
