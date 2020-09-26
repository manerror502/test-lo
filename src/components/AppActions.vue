<template>
  <div
    class="page__container page__container_after-header page__container_align_center"
    style="margin-left: 460px; margin-right: auto;"
  >
    <section class="section page__section_narrow">
      <div class="title-outside-section">
        <span class="title-outside-section__title">Действия</span>
      </div>
      <div class="page-actions">
        <div
          class="page-actions__item page-actions__item_primary page-actions__item_alone primary-block"
          @click="callUserAudio"
        >
          Я
          звоню (аудио)
        </div>
        <div
          class="page-actions__item page-actions__item_primary page-actions__item_alone primary-block"
          @click="callUserVideo"
        >
          Я
          звоню (видео)
        </div>
        <div
          class="page-actions__item page-actions__item_primary page-actions__item_alone primary-block"
          @click="callMeAudio"
        >
          Аудиозвонок
          мне
        </div>
        <div
          class="page-actions__item page-actions__item_primary page-actions__item_alone primary-block"
          @click="callMeVideo"
        >
          Видеозвонок
          мне
        </div>
        <div
          class="page-actions__item page-actions__item_default page-actions__item_alone primary-block"
          @click="this.rejectCall"
        >
          Отклонить
          (reject) звонок
        </div>
        <div
          class="page-actions__item page-actions__item_default page-actions__item_alone primary-block"
          @click="this.callCancel"
        >
          Отклонить
          (cancel) звонок
        </div>
        <div
          class="page-actions__item page-actions__item_default page-actions__item_alone primary-block"
          @click="this.answeringCall"
        >
          Ответить
        </div>
        <div
          class="page-actions__item page-actions__item_default page-actions__item_alone primary-block"
          @click="this.destroy"
        >
          Уничтожить
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Actions',
  data: () => ({}),
  methods: {
    ...mapActions(['callCancel', 'answeringCall', 'rejectCall']),

    callUserAudio () {
      // Я звоню (audio)
      this.$store.dispatch('newCallBox', {
        type: 'audio',
        destination: 'user',
        state: 'call',
        personType: 'people',
        personName: 'Николай Кузнецов',
        avatarUrl: '../assets/images/avatar_me.jpg',
        microphone: true,
        minimize: false
      })
    },
    callUserVideo () {
      // Я звоню (video)
      this.$store.dispatch('newCallBox', {
        type: 'video',
        destination: 'user',
        state: 'call',
        personType: 'people',
        personName: 'Николай Кузнецов',
        avatarUrl: '../assets/images/avatar_me.jpg',
        microphone: true,
        videoCamera: true,
        minimize: false
      })
    },
    callMeAudio () {
      // Мне звонят (audio)
      this.$store.dispatch('newCallBox', {
        type: 'audio',
        destination: 'me',
        state: 'call',
        personType: 'people',
        personName: 'Николай Кузнецов',
        avatarUrl: '../assets/images/avatar_me.jpg',
        microphone: true,
        minimize: false
      })
    },
    callMeVideo () {
      // Мне звонят (video)
      this.$store.dispatch('newCallBox', {
        type: 'video',
        destination: 'me',
        state: 'call',
        personType: 'people',
        personName: 'Николай Кузнецов',
        avatarUrl: '../assets/images/avatar_me.jpg',
        microphone: true,
        videoCamera: true,
        minimize: false
      })
    },

    destroy () {
      // Мне звонят (video)
      this.$store.dispatch('destroyCall')
    }
  }
}
</script>

