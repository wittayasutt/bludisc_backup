<template>
  <p class="control has-addons has-addons-right">
    <button v-show="!isPreview" class="button is-primary is-outlined show-preview" @click="showPreview">Show Preview</button>
    <!-- <span>
      <button class="button is-primary no-hover">
      </button>
    </span> -->
    <input class="input is-expanded is-hidden-mobile" type="text" value="Result: 14 Discs" disabled>
    <span>
      <button class="button is-primary no-radius" :class="{'is-outlined': (view !== 'app-grid')}" @click="setView('app-grid')">
        <span class="icon is-small">
          <i class="fa fa-th-large" />
        </span>
      </button>
    </span>
    <span>
      <button class="button is-primary no-radius" :class="{'is-outlined': (view !== 'app-list')}" @click="setView('app-list')">
        <span class="icon is-small">
          <i class="fa fa-th-list" />
        </span>
      </button>
    </span>
    <span class="select">
      <select class="button is-primary is-outlined">
        <option>Order by: Recently</option>
        <option>Order by: Price</option>
        <option>Order by: A-Z</option>
        <option>Order by: Z-A</option>
      </select>
    </span>
  </p>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'status_bar',
  methods: {
    ...mapActions({
      setIsPreview: 'setIsPreview',
      setBuyView: 'setBuyView'
    }),
    setView (view) {
      this.setBuyView(view)
    },
    showPreview () {
      this.setIsPreview(true)
    }
  },
  computed: {
    ...mapGetters({
      isPreview: 'getIsPreview',
      view: 'getBuyView'
    })
  }
}
</script>

<style lang="scss" scoped>
  .control.has-addons {
    .button {
      transition: 0.2s;
    }

    .button.show-preview {
      margin-right: 0px;
    }

    .button.no-hover {
      pointer-events: none;
      border-radius: 3px 0px 0px 3px;
    }

    .button.no-radius {
      border-radius: 0px;
    }
  }
</style>
