<template>
  <div class="preview">
    <div class="media">
      <div class="media-left">
        <figure class="image">
          <img :src="disc.title_image" :alt="disc.title">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>{{ disc.title }}</p>
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
      </div>
    </div>

    <a class="button is-outlined is-success is-fullwidth">
      {{ disc.status }}
    </a>

    <table class="table">
      <tbody>
        <tr>
          <td>
            <em>Price:</em>
          </td>
          <td>
            <strong>{{ disc.price }} Baht</strong>
          </td>
        </tr>
        <tr>
          <td>
            <em>Quality:</em>
          </td>
          <td>
            <strong>{{ disc.quality }}%</strong> <small>Used / For collect</small>
          </td>
        </tr>
        <tr>
          <td>
            <em>Detail:</em>
          </td>
          <td>
            {{ disc.detail }}
          </td>
        </tr>
      </tbody>
    </table>

    <el-collapse v-model="activeName">
      <el-collapse-item name="1">
        <template slot="title">
          <div class="post-by">by <strong>{{ disc.by.name }}</strong></div>
          <img class="image-user" :src="disc.by.user_image" :alt="disc.by.name">
        </template>

        <table class="table">
          <tbody>
            <tr>
              <td>
                <span class="icon is-small icon-user">
                  <i class="fa fa-facebook-square" />
                </span>
                </td>
              <td>
                {{ disc.by.line }}
              </td>
            </tr>
            <tr>
              <td>
                <span class="icon is-small icon-user">
                  <i class="fa fa-facebook-square" />
                </span>
              </td>
              <td>
                {{ disc.by.facebook }}
              </td>
            </tr>
            <tr>
              <td>
                <span class="icon is-small icon-user">
                  <i class="fa fa-phone" />
                </span>
              </td>
              <td>
                {{ disc.by.tel }}
              </td>
            </tr>
            <tr>
              <td>
                <span class="icon is-small icon-user">
                  <i class="fa fa-map-marker" />
                </span>
              </td>
              <td>
                {{ disc.by.appointment }}
              </td>
            </tr>
            <tr>
              <td>
                <span class="icon is-small icon-user">
                  <i class="fa fa-envelope-o" />
                </span>
              </td>
              <td>
                <em>Post:</em> {{ disc.by.post }} Baht
              </td>
            </tr>
            <tr>
              <td>
                <span class="icon is-small icon-user">
                  <i class="fa fa-envelope-o" />
                </span>
              </td>
              <td>
                <em>EMS:</em> {{ disc.by.ems }} Baht
              </td>
            </tr>
            <tr>
              <td>
                <span class="icon is-small icon-user">
                  <i class="fa fa-envelope-o" />
                </span>
              </td>
              <td>
                <em>Kerry Express:</em> {{ disc.by.kerryexp }} Baht
              </td>
            </tr>
            <tr>
              <td>
                <span class="icon is-small icon-user">
                  <i class="fa fa-envelope-o" />
                </span>
              </td>
              <td>
                <em>{{ disc.by.other }}</em>
              </td>
            </tr>
          </tbody>
        </table>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    props: [
      'disc',
      'activeName'
    ]
  }
</script>

<style lang="scss">
  @import "../../assets/style.scss";

  .preview {
    .media {
      .media-content {
        p {
          margin-bottom: 0.4rem;
        }
        .platform, .zone {
          color: lighten(#4a4a4a, 40%);
          font-size: 0.8rem;

          .icon {
            margin-right: 0.4rem;
          }
        }
      }
    }

    .button {
      transition: 0.2s;
      margin: 1rem auto;
    }

    table.table {
      margin-bottom: 1rem;
    }

    .el-collapse {
      .el-collapse-item__header {
        border-left: 4px solid $primary;
        padding-left: 7px;
        transition: 0.3s;

        .image-user {
          float: left;
          border-radius: 50%;
          height: 32px;
          margin-top: 5px;
          margin-right: 13px;
        }

        .post-by {
          display: inline-block;
        }

        &:hover {
          border-left: 15px solid $primary;

          i {
            color: $primary;
          }
        }
      }

      .el-collapse-item__wrap {
        .el-collapse-item__content {
          padding: 0px;

          table {
            margin: 0.4rem auto;

            tr {
              td {
                padding: 0.2rem;
                border-bottom: 0px;
              }

              td:first-child {
                width: 12%;

                .icon-user {
                  margin-top: 5px;
                  margin-left: 0.8rem;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
