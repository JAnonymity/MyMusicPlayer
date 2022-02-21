<template>
  <div>
    <el-input v-model="username" placeholder="请输入内容"></el-input>
    <el-input v-model="password" placeholder="请输入内容"></el-input>
    <el-button type="primary" @click="loginHandle()">主要按钮</el-button>
    <!-- 哈哈哈 -->
  </div>
</template>

<script>
  import axios from '@/plugins/axios.js'
  export default {
    name: 'mine',
    data () {
      return {
        username: '',
        password: '',
        validatedCode: [],
      }
    },
    methods: {
      loginHandle () {
        // // 发送验证码
        // axios({
        //   method: 'get',
        //   url: '/captcha/sent',
        //   params: {
        //     phone: this.username,
        //   }
        // }).then(res => {
        //   this.validatedCode = res;
        //   console.log(this.validatedCode);
        //   // console.log(this.bannerImages);
        // })

        // // 校验验证码
        // axios({
        //   method: 'get',
        //   url: '/captcha/verify',
        //   params: {
        //     phone: this.username,
        //     captcha:''
        //   }
        // }).then(res => {
        //   console.log(res);
        //   // console.log(this.bannerImages);
        // })

        // 登录接口
        axios({
          method: 'get',
          url: '/login/cellphone',
          params: {
            phone: this.username,
            password: this.password,
          }
        }).then(res => {
          console.log(res);
          // console.log(this.bannerImages);
        })
      },

    }
  }
</script>