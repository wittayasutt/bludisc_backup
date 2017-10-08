<template>
  <div class="container">
    <div class="columns">
      <div v-show="isPreview" class="column is-3 is-hidden-touch">
        <transition name="fade" mode="out-in">
          <component is="app-preview"></component>
        </transition>
      </div>
      <div class="column">
        <component class="is-hidden-mobile" is="app-status-bar"></component>
        <component class="is-hidden-mobile" :is="view"></component>
        <component class="is-hidden-tablet" is="app-list"></component>
        <div class="columns">
          <div class="column is-2-desktop is-offset-5-desktop">
            <a class="button is-medium is-fullwidth btn-more">More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Preview from './Preview.vue'
  import StatusBar from './Status_Bar.vue'
  import Search from './Search.vue'
  import Grid from './Grid.vue'
  import List from './List.vue'

  export default {
    name: 'buy',
    computed: {
      ...mapGetters({
        isPreview: 'getIsPreview',
        view: 'getBuyView'
      })
    },
    components: {
      appPreview: Preview,
      appStatusBar: StatusBar,
      appSearch: Search,
      appGrid: Grid,
      appList: List
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style.scss";

  .columns {
    .column {
      .btn-more {
        margin: 0.75rem auto;
      }
    }
  }

  @media screen and (max-width: 999px) {
    .columns {
      margin: auto;
    }
  }

  .fade-enter-active {
      animation: fade-in  0.5s ease-out forwards;
  }

  .fade-leave-active {
      animation: fade-out 0.5s ease-out forwards;
  }

  @keyframes fade-out {
      from {
          opacity: 1;
      }
      to {
          opacity: 0;
      }
  }

  @keyframes fade-in {
      from {
          opacity: 0;
      }
      to {
          opacity: 1;
      }
  }
</style>
