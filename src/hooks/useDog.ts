import { onMounted, reactive } from 'vue'
import axios from 'axios'
export default function () {
    let dogList = reactive(['https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'])

    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breeds/image/random')
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }
    }

    // 钩子-页面加载时获取狗图片
    onMounted(()=>{
        getDog()
    })

    return {dogList, getDog}
}