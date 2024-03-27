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

button {
  margin: 0 5px;
}
</style>