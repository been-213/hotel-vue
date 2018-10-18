<template>
  <main>
    <el-container>

      <el-header height="100px">
        <Search/>
      </el-header>
      <el-main>
        <el-container
        v-for="(item,index) in list"
        :key="index">
          <el-header>
            <h1>启发下一站灵感</h1>
          </el-header>

          <el-main>
            <div class="PicBoard">

              <div class="TopBoard">
                <div class="Top" :style="{ 'background-image': 'url(' + item.TopBoard_1.img + ')'}">
                  <div class="text" id="Top_text">
                    <h1>{{item.TopBoard_1.head}}</h1>
                    <p>{{item.TopBoard_1.content}}</p>
                  </div>
                </div>
                <div class="Top" :style="{ 'background-image': 'url(' + item.TopBoard_2.img + ')'}">
                  <div class="text" id="Top_text">
                    <h1>{{item.TopBoard_2.head}}</h1>
                    <p>{{item.TopBoard_2.content}}</p>
                  </div>
                </div>
                <div class="Top" :style="{ 'background-image': 'url(' + item.TopBoard_3.img + ')'}">
                  <div class="text" id="Top_text">
                    <h1>{{item.TopBoard_3.head}}</h1>
                    <p>{{item.TopBoard_3.content}}</p>
                  </div>
                </div>
            </div>

            <div class="BottomBoard">
                <div class="Bottom" :style="{ 'background-image': 'url(' + item.BottomBoard_1.img + ')'}">
                  <div class="text" id="Bottom_text">
                    <h1>{{item.BottomBoard_1.head}}</h1>
                    <p>{{item.BottomBoard_1.content}}</p>
                  </div>
                </div>
                <div class="Bottom" :style="{ 'background-image': 'url(' + item.BottomBoard_2.img + ')'}">
                  <div class="text" id="Bottom_text">
                    <h1>{{item.BottomBoard_2.head}}</h1>
                    <p>{{item.BottomBoard_2.content}}</p>
                  </div>
                </div>
              </div>

            </div>
          </el-main>

        </el-container>
      </el-main>
    </el-container>
  </main>
</template>

<script>

import Search from '@/components/Search'

export default {
  name: 'Home',
  components: {
    'Search': Search
  },
  data () {
    return {
      list: [{
        TopBoard_1: {
          img: '/static/HomePage/澳大利亚.jpg',
          head: '澳大利亚不可错过的自然之美',
          content: '在这些旅游们甄选的人气目的地，发现澳大利亚令人惊叹的自然美景'
        },
        TopBoard_2: {
          img: '/static/HomePage/美利坚.jpg',
          head: '情迷美利坚|最美自然风光',
          content: '如果你不曾到过美国，不曾为其壮丽的大自然感动过，一定要收下这篇旅行者的攻略'
        },
        TopBoard_3: {
          img: '/static/HomePage/咖啡.jpg',
          head: '咖啡狂人旅行宝典',
          content: '6大终极目的地，只为那一口馥郁香醇'
        },
        BottomBoard_1: {
          img: '/static/HomePage/蛋糕.jpg',
          head: '7块蛋糕带你环游世界',
          content: '以地名命名的美味蛋糕，边走边吃不怕胖'
        },
        BottomBoard_2: {
          img: '/static/HomePage/极光.jpg',
          head: '遇见欧若拉，全球十大极光观赏地',
          content: '追捕北极光的季节即将到来。根据全球旅行者点评，为你推荐最佳观赏地'
        }
      }]
    }
  }
}
</script>
<style lang="less" scoped>
  .el-header{
    h1{
      font-weight: bolder;
      font-size:2em;
      color: orange;
      margin: 0;
    }
  }
  .Top{
    width: 355px;
    height:320px;
    position: relative;
  }
  .Bottom{
    width: 540px;
    height: 320px;
    position: relative;
  }
  .TopBoard{
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }
  .BottomBoard{
    display: flex;
    justify-content: space-between;
  }
  .Bottom .Top{
    margin-left: auto;
    margin-right: auto;
    display: block;
    max-width: 120%;
    width: 100%;
    height: 100%;
    -webkit-transition: all .4s;
    transition: all .4s;
    -webkit-backface-visibility: hidden;
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    background-size: cover;
    background-repeat: no-repeat;
  }
  .Top:hover{
    transform: scale(1.05);
    transition: 1s;
  }
  .Bottom:hover{
    transform: scale(1.05);
    transition: 1s;
  }
  #Top_text{
    width:335px;
  }
  #Bottom_text{
    width: 520px;
  }
  .text{
    display: table-cell;
    vertical-align: bottom;
    padding: 10px 10px 10px;
    bottom: 0;
    position: absolute;
    color: white;
    background-image: linear-gradient(-180deg,rgba(0,0,0,0.00) 12%,#000 97%);
    h1{
      font-size: 1.5em;
      font-weight: bold;
      margin: 0;
    }
    p{
      margin-bottom: 10px;
      margin: 0;
      font-family: PingFang SC;
    }
  }
</style>
