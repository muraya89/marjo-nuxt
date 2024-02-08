<template>
<Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    class="max-w-md"/>
</template>
<script setup>
import { Bar } from "vue-chartjs"
import { defineProps } from "vue"
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = reactive({
    labels: ['January', 'February', 'March'],
    datasets: [ { data: [ 40, 20, 12 ] } ]
})
const chartOptions = reactive({ responsive: true })
</script>
<style>
canvas{
    height: 200px !important;
    margin: 0 auto;
    width: auto !important;
    /* max-width: 400px !important; */
}
</style>