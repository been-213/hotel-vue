<template>
  <main>
    <div>
      <p id="title">成都</p>
      <p id="content">共：{{count}}家酒店</p>
    </div>
  </main>
</template>
<script>
export default {
  name: 'Leader',
  data () {
    return {
      count: '1463'
    }
  }
}
</script>
<style lang="less" scoped>
main{
  padding: 60px 0;
  height: 150px;
  background: url(/static/成都.jpg);
  background-size: cover;
}
main > div{
  border: 10px solid hsla(0, 0%, 100%, .5);
  background: hsla(0, 0%, 100%, .5);
  background-clip: padding-box;
}
#title{
  color: orange;
  font-size: 3em;
  font-weight: bolder;
}
#content{
  font-size: 1.5em;
  font-weight: bold;
  color:orange;
}
p{
  margin: 0;
}
</style>
