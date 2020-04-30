<template>
  <div id="app">
    <el-container>
      <Header />
      <slot />
      <Footer />
      <el-backtop visibility-height="200"></el-backtop>
    </el-container>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    getTop () {
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
#app .el-backtop {
  z-index: 8888;
}
</style>