<style lang="scss">
/* Страница (body) */
.page {
  margin: 0;
  padding: 0;
  font-weight: 400;
  background: #f0f0f0;
  overflow: visible;
  font-size: 14px;
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
  text-rendering: optimizeLegibility;
}
.page.page_bg_gradient {
  background: linear-gradient(to bottom right, #66ccff 0%, #ffccff 100%)
    no-repeat fixed;
}
.page.page_unregistered .page__container {
  margin-bottom: 60px;
}

.page__container {
  display: flex;
  box-sizing: border-box;
  justify-content: flex-start;
  flex-flow: row wrap;
  align-items: flex-start;
  position: relative;
  margin: 84px auto 20px;
  width: 1000px;
}
.page__container[data-name="main-page"] {
  height: calc(100vh - 44px - 40px - 185px);
  margin-bottom: 0;
}
.page__container.page__container_full-height {
  height: calc(100vh - 84px);
  margin-bottom: 0;
}
.page__container.page__container_center {
  align-items: center;
  justify-content: center;
}
.page__container.page__container_after-header {
  margin-top: 44px;
}
.page__container.page__container_after-header.page__container_full-height {
  height: calc(100vh - 44px);
  margin-bottom: 0;
}
.page__container.page__container_after-subnav-bar {
  margin-top: 114px;
}
.page__container.page__container_after-subnav-bar.page__container_full-height {
  height: calc(100vh - 114px);
  margin-bottom: 0;
}
.page__container.page__container_after-banner {
  margin-top: 0;
}
.page__container.page__container_align_center {
  justify-content: center;
}
.page__container.page__container_im {
  margin-bottom: 0;
}

/* Колонки для контейнера страницы */
.page__column {
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
}
.page__column.page__column_sticky {
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  bottom: 20px;
}

.section {
  margin: 0 10px;
}
.section[data-name="main-page-sign"] {
  display: flex;
  width: 300px;
  margin: auto;
}
.section[data-name="main-page-sign"] > .primary-block,
.section[data-name="main-page-sign"] > .card.card_material {
  width: 100%;
  border-radius: 5px;
}
.section[data-name="main-page-join"] {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 10px;
}
.section[data-name="main-page-join"] > .primary-block,
.section[data-name="main-page-join"] > .card.card_material {
  width: 320px;
}
.section[data-name="main-page-info"] {
  display: flex;
  width: 640px;
  margin: auto 10px;
}
.section[data-name="dialogs"] {
  position: fixed;
  top: 90px;
  margin-left: 760px;
}
.section[data-type="alone-center-page"] {
  margin: 0 auto;
  margin-top: 25vh;
}
.section[data-type="create-progress"] {
  margin: 0 auto;
  margin-top: 20px;
}
.section.section_indent-side_auto {
  margin: 0 auto;
}
.section.section_hidden {
  display: none;
}
.section.section_indent_top {
  margin-top: 20px;
}
.section.section_indent-top_small {
  margin-top: 10px;
}
.section.section_invisible {
  visibility: hidden;
}
.section.section__cover {
  margin-top: 20px;
}
.section.section-s_fixed_right {
  position: fixed;
  margin: 20px 0 0 760px;
}
.section.section_music-player {
  position: -webkit-sticky;
  position: sticky;
  top: 84px;
  z-index: 100;
}

.page__section_normal {
  width: 480px;
}

.page__section_narrow {
  width: 230px;
}

.page__section_extra-narrow {
  width: 208px;
}

.page__section_wide {
  width: 730px;
}

.page__section_extra-wide {
  width: 752px;
}

.page__section_full {
  width: 980px;
}

/* Основной (главный) блок для размещения контента */
.primary-block,
.card.card_material {
  z-index: 2;
  border: 0;
  border-radius: 3px;
  background-color: #ffffff;
  border: 1px solid #d8d7d7;
}
.primary-block.primary-block_indent_bottom,
.primary-block_indent_bottom.card.card_material {
  margin-bottom: 10px;
}
.primary-block.primary-block_padding_n,
.primary-block_padding_n.card.card_material {
  padding: 10px;
}
.primary-block[data-type="media-input-block"],
[data-type="media-input-block"].card.card_material,
.primary-block[mib],
[mib].card.card_material {
  margin-bottom: 10px;
}
.primary-block[data-type="field-input-comment"],
[data-type="field-input-comment"].card.card_material {
  margin-bottom: 10px;
}
.primary-block[data-type="chart-block"],
[data-type="chart-block"].card.card_material {
  width: 445px;
}
.primary-block[data-type="operation"],
[data-type="operation"].card.card_material {
  display: grid;
  padding: 20px;
  grid-template-columns: auto;
  grid-gap: 20px;
}
.primary-block[data-type="progress"],
[data-type="progress"].card.card_material {
  display: grid;
  padding-bottom: 20px;
  grid-template-columns: auto;
  grid-gap: 20px;
}

.primary-block-header {
  padding: 15px 20px;
  background-color: #0c0602;
  overflow: hidden;
  border-radius: 3px 3px 0 0;
}

.primary-block-body {
  padding: 20px;
}

.primary-block-title {
  text-align: center;
}

.primary-block-subtitle {
  font-size: 18px;
  line-height: 20px;
  margin: 0 10px;
  padding: 10px;
}
.primary-block-subtitle:first-child {
  margin-top: 10px;
}

.primary-block-footer {
  display: flex;
  justify-content: center;
}
.primary-block-footer > * + * {
  margin-left: 10px;
}

.page-actions .primary-block,
.page-actions .card.card_material {
  overflow: hidden;
}

.page-actions > * + * {
  margin-top: 10px;
}

.page-actions-wrap {
  display: flex;
}

.page-actions-wrap > .page-actions-wrap-more {
  width: 100%;
}

.page-actions-more__button {
  margin-left: 10px;
  width: 42px;
  flex-shrink: 0;
}

.page-actions__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 41px;
  padding: 10px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: 400;
  font-size: 14px;
}

