<template>
  <ul>
    <router-link tag="li" activeClass="is-active" to="/" exact><a>Buy</a></router-link>
    <router-link tag="li" activeClass="is-active" to="sell" exact><a>Sell</a></router-link>
    <router-link tag="li" activeClass="is-active" to="collection" exact><a>Collection<span class="icon"><i class="fa fa-angle-right"></i></span></a></router-link>
  </ul>
</template>

<script>
  export default {
    name: 'tabStore'
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style.scss";

  .icon i {
    color: $primary;
  }
</style>
