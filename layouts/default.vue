<template>
  <div>
    <div class="flex min-h-screen text-main">
      <div class="dark:bg-white min-h-full" v-if="toggle" :class="toggle ? 'w-2/12':''">
        <div class="h-10"></div>
        <template v-for="(item, key) in sidebar_items">
            <div class="py-4 ml-7 cursor-pointer" @click="item.command">
              <span :class="item.icon" class="mr-3 text-main" />
              {{item.label}}
            </div>
          <!-- <hr class="mx-5"> -->
        </template>
      </div>
      <div :class="toggle ? 'w-10/12' : 'w-full'">
        <div class="min-w-full dark:bg-white h-10">
          <span class="pi pi-align-justify stroke-1 cursor-pointer p-3" @click="toggle = !toggle" />
        </div>
        <div class="px-4 py-4">
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
    command: () =>  navigateTo('/')
  },
  {
    icon: 'pi pi-user',
    label: 'Materials',
    command: () =>  navigateTo('/materials')
  },
  {
    icon: 'pi pi-calendar-times',
    label: 'Events',
    command: () =>  navigateTo('/events')
  },
])
</script>