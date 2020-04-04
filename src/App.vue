<template>
  <div id="app">
    <el-container>
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
            <el-menu-item index="1">首页</el-menu-item>
          </el-col>
          <el-col :span="1">
            <el-menu-item index="2">文章</el-menu-item>
          </el-col>
          <el-col :span="1" :offset="10">
            <el-menu-item index="3">消息</el-menu-item>
          </el-col>
          <el-col :span="2">
            <el-menu-item index="4">
              <el-link icon="el-icon-user" :underline="false">个人中心</el-link>
            </el-menu-item>
          </el-col>
        </el-row>
        </el-menu>
        <el-carousel height="500px" indicator-position="outside">
          <el-carousel-item v-for="item in banners" :key="item">
            <img :src="item">
          </el-carousel-item>
        </el-carousel>
      </el-header>
      <el-main>
        <el-row>
            <el-col :span="13" :offset="2">
                <el-row :gutter="12" v-for="v in lists" :key="v">
                    <el-col>
                        <el-card class="content-list-card">
                            {{v }}
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
                    {{v | ellipsis(v)}}
                  </div>
                </el-card>
            </el-col>
        </el-row>
      </el-main>
      <el-footer>
      </el-footer>
    </el-container>
    <el-backtop visibility-height="200"></el-backtop>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      musicDisc: null,
      activeIndex: '1',
      banners: [
        '/static/image/banner_1.jpg',
        '/static/image/banner_2.jpg',
        '/static/image/banner_3.jpg'
      ],
      lists: [
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……',
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……',
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……',
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……',
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……',
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……',
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……',
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……',
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……',
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……',
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……',
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……',
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……',
        '人生在世，我们常常产生想解释点什么的想法。然而，一旦解释起来，却发现任何人解释都是那样的苍白无力，甚至还会越抹越黑。因此，做人不需要解释，便成为智者的选择。山不解释自己的高度，并不影响它的耸立云端；海不解释自己的深度，并不影响它容纳百川；地不解释自己的厚度，但没有谁能取代她作为承载万物的地位……'
      ],
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
    this.loadGithub()
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    loadGithub () {
      var _This = this
      axios
        .get('https://api.github.com/users/' + this.username)
        .then(function (response) {
          _This.gits = response.data
          console.log('succeed', _This.gits)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
.content-list-card {
  width:100%;
  height:auto;
  margin: 10px auto;
}
.img {
    background-repeat: no-repeat;
    background-position:center center;
    background-size: cover;
    width:165px;
    height:105px;
}
.right-hot-card {
  text-align: left;
}
.hot-card-list {
  margin:0px 10px 10px 0
}
</style>
