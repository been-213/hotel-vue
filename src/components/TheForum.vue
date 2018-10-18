<template>
    <article>
        <Search/>
        <ForumItem :item="item"
            :viewlogo="viewlogo"
            :key="index"
            @click_title="click_title"
            @click_icon="click_icon"
            @click_tag="click_tag"
            v-for="(item,index) in list" />
    </article>
</template>

<script>
import ForumItem from '@/components/ForumItem'
import Search from '@/components/Search'

export default {
  name: 'TheForum',
  components: {
    'ForumItem': ForumItem,
    'Search': Search
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
    }
  },
  data () {
    return {
      list: [
        {
          title: '九龙鼎客栈文殊坊店',
          content: '九龙鼎客栈文殊坊店位于成都市中心，距离文殊院有9分钟的步行路程，距离文殊院站（1号线）有12分钟的路程，提供宠物友好型住宿、覆盖各处的免费WiFi以及供客人休息放松的阳光露台。',
          icon: '/static/酒店.jpg',
          location: ' 青羊区, 成都【成都市中心】',
          price: '328',
          rate: '1.0',
          tag: '成都',
          view: '500'
        },
        {
          title: '九龙鼎客栈文殊坊店',
          content: '九龙鼎客栈文殊坊店位于成都市中心，距离文殊院有9分钟的步行路程，距离文殊院站（1号线）有12分钟的路程，提供宠物友好型住宿、覆盖各处的免费WiFi以及供客人休息放松的阳光露台。',
          icon: '/static/酒店.jpg',
          location: ' 青羊区, 成都【成都市中心】',
          price: '328',
          rate: '3.7',
          tag: '成都',
          view: '500'
        },
        {
          title: '九龙鼎客栈文殊坊店学',
          content: '九龙鼎客栈文殊坊店位于成都市中心，距离文殊院有9分钟的步行路程，距离文殊院站（1号线）有12分钟的路程，提供宠物友好型住宿、覆盖各处的免费WiFi以及供客人休息放松的阳光露台。',
          icon: '/static/酒店.jpg',
          location: ' 青羊区, 成都【成都市中心】',
          price: '328',
          rate: '5.0',
          tag: '成都',
          view: '500'
        },
        {
          title: '九龙鼎客栈文殊坊店',
          content: '九龙鼎客栈文殊坊店位于成都市中心，距离文殊院有9分钟的步行路程，距离文殊院站（1号线）有12分钟的路程，提供宠物友好型住宿、覆盖各处的免费WiFi以及供客人休息放松的阳光露台。',
          icon: '/static/酒店.jpg',
          location: ' 青羊区, 成都【成都市中心】',
          price: '328',
          rate: '2.6',
          tag: '成都',
          view: '500'
        }
      ],
      viewlogo: '/static/viewLogo.png',
      title: '分享'
    }
  }
}
</script>
