<template>
  <div>
    <div class="block-padding">
      <el-page-header class="backBox" @back="goBack" content="更多页面">
      </el-page-header>
      <el-row :gutter="10" v-if="$route.params.songType==1">
        <el-col :span="8" v-for="(item,index) in musicList" :key="index">
          <div class="image">
            <el-image :key="item.picUrl" :src="item.picUrl" lazy></el-image>
            <h5>{{item.name}}</h5>
            <el-tag type="success">{{item.artists[0].name}}</el-tag>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10" v-if="$route.params.songType==2">
        <el-col :span="8" v-for="(item,index) in chineseList" :key="index">
          <div class="image">
            <el-image :key="item.album.picUrl" :src="item.album.picUrl" lazy></el-image>
            <h5>{{item.name}}</h5>
            <el-tag type="success">{{item.artists[0].name}}</el-tag>
          </div>
        </el-col>
      </el-row>
      <el-backtop></el-backtop>
    </div>
  </div>
</template>

<script>
  import axios from '@/plugins/axios.js'
  import musicListView from './musicListView.vue'
  export default {
    name: 'more',
    data () {
      return {
        musicList: [],
        chineseList: []
      }
    },
    mounted () {
      this.getList();
    },
    methods: {
      getList () {
        axios({
          method: 'get',
          url: '/album/newest'
        }).then(res => {
          this.musicList = res.data.albums;
        })

        axios({
          method: 'get',
          url: '/top/song',
          params: {
            type: 7
          }
        }).then(res => {
          this.chineseList = res.data.data;
          this.chineseList.splice(0, 50);
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
  }

  .image>h5 {
    display: block;
    text-align: center;
    width: 120px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .image>span {
    display: flex;
    justify-content: center;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 10px;
  }

  .backBox {
    margin: 10px 0;
  }
</style>