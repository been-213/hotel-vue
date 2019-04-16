<template>
  <main>
    <section>
      <p>{{prices.title}}</p>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in prices.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </section>

    <section>
      <p>{{level.title}}</p>
      <el-checkbox-group v-model="level.checkboxGroup1" size="small">
        <el-checkbox-button v-for="city in level.cities" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </section>
  </main>
</template>

<script>
const cityOptions = ['实惠型', '经济型', '舒适型', '豪华型', '尊贵型']
export default {
  name: 'BillboardItem',
  data () {
    return {
      value: '',
      prices: {
        title: '您的预算',
        options: [
          {
            value: '选项1',
            label: '0元-400元'
          },
          {
            value: '选项2',
            label: '400元-800元'
          },
          {
            value: '选项3',
            label: '800元-1200元'
          },
          {
            value: '选项4',
            label: '1200元-1600元'
          },
          {
            value: '选项5',
            label: '1600+元'
          }
        ]
      },
      level: {
        title: '酒店类型',
        cities: cityOptions,
        checkboxGroup1: ['实惠型']
      }
    }
  }
}
</script>

<style lang="less" scoped>
p {
  padding: 0;
  margin: 0 0 10px 0;
  font-weight: bold;
  font-size: 1.3em;
  color: black;
  background-color: white;
  font-family: Arial, "Microsoft YaHei", sans-serif;
}
section {
  margin: 0;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #cccccc;
}
</style>
