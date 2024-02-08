<template>
    <div>
        <Card :class="`shadow-none text-main overflow-auto`" :style="`height: ${height}px`">
            <template #content>
            <div v-for="item in data" :key="item.id">
                <div class="my-2 flex items-end justify-end space-x-2 text-main" v-if="item.id == user_id">
                    <div class="flex items-center space-x-2">
                        <div class="relative">
                            <div class="bg-accent4 text-white text-main rounded-lg px-4 py-2">
                                Suscipit cupiditate sint rerum adipisci minima eaque libero officia.
                            </div>
                            <div class="absolute w-3 h-4 bg-accent4 transform rotate-45 top-1 -right-0.5"></div>
                        </div>
                        <Avatar :image="item.avatar" shape="circle"/>
                    </div>
                </div>
                <div class="flex justify-start gap-4 my-2 text-main" v-else>
                    <Avatar :image="item.avatar" shape="circle"/>
                    <div class="relative">
                        <div class="text-main rounded-lg px-4 py-2" :style="`background-color: ${item.color}`">
                            Fugiat quaerat mollitia facere expedita repellat alias qui.
                        </div>
                        <div class="absolute w-3 h-4 transform rotate-45 top-1 -left-0.5" :style="`background-color: ${item.color}`"></div>
                    </div>
                </div>
            </div>
                
            </template>
        </Card>
    </div>
</template>
<script setup>
import { ref } from "vue"
const user_id = ref(1)
const { isLoading, isError, data, error } = useQuery({
    queryKey: ['chats'],
    queryFn: async () => {
        const res = await fetch('https://657fe9276ae0629a3f53daa4.mockapi.io/api/chats')
        return await res.json()
    }
})
const props = defineProps({
    height:{
        default: '256',
        type: String
    }
})
const randomBackgroundColor = () => {
    let randomNumber = Math.floor(Math.random() * 1000000);
    let randomDigits = randomNumber.toString();

    while (randomDigits.length < 6) {
        randomDigits = '0' + randomDigits;
    }
    return randomNumber;
}
</script>
<style>
.bg-blue-500:hover {
    background-color: #1E40AF;
}

.bg-gray-300:hover {
    background-color: #CBD5E0;
}
</style>