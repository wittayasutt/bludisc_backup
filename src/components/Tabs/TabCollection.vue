<template>
  <ul>
    <router-link tag="li" activeClass="is-active" to="/" exact><a><span class="icon"><i class="fa fa-angle-left"></i></span>Store</a></router-link>
    <router-link tag="li" activeClass="is-active" to="collection" exact><a>Collection</a></router-link>
    <router-link tag="li" activeClass="is-active" to="wistlist" exact><a>Wistlist</a></router-link>
  </ul>
</template>

<script>
  export default {
    name: 'tabCollection'
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style.scss";

  .icon i {
    color: $primary;
  }
</style>
