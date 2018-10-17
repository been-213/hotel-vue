<template>
    <footer>
            <el-tag>{{tag}}</el-tag>
        <ul>
            <li>
              <img :src="viewlogo">
                <span>{{view}}</span>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
  name: 'ForumItemFooter',
  props: ['tag', 'viewlogo', 'view']
}
</script>

<style lang="less" scoped>
footer {
  display: flex;
  justify-content: space-between;
  height: 26px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
  margin-top:10px;
  .el-tag{
    color: #aaaaaa;
    border-color: #aaaaaa;
    background-color: white;
  }
  ul {
    li {
      list-style: none;
      margin-left: 5px;
      img {
        float: left;
        height: 24px;
      }
      span {
        height: 24px;
        line-height: 24px;
        float: left;
        color: #aaaaaa;
        font-size: 0.75em;
      }
    }
  }
}
</style>
