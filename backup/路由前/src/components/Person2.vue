<template>
  <div class="person2">
    姓：<input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    全名：<input type="text" v-model="fullName"><br>
    <button @click="chageFullName">修改全名为Li-si</button>
  </div>
</template>

<script lang="ts" setup name="Person2">
import { ref, computed } from 'vue';

let firstName = ref('zhang')
let lastName = ref('san')

// fullName是一个计算属性，且是只读的
// let fullName = computed(() => {
//   return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
// })

// fullName是一个计算属性，可读可写
let fullName = computed({
  get() {
    console.log('get()')
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  },
  set(val) {
    console.log('set()')
    const [str1, str2] = val.split('-')
    firstName.value = str1
    lastName.value = str2
  }
})

function chageFullName() {
  fullName.value = 'li-si'
}

</script>

<style scoped>
.person2 {
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