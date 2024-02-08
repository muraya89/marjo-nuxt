<template>
    <div :style="`height: ${height}px`">
        <template v-for="i in resources.slice(0, 5)" :key="i" >
            <div class="flex gap-4 p-3 ">
                <span>{{ i.name }}</span>
                <div class="flex items-center">
                    <ProgressBar id="progress" :value="i.quantity" class="text-main h-3 w-64"/>
                </div>
            </div>
        </template>
    </div>
</template>
<script setup>
const props = defineProps({
    label: {
        type: String,
        default: ''
    },
    height:{
        default: '256',
        type: String
    },
    resources: {
        default: [],
        type: Array
    }
})
</script>