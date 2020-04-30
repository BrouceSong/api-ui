<template>
  <el-header height="auto"></el-header>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      users: {
        username: ''
      }
    }
  },
  mounted () {
    this.loadUsers()
  },
  methods: {
    loadUsers () {
      var This = this
      var token = This.$cookie.get('token')
      axios.get('http://49.232.18.147:8080/v1/user', {
        params: {
          token: token
        }
      }
      ).then(function (res) {
        res.data.data.username = res.data.data.username || ''
        This.users = res.data.data
        console.log(This.users)
      }).catch(function (error) {
        This.$message.error(error)
      })
    }
  }
}
</script>

<style>
#app .el-header {
  padding: 0px;
}
#app .el-menu {
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  z-index: 9999;
  top: 0;
  width: 100%;
  font-size: 50px;
  line-height: 60px;
}
</style>
