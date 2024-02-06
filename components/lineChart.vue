<script setup>
import Chart from 'primevue/chart';
import { ref, onMounted } from "vue";

onMounted(() => {
    chartData.value = setChartData()
    chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartOptions = ref(null)

const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--orange-500'), documentStyle.getPropertyValue('--gray-500')],
                hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--orange-400'), documentStyle.getPropertyValue('--gray-400')]
            }
        ]
    };
};

const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    return {
        plugins: {
            legend: {
                labels: {
                    cutout: '60%',
                    color: textColor
                }
            }
        }
    };
};
</script>
<template>
<div>
    <Chart type="doughnut" :data="chartData" :options="chartOptions" class="md:w-30rem"></Chart>
</div>
</template>
<style>
canvas{
    height: 300px !important;
    margin: 0 auto;
}
</style>