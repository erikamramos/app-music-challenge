<template>
  <div class="home">
    <div class="sidenav-wrapper">
      <layout-sidenav></layout-sidenav>
    </div>
    <div class="container-wrapper">
      <layout-container
         :songs="songs"
      ></layout-container>
    </div>
    <div class="player-footer" v-if="selectedSong.title">
      <layout-player
        :name="selectedSong.title"
        :artist="selectedSong.artist.name"
        :url="selectedSong.preview"
        :image_url="selectedSong.album.cover_big"
      ></layout-player>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LayoutPlayer from '@/layouts/Player.vue';
import LayoutSidenav from '@/layouts/Sidenav.vue';
import LayoutContainer from '@/layouts/Container';

import { mapGetters } from "vuex"
//import axios from 'axios';
export default {
  name: 'Home',
  components: {
    LayoutPlayer,
    LayoutSidenav,
    LayoutContainer
  },
  data () {
    return {
        loading: false
    }
  },
  created () {
    this.currentPlaylist();
    this.currentSong();
  },
  computed: {
    ...mapGetters([
        "results",
        "songs",
        "selectedSong"
    ])
  },
  methods: {
    currentPlaylist(){
        this.$http.get('/api/search?q='+'Adele').then((response)=>{
            this.$store.dispatch("getResults", response.data.data)
        }).catch(error =>{
            console.log(error);
        });
    },
    currentSong(){
      this.$http.get('/api/track/1174603032').then((response)=>{
        this.$store.dispatch("selectSong", response.data)
      }).catch(error =>{
        console.log(error);
      });
    }
  }
}
</script>
