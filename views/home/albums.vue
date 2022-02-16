<template>
  <div class="collection-block">
    <div class="block-padding">
      <!-- 推荐歌单 -->
      <div class="title">
        <el-page-header @back="goBack" :content="albumsMusic.name">
        </el-page-header>
      </div>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item,index) in albumsMusicList" :key="index">
          <router-link tag="div" class="image"
            :to="{name:'player',params:{id:item.id,name:item.name,writer:item.ar[0].name,image:item.al.picUrl}}">
            <el-image :src="item.al.picUrl" lazy>
              <div slot="placeHolder" class="image-slot">
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <h5>{{item.name}}</h5>
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
        albumsMusicList: [],
        albumsMusic: {},
      }
    },
    created () {
      this.getAlbumsMusic();
    },
    methods: {
      // 获取专辑内容
      getAlbumsMusic () {
        axios({
          method: 'get',
          url: '/album',
          params: {
            id: this.$route.params.id
          }
        }).then(res => {
          this.albumsMusicList = res.data.songs;
          this.albumsMusic = res.data.album;
          //console.log(this.albumsMusic);
          console.log(this.albumsMusicList);
          this.albumsMusic.name = this.albumsMusic.name.substring(0, 15) + '...';
        })
      },
      goBack () {
        this.$router.push('/');
      },
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

  .ablumsTitle {
    margin: 10px 0;
  }
</style>