<template>
  <div>
    <musicListView :musicList="latestAlbum">

    </musicListView>
  </div>
</template>

<script>
  import axios from '@/plugins/axios.js'
  import musicListView from './musicListView'
  export default {
    components: {
      musicListView
    },
    data () {
      return {
        latestAlbum: []
      }
    },
    created () {
      this.getList();
    },
    methods: {
      getList () {
        axios({
          method: 'get',
          url: '/album/newest'
        }).then(res => {
          this.latestAlbum = res.data.albums;
          this.latestAlbum.shift();
        })
      }
    }
  }
</script>