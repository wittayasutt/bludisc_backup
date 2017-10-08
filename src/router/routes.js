import Buy from 'components/Buy/Buy.vue'
import Sell from 'components/Sell/Sell.vue'
import Collection from 'components/Collection/Collection.vue'
import Wistlist from 'components/Wistlist/Wistlist.vue'
import Post from 'components/Post/Post.vue'

import TabStore from 'components/Tabs/TabStore.vue'
import TabCollection from 'components/Tabs/TabCollection.vue'
import TabPost from 'components/Tabs/TabPost.vue'

export default [
  {
    path: '',
    name: 'buy',
    components: {
      default: Buy,
      tabs: TabStore
    }
  },
  {
    path: '/sell',
    name: 'sell',
    components: {
      default: Sell,
      tabs: TabStore
    }
  },
  {
    path: '/collection',
    name: 'collection',
    components: {
      default: Collection,
      tabs: TabCollection
    }
  },
  {
    path: '/wistlist',
    name: 'wistlist',
    components: {
      default: Wistlist,
      tabs: TabCollection
    }
  },
  {
    path: '/post/:id',
    name: 'post',
    components: {
      default: Post,
      tabs: TabPost
    }
  },
  {
    path: '*',
    redirect: '/'
  }
]
