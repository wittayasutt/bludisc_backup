<template>
  <div id="app">
    <component is="app-header"></component>
    <component is="app-tabs"></component>
    <router-view></router-view>
    <component is="app-footer"></component>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  import Tabs from './components/Tabs/Tabs.vue'

  export default {
    name: 'app',
    components: {
      appHeader: Header,
      appFooter: Footer,
      appTabs: Tabs
    },
    created () {
      this.$store.dispatch('initDiscs')
    }
  }
</script>

<style lang="scss">
  @import "assets/style.scss";
  @import "../node_modules/bulma/bulma.sass";

  #app {
    background-color: white;
  }
</style>
