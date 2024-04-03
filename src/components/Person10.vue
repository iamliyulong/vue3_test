<template>
  <div class="person10">
    <ul>
      <li v-for="item in list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="Person10">
  import { type Persons } from '@/types';
  import { withDefaults } from 'vue';

  // 只接收list
  // defineProps(['list'])

  // 接收list + 限制类型
  // defineProps<{ list: Persons }>()

  //  接收list + 限制类型 + 限制必要性 + 指定默认值
  withDefaults(defineProps<{ list?: Persons }>(), { list: () => [{ id: '666', name: '孙悟空', age: 10000 }] })

  // 接收list，同时将props保存起来
  // let props = defineProps<{ list: Persons }>()
  // console.log(props)
</script>

<style scoped>
.person10 {
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