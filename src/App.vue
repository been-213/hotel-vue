<template>
  <div id="app">
    <el-container>
      <el-header height="150px">
        <TheHeader>
        </TheHeader>
      </el-header>

      <el-main>
        <router-view id="Content"
          name="Content"></router-view>
      </el-main>

      <el-footer height="82px">
        <TheFooter id="Footer">
        </TheFooter>
      </el-footer>
     </el-container>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'app',
  components: {
    'TheHeader': TheHeader,
    'TheFooter': TheFooter
  }
}
</script>
<style lang="less" scoped>
#app{
  font-family: PingFang SC;
}
.el-footer{
  padding: 0;
}
.el-header{
  padding: 0;
}
.el-main{
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
}
#Content{
  width: 1200px;
}
</style>
