<template>
  <div class="selected-video">
    <h3>{{video.snippet.title}}</h3>
    <p>{{video.snippet.description}}</p>
    <iframe :src="videoUrl" frameborder="0"></iframe>
  </div>
</template>

<script>
  export default {
    name: "VideoDetail",
    props: {
      video: Object,
    },
    computed: {
      videoUrl() {
        return `https://www.youtube.com/embed/${this.video.id.videoId}`;
      }
    }
  }
</script>

<style scoped>
  .selected-video {
    padding: 0 16px;
  }
</style>
