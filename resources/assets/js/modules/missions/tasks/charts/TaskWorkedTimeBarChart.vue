<template>
    <div class="">
        <div class="small">
            <bar-chart :chart-data="datacollection" :options="options" :height="100"/>
        </div>
        <el-row>
            <el-col :span="12">
                <div class="small">
                    <bar-chart :chart-data="datacollection2" :options="options" :height="100"/>
                </div>
            </el-col>

            <el-col :span="12">
                <div class="small">
                    <bar-chart :chart-data="datacollection3" :options="options" :height="100"/>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Chart from 'chart.js'
    import moment from 'moment'
    import BarChart from './../../../metrics/charts/BarChart'

    export default {
        components: {
            BarChart
        },
        data() {
            return {
                datacollection: null,
                datacollection2: null,
                datacollection3: null,
                options: {
                    responsive: true,
                    maintainAspectRation: false,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }],
                        xAxes: [{
                            // Change here
                            barPercentage: 1
                        }]
                    },
                    events: false,
                    tooltips: {
                        enabled: false
                    },
                    hover: {
                        animationDuration: 0
                    },
                    animation: {
                        duration: 1,
                        onComplete: function () {
                            var chartInstance = this.chart,
                                ctx = chartInstance.ctx;
                            ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                            ctx.textAlign = 'center';
                            ctx.textBaseline = 'bottom';

                            this.data.datasets.forEach(function (dataset, i) {
                                var meta = chartInstance.controller.getDatasetMeta(i);
                                meta.data.forEach(function (bar, index) {
                                    var data = dataset.data[index];
                                    ctx.fillText(data, bar._model.x, bar._model.y - 5);
                                });
                            });
                        }
                    }
                }
            }
        },
        mounted() {
            this.fillData()
        },
        methods: {
            fillData() {
                this.$store.dispatch('fetchMission', {missionID: this.$route.params.id})
                    .then(mission => {
                        let conductors = [];
                        let workingTime = [];
                        let breakingTime = [];

                        let averageAreaH = [];
                        let averageConsumptionH = [];

                        mission.tasks.map((task, index, tasks) => {
                            task.work_time = (new Date(task.end_date_time) - new Date(task.start_date_time)) / 3600000;
                            task.average_area_h = task.worked_area / task.work_time;
                            task.average_consumption_h = task.fuel_consumption / task.work_time;

                            conductors.push(task.conductor.name);
                            workingTime.push(task.work_time.toFixed(2));
                            averageAreaH.push(task.average_area_h.toFixed(2));
                            averageConsumptionH.push(task.average_consumption_h.toFixed(2));

                            if (index === 0) {
                                breakingTime.push(0);
                            } else {
                                breakingTime.push(((new Date(task.start_date_time) - new Date(tasks[index - 1].end_date_time)) / 3600000).toFixed(2))
                            }

                        });
                        this.datacollection = {
                            labels: conductors,
                            datasets: [
                                {
                                    label: 'Pauses',
                                    backgroundColor: '#EF5350',
                                    data: breakingTime
                                },
                                {
                                    label: 'Temps de Travail',
                                    backgroundColor: '#2196F3',
                                    data: workingTime
                                },
                            ]
                        };
                        this.datacollection2 = {
                            labels: conductors,
                            datasets: [
                                {
                                    label: 'Surface Moyenne /H',
                                    backgroundColor: '#4CAF50',
                                    data: averageAreaH
                                },
                            ]
                        };

                        this.datacollection3 = {
                            labels: conductors,
                            datasets: [
                                {
                                    label: 'Consommation Moyenne /H',
                                    backgroundColor: '#EF6C00',
                                    data: averageConsumptionH
                                },
                            ]
                        }
                    });
            },
        }
    }
</script>

<style>
    .small {
        margin: 30px;
    }
</style>