[class*="page-actions-wrap"].opened .page-actions__header {
  color: #6d6a67;
  border-bottom: 1px solid #d6d6d6;
}

.page-actions__header_confirm {
  color: #4caf50;
}

.page-actions__header_danger {
  color: #f3212b;
}

.page-actions__item {
  display: flex;
  align-items: center;
  height: 42px;
  padding: 10px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;
}

.page-actions__item:hover {
  background-color: #f5f5f5;
}

.page-actions__item > * {
  display: inline-block;
}

.page-actions__item > span {
  padding: 0 10px;
}

.page-actions__item > span:first-child {
  padding: 0;
}

.page-actions__item_default {
  color: #6d6a67;
}

.page-actions__item_default:hover {
  color: #2196f3;
}

.page-actions__item_primary {
  color: #2196f3;
}

.page-actions__item_alone {
  justify-content: center;
  width: 100%;
}

.page-actions__item_danger {
  color: #f3212b;
}

.page-actions__item_obscure {
  color: #6d6a67;
}

button {
  outline: 0;
  outline-offset: 0;
  border: none;
  text-transform: none;
  letter-spacing: normal;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  flex-shrink: 0;
}
button.button_selected,
button .selected {
  color: #2196f3;
}
button.button_selected:hover,
button .selected:hover {
  color: #37a1f4;
}

.button_disappear {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s;
}

.button_go-top {
  position: fixed;
  bottom: 40px;
  left: 40px;
  opacity: 0;
  width: unset !important;
}
.button_go-top::before {
  content: " ";
  z-index: -1;
  position: absolute;
  top: -40px;
  right: -40px;
  bottom: -40px;
  left: -40px;
}
.button_go-top > .icon {
  width: 100%;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}
.button_go-top[data-state="goBottom"] > .icon {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}
.button_go-top.closed {
  -webkit-animation: a-zoomOut 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    normal forwards;
  animation: a-zoomOut 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) normal
    forwards;
}
.button_go-top.opened {
  -webkit-animation: a-zoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    normal forwards;
  animation: a-zoomIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) normal
    forwards;
}

.button-link {
  font-weight: 400;
  font-size: 14px;
  color: #2196f3;
  transition: color 0.3s;
}
.button-link:hover {
  color: #37a1f4;
}
.button-link:active {
  color: #1e87db;
}
.button-link.button_size_l {
  font-size: 16px;
}
.button-link.button-link_light {
  color: rgba(255, 255, 255, 0.7);
}
.button-link.button-link_light:hover {
  color: white;
}
.button-link.button-link_light:active {
  color: rgba(255, 255, 255, 0.8);
}
.button-link.button-link_post {
  margin-top: 5px;
  padding: 2px 0;
}
.button-link.button-link_grey {
  color: #6d6a67;
}
.button-link.button-link_grey:hover,
.button-link.button-link_grey:active {
  color: #241f1b;
}

