<template>
    <div class="items-center flex justify-center min-h-screen">
        <div class="flex flex-col bg-white items-center gap-12 rounded-lg p-12">
        <img alt="Vue logo" src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/407.jpg" height="90" />
            
        <Prime-Button label="Log" @click.prevent="Log"/>
        <Prime-DataTable :value="data" @row-click="openDialog($event)">
            <Prime-Column field="id" header="ID"></Prime-Column>
            <Prime-Column field="name" header="Name"></Prime-Column>
            <Prime-Column field="createdAt" header="Color"></Prime-Column>
            <Prime-Column field="" header="Actions">
                <template #body="slotProps">
                    <i class="pi pi-ellipsis-v"></i>
                </template>
            </Prime-Column>
        </Prime-DataTable>

        <Prime-Dialog v-model:visible="dialogVisible" header="Dialog">
            <div v-for="(item, key) in selectedItem?.data">
                <div class="flex flex-row m-5">
                    <div class="text-slate-400 capitalize basis-1/4">{{ key }}</div>
                    <div class="basis-1/2">{{ item }}</div>
                </div>
                <hr :key="key" class="mx-4"/>
            </div>
        </Prime-Dialog>
        <!-- {{ data }} -->
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
definePageMeta({
    layout: "default"
})
const items = await useFetch('/api/resources')
const data = items?.data
const dialogVisible = ref(false)
const selectedItem = ref(null)
const Log = () => {
    console.log("Data: ", items.data)
}
const openDialog = (item) => {
  dialogVisible.value = true
  selectedItem.value = item
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  border: 1px solid var(--surface-border);
  background-color: var(--surface-card);
  padding: 3rem;
  border-radius: 1rem;
}

form {
  display: flex;
  gap: 1rem;
}
</style>