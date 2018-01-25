<template>
    <div class="small">
        <bar-chart :chart-data="datacollection" :options="options"></bar-chart>
        <button @click="fillData()">Randomize</button>
    </div>
</template>

<script>
    import BarChart from './../../../metrics/charts/BarChart'

    export default {
        components: {
            BarChart
        },
        data () {
            return {
                datacollection: null,
                options: {
                    responsive: false,
                    maintainAspectRation: false
                }
            }
        },
        mounted () {
            this.fillData()
        },
        methods: {
            fillData () {
                this.datacollection = {
                    labels: [this.getRandomInt(), this.getRandomInt()],
                    datasets: [
                        {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [this.getRandomInt(), this.getRandomInt()]
                        }, {
                            label: 'Data One',
                            backgroundColor: '#f87979',
                            data: [this.getRandomInt(), this.getRandomInt()]
                        }
                    ]
                }
            },
            getRandomInt () {
                return Math.floor(Math.random() * (50 - 5 + 1)) + 5
            }
        }
    }
</script>

<style>
    .small {
        height: 250px;
        min-width: 100vh;
        margin:  20px auto 20px auto;
    }
</style>