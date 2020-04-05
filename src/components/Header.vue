<template>
  <el-header height="auto">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        text-color="#696969"
        active-text-color="#FFA500"
    >
    <el-row>
        <el-col :span="1" :offset="4">
            <router-link  to="/">
                <el-menu-item index="1">首页</el-menu-item>
            </router-link>
        </el-col>
        <el-col :span="1">
        <el-menu-item index="2">文章</el-menu-item>
        </el-col>
        <el-col :span="1" :offset="10">
        <el-menu-item index="3">消息</el-menu-item>
        </el-col>
        <el-col :span="2">
          <router-link  to="/login">
            <el-menu-item index="4">
                <el-link icon="el-icon-user" :underline="false">{{users.username || "个人中心"}}</el-link>
            </el-menu-item>
          </router-link>
        </el-col>
    </el-row>
    </el-menu>
  </el-header>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      users: [
        username: ''
      ]
    }
  },
  mounted () {
    this.loadUsers()
  },
  methods: {
    loadUsers () {
      var This = this
      var token = This.$cookie.get('token')
      axios.get('http://songwenwen.xyz:8080/v1/user', {
        params: {
          token: token
        }
      }
      ).then(function (res) {
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
  padding:0px;
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
