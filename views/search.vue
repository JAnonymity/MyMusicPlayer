<template>
  <div>
    <el-autocomplete class="input-with-select searchTitle" v-model="keywords" :fetch-suggestions="querySearch"
      placeholder="请输入搜索内容" @select="handleSelect" prefix-icon="el-icon-search" @change="searchRecommend(keywords)"
      :clearable="true" @clear="clearKeywords()">
      <el-button slot="append" icon="el-icon-search" @click="searchResult"></el-button>
    </el-autocomplete>
    <div>
      <p type="warning" v-for="(item,index) in searchRes" :key="index">
        <router-link tag="div" class="image"
          :to="{name:'player',params:{id:item.id,name:item.name,writer:item.ar[0].name,image:item.al.picUrl}}">
          <el-tag type="info" :hit="true" effect="plain">
            {{item.name}}---{{item.ar[0].name}}
          </el-tag>
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import axios from '@/plugins/axios.js'

  export default {
    data () {
      return {
        keywords: '',
        searchRes: [],
        searchRecommendation: []
      }
    },
    methods: {
      getSearchResult () {
        // 获取搜索结果
        axios({
          method: 'get',
          url: '/cloudsearch',
          params: {
            keywords: this.keywords,
            limit: 10
          }
        }).then(res => {
          this.searchRes = res.data.result.songs;
          //console.log(this.searchRes);
        })
      },
      getRecommendation () {
        // 获取搜索建议
        axios({
          method: 'get',
          url: 'arch/suggest',
          params: {
            keywords: this.keywords
          }
        }).then(res => {
          console.log(res);
          this.searchRecommendation = res.data.result.songs;
        })
      },
      searchResult () {
        this.getSearchResult();
      },
      searchRecommend (item) {
        if (item) {
          this.getRecommendation();
        }
      },
      querySearch (queryString, cb) {
        var searchres = this.searchRecommendation;
        // 调用 callback 返回建议列表的数据
        cb(searchres);
      },
      handleSelect (item) {
        console.log(item);
      },
      clearKeywords () {
        this.keywords = '';
      }
    }
  }
</script>

<style scoped>
  .searchTitle {
    margin: 10px 0;
    width: 100%;
  }
</style>