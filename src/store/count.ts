import { defineStore } from "pinia";

export const useCountStore = defineStore('count', {
    actions: {
        increment(value: number) {
            if (this.sum < 15) {
                this.sum += value
            }
        },
        decrement(value: number) {
            if (this.sum > value) {
                this.sum -= value
            }
        }
    },
    state() {
        return {
            sum: 3,
            school: 'atguigu',
            address: '宏福科技园'
        }
    },
    getters: {
        // 计算属性
        bigSum: state => state.sum * 10,
        upperSchool(): string {
            return this.school.toUpperCase()
        }
    }
})