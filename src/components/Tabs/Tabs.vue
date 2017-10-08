<template>
  <section id="tabs">
    <div class="container">
      <div class="tabs is-centered is-fullwidth overflow-hidden">
        <transition :name="tabSlide" mode="out-in">
          <router-view name="tabs"></router-view>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
  import TabStore from './TabStore.vue'
  import TabCollection from './TabCollection.vue'
  import TabPost from './TabPost.vue'

  export default {
    name: 'tabs',
    data () {
      return {
        tab: 'app-tab-store',
        tabSlide: 'slide-left'
      }
    },
    components: {
      appTabStore: TabStore,
      appTabCollection: TabCollection,
      appTabPost: TabPost
    },
    watch: {
      '$route' (to, from) {
        if (from.path !== '/sell' && to.path === '/') {
          this.tab = 'app-tab-store'
          this.tabSlide = 'slide-right'
        } else if (from.path !== '/wistlist' && to.path === '/collection') {
          this.tab = 'app-tab-collection'
          this.tabSlide = 'slide-left'
        } else {
          this.tabSlide = 'slide-left'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @media screen and (min-width: 999px) {
    #tabs {
      margin-bottom: 1.5rem;
    }
  }

  .overflow-hidden {
    overflow-x: hidden;
  }

  .slide-left-enter-active {
    animation: slide-left-in 0.2s ease-out forwards;
  }

  .slide-left-leave-active {
    animation: slide-left-out 0.2s ease-in forwards;
  }

  .slide-right-enter-active {
    animation: slide-right-in 0.2s ease-out forwards;
  }

  .slide-right-leave-active {
    animation: slide-right-out 0.2s ease-in forwards;
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(100%);
    }
  }
</style>
