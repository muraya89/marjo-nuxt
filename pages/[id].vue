<template>
    {{ router.params }}
    <Card class="p-10 shadow-sm" v-if="!isLoading">
        <template #header>
            <div class="md:grid grid-cols-7">
                <Button text rounded severity="secondary" class="col-span-1" icon="pi pi-arrow-left" @click.prevent="goBack()"></Button>
                <Button outlined severity="warning" icon="pi pi-pencil" class="col-end-10" label="edit" v-if="!edit" @click.prevent="edit=true"></Button>
            </div>
        </template>
        <template #title>
            <div class="font-medium md:grid grid-cols-7 gap-14">
                <div class="md:col-span-2">
                    {{resources[0].id}}: &nbsp;{{ resources[0].name }}
                </div>
                <div class="md:col-end-9 md:col-span-2 antialiased font-light text-sm">{{ resources[0].createdAt }}</div>
            </div>
        </template>
        <template #subtitle>
            <p>
                {{ resources[0].description }}
            </p>
        </template>
        <template #content>
            <p>{{ resources[0].description2 }}</p>
            <hr class="my-4">
            <div>
                <div class="text-gray-700 uppercase mb-4">Transaction</div>
                <p class="capitalize">{{ resources[0].transactionType }}</p>
            </div>
            <hr class="my-4">
            <div>
                <p class="uppercase text-gray-700 mb-4 font-light">composition</p>
                <ul class="list-disc pl-4" v-for="item in resources[0].compound">
                    <li>{{ item }}</li>
                </ul>
            </div>
        </template>
        <template #footer v-if="edit">
            <div class="grid justify-items-end">
                <div>
                    <Button>save</Button>
                </div>
            </div>
        </template>
    </Card>
    <Card class="p-10 shadow-sm" v-else>
        <template #header>
            <div class="md:grid grid-cols-7">
                <Skeleton width="5rem" height="2rem" borderRadius="16px"></Skeleton>
                <Skeleton width="5rem" height="2rem" class="col-end-10" borderRadius="16px"></Skeleton>
            </div>
        </template>
        <template #title>
            <Skeleton height="2rem" width="15rem"></Skeleton>
        </template>
        <template #subtitle>
            <Skeleton width="20rem"></Skeleton>
        </template>
        <template #content>
            <Skeleton height="2rem" class="mb-2"></Skeleton>
            <Skeleton height="2rem" class="mb-2"></Skeleton>
            <Skeleton height="2rem" class="mb-2"></Skeleton>
        </template>
        <!-- <template #footer>
            <div class="grid justify-items-end">
                <Skeleton width="5rem" height="4rem" borderRadius="16px"></Skeleton>
            </div>
        </template> -->
    </Card>
    <!-- {{ resources }} -->
</template>
<script setup>

const router = useRouter()
const route = useRoute()
const edit = ref(false)
// const { data, error } = await useFetch(() => `/api/resources/?id=${ router.params.id }`)
// const url = new URL('https://657fe9276ae0629a3f53daa4.mockapi.io/resources/');
// url.searchParams.append('name', router.params.id);
// const item = ref({})
// url.searchParams.append('page', 1);
// url.searchParams.append('limit', 10);

// fetch(url, {
//   method: 'GET',
//   headers: {'content-type':'application/json'},
// }).then(res => {
//   if (res.ok) {
//     console.log(res)
//     return res.json();
//   }
//   // handle error
// }).then(tasks => {
//     item.value = tasks[0]
// }).catch(error => {
//     toast.add({ severity: 'error', summary: 'Error', detail: error, life: 3000 })
//   // handle error
// })
const { isLoading, isError, data: resources, error, suspense } = useQuery({
  queryKey: ['resource'],
  queryFn: () => $fetch(`https://657fe9276ae0629a3f53daa4.mockapi.io/resources/?name=${route.params.id}`), // Use $fetch with your api routes to get typesafety 
})
const goBack = () => {
    router.back()
}
</script>