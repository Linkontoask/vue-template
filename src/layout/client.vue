<template>
  <section class="client-layout">
    <transition :name="routerMode" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'client',
  computed: {
    ...mapState(['routerMode'])
  }
}
</script>

<style scoped lang="less">
.client-layout {
  height: 100%;
  overflow: hidden;
}
</style>
