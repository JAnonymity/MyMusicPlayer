<template>
  <div class="collection-block">
    <div class="block-padding">
      <!-- 推荐歌单 -->
      <div class="title">
        <el-page-header @back="goBack" :content="recommendBox.name">
        </el-page-header>
      </div>
      <div class="recommendTitle">
        <el-image :src="recommendBox.coverImgUrl">
          <div slot="error" class="image-slot">
            <i class="el-icon-picture-outline"></i>
          </div>
        </el-image>
      </div>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item,index) in recommendList" :key="index">
          <router-link tag="div" class="image"
            :to="{name:'player',params:{id:item.id,name:item.name,writer:item.ar[0].name,image:item.al.picUrl}}">
            <el-image :src="item.al.picUrl" lazy>
              <div slot="error" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <h5>{{item.al.name}}</h5>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import axios from '@/plugins/axios.js'
  export default {
    data () {
      return {
        recommendList: {},
        recommendBox: {},
      }
    },
    mounted () {
      this.getRecommendMusic();
    },
    methods: {
      // 获取歌单详情
      getRecommendMusic () {
        axios({
          method: 'get',
          url: '/playlist/detail',
          params: {
            id: this.$route.params.id
          }
        }).then(res => {
          this.recommendBox = res.data.playlist;
          this.recommendList = res.data.playlist.tracks;
          console.log(this.recommendList);
        })
      },
      goBack () {
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>
  .collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
  }

  .block-padding {
    background-color: #fff;
    padding: 10px 17px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
  }

  .recommendTitle {
    margin: 10px 0;
  }
</style>