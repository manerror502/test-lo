<template>
  <div
    class="call-box__container"
    :class="{minimize: minimize}"
  >
    <div
      class="call-box call-draggable"
      :class="{video: typeVideo && stateTalk}"
      :style="minimizeStyle"
      v-drag
    >
      <div
        class="call-box__content"
      >
        <div
          class="call-box__avatar avatar"
          data-type="people"
        >
          <img
            draggable="false"
            :src="avatarImgUrl"
            alt=""
          >
        </div>

        <div class="call-box__description">
          <div class="name">
            {{ personName }}
          </div>
          <div
            class="caption"
            v-if="!stateTalk || stateCancel || stateReject"
          >
            {{ stateText }}
          </div>
          <div
            class="timer"
            v-if="stateTalk"
          >
            {{ timer }}
          </div>
        </div>

        <div
          class="call-box__button-group button-group"
          v-if="!(stateCancel || stateReject)"
        >
          <button
            class="button-icon button-icon_circle button-icon_danger"
            call-btn-type="cancel"
            @click="this.callCancel"
            v-if="destinationUser || stateTalk"
          >
            <div class="icon lo_ic_phone_down" />
          </button>

          <button
            class="button-icon button-icon_circle button-icon_confirm"
            call-btn-type="answer"
            @click="this.answering"
            v-if="destinationMe && !stateTalk"
          >
            <div class="icon lo_ic_phone_up" />
          </button>

          <button
            v-if="typeAudio || (stateTalk && typeVideo)"
            @click="this.microphoneCall"
            class="button-icon button-icon_simple-light"
            call-btn-type="toggle-audio"
          >
            <div
              class="icon lo_ic_mic"
              v-if="microphone"
            />
            <div
              class="icon lo_ic_mic_off"
              v-else
            />
          </button>

          <button
            v-if="typeVideo"
            class="button-icon button-icon_simple-light"
            call-btn-type="toggle-video"
            @click="this.videoCameraCall"
          >
            <div
              class="icon lo_ic_videocam"
              v-if="videoCamera"
            />
            <div
              class="icon lo_ic_videocam_off"
              v-else
            />
          </button>

          <button
            class="button-icon button-icon_circle button-icon_danger"
            call-btn-type="cancel"
            @click="this.callCancel"
            v-if="destinationMe && !stateTalk"
          >
            <div class="icon lo_ic_phone_down" />
          </button>
        </div>

        <div
          class="call-box__button-group button-group"
          v-if="(stateReject && destinationUser)"
        >
          <button
            class="button-icon button-icon_circle button-icon_light"
            call-btn-type="close"
            @click="this.callCancel"
          >
            <div class="icon lo_ic_close" />
          </button>

          <button
            class="button-icon button-icon_circle button-icon_confirm"
            call-btn-type="call"
            @click="this.repeatCall"
          >
            <div class="icon lo_ic_phone_up" />
          </button>
        </div>

        <video
          class="call-box__thumbnail-wrap"
          id="callboxThumbnailWrap"
          v-if="typeVideo && stateTalk && videoCamera"
        />
      </div>

      <button
        class="button-icon button-icon_simple-light button__minimize"
        call-btn-type="minimize"
        @click="minimizeCall"
        v-if="typeAudio && stateTalk"
      >
        <div class="icon lo_ic_minimize_window" />
      </button>

      <video
        src=""
        v-if="typeVideo && stateTalk"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { setInterval } from 'timers'

