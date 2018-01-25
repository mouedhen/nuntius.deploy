<template>
    <div class="container">
        <h1 style="text-align: center">Mission - {{mission.label}}</h1>
        <el-row>
            <el-col :span="18">
                <dl>
                    <dt style="font-weight: 600">Client label</dt>
                    <dd>{{mission.customer.label}}</dd>
                    <dt style="font-weight: 600">Client name</dt>
                    <dd>{{mission.customer.name}}</dd>
                </dl>
            </el-col>
            <el-col :span="6">
                <dt style="font-weight: 600">Estimated Start Date</dt>
                <dd>{{mission.estimated_start_date}}</dd>
                <dt style="font-weight: 600">Estimated End Date</dt>
                <dd>{{mission.estimated_end_date}}</dd>
            </el-col>
        </el-row>
        <tasks-summary :tasks="mission.tasks" :fuelUnitPrice="mission.fuel_unit_price"></tasks-summary>
        <tasks-table :tasks="mission.tasks"></tasks-table>
    </div>
</template>

<script>
    import {Row as ElRow, Col as ElCol} from 'element-ui'

    import TasksSummary from './../../tasks/components/TasksSummary.vue'
    import TasksTable from './../../tasks/components/TasksTableDetails.vue'

    export default {
        components: {ElRow, ElCol, TasksSummary, TasksTable},
        props: ['mission'],
    }
</script>
