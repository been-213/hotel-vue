<template>
    <footer>
        <div class="top">
            <div>{{top}}{{title}}</div>
        </div>

        <div class="bottom">
          <div>
            <img v-for="(item,index) in links"
          :key="index"
          :src="'/static/icon/' + item.iconame">
          </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data () {
    return {
      top: 'Copyright © 2001-2018 ',
      title: 'HOTEL',
      links: [{
        iconame: 'github.ico'
      }, {
        iconame: 'msn.ico'
      }, {
        iconame: 'slack.ico'
      }, {
        iconame: 'share.ico'
      }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
footer {
  font-size: 100%;
  text-align: center;
  background-color: white;;
  margin: 0;
  padding: 10px 0;
  .top {
    color: #909399;;
    display: flex;
    justify-content: center;
    div {
      margin-right: 20px;
      justify-content: center;
    }
  }
  .bottom {
    display: flex;
    justify-content: space-around;
    color: #DCDFE6;
    margin-top: 20px;
  }
  img {
    width: 40px;
    height: 40px;
    margin: 0 60px;
  }
}
</style>
