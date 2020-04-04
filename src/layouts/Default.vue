<template>
  <div id="app">
    <el-container>
      <Header />
      <el-main>
        <slot />
      </el-main>
      <el-footer>
      </el-footer>
      <el-backtop visibility-height=200></el-backtop>
    </el-container>
  </div>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'DefaultLayout',
  components: {
    Header
  }
}
</script>
