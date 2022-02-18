<template>
  <div class="lrcContainer">
    <div class="lrc" ref="lrc">
      <p v-for="(item,index) in resLyric"
        :class="{'active':currentTime > lyricKey[index] && currentTime < lyricKey[index + 1]}" :key="index">
        <span>
          {{item}}-{{getLyricScroll(index)}}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
  import axios from '@/plugins/axios.js'

  export default {
    name: 'lyric',
    data () {
      return {
        resLyric: "",//完整歌词
        lyricKey: []//歌词时间
      }
    },
    props: {
      lyricid: {
        type: Number,
      },
      currentTime: {
        type: Number,
        default: 0
      }
    },
    mounted () {
      this.getLyric();
    },
    methods: {
      getLyric () {
        // 音乐歌词
        axios({
          method: 'get',
          url: '/lyric',
          params: {
            id: this.lyricid
          }
        }).then(res => {
          this.filterLyric(res.data.lrc.lyric);
        })
      },

      filterLyric (values) {
        if (values == '') return;
        let lrc = [];
        let lyrics = values.split("\n");

        // console.log(lyrics, 'lyrics');

        let judge = /\[\d*:\d*(\.|:)\d*]/g;

        for (let index = 0; index < lyrics.length; index++) {
          let ele = lyrics[index].match(judge);

          //console.log(ele, 'date');

          if (!ele) continue;

          // 获取歌词
          let content = lyrics[index].replace(ele, "");
          // 获取时间
          let t = ele[0];


          let min = parseInt(t.match(/\[\d*/i).toString().slice(1));
          let second = parseInt(t.match(/\:\d*/i).toString().slice(1));
          let time = min * 60 + second;

          this.lyricKey.push(time);

          lrc[index] = content;
        }

        this.resLyric = lrc;
      },

      getLyricScroll (index) {
        if (this.currentTime > this.lyricKey[index] && this.currentTime < this.lyricKey[index + 1]) {
          this.$refs.lrc.style.top = (-30) * (index - 2) + 'px';
        }
      }
    }
  }
</script>

<style scoped>
  .lrcContainer {
    width: 100%;
    height: 150px;
    overflow: scroll;
    position: relative;
  }

  .lrc {
    width: 100%;
    position: absolute;
    top: 0;
  }

  .active {
    color: red;
  }
</style>