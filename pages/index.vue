<template>
    <Toast autoZIndex :baseZIndex="5" />
    <div class="basis-1/2 grid grid-cols-2 mb-4 rounded-large bg-white p-5 place-items-center">
        <div class="justify-self-start text-center ml-5">{{ res.length}} &nbsp;Team members</div>
        <div class="justify-self-end">
            <AvatarGroup>
                <template v-for="image in res?.slice(0, 40)" class="flex items-center">
                    <Avatar :image="image.image" shape="circle"/>
                </template>
                <template class="flex items-center ">
                    <Avatar :label="`+${res.length - 40}`" shape="circle" class="text-main"/>
                </template>
            </AvatarGroup>
        </div>
    </div>

    <div class="flex flex-row gap-4">
        <div class="basis-1/2 bg-white items-center rounded-lg px-10 py-6">
            <!-- <img alt="Vue logo" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/407.jpg" height="90" /> -->
            <div class="text-slate-500 uppercase grid grid-cols-9 mb-4">
                <div class="col-start-1 sm:col-span-3 md:col-span-2 border-l-8 border-black pl-2 bg-slate-200 rounded-r-md max-h-8 items-center flex">
                    <p class="">resources</p>
                </div>
                <div class="col-end-9">
                    <Button class="h-5">
                        <i class="pi pi-plus mr-2 text-main"></i>   
                        <span class="text-main">new</span> 
                    </Button>
                </div>
            </div>
            <DataTable :value="res" class="cursor-pointer text-main" size="small" scroll-height="500px" @row-click="handleSelectItem" stripedRows scrollable >
                <Column field="id" header="ID"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="color" header="Color">
                    <template #body="slotProps">
                        <div class="h-5 w-5 rounded-full" :style="`background-color: ${slotProps.data.color}`"></div>
                    </template>
                </Column>
                <Column field="price" header="Price">
                    <template #body="slotProps">
                        <div class="text-right">{{ slotProps.data.currencySymbol }} {{ slotProps.data.price }}</div>
                    </template>
                </Column>
                <Column field="manufacturedBy" header="Manufacturer"></Column>
                <!-- <Column field="" header="Actions">
                    <template #body="slotProps">
                        <i class="pi pi-ellipsis-v cursor-pointer" @click="toggle($event), handleSelectItem(slotProps)" aria-haspopup="true" aria-controls="overlay_menu"></i>
                        <Menu ref="menu" :model="menu_items(slotProps)" id="overlay_menu" :popup="true">
                            <template #item="{item, props}">
                                <div v-ripple :target="item.target" v-bind="props.action">
                                    <span :class="item.icon" />
                                    <span class="ml-2">{{ item.label }}</span>
                                </div>
                            </template>
                        </Menu>
                    </template>
                </Column> -->
            </DataTable>

            <Dialog v-model:visible="dialogVisible" modal header="Dialog" class="max-h-96 max-w-prose" position="right">
                <template #header>
                    <div class="inline-flex align-items-center gap-2">
                        <Avatar :image="selectedItem?.data?.image" size="large" shape="circle" class="border-double border-4 border-sky-500" ></Avatar>
                        <span class="pt-3 white-space-nowrap">{{ selectedItem?.data.name }}</span>
                    </div>
                </template>
                <div v-for="(item, key) in selectedItem?.data">
                    <div class="flex flex-row m-5">
                        <div class="text-slate-400 capitalize basis-1/4 my-auto">{{ key }}</div>
                        <div class="basis-1/2 text-wrap" v-if="key !== 'image'">{{ item }}</div>
                        <div v-else class="basis-1/2 text-wrap" >
                            <Button label="view image" outlined size="small"/>
                        </div>
                    </div>
                    <hr :key="key" class="mx-4"/>
                </div>
            </Dialog>
        </div>

        <div class="basis-1/2">
            <div class="bg-white mb-4 px-10 py-6 rounded-lg">
                <Title label="Bar Stats">
                    <template #button>
                        hello
                    </template>
                </Title>
                <BarChart />
            </div>

            <div class="bg-white px-10 py-6 rounded-lg">
                <Title label="Line Stats">
                    <template #button>
                        hello
                    </template>
                </Title>
                <LineChart />
            </div>
        </div>
        
    </div>

    <div class="flex gap-4 mt-4">
        <div class="basis-2/3 bg-white rounded-lg">
            <Chats />
        </div>
        <div class="basis-1/3 bg-white rounded-lg py-3 px-3">
            <Progress :label="'Material 1'" :resources="res" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import {ref, onMounted} from 'vue'
import Title from "@/components/shared/Title.vue"
import BarChart from '@/components/BarChart.vue'
import LineChart from '@/components/lineChart.vue'
import Chats from '@/components/Chats.vue'
import Progress from '@/components/Progress.vue'

definePageMeta({
    layout: "default"
})
const toast = useToast()
const items = await useFetch('/api/resources')
const { isLoading, isError, data, error } = useQuery({
  queryKey: ['resources'],
  queryFn: () => $fetch("https://jsonplaceholder.typicode.com/posts"), // Use $fetch with your api routes to get typesafety 
})
const router = useRouter()
const res: any[] | undefined = items?.data;
const dialogVisible: Ref<boolean> = ref(false)
const selectedItem: Ref<object | null>  = ref(null)
const menu = ref()
const menu_items = (rowData: any) => {
    return [
    {
        label: 'view',
        icon: 'pi pi-eye',
        command: () => {
            console.log('command', selectedItem.value?.data.id)
            router.push({path: `/${selectedItem.value?.data.name}`})
        }
    },
    {
        label: 'delete',
        icon: 'pi pi-trash',
        command: () => toast.add({ severity: 'success', summary: 'Success', detail: 'Data deleted', life: 3000 })
    },
]}
const openDialog = (item: object) => {
  dialogVisible.value = true
  selectedItem.value = item
}
const toggle = (event: Event) => {
    menu.value.toggle(event)
}
const handleSelectItem = (item: object) => {
    selectedItem.value = item.data
    navigateTo({path: `/${item.data?.name}`})
}
</script>
<style scoped>
#dropzone.dragging_over {
  border: 2px dashed #fff;
  background-color: #666;
}
#dropzone{
    height: 100px;
    border: 2px rgb(43, 26, 193) dashed;
}
</style>
