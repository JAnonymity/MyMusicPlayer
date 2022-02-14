<template>
  <div>
    <el-row :gutter="20" class="top-nav">
      <el-col :span="6" class="top-item">
        <router-link exact to="/" class="top-link">首页</router-link>
      </el-col>
      <el-col :span="6" class="top-item">
        <router-link to="/topic" class="top-link">榜单</router-link>
      </el-col>
      <el-col :span="6" class="top-item">
        <router-link to="/mine" class="top-link">我的</router-link>
      </el-col>
      <el-col :span="6" class="top-item">
        <router-link to="/search" class="top-link">搜索</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .top-nav {
    width: calc(100% + 10px);
    background-color: #fff;
  }

  .top-item {
    text-align: center;
    padding-top: 10px;
  }

  .top-link {
    display: block;
    color: black;
    padding-bottom: 8px;
    text-decoration: none;
  }

  .active {
    border-bottom: 3px solid #ff0000;
  }
</style>