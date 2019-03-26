<template>
   <div>
     <h3>Video List</h3>
     <ul class="videos-list">
       <li v-for="video in videos" :key="video.etag">
         <VideoListItem
           :active="selectedVideo.etag === video.etag"
           :video="video"
           @onSelectVideo="handleSelectVideo"
         />
       </li>
     </ul>
   </div>
</template>

<script>
  import VideoListItem from './VideoListItem'

  export default {
    name: "VideoList",
    components: {
      VideoListItem,
    },
    props: {
      videos: Array,
      selectedVideo: Object
    },
    methods: {
      handleSelectVideo(video) {
        this.$emit('onSelectVideo', video)
      }
    }
  }
</script>

<style scoped>
  .videos-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>

