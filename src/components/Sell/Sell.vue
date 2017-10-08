<template>
  <div class="container is-fluid">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification is-primary">
          <p class="title">Preview</p>
          <p class="subtitle">Preview disc</p>
        </article>
      </div>
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-danger">
              <p class="title">Product</p>
              <p class="subtitle">product box</p>
            </article>
            <article class="tile is-child notification is-warning">
              <p class="title">User</p>
              <p class="subtitle">user data</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sell',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/style.scss";
</style>
