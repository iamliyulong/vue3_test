import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from 'nanoid'

export const useLoveTalkStore = defineStore('lvoeTalk', {
    actions: {
        async getLoveTalk() {
            try {
                // 发请求，下面这行的写法是：连续解构赋值+重命名
                let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
                // 把请求回来的字符串，包装成一个对象
                let loveTakObj = { id: nanoid(), title }
                // 放到数组中
                this.talkList.unshift(loveTakObj)
            } catch (err) {
                console.log(err)
            }
        }
    },
    state() {
        return {
            talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    }
})