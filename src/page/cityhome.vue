<template>
    <div id="container">
      <el-container>

        <el-header height="280px">
          <Leader/>
        </el-header>

        <el-container>
          <el-aside width="250px">
            <TheBillboard/>
          </el-aside>

          <el-main>
            <TheForum/>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
import TheBillboard from '@/components/TheBillboard'
import TheForum from '@/components/TheForum'
import Leader from '@/components/Leader'

export default {
  name: 'home',
  components: {
    'TheBillboard': TheBillboard,
    'TheForum': TheForum,
    'Leader': Leader
  }
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;
}
.el-main{
  overflow: hidden;
}
</style>
