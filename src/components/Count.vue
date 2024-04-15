<template>
  <h2>当前求和为：{{ sum }}，放大10倍后：{{ bigSum }}</h2>
  <h3>欢迎来到:{{ school }}，坐落于：{{ address }}，大写：{{ upperSchool }}</h3>
  <select v-model.number="n">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
  <button @click="add">加</button>
  <button @click="minus">减</button>
</template>

<script setup lang="ts" name="Count">
import { ref } from 'vue'
import { useCountStore } from "@/store/count";
import { storeToRefs } from "pinia";

const countStore = useCountStore()

const { sum, bigSum, school, address, upperSchool } = storeToRefs(countStore)

let n = ref(1)

function add() {
  // 第一种修改方式
  // countStore.sum += n.value
  // 第二种修改方式
  // countStore.$patch({
  //   sum: countStore.sum + n.value
  // })
  // 第三种修改方式
  countStore.increment(n.value)
}
function minus() {
  countStore.decrement(n.value)
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select,
button {
  margin: 0 5px;
  height: 25px;
}
</style>