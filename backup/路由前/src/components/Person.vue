<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
    <br>
    <h2>资产：一辆{{ car.brand }},价值{{ car.price }}万</h2>
    <button @click="chagePrice">修改汽车的价格</button>
    <button @click="chageCar">修改汽车</button>
    <br>
    <h2>爱好：</h2>
    <ul>
      <li v-for="g in games" :key="g.id">{{ g.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏的名字</button>
  </div>
</template>

<script lang="ts" setup name="Person">
import { ref, reactive, toRefs, toRef } from 'vue';

let name = ref('张三')
let age = ref(18)
let tel = '13888888888'
let car = reactive({ brand: '宝马', price: 100 })
let games = reactive([
  { id: 'li01', name: '三国志14' },
  { id: 'li02', name: '金铲铲' },
  { id: 'li03', name: '英雄联盟' }
])

// toRefs使用
let { brand, price } = toRefs(car)
console.log(brand.value, price.value)
// toRefs使用

// toRef使用
let jiage = toRef(car, 'price')
console.log(jiage.value)
// toRef使用

// 方法
function changeName() {
  name.value = 'zhang-san'
  console.log(name.value)
}
function changeAge() {
  age.value += 1
  console.log(age.value)
}
function showTel() {
  alert(tel)
}
function chagePrice() {
  // car.price += 10
  // toRefs使用
  price.value += 10
  // toRefs使用
}
function chageCar() {
  Object.assign(car, { brand: '奔驰', price: 200 })
}
function changeFirstGame() {
  games[0].name = '御龙在天'
}
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}

li {
  font-size: 20px;
}
</style>