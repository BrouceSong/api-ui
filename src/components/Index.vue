<template>
  <el-main>
    <el-row :gutter="20" class="content-list" v-for="(v,k) in contents" :key="k">
      <el-col class="content-name">{{v.name}}:</el-col>
      <el-col class="content-text" style="padding-left: 30px;">{{v.content}}</el-col>
    </el-row>
    <el-row :gutter="20" class="send-msg">
      <el-col :span="2">&gt;</el-col>
      <el-col :span="22">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="content"
          maxlength="100"
          show-word-limit
          rows="3"
          :clearable="true"
          resize="none"
          @keyup.enter.native="send"
        ></el-input>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'App',
  data () {
    return {
      contents: [
        {
          name: '张三',
          content: 'hello word'
        },
        {
          name: '李四',
          content: '别瞎BB'
        },
        {
          name: '王二麻子',
          content: '素质素质'
        },
        {
          name: '张三',
          content: '我说话,你个SB插什么嘴,不想听就GUN'
        },
        {
          name: '李四',
          content: 'CNM,你自己GUN吧'
        },
        {
          name: '小王',
          content: '.....'
        }
      ],
      username: 'BrouceSong',
      content: ''
    }
  },
  mounted () {
  },
  methods: {
    send (v) {
      var _This = this
      var content = _This.content.replace(/ +/g, '')
      content = _This.content.replace(/[\r\n]/g, '')
      if (!content) {
        _This.$message({
          message: '你还没有输入聊天信息哦!',
          type: 'warning'
        })
        _This.content = ''
        return false
      }
      _This.contents.push({
        name: '我',
        content: _This.content
      })
      _This.content = ''
    }
  }
}
</script>

<style>
#app .send-content {
  color: #ffffff;
}
#app .content-list {
  color: #ffffff;
  margin-bottom: 10px;
}
#app .content-text {
  padding: 10px 30px 0px;
}
#app .send-msg {
  color: #ffffff;
  position: fixed;
  bottom: 0px;
  padding: 20px;
  width: 800px;
}
</style>
