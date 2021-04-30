<template>
  <div class="player">
    <img class="player__image" :src="selectedSong.album.cover_big" :alt="selectedSong.artist.name" />
    <div class="player__details">
      <p class="player__name">{{ selectedSong.title_short }}</p>
      <div class="player__artist">
        <span class="player__artist__name">{{ selectedSong.artist.name }}</span>
      </div>
    </div>
    <div class="player__set">
        <div class="player__arrow">
            <i class="fas fa-step-backward"></i>
        </div>
        <div class="player__play" @click="handlePodcast">
            <i v-if="isPaused" class="fas fa-play"></i>
            <i v-else class="fas fa-pause"></i>
        </div>
        <div class="player__arrow">
            <i class="fas fa-step-forward"></i>
        </div>
    </div>
    
    <div class="player__volume">
      <input
        class="player__volumeRange"
        type="range"
        min="0"
        max="100"
        v-model="volume"
        v-on:input="setVolume"
      />
      <div class="player__volumeIcon" @click="toggleVolume">
        <i v-if="volume > 0" class="fas fa-volume-up"></i>
        <i v-else class="fas fa-volume-mute"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.audio.src = this.selectedSong.preview
  },
  data() {
    return {
      audio: new Audio(),
      isPaused: true,
      volume: 50
    }
  },
  computed: {
    selectedSong () {
      return this.$store.getters.selectedSong
    }
  },
  watch: {
    selectedSong: {
      handler () {
        this.audio.src = this.selectedSong.preview
        this.audio.pause()
        this.isPaused = true
      }
    }
  },
  methods: {
    handlePodcast() {
      if (this.audio.paused) {
        this.audio.play();
      } else {
        this.audio.pause();
      }
      this.isPaused = !this.isPaused;
    },
    toggleVolume() {
      if (this.audio.muted) {
        this.volume = 100;
      } else {
        this.volume = 0;
      }
      this.audio.muted = !this.audio.muted;
      this.setVolume();
    },
    setVolume() {
      this.audio.volume = this.volume / 100;
    },
  },
};
</script>
