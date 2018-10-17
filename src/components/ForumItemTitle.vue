<template>
    <h4 @click="click">
        {{title}}</h4>
</template>

<script>
export default {
  name: 'ForumItemTitle',
  props: ['title'],
  methods: {
    click (event) {
      this.$emit('click', {
        title: this.title
      })
    }
  }
}
</script>

<style lang="less" scoped>
h4 {
  text-align: center;
  cursor: pointer;
  margin: 0;
  font-size: 1.5em;
  color: #409eff;
}
h4:hover{
  color: orange;
}
</style>
