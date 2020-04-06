<template>
  <div id="app">
    <el-container>
      <Header />
      <slot />
      <el-footer>
      </el-footer>
      <el-backtop visibility-height=200>
      </el-backtop>
    </el-container>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    Header
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    getTop () {
      console.log(1111)
      let timer = setInterval(() => {
        let top = document.documentElement.scrollTop
        let speed = Math.ceil(top / 5)
        document.documentElement.scrollTop = top - speed
        if (top === 0) {
          clearInterval(timer)
        }
      }, 20)
    }
  }
}
</script>
<style>
.el-backtop {
  index:8888;
}
</style>
