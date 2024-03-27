<template>
  <div class="person6">
    <h1>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>
  </div>
</template>

<script lang="ts" setup name="Person6">
  import { reactive, watch } from 'vue';
  let person = reactive({
    name: '张三',
    age: 18,
    car: {
      c1: '宝马',
      c2: '奔驰'
    }
  })
  function changeName() {
    person.name += '~'
  }
  function changeAge() {
    person.age += 1
  }
  function changeC1() {
    person.car.c1 = '奥迪'
  }
  function changeC2() {
    person.car.c2 = '大众'
  }
  function changeCar() {
    person.car = { c1: '雅迪', c2: '爱玛' }
  }
  // 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
  // watch(()=>person.name, (newValue, oldValue) => {
  //   console.log('person.name变化了', newValue, oldValue)
  // })

  // 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
  watch(() => person.car, (newValue, oldValue) => {
    console.log('person.car变化了', newValue, oldValue)
  },{deep:true})
</script>

<style scoped>
.person6 {
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