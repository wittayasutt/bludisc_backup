<template>
  <div class="columns is-multiline">
    <component is="app-listbox" v-for="disc in discs" :disc="disc"></component>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Listbox from './Listbox.vue'

  export default {
    name: 'list',
    data () {
      return {
      }
    },
    components: {
      appListbox: Listbox
    },
    computed: {
      ...mapGetters({
        discs: 'getDiscs'
      })
    }
  }
</script>
