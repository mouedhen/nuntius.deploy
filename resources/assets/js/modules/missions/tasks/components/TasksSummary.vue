<template>
    <div>
        <hr>
        <el-row style="text-align: center" :gutter="10">

            <el-col :span="8">
                <card-stat :statTitle="'surface moyenne /H'" :statValue="metrics.averageAreaH.toFixed(2)"/>
            </el-col>
            <el-col :span="8">
                <card-stat :statTitle="'consommation moyenne /H'"
                           :statValue="metrics.averageConsumptionH.toFixed(2)"/>
            </el-col>
            <el-col :span="8">
                <card-stat :statTitle="'consommation moyenne /HA'"
                           :statValue="metrics.averageConsumptionHA.toFixed(2)"/>
            </el-col>
            <el-col :span="8">
                <card-stat :statTitle="'coût du carburant /HA'" :statValue="metrics.fuelCostHA.toFixed(2)"/>
            </el-col>
            <el-col :span="8">
                <card-stat :statTitle="'vitesse moyenne'" :statValue="metrics.averageSpeed.toFixed(2)"/>
            </el-col>
            <el-col :span="8">
                <card-stat :statTitle="'temps de changement de ligne %'"
                           :statValue="metrics.lineChangeTime.toFixed(2) * 100"/>
            </el-col>

        </el-row>
        <hr>
        <task-worked-time-bar-char/>
        <hr>

        <el-row style="text-align: center" :gutter="10">
            <el-col :span="6">
                <card-stat :statTitle="'nombre de tâches'" :statValue="metrics.totalTasks"/>
            </el-col>
            <el-col :span="6">
                <card-stat :statTitle="'temps de travail'"
                           :statValue="metrics.workTime.format({template: 'hh:mm', forceLength: true, trim: false})"/>
            </el-col>
            <el-col :span="6">
                <card-stat :statTitle="'pauses'"
                           :statValue="metrics.breakTime.format({template: 'hh:mm', forceLength: true, trim: false})"/>
            </el-col>
            <el-col :span="6">
                <card-stat :statTitle="'surface travaillée'" :statValue="metrics.workedArea.toFixed(2)"/>
            </el-col>
            <el-col :span="6">
                <card-stat :statTitle="'consommation de carburant'" :statValue="metrics.fuelConsumption.toFixed(2)"/>
            </el-col>
            <el-col :span="6">
                <card-stat :statTitle="'vitesse moyenne indiquée KM'" :statValue="metrics.averageSpeedKM.toFixed(2)"/>
            </el-col>
            <el-col :span="6">
                <card-stat :statTitle="'consommation moyenne'"
                           :statValue="metrics.averageConsumption.toFixed(2)"/>
            </el-col>
            <el-col :span="6">
                <card-stat :statTitle="'coût du carburant'" :statValue="metrics.fuelCost.toFixed(2)"/>
            </el-col>
        </el-row>
        <hr>
    </div>
</template>

<script>
    const moment = require('moment');
    const momentDurationFormatSetup = require("moment-duration-format");
    momentDurationFormatSetup(moment);
    moment.locale('en');

    import {initialTaskData} from './../config'
    // import {MissionMetrics} from './../helper'

    import {Row as ElRow, Col as ElCol} from 'element-ui'

    import CardStat from './../../../metrics/components/CardStat.vue'
    import TaskWorkedTimeBarChar from './../../tasks/charts/TaskWorkedTimeBarChart.vue'

    export default {
        components: {CardStat, ElRow, ElCol, TaskWorkedTimeBarChar},
        props: ['tasks', 'fuelUnitPrice'],
        computed: {
            metrics: function () {
                let tasks = this.tasks.map((task, index, tasks) => {
                    if (index === 0) {
                        task.break_time = 0;
                    } else {
                        task.break_time = new Date(task.start_date_time) - new Date(tasks[index - 1].end_date_time)
                    }
                    task.work_time = new Date(task.end_date_time) - new Date(task.start_date_time);
                    return task
                });
                let startDateTime = null;
                let endDateTime = null;
                let conductors = [];

                if (tasks.length > 0) {
                    startDateTime = tasks[0].start_date_time;
                    endDateTime = tasks[0].end_date_time;
                    tasks.forEach(task => {
                        let cName = task.conductor.name;
                        if (conductors.indexOf(cName) === -1) {
                            conductors.push(cName)
                        }
                    })
                }
                let totalTasks = tasks.length;
                let workTime = moment.duration(tasks.reduce((sum, task) => sum + task.work_time, 0));
                let breakTime = moment.duration(tasks.reduce((sum, task) => sum + task.break_time, 0));
                let workedArea = tasks.reduce((sum, task) => sum + task.worked_area, 0);
                let fuelConsumption = tasks.reduce((sum, task) => sum + task.fuel_consumption, 0);
                let averageSpeedKM = tasks.reduce((sum, task) => sum + task.average_speed, 0) / totalTasks;
                let averageConsumption = tasks.reduce((sum, task) => sum + task.average_consumption, 0) / totalTasks;
                let fuelCost = fuelConsumption * this.fuelUnitPrice;

                let averageAreaH = workedArea / (workTime / 3600000);
                let averageConsumptionH = fuelConsumption / (workTime / 3600000);
                let averageConsumptionHA = averageConsumptionH / averageAreaH;
                let fuelCostHA = averageConsumptionHA * this.fuelUnitPrice;
                let averageSpeed = 0;
                if (totalTasks > 0)
                    averageSpeed = averageAreaH * 10000 / tasks[0].tool_configuration / 1000;
                let lineChangeTime = (averageSpeedKM - averageSpeed) / averageSpeedKM;

                return {
                    startDateTime,
                    endDateTime,
                    conductors,
                    tasks,
                    totalTasks,
                    workTime,
                    breakTime,
                    workedArea,
                    fuelConsumption,
                    averageSpeedKM,
                    averageConsumption,
                    fuelCost,
                    averageAreaH,
                    averageConsumptionH,
                    averageConsumptionHA,
                    fuelCostHA,
                    averageSpeed,
                    lineChangeTime,
                }
            },
        },
    }
</script>
