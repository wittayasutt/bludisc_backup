<template>
  <div class="tile is-child box">
    <p class="title">What do you want to play?</p>
    <p class="control has-icon">
      <input class="input is-large" type="text" placeholder="Final Fantasy XV, Resident Evil 7, For Honor ...">
      <span class="icon is-medium">
        <i class="fa fa-search"></i>
      </span>
    </p>
    <em class="txt-filter">Filter: </em>
    <span class="tag is-primary is-medium">PS4<button class="delete is-small"></button></span>
    <span class="tag is-success is-medium">PS VITA<button class="delete is-small"></button></span>
    <span class="tag is-warning is-medium">3DS<button class="delete is-small"></button></span>
    <span class="tag is-danger is-medium">RPG<button class="delete is-small"></button></span>
    <span class="tag is-info is-medium">Zone 3<button class="delete is-small"></button></span>
    <span class="tag is-text is-medium">&lt; 1,500.-<button class="delete is-small"></button></span>
    <span class="tag is-dark is-medium btn-add">ADD<i class="fa fa-plus icon is-small icon-plus"></i></span>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .tile {
    max-height: max-content;
  }

  .txt-filter {
    font-size: 1.2em;
    color: #B1A9A9;
    margin: auto 0.5em auto 1em;
  }

  .btn-add {
    cursor: pointer;
  }

  .icon-plus {
    margin-left: 0.4em;
  }
</style>
