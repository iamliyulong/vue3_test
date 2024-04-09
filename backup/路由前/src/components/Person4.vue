<template>
  <div class="person4">
    <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changePerson">修改整个人</button>
  </div>
</template>

<script lang="ts" setup name="Person4">
import { ref, watch } from 'vue';
let person = ref({
  name: '张三',
  age: 18
})
function changeName() {
  person.value.name += '~'
}
function changeAge() {
  person.value.age += 1
}
function changePerson() {
  person.value = {
    name: '李四',
    age: 20
  }
}
watch(person, (newValue, oldValue) => {
  console.log('person变化了', newValue, oldValue)
}, { deep: true, immediate: true})
</script>

<style scoped>
.person4 {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

/* 修改按钮边框和颜色 */
button {
  border: 1px solid #de0fc3;
  /* 添加边框 */
  background-color: #1ec577;
  /* 修改背景色 */
  color: #1208a1;
  /* 修改字体颜色 */
  padding: 8px 16px;
  /* 增加内边距 */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  transition: all 0.3s;
  /* 添加过渡效果 */
  cursor: pointer;
  /* 修改光标样式 */
  border-radius: 4px;
  /* 添加圆角 */
}

/* 鼠标悬停时改变按钮样式 */
button:hover {
  background-color: #c7de16;
  /* 改变背景色 */
  color: #e35151;
  /* 改变字体颜色 */
  border-color: #af1c1c;
  /* 改变边框颜色 */
}
</style>