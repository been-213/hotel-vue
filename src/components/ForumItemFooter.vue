<template>
    <footer>
      <el-tag>{{tag}}</el-tag>
      <div>
        <i class="el-icon-view"></i>
        <span>{{view}}</span>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'ForumItemFooter',
  props: ['tag', 'view']
}
</script>

<style lang="less" scoped>
footer {
  display: flex;
  justify-content: space-between;
  height: 26px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
  .el-tag{
    color: #aaaaaa;
    border: none;
    font-size: 1.2em;
    background-color:transparent;
  }
  i{
    color: #aaaaaa;
    float: bottom;
  }
  div {
    list-style: none;
    margin-left: 5px;
    span {
      height: 24px;
      line-height: 24px;
      color: #aaaaaa;
      font-size: 1em;
    }
  }
}
</style>
