<template>
  <div class="person9">
    <h1>中国</h1>
    <h2 ref="title2">北京</h2>
    <h3>尚硅谷</h3>
    <button @click="showLog">点我输出h2这个元素</button>
  </div>
</template>

<script lang="ts" setup name="Person9">
  import { ref } from 'vue';

  let title2 = ref()

  function showLog() {
    console.log(title2.value)
}
</script>

<style scoped>
.person9 {
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