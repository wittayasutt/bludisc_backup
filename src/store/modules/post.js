import discs from '../../data/discs'

const state = {
  discs: [],
  previewDisc: null,
  isPreview: true,
  view: 'app-grid'
}

const getters = {
  getDiscs: state => {
    return state.discs
  },
  getPreviewDisc: state => {
    return state.previewDisc
  },
  getIsPreview: state => {
    return state.isPreview
  },
  getPostById: state => id => {
    return _.find(state.discs, { 'id': id })
  },
  getBuyView: state => {
    return state.view
  }
}

const mutations = {
  setDiscs (state, discs) {
    state.discs = discs
    // state.discs = _.map(discs, item => _.pick(item, ['id', 'title', 'platform', 'zone', 'title_image', 'price']))
  },
  setPreviewDisc (state, id) {
    state.previewDisc = _.find(state.discs, { 'id': id })
  },
  setIsPreview (state, isPreview) {
    state.isPreview = isPreview
  },
  setBuyView (state, view) {
    state.view = view
  }
}

const actions = {
  initDiscs: ({commit}) => {
    commit('setDiscs', discs)
    commit('setPreviewDisc', 1)
  },
  selectDisc: ({commit}, id) => {
    commit('setPreviewDisc', id)
  },
  setIsPreview: ({commit}, isPreview) => {
    commit('setIsPreview', isPreview)
  },
  setBuyView: ({commit}, view) => {
    commit('setBuyView', view)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
