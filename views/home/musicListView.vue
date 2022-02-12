<template>
  <div class="collection-block">
    <div class="block-padding">
      <div class="title">
        <h3>新歌榜</h3>
        <el-link type="info">更多</el-link>
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
      </el-row>
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
      musicList: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    created () {
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
    margin: 14px 0 18px;
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