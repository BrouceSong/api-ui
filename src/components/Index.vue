<template>
  <el-main>
    <el-row>
      <el-carousel height="600px" direction="vertical">
          <el-carousel-item v-for="item in banners" :key="item">
            <img :src="item">
          </el-carousel-item>
      </el-carousel>
    </el-row>
    <el-row class="index-content">
        <el-col :span="13" :offset="2">
            <el-row :gutter="12" v-for="v in lists" :key="v">
                <el-col>
                    <el-card class="content-list-card">
                        {{v.desc}}
                    </el-card>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="6" :offset="1">
            <el-card class="right-hot-card">
              <div slot="header" >
                <span>热门推荐</span>
              </div>
              <div v-for="v in lists" :key="v" class="hot-card-list">
                {{v.desc | ellipsis(v.desc)}}
                <el-divider></el-divider>
              </div>
            </el-card>
        </el-col>
    </el-row>
  </el-main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '1',
      banners: [
        '/static/image/banner_1.jpg',
        '/static/image/banner_2.jpg',
        '/static/image/banner_3.jpg'
      ],
      lists: [],
      username: 'BrouceSong',
      gits: []
    }
  },
  filters: {
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 20) {
        return value.slice(0, 20) + '...'
      }
      return value
    }
  },
  mounted () {
    this.loadlist()
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    loadlist () {
      var This = this
      axios.get('http://49.232.18.147:8080/v1/post/list', {
        params: {}
      }
      ).then(function (res) {
        This.lists = res.data.data
      }).catch(function (error) {
        This.$message.error(error)
      })
    }
  }
}
</script>

<style>
#app .el-main {
  padding:0;
}
.content-list-card {
  width:100%;
  height:auto;
  margin: 10px auto;
}
.right-hot-card {
  text-align: left;
  margin:12px 0 0;
}
.hot-card-list {
  margin:0px 10px 10px 0
}
#app .index-content {
  position: absolute;
  top: 400px;
  z-index: 8777;
}
.index-content .el-card {
  background: rgba(255, 255, 255, 0.9);
}
.el-menu.el-menu--horizontal {
    border-bottom: 0;
}
</style>
