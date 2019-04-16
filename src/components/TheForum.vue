<template>
  <article>
    <Search/>
    <ForumItem
      :item="item"
      :viewlogo="viewlogo"
      :key="index"
      @click_title="click_title"
      @click_icon="click_icon"
      @click_tag="click_tag"
      v-for="(item,index) in list"
    />
  </article>
</template>

<script>
import ForumItem from '@/components/ForumItem'
import Search from '@/components/Search'
import { getData } from '@/components/BaseMethods'
const hotelUrl = '/static/data/hotels.json'
export default {
  name: 'TheForum',
  components: {
    ForumItem: ForumItem,
    Search: Search
  },
  created () {
    this.getHotelData()
  },
  methods: {
    click_title (payload) {
      alert(`你点了标题：${payload.title}`)
    },
    click_icon (payload) {
      alert(`你点了头像或者用户名：${payload.title}`)
    },
    click_tag (payload) {
      alert(`你点了标签：${payload.title}`)
      this.$router.push('tag')
    },
    getHotelData () {
      getData.call(this, hotelUrl).then(res => (this.list = res.body))
    }
  },
  data () {
    return {
      list: [],
      viewlogo: '/static/viewLogo.png',
      title: '分享'
    }
  }
}
</script>