.button-file input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.button-text {
  outline: 0;
  outline-offset: 0;
  border: none;
  border-radius: 4px;
  text-transform: none;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  cursor: pointer;
  transition: all 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0 15px;
  height: 30px;
  font-weight: 400;
  font-size: 14px;
  flex-shrink: 0;
  position: relative;
}
.button-text.button-file {
  line-height: 30px;
  display: inline-flex;
}
.button-text.button_size_xl {
  height: 60px;
  border-radius: 8px;
  padding: 0 30px;
  font-size: 24px;
}
.button-text.button-text_default {
  border: 1px solid #757575;
  color: #757575;
  background-color: transparent;
}
.button-text.button-text_default:hover {
  color: #ffffff;
  background-color: #757575;
}
.button-text.button-text_default:active {
  color: #f5f5f5;
  background-color: #616161;
}
.button-text.button-text_light {
  border: 2px solid #ffffff;
  color: #ffffff;
  background-color: transparent;
}
.button-text.button-text_light:hover {
  color: #eeeeee;
  background-color: rgba(255, 255, 255, 0.38);
}
.button-text.button-text_primary {
  color: #ffffff;
  background-color: #2196f3;
}
.button-text.button-text_primary:hover {
  color: #ffffff;
  background-color: #37a1f4;
}
.button-text.button-text_primary:active {
  color: #f5f5f5;
  background-color: #1e87db;
}
.button-text.button-text_confirm {
  color: #ffffff;
  background-color: #4caf50;
}
.button-text.button-text_confirm:hover {
  color: #ffffff;
  background-color: #5eb762;
}
.button-text.button-text_confirm:active {
  color: #f5f5f5;
  background-color: #449e48;
}
.button-text.button-text_danger {
  border: 1px solid #f3212b;
  color: #f3212b;
  background-color: transparent;
}
.button-text.button-text_danger:hover {
  color: #ffffff;
  background-color: #f3212b;
}
.button-text.button-text_danger:active {
  color: #f5f5f5;
  background-color: #db1e27;
}
.button-text.button-text_warning {
  border: 1px solid #fbc02d;
  color: #fbc02d;
  background-color: transparent;
}
.button-text.button-text_warning:hover {
  color: #ffffff;
  background-color: #fbc02d;
}
.button-text.button-text_warning:active {
  color: #f5f5f5;
  background-color: #f9a825;
}
.button-text.button-text_simple-light {
  padding: 0;
  color: #ffffff;
  background-color: transparent;
  font-weight: 500;
}
.button-text.button-text_simple-light:hover {
  color: rgba(255, 255, 255, 0.75);
}
.button-text:disabled {
  color: #6d6a67;
  background-color: #f0f0f0;
  border-color: #868381;
}
.button-text:disabled:hover {
  color: #6d6a67;
  background-color: #f0f0f0;
  border-color: #868381;
}
.button-text:disabled:active {
  color: #6d6a67;
  background-color: #f0f0f0;
  border-color: #868381;
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
.button-icon.button-icon_circle {
  border-radius: 50%;
  border: 2px solid transparent;
  padding: 8px;
}
.button-icon.button-icon_circle:disabled {
  border-color: #9e9e9e;
  color: #9e9e9e;
  background-color: #e0e0e0;
}
.button-icon.button-icon_circle:disabled:hover {
  border-color: #9e9e9e;
  color: #9e9e9e;
  background-color: #e0e0e0;
}
.button-icon.button-icon_circle:disabled:active {
  border-color: #9e9e9e;
  color: #9e9e9e;
  background-color: #e0e0e0;
}
.button-icon.button-icon_default {
  color: #000000;
  background-color: transparent;
}
.button-icon.button-icon_default:hover {
  color: #6d6a67;
  background-color: rgba(12, 6, 2, 0.04);
}
.button-icon.button-icon_default:active {
  color: #6d6a67;
  background-color: rgba(12, 6, 2, 0.12);
}
.button-icon.button-icon_default.button-icon_circle {
  border: 0;
  padding: 10px;
  color: #6d6a67;
  background-color: transparent;
}
.button-icon.button-icon_default.button-icon_circle:hover {
  color: #241f1b;
  background-color: rgba(12, 6, 2, 0.04);
}
.button-icon.button-icon_default.button-icon_circle:active {
  color: #0c0602;
  background-color: rgba(12, 6, 2, 0.12);
}
.button-icon.button-icon_material {
  color: #000;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.button-icon.button-icon_material:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.button-icon.button-icon_material:active {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.button-icon.button-icon_simple {
  padding: 0;
  color: #6d6a67;
  background-color: transparent;
}
.button-icon.button-icon_simple:hover {
  color: #2196f3;
}
.button-icon.button-icon_simple[selected] {
  color: #2196f3;
}
.button-icon.button-icon_hover-action {
  color: #6d6a67;
  background-color: transparent;
}
.button-icon.button-icon_hover-action:hover {
  color: black;
}
.button-icon.button-icon_simple-light {
  padding: 0;
  color: #ffffff;
  background-color: transparent;
}
.button-icon.button-icon_simple-light:hover {
  color: rgba(255, 255, 255, 0.75);
}
.button-icon.button-icon_simple-light:active {
  color: rgba(255, 255, 255, 0.6);
}
.button-icon.button-icon_primary {
  color: #2196f3;
  background-color: transparent;
}
.button-icon.button-icon_primary:hover {
  color: #37a1f4;
  background-color: rgba(33, 150, 243, 0.08);
}
.button-icon.button-icon_primary:active {
  color: #1e87db;
  background-color: rgba(33, 150, 243, 0.38);
}
.button-icon.button-icon_primary.button-icon_circle {
  color: #ffffff;
  border-color: #2196f3;
  background-color: #2196f3;
}
.button-icon.button-icon_primary.button-icon_circle:hover {
  color: #ffffff;
  border-color: #37a1f4;
  background-color: #37a1f4;
}
.button-icon.button-icon_primary.button-icon_circle:active {
  color: rgba(255, 255, 255, 0.9);
  border-color: #1e87db;
  background-color: #1e87db;
}
.button-icon.button-icon_grey {
  color: #6d6a67;
  background-color: transparent;
}
.button-icon.button-icon_grey:hover {
  color: #000;
}
.button-icon.button-icon_grey:active {
  color: #000;
}
.button-icon.button-icon_grey.button-icon_circle {
  border: 0;
  padding: 10px;
  color: #6d6a67;
  background-color: #d8d7d7;
}
.button-icon.button-icon_grey.button-icon_circle:hover {
  color: #6d6a67;
  background-color: #ecebeb;
}
.button-icon.button-icon_grey.button-icon_circle:active {
  color: #6d6a67;
  background-color: #e2e1e1;
}
.button-icon.button-icon_light {
  background-color: rgba(255, 255, 255, 0.75);
}
.button-icon.button-icon_light:hover {
  background-color: #ffffff;
}
.button-icon.button-icon_light:active {
  background-color: rgba(255, 255, 255, 0.6);
}
.button-icon.button-icon_light.button-icon_circle {
  border-color: #ffffff;
  color: #ffffff;
  background-color: transparent;
}
.button-icon.button-icon_light.button-icon_circle:hover {
  color: #0c0602;
  background-color: #ffffff;
}
.button-icon.button-icon_light.button-icon_circle:active {
  border-color: rgba(255, 255, 255, 0.9);
  color: #0c0602;
  background-color: rgba(255, 255, 255, 0.9);
}
.button-icon.button-icon_dark {
  background-color: rgba(0, 0, 0, 0.75);
}
.button-icon.button-icon_dark:hover {
  background-color: black;
}
.button-icon.button-icon_dark:active {
  background-color: rgba(12, 6, 2, 0.75);
}
.button-icon.button-icon_cover {
  color: #fff;
  background-color: rgba(12, 6, 2, 0.6);
}
.button-icon.button-icon_cover:hover {
  color: #fff;
  background-color: rgba(12, 6, 2, 0.75);
}
.button-icon.button-icon_cover:active {
  color: rgba(255, 255, 255, 0.75);
  background-color: rgba(12, 6, 2, 0.75);
}
.button-icon.button-icon_confirm {
  color: #4caf50;
  background-color: transparent;
}
.button-icon.button-icon_confirm:hover {
  color: #4caf50;
  background-color: rgba(76, 175, 80, 0.08);
}
.button-icon.button-icon_confirm:active {
  color: #449e48;
  background-color: rgba(76, 175, 80, 0.38);
}
.button-icon.button-icon_confirm.button-icon_circle {
  color: #ffffff;
  border-color: #4caf50;
  background-color: #4caf50;
}
.button-icon.button-icon_confirm.button-icon_circle:hover {
  color: #ffffff;
  border-color: #5eb762;
  background-color: #5eb762;
}
.button-icon.button-icon_confirm.button-icon_circle:active {
  color: rgba(255, 255, 255, 0.9);
  border-color: #449e48;
  background-color: #449e48;
}
.button-icon.button-icon_danger {
  color: #f3212b;
  background-color: transparent;
}
.button-icon.button-icon_danger:hover {
  color: #f3212b;
  background-color: rgba(244, 67, 54, 0.08);
}
.button-icon.button-icon_danger:active {
  color: #db1e27;
  background-color: rgba(244, 67, 54, 0.38);
}
.button-icon.button-icon_danger.button-icon_circle {
  color: #f3212b;
  border-color: #f3212b;
  background-color: transparent;
}
.button-icon.button-icon_danger.button-icon_circle:hover {
  color: #ffffff;
  background-color: #f3212b;
}
.button-icon.button-icon_danger.button-icon_circle:active {
  color: rgba(255, 255, 255, 0.9);
  border-color: #db1e27;
  background-color: #db1e27;
}
.button-icon.button_active,
.button-icon.button_selected,
.button-icon.selected {
  color: #2196f3;
}
.button-icon.button_active:hover,
.button-icon.button_selected:hover,
.button-icon.selected:hover {
  color: #37a1f4;
}
.button-icon[disabled] {
  color: #9e9b9a;
  background-color: transparent;
}
.button-icon[disabled]:hover,
.button-icon[disabled]:active {
  color: #9e9b9a;
  background-color: transparent;
}
.button-icon[admin-only] {
  position: relative;
  background-color: #f990ca;
  color: #241f1b;
}
.button-icon[admin-only]:hover {
  color: #6d6a67;
  background-color: #fbbcdf;
}

.button-icon_active {
  color: #2196f3;
}
.button-icon_active:hover {
  color: #2196f3;
  background-color: rgba(12, 6, 2, 0.04);
}
.button-icon_active:active {
  color: #1e87db;
  background-color: rgba(12, 6, 2, 0.12);
}

.button-icon_like {
  color: #6d6a67;
}
.button-icon_like:hover {
  color: #e57373;
  background-color: #ecebeb;
}
.button-icon_like:active {
  color: #dd4848;
  background-color: #d8d7d7;
}
.button-icon_like.button_selected,
.button-icon_like.selected {
  color: #f44336 !important;
}

.button-panel-icon {
  outline: 0;
  outline-offset: 0;
  border: none;
  text-transform: none;
  letter-spacing: normal;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  cursor: pointer;
  transition: all 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #000000;
  background-color: transparent;
  padding: 10px;
  height: 100%;
  flex-shrink: 0;
}
.button-panel-icon:hover {
  color: rgba(12, 6, 2, 0.6);
  background-color: rgba(12, 6, 2, 0.04);
}
.button-panel-icon.button-panel-icon_grey {
  color: #6d6a67;
  background-color: transparent;
}
.button-panel-icon.button-panel-icon_grey:hover {
  color: #000;
}
.button-panel-icon.button-panel-icon_simple {
  color: #000;
  background-color: transparent;
}
.button-panel-icon.button-panel-icon_simple:hover {
  color: #6d6a67;
  background-color: transparent;
}
.button-panel-icon.button-panel-icon_simple-grey {
  color: #6d6a67;
  background-color: transparent;
}
.button-panel-icon.button-panel-icon_simple-grey:hover {
  color: #2196f3;
  background-color: transparent;
}
.button-panel-icon.button-panel-icon_light {
  color: #fff;
  background-color: transparent;
}
.button-panel-icon.button-panel-icon_light:hover {
  color: #fff;
  background-color: rgba(255, 255, 255, 0.16);
}
.button-panel-icon.button-panel-icon_light:active {
  color: #eeeeee;
  background-color: rgba(255, 255, 255, 0.16);
}
.button-panel-icon.button-panel-icon_hover-action {
  color: #6d6a67;
  background-color: transparent;
}
.button-panel-icon.button-panel-icon_hover-action:hover {
  color: black;
}
.button-panel-icon.button_active,
.button-panel-icon.button_selected,
.button-panel-icon.selected {
  color: #2196f3;
}
.button-panel-icon.button_active:hover,
.button-panel-icon.button_selected:hover,
.button-panel-icon.selected:hover {
  color: #37a1f4;
}
.button-panel-icon[disabled] {
  color: #9e9b9a;
  background-color: transparent;
}
.button-panel-icon[disabled]:hover,
.button-panel-icon[disabled]:active {
  color: #9e9b9a;
  background-color: transparent;
}

.button-panel-like {
  color: #6d6a67;
}

.button-panel-share {
  color: #6d6a67;
}

.button-panel-like:hover {
  color: rgba(244, 67, 54, 0.54);
  background-color: transparent;
}

.button-panel-share:hover {
  color: rgba(33, 150, 243, 0.54);
  background-color: transparent;
}

.button__counter {
  font-weight: 400;
  font-size: 14px;
  margin-left: 5px;
}

.button_selected > .button__counter,
.selected > .button__counter {
  font-weight: 700;
}

.button_selected.button-panel-like,
.selected.button-panel-like {
  color: #f44336;
}

.button_selected.button-panel-share,
.selected.button-panel-share {
  color: #2196f3;
}

.button-panel-text {
  display: flex;
  align-items: center;
  outline: 0;
  outline-offset: 0;
  border: none;
  text-transform: none;
  overflow-x: hidden;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  cursor: pointer;
  transition: all 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: 500;
  font-size: 14px;
  color: #000;
  background-color: transparent;
  padding: 0 10px;
  height: 100%;
  flex-shrink: 0;
}
.button-panel-text:hover {
  color: rgba(12, 6, 2, 0.6);
  background-color: rgba(12, 6, 2, 0.04);
}
.button-panel-text > :first-child {
  margin-right: 10px;
}
.button-panel-text.button-panel-text_simple {
  color: #0c0602;
  background-color: transparent;
}
.button-panel-text.button-panel-text_simple:hover {
  color: #6d6a67;
  background-color: transparent;
}
.button-panel-text.button-panel-text_light {
  color: #fff;
  background-color: transparent;
}
.button-panel-text.button-panel-text_light:hover {
  color: rgba(255, 255, 255, 0.75);
  background-color: transparent;
}
.button-panel-text.button-panel-text_light:active {
  color: rgba(255, 255, 255, 0.54);
  background-color: transparent;
}

.button_card-action,
.button-group.button-group_card-action {
  position: absolute;
  top: 5px;
  right: 5px;
}

.button-group {
  display: inline-flex;
  position: relative;
  align-items: center;
}
.button-group.button-group_hidden {
  display: none;
}
.button-group.button-group_receipt {
  background-color: rgba(33, 150, 243, 0.16);
  width: 100%;
  height: 40px;
  border-radius: 3px;
}
.button-group.button-group_modal {
  width: 100%;
  padding: 10px 10px 20px;
}

.button-group_indent-right {
  margin-right: 10px;
}

.button-block {
  display: flex;
  align-items: center;
  justify-content: center;
  outline: 0;
  outline-offset: 0;
  border: none;
  text-transform: none;
  letter-spacing: normal;
  overflow-x: hidden;
  white-space: nowrap;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  cursor: pointer;
  transition: all 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  height: 30px;
  padding: 0;
  flex-shrink: 0;
}
.button-block.button-block_default {
  height: 40px;
  color: #2196f3;
  background-color: transparent;
  border-radius: 3px;
}
.button-block.button-block_default:hover {
  color: #2196f3;
  background-color: rgba(33, 150, 243, 0.1);
}
.button-block.button-block_modal {
  height: 40px;
  color: #2196f3;
  background-color: rgba(33, 150, 243, 0.2);
}
.button-block.button-block_modal:hover {
  color: #37a1f4;
  background-color: rgba(33, 150, 243, 0.1);
}
.button-block.button-block_modal > .icon {
  margin-right: 5px;
}
.button-block.button-block_media-comments {
  height: 40px;
  color: #2196f3;
  background-color: transparent;
}
.button-block.button-block_media-comments:hover {
  color: #fff;
  background-color: #2196f3;
}
.button-block.button-block_global-search {
  height: 40px;
  color: #fff;
  background-color: #2196f3;
  padding: 0 10px;
  justify-content: space-between;
}
.button-block.button-block_global-search:hover {
  background-color: #64b5f6;
}
.button-block .button-block__counter {
  margin: 0 5px;
}
.button-block .counter {
  display: contents;
}
.button-block.button-block_separate {
  border-top: 1px solid #d8d7d7;
  height: 41px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.button-block.button-block_separate:first-child {
  border-bottom: 1px solid #d8d7d7;
  border-top: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.button-block[admin-only] {
  position: relative;
  background-color: rgba(243, 33, 148, 0.5);
  color: #241f1b;
}
.button-block[admin-only]:hover {
  color: #6d6a67;
  background-color: rgba(243, 33, 148, 0.3);
}

.button-icon-text {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  padding: 5px;
  border-radius: 3px;
  transition: background-color 0.2s, color 0.2s;
  position: relative;
}
.button-icon-text.button_selected,
.button-icon-text.selected {
  font-weight: 700;
}
.button-icon-text.button-icon-text_comment {
  color: #6d6a67;
}
.button-icon-text.button-icon-text_comment > .icon {
  margin-right: 5px;
}
.button-icon-text.button-icon-text_comment:hover {
  color: #6d6a67;
  background-color: rgba(36, 31, 27, 0.04);
}
.button-icon-text.button-icon-text_share {
  color: #6d6a67;
}
.button-icon-text.button-icon-text_share > .icon {
  margin-right: 5px;
}
.button-icon-text.button-icon-text_share:hover {
  color: #64b5f6;
  background-color: rgba(36, 31, 27, 0.04);
}
.button-icon-text.button-icon-text_share.button_selected,
.button-icon-text.button-icon-text_share.selected {
  color: #2196f3;
}
.button-icon-text.button-icon-text_like {
  color: #6d6a67;
}
.button-icon-text.button-icon-text_like > .icon {
  margin-right: 5px;
}
.button-icon-text.button-icon-text_like:hover {
  color: #e57373;
  background-color: rgba(36, 31, 27, 0.04);
}
.button-icon-text.button-icon-text_like.button_selected,
.button-icon-text.button-icon-text_like.selected {
  color: #f44336;
}
.button-icon-text > .icon {
  margin-right: 5px;
  font-size: 20px;
}
.button-icon-text.button-icon-text_primary {
  line-height: 20px;
  padding: 5px 10px 5px 5px;
  color: #ffffff;
  background-color: #2196f3;
}
.button-icon-text.button-icon-text_primary:hover {
  color: #ffffff;
  background-color: #37a1f4;
}
.button-icon-text.button-icon-text_primary:active {
  color: #f5f5f5;
  background-color: #1e87db;
}

svg[data-type="btn btn_light"] {
  cursor: pointer;
}
svg[data-type="btn btn_light"] #svg-button__rect {
  transition: fill-opacity 0.3s;
}
svg[data-type="btn btn_light"]:hover #svg-button__rect {
  fill-opacity: 0.84;
}
svg[data-type="btn btn_light"]:active #svg-button__rect {
  fill-opacity: 0.62;
}

