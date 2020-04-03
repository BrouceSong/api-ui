
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<template>
  <div id="app">
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>
<!-- import Vue before Element -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<!-- import JavaScript -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
export default {
  name: 'Index',
  el: '#app',
  data () {
    return {
      visible: false
    }
  }
}
