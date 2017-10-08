<template>
  <div class="buy-preview">
    <component is="app-preview" :disc="disc" :activeName="activeName"></component>
    <el-carousel :docinterval="10000" height="225px">
      <el-carousel-item v-for="(image, index) in disc.images">
        <img :src="image" :alt="index"/>
      </el-carousel-item>
    </el-carousel>
    <hr>
    <div class="option is-pulled-right">
      <a class="button is-primary is-outlined is-small" @click="hidePreview">
        Hide Preview
      </a>
      <router-link class="button is-primary is-outlined is-small" tag="a" :to="'post/' + this.disc.id" exact>
        Read more
        <span class="icon is-small">
          <i class="fa fa-angle-double-right" />
        </span>
      </router-link>
    </div>
  </div>
</template>


<script>
  import { mapGetters, mapActions } from 'vuex'
  import Preview from '../Post/Preview.vue'

  export default {
    name: 'preview',
    data () {
      return {
        activeName: '0'
      }
    },
    methods: {
      ...mapActions({
        setIsPreview: 'setIsPreview'
      }),
      hidePreview () {
        this.setIsPreview(false)
      }
    },
    computed: {
      ...mapGetters({
        disc: 'getPreviewDisc'
      })
    },
    components: {
      appPreview: Preview
    }
  }
</script>

<style lang="scss">
  @import "../../assets/style.scss";

  .buy-preview {
    position: -webkit-sticky;
    position: sticky;
    top: 65px;
    height: 90vh;
    overflow-y: auto;

    .media {
      .media-left {
        img {
          height: 80px;
          width: 80px;
        }
      }
    }

    .el-carousel {
      margin-top: 0.75rem;
      background-color: #F5F5F5;

      img {
        max-height: 225px;
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }

    hr {
      margin: 0.5rem auto;
    }

    .option {
      .button {
        transition: 0.2s;

        span {
          margin-left: 3px !important;
        }
      }
    }
  }

  .buy-preview::-webkit-scrollbar {
    display: none;
  }
</style>
