export const state = () => ({
  is_mobile: 'start',
  loading: false,
})


export const mutations = {
  TestDeviceSize(state, payload) {
    state.is_mobile = payload;
  },
  UpdateLoading(state, payload) {
    state.loading = payload
  }
}
