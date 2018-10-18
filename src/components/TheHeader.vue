<template>
  <header>
    <div class="top">
      <router-link to="/">
        <img alt="picture"
          align="left"
          :src="logo">
          <h1>HOTEL</h1>
      </router-link>
    </div>

    <nav>

        <TheNav/>

      <span class="right">
        <router-link to="/signIn" class="navbar">{{signIn}}</router-link>
        <router-link to="/signUp" class="navbar">{{signUp}}</router-link>
      </span>
    </nav>

  </header>
</template>

<script>
import TheNav from '@/components/TheNav'

export default {
  name: 'TheHeader',
  data () {
    return {
      signIn: '登陆',
      signUp: '注册',
      logo: '/static/icon/favicon.ico'
    }
  },
  components: {
    'TheNav': TheNav
  }
}
</script>

<style lang="less" scoped>
h1{
  font-size: 50px;;
  margin: 0;
}
nav {
  display: flex;
  justify-content: space-between;
}

header {
  margin: 0;
  border-bottom: 1px solid #cccccc;
  box-shadow: 1px 5px 5px #cccccc;
  padding: 10px 5%;
  .top {
    height: 60px;
    img {
      width: 60px;
      height: 60px;
    }
  }
}

.navbar {
  text-decoration: none;
  padding: 0 10px;
  margin: 10px 0;
  border: none;
  border-right: 1px solid #cccccc;
  outline: 0;
  font-size: 20px;
  background-color: white;
  color: #1990ff;
  &:last-child {
    border-right: none;
  }
}
</style>
