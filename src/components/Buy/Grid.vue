<template>
  <div class="columns is-multiline">
    <component is="app-gridbox" v-for="disc in discs" :disc="disc"></component>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Gridbox from './Gridbox.vue'

  export default {
    name: 'grid',
    components: {
      appGridbox: Gridbox
    },
    computed: {
      ...mapGetters({
        discs: 'getDiscs'
      })
    }
  }
</script>
