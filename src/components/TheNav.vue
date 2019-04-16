<template>
  <nav>
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect"
      :router="bRouter"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-submenu index="/">
        <template slot="title">Submunu</template>
        <el-menu-item index="/">选项1</el-menu-item>
        <el-menu-item index="/">选项2</el-menu-item>
        <el-menu-item index="/">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="/cityHome">CityHome</el-menu-item>
      <el-menu-item index="4">
        <a href="https://www.ele.me" target="_blank">订单管理</a>
      </el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
export default {
  name: 'TheNav',
  props: ['list'],
  data () {
    return {
      activeIndex: '1',
      bRouter: true
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
button {
  margin: 10px 10px 10px 0;
  padding: 0;

  border: none;
  outline: 0;
  font-size: 20px;
  background-color: white;
  color: #1990ff;
}
</style>
