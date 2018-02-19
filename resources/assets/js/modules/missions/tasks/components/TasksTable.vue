<template>
    <el-table
            :data="tableTasks"
            style="width: 100%">
        <el-table-column
                prop="conductor.name"
                label="Conductor">
        </el-table-column>

        <el-table-column
                prop="tractor.designation"
                label="Tractor">
        </el-table-column>

        <el-table-column
                prop="tool.designation"
                label="Tool">
        </el-table-column>

        <el-table-column
                prop="work_time"
                label="Work time">
        </el-table-column>
    </el-table>
</template>

<script>
    import {duration} from 'moment'

    export default {
        props: ['tasks'],
        computed: {
            tableTasks: function () {
                return this.tasks.map(task => {
                    task.work_time = duration(new Date(task.end_date_time) - new Date(task.start_date_time)).humanize();
                    return task
                })
            }
        },
        mounted() {
            console.log(this.tasks)
        }
    }
</script>