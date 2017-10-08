<template>
  <section class="hero is-primary">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <router-link class="nav-item" tag="a" to="/" exact>
              <img src="http://bulma.io/images/bulma-type-white.png" alt="Logo">
            </router-link>
          </div>

          <span class="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div class="nav-right nav-menu">
            <a class="nav-item is-active">Store</a>
            <a class="nav-item">Collection</a>
            <a class="nav-item">Games</a>
            <a class="nav-item">Member</a>
            <span class="nav-item">
              <a class="button is-primary is-inverted">
                <span>Sign up</span>
              </a>
              <a class="button is-primary is-inverted">
                <span>Log in</span>
              </a>
            </span>
          </div>
        </div>
      </header>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-hidden-mobile">
          <span class="icon icon-gamepad is-medium">
            <i class="fa fa-gamepad"></i>
          </span>
          What do you want to play?
        </h1>
        <h1 class="subtitle is-hidden-tablet">
          <span class="icon icon-gamepad">
            <i class="fa fa-gamepad"></i>
          </span>
          What do you want to play?
        </h1>
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <p class="control has-icon has-addons">
              <input class="input is-expanded" type="text" placeholder="Final Fantasy XV, Resident Evil 7, For Honor ...">
              <span class="icon is-small">
                <i class="fa fa-search"></i>
              </span>
              <span class="select is-hidden-touch filter">
                <select>
                  <option>Platform</option>
                  <option>PS4</option>
                  <option>PSVITA</option>
                  <option>3DS</option>
                </select>
              </span>
              <span class="select is-hidden-touch filter">
                <select>
                  <option>Genre</option>
                  <option>Action</option>
                  <option>RPG</option>
                </select>
              </span>
              <span class="select is-hidden-touch filter">
                <select>
                  <option>Zone</option>
                  <option>All</option>
                  <option>Z1</option>
                  <option>Z2</option>
                  <option>Z3</option>
                  <option>Z4</option>
                </select>
              </span>
              <span class="select is-hidden-touch filter">
                <select>
                  <option>Price</option>
                  <option>All</option>
                  <option>&lt; 2,000.-</option>
                  <option>&lt; 1,500.-</option>
                  <option>&lt; 1,000.-</option>
                  <option>&lt; 500.-</option>
                </select>
              </span>
              <span class="select is-hidden-touch filter">
                <select>
                  <option>Quality</option>
                  <option>All</option>
                  <option>100%</option>
                  <option>&gt; 90%</option>
                  <option>&gt; 80%</option>
                  <option>&gt; 65%</option>
                  <option>&gt; 50%</option>
                </select>
              </span>
              <span class="select is-hidden-desktop filter">
                <select>
                  <option>Filter</option>
                </select>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/style.scss";

  .hero {
    background: linear-gradient($primary 22%, darken($primary, 8%) 100%);
    // background-image: url('https://images3.alphacoders.com/746/746998.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    .hero-head {
      .nav {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        background-color: rgba(45, 167, 230, 0.8);
      }
    }

    .hero-body  {
      margin-top: 49px;

      .icon-gamepad {
        margin-right: 0.3em;
      }

      .filter select {
        border-radius: 0;
      }
    }
  }

</style>
