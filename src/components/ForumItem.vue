<template>
    <section id="section">
      <el-container >
         <el-header><ForumItemTitle :title="item.title"
            @click="click_title" /></el-header>
        <el-container>
          <el-aside width="250px"><ForumItemIcon :icon="item.icon"
              @click="click_icon" /></el-aside>
          <el-main> <ForumItemContent :location="item.location"
                      :content="item.content"
                      :price="item.price"
                      :rate="item.rate"/></el-main>
        </el-container>
          <el-footer height="26px">
            <ForumItemFooter :tag="item.tag"
                :viewlogo="viewlogo"
                :view="item.view"
                @click="click_tag" />
          </el-footer>
      </el-container>
    </section>
</template>

<script>
import ForumItemTitle from '@/components/ForumItemTitle'
import ForumItemIcon from '@/components/ForumItemIcon'
import ForumItemContent from '@/components/ForumItemContent'
import ForumItemFooter from '@/components/ForumItemFooter'

export default {
  name: 'ForumItem',
  props: ['item', 'viewlogo'],
  components: {
    'ForumItemTitle': ForumItemTitle,
    'ForumItemIcon': ForumItemIcon,
    'ForumItemContent': ForumItemContent,
    'ForumItemFooter': ForumItemFooter
  },
  methods: {
    click_title (payload) {
      this.$emit('click_title', payload)
    },
    click_icon (payload) {
      this.$emit('click_icon', payload)
    },
    click_tag (payload) {
      this.$emit('click_tag', payload)
    }
  }
}
</script>

<style lang="less" scoped>
#section {
  padding: 20px 0;
}
#section:hover {
  background-color: #F2F6FC
}
.el-footer {
  margin-top: 0;
}
</style>
