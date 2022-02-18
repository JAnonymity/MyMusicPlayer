<template>
  <div>
    <el-autocomplete class="inline-input" v-model="keywords" :fetch-suggestions="querySearch" placeholder="请输入搜索内容"
      @select="handleSelect" prefix-icon="el-icon-search">
    </el-autocomplete>
    <el-button @click="search">搜索</el-button>
    <p type="warning" v-for="(item,index) in searchRes" :key="index">
      <el-link>
        {{item.name}}---{{item.ar[0].name}}
      </el-link>
    </p>
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
            keywords: this.keywords
          }
        }).then(res => {
          this.searchRes = res.data.result.songs;
          //console.log(this.searchRes);
        })

        // 获取搜索建议
        axios({
          method: 'get',
          url: '/search/suggest',
          params: {
            keywords: this.keywords
          }
        }).then(res => {
          this.searchRecommendation = res.data.result.songs;
          console.log(this.searchRecommendation);
        })
      },
      search () {
        this.getSearchResult();
      },
      querySearch (queryString, cb) {
        var searchres = this.searchRes;
        // 调用 callback 返回建议列表的数据
        cb(searchres);
      },
      handleSelect (item) {
        console.log(item);
      }
    }
  }
</script>