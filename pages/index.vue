<template>
    <div class="flex">
        <Toast autoZIndex :baseZIndex="5" />
        <div class="flex flex-col bg-white items-center gap-12 rounded-lg p-12">
        <img alt="Vue logo" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/407.jpg" height="90" />
        

        <DataTable :value="res" class="cursor-pointer" scroll-height="400px" stripedRows scrollable >
            <Column field="id" header="ID"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="createdAt" header="Color"></Column>
            <Column field="" header="Actions">
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
            </Column>
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
    </div>
</template>

<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import {ref, onMounted} from 'vue'

definePageMeta({
    layout: "default"
})
const toast = useToast()
const items = await useFetch('/api/resources')
const { isLoading, isError, data, error } = useQuery({
  queryKey: ['posts'],
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
    selectedItem.value = item
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