export default {
  name: 'CallModal',
  data: () => ({
    MAX_CALL_TIME__SEC: 100,

    // Таймер
    timerSeconds: 0,
    timer: '0:00',
    interval: null
  }),
  computed: {
    ...mapGetters(['callOptions']),

    state () {
      return this.callOptions.state
    },
    personName () {
      return this.callOptions.personName
    },
    avatarImgUrl () {
      return this.callOptions.avatarUrl
    },
    type () {
      return this.callOptions.type
    },
    destination () {
      return this.callOptions.destination
    },
    microphone () {
      return this.callOptions.microphone
    },
    videoCamera () {
      return this.callOptions.videoCamera
    },
    minimize () {
      return this.callOptions.minimize
    },

    // Если компактность
    minimizeStyle () {
      if (this.minimize) {
        const style = {
          left: '95%',
          top: '10%'
        }

        return style
      } else {
        return false
      }
    },

    // Возвращение текстов
    stateText () {
      if (this.stateCancel) {
        return 'Завершение'
      } else if (this.maxCallTime && this.destinationUser) {
        this.rejectCall()
        return 'Ответа нет'
      } else if (this.maxCallTime && this.destinationMe) {
        this.callCancel()
        return 'Ответа нет'
      } else if (this.typeVideo && this.destinationUser) {
        return 'Вызов по видеосвязи'
      } else if (this.typeAudio && this.destinationUser) {
        return 'Вызов по аудиосвязи'
      } else if (this.typeVideo && this.destinationMe) {
        return 'Звонит вам по видеозвонку'
      } else if (this.typeAudio && this.destinationMe) {
        return 'Звонит вам по аудиозвонку'
      } else {
        return 'Вызов'
      }
    },

    // Упрощения для проверок
    typeVideo () {
      return this.type === 'video'
    },
    typeAudio () {
      return this.type === 'audio'
    },
    stateReject () {
      return this.state === 'reject'
    },
    stateCancel () {
      return this.state === 'cancel'
    },
    stateTalk () {
      return this.state === 'talk'
    },
    destinationMe () {
      return this.destination === 'me'
    },
    destinationUser () {
      return this.destination === 'user'
    },

    // Таймер
    maxCallTime () {
      return this.timerSeconds >= this.MAX_CALL_TIME__SEC
    }
  },
  mounted () {
    this.startTimer()
  },
  methods: {
    ...mapActions([
      'callCancel',
      'answeringCall',
      'rejectCall',
      'repeatCall',
      'microphoneCall',
      'videoCameraCall',
      'minimizeCall'
    ]),

    // Принять звонок
    answering () {
      this.timerSeconds = 0
      this.answeringCall()
    },

    // Таймер
    startTimer () {
      this.interval = setInterval(() => {
        this.filterTimer(this.timerSeconds++)
      }, 1000)
    },
    filterTimer (time) {
      const hr = Math.floor(time / 3600)
      const min = Math.floor((time % 3600) / 60)
      const sec = time % 60
      let secMin = ''

      if (hr > 0) {
        secMin += '' + hr + ':' + (min < 10 ? '0' : '')
      }
      secMin += '' + min + ':' + (sec < 10 ? '0' : '')
      secMin += '' + Math.round(sec)
      toString(secMin)

      this.timer = secMin
    },
    clearTimerSeconds () {
      this.timerSeconds = 0
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  }
}
</script>

<style lang="scss">
.call-box__container {
  position: fixed;
  top: 33%;
  left: 44%;
  transform: translate3d(-50%, -50%, 0);
  width: 0;
  height: 0;

  &.minimize {
    top: 30%;
    left: auto;
    right: 100px;
    transform: none;

    .call-box {
      width: 100px;
      padding: 10px;

      .call-box__avatar {
        width: auto;
        height: auto;
      }

      .call-box__description {
        .name {
          display: none;
        }
      }

      .call-box__button-group {
        display: none;
      }

      .button__minimize {
        width: 100%;
        height: 100%;
        .icon {
          opacity: 0;
        }
      }
    }
  }
}

.call__drag {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.call-box {
  position: relative;
  z-index: 13000;
  width: 230px;
  padding: 20px 40px;
  background-color: rgba(12, 6, 2, 0.75);
  border-radius: 3px;
  user-select: none;
  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2),
    0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12);
}

.call-box [call-btn-type="answer"] {
  z-index: 1;
  position: relative;
}
.call-box [call-btn-type="minimize"] {
  z-index: 1;
  position: absolute;
  top: 10px;
  right: 10px;
}
.call-box.a-close {
  -webkit-animation: a-zoomOut 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    normal forwards;
  animation: a-zoomOut 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) normal
    forwards;
}
.call-box.a-open {
  -webkit-animation: a-zoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    normal forwards;
  animation: a-zoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) normal
    forwards;
}
.call-box[call-state="call"] [call-btn-type="answer"]::before {
  z-index: -1;
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background-color: #4caf50;
  -webkit-animation: a-call-box__call 2s infinite;
  animation: a-call-box__call 2s infinite;
}
.call-box .call-box__content {
  position: relative;
}
.call-box .call-box__avatar {
  height: 150px;
  width: 150px;
}
.call-box .call-box__description {
  margin-top: 15px;
}
.call-box .call-box__description .name {
  color: white;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
}
.call-box .call-box__description .caption {
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  margin-top: 10px;
}
.call-box .call-box__description .timer {
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  margin-top: 10px;
}
.call-box .call-box__button-group {
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
}

