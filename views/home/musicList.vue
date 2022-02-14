<!-- musicList子组件父组件 -->
<template>
  <div>
    <!-- 父传子组件 -->
    <musicListView :personList="recommendedList" :musicList="latestAlbum" :newSongs="ChinesenewSongs"
      :images="bannerImages">

    </musicListView>
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
        axios({
          method: 'get',
          url: '/personalized',
          params: {
            limit: 7
          }
        }).then(res => {
          this.recommendedList = res.data.result;
          this.recommendedList.splice(1, 1);
          console.log(this.recommendedList);
        })

        axios({
          method: 'get',
          url: '/album/newest'
        }).then(res => {
          this.latestAlbum = res.data.albums;
          this.latestAlbum.shift();
          //console.log(this.latestAlbum);
        })

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