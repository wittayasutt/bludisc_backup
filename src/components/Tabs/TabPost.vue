<template>
  <ul>
    <router-link tag="li" activeClass="is-active" to="/" exact><a><span class="icon"><i class="fa fa-angle-left"></i></span>Store</a></router-link>
    <li class="is-active"><a>Post</a></li>
  </ul>
</template>

<script>
  export default {
    name: 'tabPost'
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/style.scss";

  .icon i {
    color: $primary;
  }
</style>
