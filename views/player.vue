<template>
  <div>
    <el-row :gutter="20" type="flex" align="middle">
      <el-col :span="4" style="text-align: center;"><i class="el-icon-s-home" @click="goMenu()"></i></el-col>
      <el-col :span="16" style="text-align: center;">
        <h2>{{$route.params.name}}</h2>
      </el-col>
      <el-col :span="4" style="text-align: center;"><i class="el-icon-search"></i></el-col>
    </el-row>
    <el-row :gutter="16" type="flex" justify="center">
      <img :src="$route.params.image"></i>
    </el-row>
    <el-row :gutter="16" type="flex" align="middle" justify="space-between">
      <el-col :span=" 4" style="text-align: center;"><i class="el-icon-star-off"></i></el-col>
      <el-col :span="4" style="text-align: center;"><i class="el-icon-download"></i></el-col>
    </el-row>
    <div>
      <div class="author">
        <span>{{$route.params.writer}}</span>
      </div>
    </div>
    <div class="audioClass">

      <audio controls :src="playerUrl"></audio>
    </div>
  </div>
</template>

<script>
  import axios from '@/plugins/axios.js'

  export default {
    data () {
      return {
        playerUrl: {}
      }
    },
    mounted () {
      this.getPlayerList();
    },
    methods: {
      getPlayerList () {
        //播放列表
        axios({
          method: 'get',
          url: '/song/url',
          params: {
            id: this.$route.params.id
          }
        }).then(res => {
          this.playerUrl = res.data.data[0].url;
        })

        // 歌词，尚未完工
        axios({
          method: 'get',
          url: '/lyric',
          params: {
            id: this.$route.params.id
          }
        }).then(res => {
          // console.log(res);
        })
      },
      goMenu () {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  img {
    width: 170px;
    height: 170px;
    border-radius: 0;
  }

  i {
    font-size: 30px;
  }

  .audioClass {
    text-align: center;
    margin-top: 50px;
  }

  .author {
    text-align: center;
    margin: 10px 0;
  }
</style>