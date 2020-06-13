<template>
  <div id="app">
    <van-button
      class="button"
      type="primary"
      to="/"
      block
      replace
      :disabled="$route.path === '/'"
      @touchstart="touchstart('page-back')"
      >Home</van-button
    >
    <van-button
      class="button"
      type="primary"
      to="About"
      block
      replace
      :disabled="$route.path === '/About'"
      @touchstart="touchstart('page-go')"
      >About</van-button
    >
    <van-button class="button" type="primary" block @click="changeLocale('zh')"
      >中文</van-button
    >
    <van-button class="button" type="primary" block @click="changeLocale('en')"
      >英文</van-button
    >
    <client></client>
  </div>
</template>

<script>
import Client from '@/layout/client'
import i18n from '@/locale/index'
import { mapMutations } from 'vuex'
import { SET_ROUTER_MODE } from '@/store/types'

export default {
  name: 'App',
  components: {
    Client
  },
  methods: {
    ...mapMutations([SET_ROUTER_MODE]),
    changeLocale(language) {
      i18n.locale = language
    },
    touchstart(mode) {
      const { SET_ROUTER_MODE } = this
      SET_ROUTER_MODE(mode)
    }
  }
}
</script>

<style lang="less">
#app {
  padding: 10px 20px;
}
button.button {
  margin-top: 10px;
}
</style>
