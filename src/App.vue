<template>
  <div id="app">
    <TheHeader>
    </TheHeader>

    <router-view id="Nav"
      name="Nav"></router-view>
      
    <router-view id="Content"
      name="Content"></router-view>

    <TheFooter id="Footer">
    </TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'app',
  components: {
    'TheHeader': TheHeader,
    'TheFooter': TheFooter
  }
}
</script>
