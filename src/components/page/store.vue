<template>
  <div id="store">
    <p>{{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>

import store from '@/store/store'

export default {
  name: 'Store',
  computed: {
    count () {
      return this.$store.state.count
      // 或者写成（全局）： return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
