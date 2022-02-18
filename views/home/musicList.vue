<!-- musicList父组件 -->
<template>
  <div>
    <!-- 父传子组件 -->
    <musicListView :personList="recommendedList" :musicList="latestAlbum" :newSongs="ChinesenewSongs"
      :images="bannerImages" :radioList="musicRadioList"></musicListView>
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
        musicRadioList: []
      }
    },
    created () {
      this.getList();
    },
    mounted () {
      // 合并音乐电台网络请求 
      axios.all([this.getDj1(), this.getDj2(), this.getDj3()]).then(axios.spread((dj1, dj2, dj3) => {
        this.musicRadioList.push(dj1.data.djRadios, dj2.data.djRadios, dj3.data.djRadios);
        //console.log(this.musicRadioList, 'this.musicRadioList');
      }));
    },
    methods: {
      getList () {
        // 推荐歌单
        axios({
          method: 'get',
          url: '/recommend/resource',
        }).then(res => {
          this.recommendedList = res.data.recommend;
          this.recommendedList.pop();
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
          //console.log(this.latestAlbum,'新专辑');
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
          //console.log(this.ChinesenewSongs,'华语新歌');
        })
        // 轮播图
        axios({
          method: 'get',
          url: '/banner'
        }).then(res => {
          this.bannerImages = res.data.banners;
          // console.log(this.bannerImages,'轮播图');
        })

      },
      // 音乐电台
      getDjCategory (item) {
        return axios({
          method: 'get',
          url: '/dj/recommend/type',
          params: {
            type: item
          }
        })
      },
      getDj1 () {
        return this.getDjCategory(5);
      },
      getDj2 () {
        return this.getDjCategory(2);
      },
      getDj3 () {
        return this.getDjCategory(3);
      }

    }
  }
</script>