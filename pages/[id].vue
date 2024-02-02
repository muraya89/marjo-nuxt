<template>
    <Card class="p-10 shadow-sm">
        <template #header>
            <div>
                <Button text rounded severity="secondary" icon="pi pi-arrow-left" @click="$router.push('/')"></Button>
                <!-- <img alt="resource" :src="item.image"/> -->
            </div>
            <!-- {{ item }} -->
        </template>
        <template #title>
            <p v-if="item.name">
                {{item.id}}: &nbsp;{{ item.name }}
            </p>
            <Skeleton v-else height="2rem" width="15rem"></Skeleton>
        </template>
        <template #subtitle>
            <p v-if="item.description">
                {{ item.description }}
            </p>
            <Skeleton v-else width="20rem"></Skeleton>
        </template>
        <template #content>
            
        </template>
        <template #footer>
            <div class="grid justify-items-end">
                <div>
                    <Button>save</Button>
                </div>
            </div>
        </template>
    </Card>
</template>
<script setup>
const router = useRoute()
const data = ref([])
// const {data, error } = await useFetch(() => `/api/resources/?id=${ router.params.id }`)
const url = new URL('https://657fe9276ae0629a3f53daa4.mockapi.io/resources/');
url.searchParams.append('name', router.params.id);
const item = ref({})
// url.searchParams.append('page', 1);
// url.searchParams.append('limit', 10);

fetch(url, {
  method: 'GET',
  headers: {'content-type':'application/json'},
}).then(res => {
  if (res.ok) {
    console.log(res)
    return res.json();
  }
  // handle error
}).then(tasks => {
    item.value = tasks[0]
}).catch(error => {
    toast.add({ severity: 'error', summary: 'Error', detail: error, life: 3000 })
  // handle error
})

</script>