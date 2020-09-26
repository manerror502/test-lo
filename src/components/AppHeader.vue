<template>
  <header class="header">
    <div
      class="header__container"
      style="margin-left: 460px; margin-right: auto;"
    >
      <div class="header__logo">
        <a
          class="logo"
          href=""
        />
      </div>
      <div class="nav-header header__nav-header">
        <div class="nav-header__item nav-header__notification">
          <div class="icon icon_size_l lo_ic_main_bell" />
          <div class="icon icon_size_l lo_ic_main_bell_hover" />
        </div>
        <div class="nav-header__container">
          <a
            class="nav-header__item"
            href=""
          >
            <div class="icon icon_size_l lo_ic_main_home" />
            <div class="icon icon_size_l lo_ic_main_home_hover" />
          </a>
          <a
            class="nav-header__item"
            href=""
          >
            <div class="icon icon_size_l lo_ic_main_dialog" />
            <div class="icon icon_size_l lo_ic_main_dialog_hover" />
          </a>
          <a
            class="nav-header__item"
            href=""
          >
            <div class="icon icon_size_l lo_ic_main_friend" />
            <div class="icon icon_size_l lo_ic_main_friend_hover" />
          </a>
          <a
            class="nav-header__item"
            href=""
          >
            <div class="icon icon_size_l lo_ic_main_community" />
            <div class="icon icon_size_l lo_ic_main_community_hover" />
          </a>
          <a
            class="nav-header__item"
            href=""
          >
            <div class="icon icon_size_l lo_ic_main_photo" />
            <div class="icon icon_size_l lo_ic_main_photo_hover" />
          </a>
          <a
            class="nav-header__item"
            href=""
          >
            <div class="icon icon_size_l lo_ic_main_music" />
            <div class="icon icon_size_l lo_ic_main_music_hover" />
          </a>
          <a
            class="nav-header__item"
            href=""
          >
            <div class="icon icon_size_l lo_ic_main_tv" />
            <div class="icon icon_size_l lo_ic_main_tv_hover" />
          </a>
          <a
            class="nav-header__item"
            href=""
          >
            <div class="icon icon_size_l lo_ic_main_place" />
            <div class="icon icon_size_l lo_ic_main_place_hover" />
          </a>
          <a
            class="nav-header__item"
            href=""
          >
            <div class="icon icon_size_l lo_ic_main_event" />
            <div class="icon icon_size_l lo_ic_main_event_hover" />
          </a>
        </div>
        <div class="header-search nav-header__header-search">
          <div class="icon icon_style_white icon_size_l lo_ic_main_search" />
          <input
            class="input header-search__input"
            placeholder="Поиск по сайту"
          >
        </div>
        <div
          class="nav-header__item nav-header__search-toggle"
          onclick="headerSearch()"
        >
          <div class="icon icon_size_l lo_ic_main_search" />
        </div>
      </div>
      <div class="mini-profile header__mini-profile">
        <div
          class="avatar avatar_size_30"
          data-type="people"
        >
          <img
            class="img_setting_avatar"
            src=""
            alt=""
          >
        </div>
        <span class="mini-profile__name">Николай</span>
        <div class="icon icon_style_white icon_size_n lo_ic_expand_more" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
.icon {
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  font-size: 15px;
  color: #ffffff;
  text-decoration: none;
  flex-shrink: 0;
}

.img_setting_avatar {
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
}

.avatar {
  display: block;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #d7d7d7;
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
}

.avatar.avatar_size_30 {
  width: 30px;
  height: 30px;
}

