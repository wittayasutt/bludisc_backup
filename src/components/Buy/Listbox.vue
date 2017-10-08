<template>
  <div class="column is-6">
    <div class="wrapper">
      <button class="button is-hidden-touch btn-preview" @click="selectDisc">
        <span class="icon is-small">
          <i class="fa fa-caret-left" />
        </span>
      </button>
      <router-link class="card" tag="div" :to="'post/' + this.disc.id" exact>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image">
                  <img :src="disc.title_image" :alt="disc.title">
              </figure>
            </div>
            <div class="media-content">
              <div class="body">
                {{ disc.title }}
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
              <div class="price">
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
import { mapActions } from 'vuex'

export default {
  name: 'listbox',
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
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/style.scss";

  .column {
    padding: 0.75rem 0.75rem 0rem;

    .wrapper {
      transition: 0.2s;

      &:hover {
        .btn-preview {
          opacity: 1;
        }
      }

      .btn-preview {
        float: right;
        z-index: 1;
        color: white;
        background-color: transparentize($primary, 0.4);
        border: 1px solid transparentize($primary, 0.3);
        border-radius: 0%;
        opacity: 0;
        height: 107px;
        transition: 0.2s;

        &:hover {
          color: $primary;
          background-color: transparentize($primary, 0.7);
          border: 1px solid transparentize($primary, 0.3);
        }
      }

      .card {
        cursor: pointer;
        box-shadow: none;

        .card-content {
          padding: 0rem;

          .media {
            .media-left {
              margin-right: 0.5rem;

              .image {
                height: 107px;
                width: 107px;
              }
            }
          }

          .media-content {
            padding: 0.2rem 0.4rem;

            .body {
              min-height: 80px;

              .platform, .zone {
                color: lighten(#4a4a4a, 40%);
                font-size: 0.8em;

                .icon {
                    margin-right: 0.4rem;
                }
              }
            }

            .price {
              color: lighten(#4a4a4a, 15%);
            }
          }
        }

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .column {
      padding: 0.75rem 0rem 0.75rem;
      border-bottom: 1px solid lighten(#4a4a4a, 60%);
    }

    .column:first-child {
      padding: 0.0rem 0rem 0.75rem;
    }
  }

  @media screen and (min-width: 1000px) {
    .column {
      .card {
        &:hover {
          background: #F5F5F5;
        }
      }
    }
  }
</style>
