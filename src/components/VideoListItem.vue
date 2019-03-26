<template>
  <div
    :class="{'video-list-item': true, 'active-video': active }"
    @click="$emit('onSelectVideo', video)">
    <img :src="thumbnail" alt="">
    <div class="video-list-item-content">
      <h4>{{video.snippet.title}}</h4>
    </div>

  </div>
</template>

<script>
  export default {
    name: "VideoListItem",
    props: {
      video: Object,
      active: Boolean
    },
    computed: {
      thumbnail() {
        return this.video.snippet.thumbnails.default.url
      }
    }
  }
</script>

<style scoped>
  .video-list-item {
    display: flex;
    padding: 8px;
    border-bottom: 1px solid #f5f5f5;
    transition: 0.2s background-color ease-in-out;
    cursor: pointer;
  }
  .video-list-item:hover {
    background-color: #f5f5f5;
  }
  .active-video {
    background-color: #f0f0f0;
  }
  .video-list-item-content {
    flex: 1;
    margin-left: 16px;
  }
</style>
