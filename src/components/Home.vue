<template>
  <div class="home">
    <el-switch
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      value1: true,
      value2: true
    }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
