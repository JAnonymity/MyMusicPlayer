<template>
  <div class="collection-block">
    <div class="block-padding">
      <!-- 推荐歌单 -->
      <div class="title">
        <el-page-header @back="goBack" :content="albumsMusic.album.name">
        </el-page-header>
      </div>
      <el-row :gutter="10">

      </el-row>
    </div>
  </div>
</template>

<script>
  import axios from '@/plugins/axios.js'
  export default {
    data () {
      return {
        albumsMusic: {},
      }
    },
    mounted () {
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
          this.albumsMusic = res.data;
          console.log(this.albumsMusic);
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