<template>
  <div class="column" :class="{'is-3': isPreview, 'is-2': !isPreview}">
    <div class="wrapper">
      <button class="button is-fullwidth is-hidden-touch btn-preview" @click="selectDisc">
        <span class="icon is-small">
          <i class="fa fa-caret-left" />
        </span>
        Quick Preview
      </button>
      <router-link class="card" tag="div" :to="'post/' + this.disc.id" exact>
        <div class="card-image">
          <figure class="image is-square">
            <img :src="disc.title_image" :alt="disc.title">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              {{ disc.title }}
            </div>
          </div>
          <div class="columns is-gapless">
            <div class="column is-half">
              <div class="platform">
                <span class="icon is-small">
                  <i class="fa fa-gamepad" />
                </span>
                {{ disc.platform }}
              </div>
              <div class="zone">
                <span class="icon is-small">
                  <i class="fa fa-globe" />
                </span>
                Zone {{ disc.zone }}
              </div>
            </div>
            <div class="column">
              <div class="price is-pulled-right">
                {{ disc.price }}.-
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'gridbox',
  props: ['disc'],
  methods: {
    ...mapActions({
      selectPreviewDisc: 'selectDisc',
      setIsPreview: 'setIsPreview'
    }),
    selectDisc () {
      const selectedID = this.disc.id
      this.selectPreviewDisc(selectedID)
      this.setIsPreview(true)
    }
  },
  computed: {
    ...mapGetters({
      isPreview: 'getIsPreview'
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/style.scss";

  .wrapper {
    transition: 0.2s;

    &:hover {
      .btn-preview {
        opacity: 1;
      }
    }

    .btn-preview {
      float: left;
      z-index: 1;
      color: white;
      background-color: transparentize($primary, 0.3);
      border: transparentize($primary, 0.3);
      border-radius: 0%;
      opacity: 0;
      height: 31px;
      margin-top: -webkit-calc(100% - 31px);
      margin-top: -moz-calc(100% - 31px);
      margin-top: calc(100% - 31px);
      transition: 0.2s;

      span {
        margin-right: 5px !important;
      }

      &:hover {
        color: $primary;
        background-color: transparentize($primary, 0.5);
        border: 1px solid transparentize($primary, 0.3);
      }
    }

    .card {
      cursor: pointer;
      box-shadow: none;
      transition: 0.2s;

      .card-content {
        padding: 0.3rem;

        .media {
          margin-bottom: 0.25rem;
        }

        .platform, .zone {
          color: lighten(#4a4a4a, 40%);
          font-size: 0.8em;

          .icon {
              margin-right: 0.4rem;
          }
        }

        .price {
          color: lighten(#4a4a4a, 35%);
          border: 1px solid lighten(#4a4a4a, 50%);
          margin-top: 0.05rem;
          margin-right: 0.5rem;
          padding: 0.1rem 0.4rem 0.2rem;
          border-radius: 10%;
          transition: 0.2s;
        }
      }

      &:hover {
        opacity: 0.9;

        .price {
          color: white !important;
          background-color: $primary;
          border-color: $primary !important;
        }
      }
    }
  }
</style>
