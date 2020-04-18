<template>
  <div id="login"
    v-loading="loading"
    element-loading-text="登陆中..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <el-form class="login-box">
      <h3 class="login-title">欢迎使用第三方登录</h3>
      <el-form-item class="login-third-list" prop="github">
        <svg type="1" @click="onLogin" class="login-third-icon" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg="">
            <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
        </svg>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      activeIndex: '4',
      loading: false
    }
  },
  mounted () {
    var code = this.$route.query.code
    this.loadLogin(code)
  },
  methods: {
    onLogin (e) {
      var This = this
      This.$cookie.set('token', '')
      var type = e.target.getAttribute('type')
      axios.get('http://49.232.18.147:8080/v1/login', {
        params: {
          type: type
        }
      }).then(function (res) {
        location.href = res.data.data.url
      }).catch(function (error) {
        This.$message.error(error)
      })
    },
    loadLogin (code) {
      if (!code) {
        return
      }
      var This = this
      var token = This.$cookie.get('token')
      if (token) {
        This.$message.error('已登陆')
        This.$router.push({path: '/'})
        return
      }
      This.loading = true
      axios.get('http://49.232.18.147:8080/v1/callback', {
        params: {
          code: code
        }
      }).then(function (res) {
        This.$cookie.set('token', res.data.data.token, 7 * 3600)
        This.loading = false
      }).catch(function (error) {
        This.$message.error(error)
        This.loading = false
      })
    }
  }
}
</script>

<style >
#login {
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background-image: url(/static/image/banner_3.jpg);
}

.login-box {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #DCDFE6;
  width: 350px;
  margin: 180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 0 0 25px #909399;
}

.login-title {
  text-align: center;
  margin: 0 auto 40px auto;
  color: #303133;
}

.login-third-icon {
    cursor: pointer;
    width:50px;
}
</style>