.btn-cover {
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  height: 150px;
  width: 300px;
  cursor: pointer;
}
.btn-cover .btn-cover__overlay {
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  background-color: rgba(255, 255, 255, 0.6);
  transition: opacity 0.2s, background-color 0.2s;
}
.btn-cover .btn-cover__overlay-content {
  position: relative;
  z-index: 2;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn-cover .btn-cover__overlay-content .btn-cover__overlay-icon {
  color: #7ac0f8;
}
.btn-cover .btn-cover__overlay-content .btn-cover__overlay-text {
  color: #2196f3;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.btn-cover .btn-cover__overlay-content > * + * {
  margin-top: 10px;
}
.btn-cover .btn-cover__cover {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: relative;
  z-index: 0;
}
.btn-cover .btn-cover__input {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  white-space: nowrap;
  border: 0;
  opacity: 0;
}
.btn-cover[data-state="empty"] {
  border: 1px solid #d8d7d7;
}
.btn-cover[data-state="empty"] .btn-cover__cover {
  display: none;
}
.btn-cover[data-state="empty"]:hover .btn-cover__overlay {
  background-color: #e9f5fe;
}
.btn-cover[data-state="median"] {
  border: 1px solid #d8d7d7;
}
.btn-cover[data-state="median"] .btn-cover__cover {
  display: initial;
  opacity: 0.5;
}
.btn-cover[data-state="median"] .btn-cover__overlay {
  opacity: 0;
}
.btn-cover[data-state="median"] .btn-cover__overlay .btn-cover__overlay-icon {
  color: #55514e;
}
.btn-cover[data-state="median"] .btn-cover__overlay .btn-cover__overlay-text {
  color: #0c0602;
}
.btn-cover[data-state="median"]:hover .btn-cover__overlay {
  opacity: 1;
}
.btn-cover[data-state="filled"] .btn-cover__cover {
  display: initial;
}
.btn-cover[data-state="filled"] .btn-cover__overlay {
  opacity: 0;
}
.btn-cover[data-state="filled"] .btn-cover__overlay .btn-cover__overlay-icon {
  color: #55514e;
}
.btn-cover[data-state="filled"] .btn-cover__overlay .btn-cover__overlay-text {
  color: #0c0602;
}
.btn-cover[data-state="filled"]:hover .btn-cover__overlay {
  opacity: 1;
}
.btn-cover[data-name="album-cover"] {
  height: 248px;
  width: 440px;
}
.btn-cover[data-name="video-poster"] {
  height: 325px;
  width: 235px;
}
.btn-cover[data-name="episode"] {
  height: 248px;
  width: 440px;
}
.btn-cover[data-name="livecard"] {
  height: 150px;
  width: 230px;
}
.btn-cover[data-name="livecard"][data-state="filled"] {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
  background-color: white;
}
.btn-cover[data-name="livecard"][data-state="filled"] .btn-cover__overlay {
  display: none;
}
.btn-cover[data-name="livecard"][data-state="filled"]:hover {
  -webkit-transform: translateY(-3px);
  transform: translateY(-3px);
}
.btn-cover[data-name="livecard"][data-state="filled"]:hover
  .btn-cover__overlay {
  opacity: 0;
}

.title-outside-section {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin: 15px 0 10px;
  padding: 0 10px;
}
.title-outside-section.title-outside-section_align_left {
  justify-content: flex-start;
  text-align: start;
}
.title-outside-section.title-outside-section_align_right {
  justify-content: flex-end;
  text-align: end;
}
.title-outside-section.title-outside-section_between {
  justify-content: space-between;
}
.title-outside-section .title-outside-section__title {
  display: inline;
  font-weight: 400;
  font-size: 21px;
  color: #000;
}
.title-outside-section .title-outside-section__counter {
  display: inline;
  font-weight: 400;
  font-size: 21px;
  color: #6d6a67;
  margin-left: 8px;
}
</style>
