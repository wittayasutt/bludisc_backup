<template>
  <div class="container">
    <div class="columns">
      <div class="column is-4 post-preview">
        <component is="app-preview" :disc="disc" :activeName="activeName"></component>
      </div>

      <div class="column">
        <div v-for="(image, index) in disc.images">
          <img :src="image" :alt="index">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Preview from './Preview.vue'

  export default {
    name: 'post',
    data () {
      return {
        activeName: '1'
      }
    },
    computed: {
      disc () {
        const id = _.parseInt(this.$route.params.id)
        return this.$store.getters.getPostById(id)
      }
    },
    components: {
      appPreview: Preview
    }
  }
</script>

<style lang="scss">
  @import "../../assets/style.scss";

  .post-preview {
    .media {
      .media-left {
        img {
          height: 150px;
          width: 150px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .post-preview {
      padding-bottom: 0px;
    }
  }

  @media screen and (max-width: 999px) {
    .columns {
      margin: auto;
    }
  }

  @media screen and (min-width: 1000px) {
    .post-preview {
      position: -webkit-sticky;
      position: sticky;
      top: 55px;
      height: 90vh;
      overflow-y: auto;
    }
  }
</style>
