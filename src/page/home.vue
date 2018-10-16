<template>
    <div id="container">
      <el-container>
        
        <el-header>
          <Leader/>
        </el-header>

        <el-container>
          <el-aside width="500px">
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

#Nav {
  margin: 20px 10% 0 10%;
}

#container {
  display: inline;
  justify-content: space-between;
}
#Forum {
  margin-left: 5%;
  padding: 10px 0 30px 0;
  width: 1100px;
}
#SideBar {
  width: 550px;
  margin: 30px 0;
}
</style>
