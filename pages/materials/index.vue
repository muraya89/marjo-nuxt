<template>
<Card class="">
    <template #content>
        <DataView :value="data">
            <template #list="slotProps">
                <div class="grid grid-noguttermain">
                    <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
                        <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-4" :class="{ 'border-t-1 divide-y': index !== 0 }">
                            <div class="md:w-10rem relative my-auto">
                                <Image class="block xl:block mx-auto border-round w-full" :src="`${item.image}`" :alt="item.name" width="80" />
                            </div>
                            <div class="flex flex-row md:flex-row justify-between md:align-items-center flex-1 gap-4">
                                <div class="flex flex-col md:flex-column justify-content-between align-items-start gap-2">
                                    <div>
                                        <span class="text-secondary text-main">{{ item.department }}</span>
                                        <div class="text-main font-medium text-900 mt-2">{{ item.name }}</div>
                                    </div>
                                    <div class="surface-100 p-1" style="border-radius: 30px">
                                        <div class="flex align-items-center gap-2 justify-center py-1" style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                                            <span class="text-900 font-medium text-main">{{ item.quantity }}</span>
                                            <i class="pi pi-star-fill text-yellow-500"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col justify-end md:align-items-end gap-5">
                                    <span class="text-main font-semibold flex justify-end text-900">${{ item.price }}</span>
                                    <div class="flex flex-row-reverse md:flex-row gap-2">
                                        <Button class="h-5 w-8 text-main" icon="pi pi-heart" outlined></Button>
                                        <Button icon="pi pi-shopping-cart" label="Buy Now" :disabled="item.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial white-space-nowrap h-5 w-32 text-main"></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </DataView>
    </template>
</Card>
</template>
<script setup>
const { isLoading, isError, data, error } = useQuery({
  queryKey: ['resources'],
  queryFn: () => $fetch("https://657fe9276ae0629a3f53daa4.mockapi.io/api/resources"), // Use $fetch with your api routes to get typesafety 
})
</script>