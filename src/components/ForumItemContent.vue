<template>
  <main>
    <div id="location">
      <i class="el-icon-location">{{location}}</i>
    <div>
        <el-tag hit>干净</el-tag><el-tag hit>WIFI快</el-tag>
    </div>
    </div>
     <el-rate
      v-model="rate"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value}">
    </el-rate>
    <p>
      {{content}}
    </p>
  <p id="price">{{price}}元/晚</p>
  </main>
</template>

<script>
export default {
  name: 'ForumItemContent',
  props: ['content', 'location', 'rate', 'price']
}
</script>
<style lang="less" scoped>
  p{
    font-size: 1em;

  }
  #location{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    text-decoration: underline;
    color: #409eff;
    font-size: 1em;
    i{
    cursor: pointer;
    }

  }
  #location i:hover{
    color: orange;
    text-decoration: underline;
  }
  .el-rate{
    margin-top:20px;
  }
  .el-tag{
    font-size: 1.1em;
  }
  #price{
    color: orange;
    text-align: right;
    font-size: 1.5em;
    font-weight: bold;
  }
</style>
