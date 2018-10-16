<template>
  <main>
    <ul>
      <li>
        <div>
          <el-input id="location"
          placeholder="目的地"
          v-model="location"
          prefix-icon="el-icon-location-outline"
          clearable></el-input>
        </div>
      </li>
      <li id="date">
        <el-date-picker
          v-model="date"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </li>
      <li id="search">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      location: '',
      date: ''
    }
  }
}
</script>
<style lang="less" scoped>
  ul{
    background-color: #f2f6fc;
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    li{
      display: inline-block;
    }
  }
  .el-input{
    width: 270px;
  }
  .el-button{
    width: 200px;
  }
</style>
