<template>
    <div>

        <table class="el-table el-table--border" style="table-layout: fixed">
            <tr>
                <th style="padding: 10px">Conductor</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.conductor}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Break time</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.break_time}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Start Time</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{formatDate(task.start_date_time)}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">End Time</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{formatDate(task.end_date_time)}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Work Time</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.work_time}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Tractor</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.tractor}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Tool</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.tool}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Tool Configuration</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.tool_configuration}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Depth in CM</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.depth_in_cm}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Width in M</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.width_in_m}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Average Indicated Speed</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.average_speed}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Worked Area</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.worked_area}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Average Fuel Consumption</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.average_consumption}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Total Fuel Consumption</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.fuel_consumption}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Observations</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.observation}}</td>
            </tr>
        </table>
        <!--
        <el-table
                :data="tableTasks"
                border
                style="width: 100%">

            <el-table-column
                    prop="conductor"
                    label="Conductor">
            </el-table-column>

            <el-table-column
                    prop="break_time"
                    label="Break Time">
            </el-table-column>

            <el-table-column
                    prop="start_date_time"
                    label="Start Date Time">
            </el-table-column>

            <el-table-column
                    prop="end_date_time"
                    label="End Date Time">
            </el-table-column>

            <el-table-column
                    prop="work_time"
                    label="Work time">
            </el-table-column>

            <el-table-column
                    prop="tractor"
                    label="Tractor">
            </el-table-column>

            <el-table-column
                    prop="tool"
                    label="Tool">
            </el-table-column>

            <el-table-column
                    prop="tool_configuration"
                    label="Tool">
            </el-table-column>

            <el-table-column
                    prop="depth_in_cm"
                    label="Depth in CM">
            </el-table-column>

            <el-table-column
                    prop="width_in_m"
                    label="Width in M">
            </el-table-column>

            <el-table-column
                    prop="average_speed"
                    label="Average Speed">
            </el-table-column>

            <el-table-column
                    prop="worked_area"
                    label="Worked Area">
            </el-table-column>

            <el-table-column
                    prop="average_consumption"
                    label="Average Consumption">
            </el-table-column>

            <el-table-column
                    prop="fuel_consumption"
                    label="Fuel Consumption">
            </el-table-column>

            <el-table-column
                    prop="observation"
                    label="Observation">
            </el-table-column>

        </el-table>
        -->
    </div>
</template>

<script>
    const moment = require('moment');
    const momentDurationFormatSetup = require("moment-duration-format");
    momentDurationFormatSetup(moment);
    moment.locale('en');

    export default {
        props: ['tasks'],
        computed: {
            tableTasks: function () {
                return this.tasks.map((task, index, tasks) => {
                    if (index === 0) {
                        task.break_time = moment
                            .duration(0)
                            .format({template: 'hh[h]: mm[m]', forceLength: true, trim: false});
                    } else {
                        task.break_time = moment
                            .duration(new Date(task.start_date_time) - new Date(tasks[index - 1].end_date_time))
                            .format({template: 'hh[h]: mm[m]', forceLength: true, trim: false})
                    }
                    task.work_time = moment
                        .duration(new Date(task.end_date_time) - new Date(task.start_date_time))
                        .format({template: 'hh[h]: mm[m]', forceLength: true, trim: false});
                    return task
                })
            }
        },
        methods: {
            formatDate(stringDate) {
                return moment(new Date(stringDate)).format('HH:mm')
            }
        }
    }
</script>