.call-box {
  &.video {
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 0;
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
    width: 960px;
    height: 500px;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    .call-box__content {
      z-index: 2;
      height: 100%;
    }

    .call-box__video-container-wrap {
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      -o-object-fit: contain;
      object-fit: contain;
    }

    .call-box__avatar {
      position: absolute;
      top: 20px;
      left: 20px;
      height: 60px;
      width: 60px;
    }

    .call-box__thumbnail-wrap {
      position: absolute;
      right: 20px;
      top: 20px;
      max-width: 250px;
      width: 100%;
      height: 120px;
      border-radius: 3px;
      border: 1px solid rgba(255, 255, 255, 0.4);
    }

    .call-box__description {
      position: absolute;
      top: 20px;
      left: 80px;
      margin: 0 0 0 15px;
      padding: 8px 0;
    }

    .call-box__description .name {
      color: white;
      text-align: start;
    }

    .caption {
      text-align: start;
    }

    .timer {
      text-align: start;
      margin-top: 6px;
    }

    .call-box__button-group {
      width: 960px;
      position: absolute;
      bottom: 0;
      height: 90px;
      margin: 0;
      align-items: unset;
      justify-content: unset;
      opacity: 0;
      transition: opacity 0.3s;
      background: linear-gradient(to top, rgba(12, 6, 2, 0.4), transparent);
    }

    .icon {
      font-size: 30px;
    }

    .call-box__button-group [call-btn-type="cancel"] {
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      bottom: 20px;
    }

    .call-box__button-group > button {
      position: absolute;
    }
    .call-box__button-group [call-btn-type="toggle-audio"] {
      left: 30px;
      bottom: 30px;
    }

    .call-box__button-group [call-btn-type="toggle-video"] {
      left: 100px;
      bottom: 30px;
    }

    &:hover .call-box__button-group {
      opacity: 1;
    }

    video {
      width: 100%;
      height: 100%;
    }
  }
}

.call-box[call-state="talk"][call-type="video"]
  .call-box[call-state="talk"][call-type="video"][call-video-channel-state="off"]
  .call-box__thumbnail-wrap {
  display: none;
}
.call-box.call-box_minimize {
  top: 150px;
  right: 0;
  left: unset;
  border-radius: 3px 0 0 3px;
  padding: 20px;
  width: 100px;
  cursor: pointer;
}
.call-box.call-box_minimize .call-box__avatar {
  height: 60px;
  width: 60px;
}
.call-box.call-box_minimize .call-box__description {
  margin: 10px 0 0 0;
}
.call-box.call-box_minimize .call-box__description .name {
  display: none;
}
.call-box.call-box_minimize .call-box__description .caption {
  display: none;
}
.call-box.call-box_minimize .call-box__description .timer {
  margin: 0;
}
.call-box.call-box_minimize .call-box__button-group {
  display: none;
}
.call-box.call-box_minimize [call-btn-type="minimize"] {
  display: none;
}

.call-container {
  z-index: 12999;
  position: fixed;
  top: 90px;
  bottom: 200px;
  width: 150px;
}
.call-container.call-container_left {
  left: 0;
}
.call-container.call-container_right {
  right: 0;
}

.button-icon.button-icon_danger.button-icon_circle {
  color: #f3212b;
  border-color: #f3212b;
  background-color: transparent;
}
.button-icon.button-icon_danger {
  color: #f3212b;
  background-color: transparent;
}
.button-icon.button-icon_circle {
  border-radius: 50%;
  border: 2px solid transparent;
  padding: 8px;
}
.button-icon {
  outline: 0;
  outline-offset: 0;
  border: none;
  border-radius: 3px;
  text-transform: none;
  letter-spacing: normal;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  cursor: pointer;
  transition: color 0.2s, background-color 0.2s, border-color 0.2s,
    box-shadow 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 5px;
  font-size: 20px;
  flex-shrink: 0;
  background-color: transparent;
}

@-webkit-keyframes a-call-box__call {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}

@keyframes a-call-box__call {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
  }
}
</style>
