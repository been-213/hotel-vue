<template>

<div>
  <img :src="icon"
  @click="click">
</div>

</template>

<script>
export default {
  props: ['icon', 'username'],
  name: 'ForumItemIcon',
  methods: {
    click (event) {
      this.$emit('click', { title: this.username })
    }
  }
}
</script>

<style lang="less" scoped>
div {
  margin-top: 20px;

  img {
    cursor: pointer;
  }
  strong {
    cursor: pointer;

    margin-left: 5px;
    line-height: 36px;
    color: #cccccc;
  }
}
</style>
