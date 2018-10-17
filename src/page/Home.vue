<template>
  <main>
    <el-container>

      <el-header height="100px">
        <Search/>
      </el-header>

    </el-container>
  </main>
</template>

<script>

import Search from '@/components/Search'

export default {
  name: 'Home',
  components: {
    'Search': Search
  }
}
</script>