.header {
  width: 100%;
  z-index: 10000;
  position: fixed;
  top: 0;
  background: rgba(12, 6, 2, 0.9);
}
.header::before {
  z-index: -1;
  content: "";
  -webkit-backdrop-filter: blur(3px) saturate(2);
  backdrop-filter: blur(3px) saturate(2);
}
.header .header__container {
  position: relative;
  box-sizing: border-box;
  width: 1000px;
  padding: 0 10px;
  height: 44px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header .header__logo {
  display: inline-flex;
  position: relative;
  align-items: center;
}
.header .header__nav-header {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
}
.header .header__mini-profile {
  display: inline-flex;
  position: relative;
  align-items: center;
}

.nav-header .nav-header__container {
  display: inline-flex;
}

.nav-header .nav-header__item {
  display: block;
  position: relative;
  text-decoration: none;
  padding: 7px 6px;
  background-color: transparent;
  color: #f0f0f0;
  cursor: pointer;
}
.nav-header .nav-header__item .icon {
  font-size: 30px;
}
.nav-header .nav-header__item:hover .lo_ic_main_bell_hover,
.nav-header .nav-header__item:hover .lo_ic_main_home_hover,
.nav-header .nav-header__item:hover .lo_ic_main_dialog_hover,
.nav-header .nav-header__item:hover .lo_ic_main_friend_hover,
.nav-header .nav-header__item:hover .lo_ic_main_community_hover,
.nav-header .nav-header__item:hover .lo_ic_main_photo_hover,
.nav-header .nav-header__item:hover .lo_ic_main_music_hover,
.nav-header .nav-header__item:hover .lo_ic_main_tv_hover,
.nav-header .nav-header__item:hover .lo_ic_main_place_hover,
.nav-header .nav-header__item:hover .lo_ic_main_event_hover,
.nav-header .nav-header__item:hover .lo_ic_main_news_hover {
  opacity: 0.4;
  transition: opacity 0.2s;
}

.nav-header .nav-header__notification {
  margin-right: 40px;
}
.nav-header .nav-header__notification.opened .lo_ic_main_bell_hover {
  opacity: 1;
}

.nav-header .nav-header__search-toggle {
  margin-left: 40px;
}

.nav-header .lo_ic_main_bell_hover,
.nav-header .lo_ic_main_home_hover,
.nav-header .lo_ic_main_dialog_hover,
.nav-header .lo_ic_main_friend_hover,
.nav-header .lo_ic_main_community_hover,
.nav-header .lo_ic_main_photo_hover,
.nav-header .lo_ic_main_music_hover,
.nav-header .lo_ic_main_tv_hover,
.nav-header .lo_ic_main_place_hover,
.nav-header .lo_ic_main_event_hover,
.nav-header .lo_ic_main_news_hover {
  opacity: 0;
  z-index: -1;
  position: absolute;
  top: 8px;
  color: #ffffff;
  transition: opacity 0.2s;
}

.header-search {
  width: 378px;
  position: relative;
  display: none;
  align-items: center;
  justify-content: flex-start;
}
.header-search .header-search__input {
  margin-left: 10px;
  width: 100%;
  color: #ffffff;
  border: 0;
}
.header-search .header-search__input::-webkit-input-placeholder {
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
}
.header-search .header-search__input:-ms-input-placeholder {
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
}
.header-search .header-search__input::-ms-input-placeholder {
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
}
.header-search .header-search__input::placeholder {
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
}
.header-search.header-search_show {
  display: flex;
}

.header__counter {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 8px;
  height: 14px;
  min-width: 14px;
  border-radius: 7px;
  padding: 0 4px;
  color: #fff;
  background-color: #2196f3;
  font-weight: 500;
  font-size: 10px;
  pointer-events: none;
  box-shadow: 0 0 0 2px #0c0602;
}

.mini-profile {
  padding: 0 10px;
  background-color: transparent;
  transition: background-color 0.2s;
  cursor: pointer;
}
.mini-profile:hover {
  background-color: rgba(255, 255, 255, 0.08);
}
.mini-profile .mini-profile__name {
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  margin: 0 10px;
}
.mini-profile > .icon {
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
  font-size: 15px;
}
.mini-profile.open > .icon {
  -webkit-transform: rotate(-180deg);
  transform: rotate(-180deg);
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}

/* header-animation */
.nav-header__container_hide .nav-header__item {
  -webkit-animation: nav-header__container_hide-animation 400ms both;
  animation: nav-header__container_hide-animation 400ms both;
  pointer-events: none;
}

.nav-header__container_hide .nav-header__item:nth-child(1) {
  -webkit-animation-delay: 300ms;
  animation-delay: 300ms;
}

.nav-header__container_hide .nav-header__item:nth-child(2) {
  -webkit-animation-delay: 280ms;
  animation-delay: 280ms;
}

.nav-header__container_hide .nav-header__item:nth-child(3) {
  -webkit-animation-delay: 245ms;
  animation-delay: 245ms;
}

.nav-header__container_hide .nav-header__item:nth-child(4) {
  -webkit-animation-delay: 210ms;
  animation-delay: 210ms;
}

.nav-header__container_hide .nav-header__item:nth-child(5) {
  -webkit-animation-delay: 175ms;
  animation-delay: 175ms;
}

.nav-header__container_hide .nav-header__item:nth-child(6) {
  -webkit-animation-delay: 140ms;
  animation-delay: 140ms;
}

.nav-header__container_hide .nav-header__item:nth-child(7) {
  -webkit-animation-delay: 105ms;
  animation-delay: 105ms;
}

.nav-header__container_hide .nav-header__item:nth-child(8) {
  -webkit-animation-delay: 70ms;
  animation-delay: 70ms;
}

.nav-header__container_hide .nav-header__item:nth-child(9) {
  -webkit-animation-delay: 35ms;
  animation-delay: 35ms;
}

.nav-header__container_hide .nav-header__item:nth-child(10) {
  -webkit-animation-delay: 15ms;
  animation-delay: 15ms;
}

.nav-header__container_show .nav-header__item {
  -webkit-animation: nav-header__container_show-animation 400ms both;
  animation: nav-header__container_show-animation 400ms both;
}

.nav-header__container_show .nav-header__item:nth-child(1) {
  -webkit-animation-delay: 0ms;
  animation-delay: 0ms;
}

.nav-header__container_show .nav-header__item:nth-child(2) {
  -webkit-animation-delay: 35ms;
  animation-delay: 35ms;
}

.nav-header__container_show .nav-header__item:nth-child(3) {
  -webkit-animation-delay: 70ms;
  animation-delay: 70ms;
}

.nav-header__container_show .nav-header__item:nth-child(4) {
  -webkit-animation-delay: 105ms;
  animation-delay: 105ms;
}

.nav-header__container_show .nav-header__item:nth-child(5) {
  -webkit-animation-delay: 140ms;
  animation-delay: 140ms;
}

.nav-header__container_show .nav-header__item:nth-child(6) {
  -webkit-animation-delay: 175ms;
  animation-delay: 175ms;
}

.nav-header__container_show .nav-header__item:nth-child(7) {
  -webkit-animation-delay: 210ms;
  animation-delay: 210ms;
}

.nav-header__container_show .nav-header__item:nth-child(8) {
  -webkit-animation-delay: 245ms;
  animation-delay: 245ms;
}

.nav-header__container_show .nav-header__item:nth-child(9) {
  -webkit-animation-delay: 280ms;
  animation-delay: 280ms;
}

.nav-header__container_show .nav-header__item:nth-child(10) {
  -webkit-animation-delay: 300ms;
  animation-delay: 300ms;
}

@-webkit-keyframes nav-header__container_show-animation {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: cubic-bezier(0.2727, 0.0986, 0.8333, 1);
    animation-timing-function: cubic-bezier(0.2727, 0.0986, 0.8333, 1);
  }
}

