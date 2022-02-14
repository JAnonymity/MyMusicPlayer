<!-- musicList子组件 -->
<template>
  <div class="collection-block">
    <!-- 轮播图1 end-->
    <div class="block-padding">
      <!-- 轮播图1 start-->
      <el-carousel :interval="5000" indicator-position="none" arrow="never" height="100px">
        <el-carousel-item v-for="item in images.slice(0,5)" :key="item.targetId">
          <div class="image">
            <img :src="item.imageUrl">
          </div>
        </el-carousel-item>
      </el-carousel>
      <!-- 推荐歌单 -->
      <div class="title">
        <h3>推荐歌单</h3>
      </div>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item,index) in personList" :key="index">
          <div class="image">
            <img :src="item.picUrl">
            <h5>{{item.name}}</h5>
          </div>
        </el-col>
      </el-row>
      <!-- 新专辑 -->
      <div class="title">
        <h3>新专辑</h3>
        <router-link :to="{name:'musicMore',params:{songType:'1'}}" tag="el-link">更多</router-link>
      </div>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item,index) in musicList.slice(0,3)" :key="index">
          <div class="image">
            <img :src="item.picUrl">
            <h5>{{item.name}}</h5>
            <el-tag type="success">{{item.artists[0].name}}</el-tag>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item,index) in musicList.slice(4,7)" :key="index">
          <div class="image">
            <img :src="item.picUrl">
            <h5>{{item.name}}</h5>
            <el-tag type="info">{{item.artists[0].name}}</el-tag>
          </div>
        </el-col>
      </el-row>
      <!-- 轮播图2 start-->
      <el-carousel :interval="5000" indicator-position="none" arrow="never" height="100px">
        <el-carousel-item v-for="item in images.slice(5,10)" :key="item.targetId">
          <div class="image">
            <img :src="item.imageUrl">
          </div>
        </el-carousel-item>
      </el-carousel>
      <!-- 轮播图2 end-->

      <div class="title">
        <h3>华语新歌</h3>
        <router-link :to="{name:'musicMore',params:{songType:'2'}}" tag="el-link">更多</router-link>
      </div>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item,index) in newSongs.slice(0,3)" :key="index">
          <div class="image">
            <img :src="item.album.picUrl">
            <h5>{{item.name}}</h5>
            <el-tag type="success">{{item.artists[0].name}}</el-tag>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item,index) in newSongs.slice(4,7)" :key="index">
          <div class="image">
            <img :src="item.album.picUrl">
            <h5>{{item.name}}</h5>
            <el-tag type="info">{{item.artists[0].name}}</el-tag>
          </div>
        </el-col>
      </el-row>
      <!-- <div class="title">
        <h3>新专辑</h3>
        <router-link :to="{name:'musicMore',params:{status:2}}" tag="el-link" replace>更多</router-link>
      </div>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item,index) in musicList.slice(0,3)" :key="index">
          <div class="image">
            <img :src="item.picUrl">
            <h5>{{item.name}}</h5>
            <el-tag type="success">{{item.company}}</el-tag>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item,index) in musicList.slice(4,7)" :key="index">
          <div class="image">
            <img :src="item.picUrl">
            <h5>{{item.name}}</h5>
            <el-tag type="info">{{item.company}}</el-tag>
          </div>
        </el-col>
      </el-row> -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'musicListView',
    data () {
      return {
      }
    },
    props: {
      personList: {
        type: Array,
        default: function () {
          return []
        }
      },
      // 新专辑列表
      musicList: {
        type: Array,
        default: function () {
          return []
        }
      },
      //华语新歌列表
      newSongs: {
        type: Array,
        default: function () {
          return []
        }
      },
      //轮播图列表
      images: {
        type: Array,
        default: function () {
          return []
        }
      },
    },

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
</style>