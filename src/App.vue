<template>
  <div id="app">
    <SearchBar
      @termChange="termChange"
    />
    <div class="videos-container">
      <p>Videos found: <b>{{videos.length}}</b></p>
      <div class="flex">
        <div class="flex-70">
          <VideoDetail v-if="selectedVideo.snippet" :video="selectedVideo"  />
        </div>
        <div class="flex-30">
          <VideoList
            :selectedVideo="selectedVideo"
            :videos="videos"
            @onSelectVideo="onSelectVideo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import HelloWorld from './components/HelloWorld.vue'
import SearchBar from './components/SearchBar.vue'
import VideoList from './components/VideoList.vue'
import VideoDetail from './components/VideoDetail.vue'
import { onSearchChange } from './services/youtube'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    SearchBar,
    VideoList,
    VideoDetail
  },
  data() {
    return {
      videos: [],
      selectedVideo: {}
    }
  },
  methods: {
    onSelectVideo(video) {
      this.selectedVideo = video;
    },
    async termChange(val) {
      try {
        const res = await onSearchChange(val);
        const { items } = res.data;
        this.videos = items;
      } catch (e) {}
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin: 60px;
}
  .videos-container {
    margin: 16px 0;
    padding: 16px;
    border-radius: 2px;
    border: 1px solid #f5f5f5;
  }
  .flex {
    display: flex;
  }
  .flex-70 {
    flex-basis: 70%;
  }
.flex-30 {
  flex-basis: 30%;
}
</style>