@keyframes nav-header__container_show-animation {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: cubic-bezier(0.2727, 0.0986, 0.8333, 1);
    animation-timing-function: cubic-bezier(0.2727, 0.0986, 0.8333, 1);
  }
}

@-webkit-keyframes nav-header__container_hide-animation {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: cubic-bezier(0.2727, 0.0986, 0.8333, 1);
    animation-timing-function: cubic-bezier(0.2727, 0.0986, 0.8333, 1);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
}

@keyframes nav-header__container_hide-animation {
  0% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-animation-timing-function: cubic-bezier(0.2727, 0.0986, 0.8333, 1);
    animation-timing-function: cubic-bezier(0.2727, 0.0986, 0.8333, 1);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(0.7);
    transform: scale(0.7);
  }
}

.header-search_show {
  -webkit-animation: header-search_show-animation 200ms ease-in forwards;
  animation: header-search_show-animation 200ms ease-in forwards;
}

@-webkit-keyframes header-search_show-animation {
  0% {
    opacity: 0;
    left: 30px;
  }
  40% {
    opacity: 1;
  }
  100% {
    left: 0;
    opacity: 1;
  }
}

@keyframes header-search_show-animation {
  0% {
    opacity: 0;
    left: 30px;
  }
  40% {
    opacity: 1;
  }
  100% {
    left: 0;
    opacity: 1;
  }
}

.page-bar-search_show {
  -webkit-animation: page-bar-search_show-animation 400ms ease-out both;
  animation: page-bar-search_show-animation 400ms ease-out both;
}

@-webkit-keyframes page-bar-search_show-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes page-bar-search_show-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.page-bar-search_hidden {
  -webkit-animation: page-bar-search_hidden-animation 400ms ease-in both;
  animation: page-bar-search_hidden-animation 400ms ease-in both;
}

@-webkit-keyframes page-bar-search_hidden-animation {
  0% {
    left: 0;
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    left: 30px;
    opacity: 0;
  }
}

@keyframes page-bar-search_hidden-animation {
  0% {
    left: 0;
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    left: 30px;
    opacity: 0;
  }
}
</style>
