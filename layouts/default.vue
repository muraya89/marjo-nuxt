<template>
  <div>
    <div class="flex min-h-screen">
      <div class="dark:bg-white min-h-full" v-if="toggle" :class="toggle ? 'w-1/6':''">
        <div class="h-20"></div>
        <template v-for="(item, key) in sidebar_items">
            <div class="py-8 ml-7">
              <span :class="item.icon" class="mr-3" />
              {{item.label}}
            </div>
          <hr class="mx-5">
        </template>
      </div>
      <div :class="toggle ? 'w-5/6' : 'w-full'">
        <div class="min-w-full dark:bg-white h-16">
          <span class="pi pi-align-justify stroke-1 cursor-pointer p-6" @click="toggle = !toggle" />
        </div>
        <div class="px-4 pt-4">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const toggle = ref(true)
const sidebar_items = ref([
  {
    icon: 'pi pi-home',
    label: 'Dashboard',
    command: () =>  toggle.value = !toggle.value
  },
  {
    icon: 'pi pi-user',
    label: 'Customers',
    command: () =>  toggle.value = !toggle.value
  },
  {
    icon: 'pi pi-calendar-times',
    label: 'Events',
    command: () =>  toggle.value = !toggle.value
  },
])
</script>