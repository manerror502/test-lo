<template>
  <div id="app">
    <Header />
    <Actions />
    <transition name="scale">
      <CallModal v-if="callOn" />
    </transition>
  </div>
</template>

<script>
import Header from './components/AppHeader'
import Actions from './components/AppActions'
import CallModal from './components/AppCallModal'

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    Actions,
    CallModal
  },
  computed: {
    ...mapGetters(['callOptions']),
    callOn () {
      return Object.keys(this.callOptions).length
    }
  },
  mounted () {
    // console.log(this.$store.state)
  }
}
</script>

<style lang="scss">
@import "assets/scss/main.scss";

#app {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
}

img {
  max-width: 100%;
  max-height: 100%;
  display: block;
}

.scale-enter-active {
  transition: all 0.3s ease;
}
.scale-leave-active {
  transition: all 0.3s ease;
}
.scale-enter,
.scale-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
</style>
