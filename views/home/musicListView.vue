<!-- musicList子组件 -->
<template>
  <div class="collection-block">
    <!-- 轮播图1 end-->
    <div class="block-padding">
      <!-- 轮播图1 start-->
      <el-carousel :interval="5000" indicator-position="none" arrow="never" height="120px">
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
          <router-link tag="div" class="image" :to="{name:'musicDetails',params:{id:item.id}}">
            <img :src="item.picUrl">
            <h5>{{item.name}}</h5>
          </router-link>
        </el-col>
      </el-row>

      <!-- 新专辑 -->
      <div class="title">
        <h3>新专辑</h3>
        <router-link :to="{name:'musicMore',params:{songType:'1'}}" tag="el-link">更多</router-link>
      </div>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item,index) in musicList.slice(0,3)" :key="index">
          <router-link tag="div" class="image" :to="{name:'albums',params:{id:item.id}}">
            <el-image :src="item.picUrl"></el-image>
            <h5>{{item.name}}</h5>
            <el-tag type="success">{{item.artist.name}}</el-tag>
          </router-link>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item,index) in musicList.slice(4,7)" :key="index">
          <router-link tag="div" class="image" :to="{name:'albums',params:{id:item.id}}">
            <el-image :src="item.picUrl"></el-image>
            <h5>{{item.name}}</h5>
            <el-tag type="success">{{item.artist.name}}</el-tag>
          </router-link>
        </el-col>
      </el-row>
      <!-- 轮播图2 start-->
      <el-carousel :interval="5000" indicator-position="none" arrow="never" height="120px">
        <el-carousel-item v-for="item in images.slice(5,10)" :key="item.targetId">
          <div class="image">
            <img :src="item.imageUrl">
          </div>
        </el-carousel-item>
      </el-carousel>
      <!-- 轮播图2 end-->

      <!-- 华语新歌 -->
      <div class="title">
        <h3>华语新歌</h3>
        <router-link :to="{name:'musicMore',params:{songType:'2'}}" tag="el-link">更多</router-link>
      </div>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item,index) in newSongs.slice(0,3)" :key="index">
          <router-link tag="div" class="image"
            :to="{name:'player',params:{id:item.id,name:item.name,writer:item.artists[0].name,image:item.album.picUrl}}">
            <img :src="item.album.picUrl">
            <h5>{{item.name}}</h5>
            <el-tag type="success">{{item.artists[0].name}}</el-tag>
          </router-link>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8" v-for="(item,index) in newSongs.slice(4,7)" :key="index">
          <router-link tag="div" class="image"
            :to="{name:'player',params:{id:item.id,name:item.name,writer:item.artists[0].name,image:item.album.picUrl}}">
            <img :src="item.album.picUrl">
            <h5>{{item.name}}</h5>
            <el-tag type="success">{{item.artists[0].name}}</el-tag>
          </router-link>
        </el-col>
      </el-row>
      <!-- 音乐电台 -->
      <el-tabs v-model="activeName" type="card" :stretch="true">
        <el-tab-pane :name="radioTitle[index]" :label="radioTitle[index]" v-for="(item,index) in radioList"
          :key="index">
          <router-link tag="div" :to="{name:'radioDetails',params:{id:item[index].id}}" class="radioes"
            v-for="(dj,index) in item" :key="index">
            <el-row>
              <el-col :span="4">
                <el-image :src="dj.picUrl" class="radioImage"></el-image>
              </el-col>
              <el-col :span="20" class="tabsTitle">
                <div>{{dj.desc}}</div>
                <span>{{dj.name}}</span>
              </el-col>
            </el-row>
          </router-link>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'musicListView',
    data () {
      return {
        radioTitle: ["人文历史", "音乐推荐", "情感"],
        activeName: "人文历史"
      }
    },
    props: {
      // 推荐歌单列表
      personList: {
        type: Array,
      },
      // 新专辑列表
      musicList: {
        type: Array,
      },
      //华语新歌列表
      newSongs: {
        type: Array,
      },
      //轮播图列表
      images: {
        type: Array,
      },
      // 音乐电台列表
      radioList: {
        type: Array,
      }
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

  .radioImage {
    width: 50px;
    height: 50px;
  }

  /deep/.radioImage>img {
    border-radius: 0;
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

  .tabsTitle>div {
    display: block;
    width: 100%;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .tabsTitle>span {
    color: #909399;
    font-size: 14px;
  }

  .radioes {
    padding: 10px 0;
  }
</style>