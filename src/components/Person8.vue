<template>
  <div class="person8">
    <h2>需求：当水温达到60度，或水位达到80cm时，给服务器发请求</h2>
    <h2>当前水温：{{ temp }}℃</h2>
    <h2>当前水位：{{ height }}cm</h2>
    <button @click="changeTemp">水温+10</button>
    <button @click="changeHeight">水位+10</button>
  </div>
</template>

<script lang="ts" setup name="Person8">
  import { ref, watch, watchEffect } from 'vue';
  
  let temp = ref(10)
  let height = ref(0)
  function changeTemp() {
    temp.value += 10
  }
  function changeHeight() {
    height.value += 10
  }

  // watch实现
  // watch([temp, height], (value) => {
  //   const [temp, height] = value;
  //   if (temp >= 60 || height >= 80) {
  //     // 给服务器发请求
  //     console.log('请求服务器');
  //   }
  // })

  watchEffect(() => {
    if (temp.value >= 60 || height.value >= 80) {
      // 给服务器发请求
      console.log('请求服务器');
    }
  })

</script>

<style scoped>
.person8 {
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