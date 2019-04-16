<template>
  <main>
    <el-container>
      <el-header height="100px">
        <Search/>
      </el-header>

      <el-main v-for="(item,index) in list" :key="index">
        <el-container>
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
                <div
                  class="Bottom"
                  :style="{ 'background-image': 'url(' + item.BottomBoard_1.img + ')'}"
                >
                  <div class="text" id="Bottom_text">
                    <h1>{{item.BottomBoard_1.head}}</h1>
                    <p>{{item.BottomBoard_1.content}}</p>
                  </div>
                </div>
                <div
                  class="Bottom"
                  :style="{ 'background-image': 'url(' + item.BottomBoard_2.img + ')'}"
                >
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
import { getData } from '@/components/BaseMethods.js'
let sUrl = '/static/data/citys.json'
export default {
  name: 'Home',
  components: {
    Search: Search
  },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getCitysData()
  },
  methods: {
    getCitysData () {
      getData.call(this, sUrl).then(res => (this.list = res.body))
    }
  }
}
</script>
<style lang="less" scoped>
.PicBoard {
  width: 1400px;
  height: 750px;
}
.el-main {
  padding: 20px;
}
.el-header {
  h1 {
    font-weight: bolder;
    font-size: 2em;
    color: orange;
    margin: 0;
  }
}
.Top {
  width: 355px;
  height: 320px;
  position: relative;
}
.Bottom {
  width: 540px;
  height: 320px;
  position: relative;
}
.TopBoard {
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
}
.BottomBoard {
  display: flex;
  justify-content: space-between;
}
.Bottom .Top {
  margin-left: auto;
  margin-right: auto;
  display: block;
  max-width: 120%;
  width: 100%;
  height: 100%;
  transition: all 0.4s;
  transform: translateZ(0);
  background-size: cover;
  background-repeat: no-repeat;
}
.Top:hover {
  transform: scale(1.05);
  transition: 0.5s;
}
.Bottom:hover {
  transform: scale(1.05);
  transition: 0.5s;
}
#Top_text {
  width: 335px;
}
#Bottom_text {
  width: 520px;
}
.text {
  display: table-cell;
  vertical-align: bottom;
  padding: 10px 10px 10px;
  bottom: 0;
  position: absolute;
  color: white;
  background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0) 12%, #000 97%);
  h1 {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
  }
  p {
    margin-bottom: 10px;
    margin: 0;
    font-family: PingFang SC;
  }
}
</style>
