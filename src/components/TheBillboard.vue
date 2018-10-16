<template>
    <main>
      <el-container>
        <el-header>
          <BillboardTitle :title="title" />
        </el-header>
        <el-main>
          <BillboardItem/>
        </el-main>
      </el-container>
    </main>
</template>

<script>
import BillboardTitle from '@/components/BillboardTitle'
import BillboardItem from '@/components/BillboardItem'

export default {
  name: 'TheBullet',
  components: {
    'BillboardTitle': BillboardTitle,
    'BillboardItem': BillboardItem
  },
  data () {
    return {
      title: '缩小搜索范围'
    }
  }
}
</script>

<style lang="less" scoped>
.el-container{
  border: 1px solid #409eff;
  padding: 0;
}
.el-header{
  padding: 0;
}
</style>
