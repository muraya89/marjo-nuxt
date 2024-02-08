<template>
  <div class="text-slate-500 uppercase grid grid-cols-12 bg-navbarBg">
    <div class="col-start-1 col-span-3 border-l-8 border-black pl-2 bg-slate-200 rounded-r-lg h-6 items-center flex">
        <p class="">{{ label}}</p>
    </div>
    <div class="col-end-9">
       <slot name="button"></slot>
    </div>
</div>
</template>
<script setup>
const props = defineProps(["label"])
</script>