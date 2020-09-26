export default {
  /**
   * Класс блока звонка
   *
   * Собирается в нужный блок в зависимости от переданных ему параметров
   * Имеет api для управления извне
   * @param {Object} options - параметры:
   * @param {string} options.type - тип вызова: 'audio', 'video'
   * @param {string} options.destination - направление вызова (кто кому звонит): 'me' - звонят мне, 'user' - звоню я
   * @param {string} options.state - текущее состояние вызова: 'call', 'cancel', 'talk', 'reject'
   * @param {string} options.avatarImgUrl - ulr изображения аватара адресата
   * @param {string} options.personName - Имя и Фамилия адресата
   * @param {string} options.personType - тип адресата: 'people', 'community', 'place', 'event'
   * @param {boolean} options.microphone - Включен или выключен у пользователя микрофон
   * @param {boolean} options.videoCamera -Включена или выключена у пользователя видеокамера
   * @param {boolean} options.minimize -Компактный вид
   */

  state: {
    callOptions: {}
  },
  actions: {
    newCallBox ({ commit }, callOptions) {
      commit('newCallBox', callOptions)
    },
    callCancel ({ commit }) {
      commit('callCancel')

      setTimeout(() => {
        commit('clearCallBox')
      }, 600)
    },
    answeringCall ({ commit }) {
      commit('answeringCall')
    },
    rejectCall ({ commit }) {
      commit('rejectCall')
    },
    repeatCall ({ commit }) {
      commit('repeatCall')
    },
    microphoneCall ({ commit }) {
      commit('microphoneCall')
    },
    videoCameraCall ({ commit }) {
      commit('videoCameraCall')
    },
    minimizeCall ({ commit }) {
      commit('minimizeCall')
    },

    destroyCall ({ commit }) {
      commit('destroyCall')
    }
  },
  mutations: {
    newCallBox (state, callOptions) {
      if (!Object.keys(state.callOptions).length) {
        state.callOptions = callOptions
      }
    },
    clearCallBox (state) {
      state.callOptions = {}
    },

    answeringCall (state) {
      state.callOptions.state = 'talk'
    },
    rejectCall (state) {
      state.callOptions.state = 'reject'
    },
    repeatCall (state) {
      state.callOptions.state = 'call'
    },
    callCancel (state) {
      // Для вывода сообщения о завершении
      state.callOptions.state = 'cancel'
    },
    microphoneCall (state) {
      // Для вывода сообщения о завершении
      state.callOptions.microphone = !state.callOptions.microphone
    },
    videoCameraCall (state) {
      // Для вывода сообщения о завершении
      state.callOptions.videoCamera = !state.callOptions.videoCamera
    },
    minimizeCall (state) {
      // Для вывода сообщения о завершении
      state.callOptions.minimize = !state.callOptions.minimize
    },

    destroyCall (state) {
      state.callOptions = {}
    }
  },
  getters: {
    callOptions: state => state.callOptions
  }
}
