<!-- musicList子组件父组件 -->
<template>
  <div>
    <!-- 父传子组件 -->
    <musicListView :personList="recommendedList" :musicList="latestAlbum" :newSongs="ChinesenewSongs"
      :images="bannerImages"></musicListView>
  </div>
</template>

<script>
  import axios from '@/plugins/axios.js'
  import musicListView from './musicListView'
  export default {
    components: {
      musicListView//注册子组件
    },
    data () {
      return {
        recommendedList: [],
        recommendedSongs: [],
        latestAlbum: [],
        ChinesenewSongs: [],
        bannerImages: [],
      }
    },
    created () {
      this.getList();
    },
    methods: {
      getList () {
        // 推荐歌单
        axios({
          method: 'get',
          url: '/recommend/resource',
        }).then(res => {
          this.recommendedList = res.data.recommend;
          //this.recommendedList.splice(0, 12);
          //console.log(this.recommendedList);
        })
        // 新专辑
        axios({
          method: 'get',
          url: '/album/newest'
        }).then(res => {
          this.latestAlbum = res.data.albums;
          this.latestAlbum.shift();
          console.log(this.latestAlbum);
        })

        // 华语新歌
        axios({
          method: 'get',
          url: '/top/song',
          params: {
            type: 7
          }
        }).then(res => {
          this.ChinesenewSongs = res.data.data;
          this.ChinesenewSongs.splice(0, 50);
          // console.log(this.ChinesenewSongs);
        })
        // 轮播图
        axios({
          method: 'get',
          url: '/banner',
          data: {
            type: 2
          }
        }).then(res => {
          this.bannerImages = res.data.banners;
          // console.log(this.bannerImages);
        })


      }
    }
  }
</script>