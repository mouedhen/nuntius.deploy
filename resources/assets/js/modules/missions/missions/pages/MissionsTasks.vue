<template>
    <el-row>
        <el-col :span="4">
            <missions-side-bar :index="index"></missions-side-bar>
        </el-col>
        <el-col :span="20" class="scrollableY container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'missions:index' }">Missions Management</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'missions:create' }">Missions List</el-breadcrumb-item>
                <el-breadcrumb-item>Missions Tasks</el-breadcrumb-item>
            </el-breadcrumb>

            <div class="container">
                <h1 style="text-align: center">Mission - {{mission.label}}</h1>
                <div>
                    <!--
                    <el-row>
                        <el-col :span="20">
                            <dl>
                                <dt style="font-weight: 600">Estimated start date</dt>
                                <dd>{{mission.estimated_start_date}}</dd>
                                <dt style="font-weight: 600">Estimated end date</dt>
                                <dd>{{mission.estimated_end_date}}</dd>
                            </dl>
                        </el-col>
                        <el-col :span="4">
                            <dl>
                                <dt style="font-weight: 600">Customer ID</dt>
                                <dd>{{mission.customer.label}}</dd>
                                <dt style="font-weight: 600">Customer name</dt>
                                <dd>{{mission.customer.name}}</dd>
                            </dl>
                        </el-col>
                    </el-row>
                    -->
                    <tasks-form :task="task" v-on:submit="submitTask"></tasks-form>
                    <tasks-table :tasks="mission.tasks"></tasks-table>
                </div>
            </div>

        </el-col>
    </el-row>
</template>

<script>
    import {Row as ElRow, Col as ElCol} from 'element-ui'
    import MissionsSideBar from './../components/MissionsSideBar.vue'
    import TasksForm from './../../tasks/components/TasksForm.vue'
    import TasksTable from './../../tasks/components/TasksTable.vue'

    import {missionDetails} from '../config'
    import {initialTaskData} from '../../tasks/config'

    export default {
        components: {ElRow, ElCol, MissionsSideBar, TasksForm, TasksTable},
        data() {
            return {
                index: '0-4',
                mission: missionDetails(),
                task: initialTaskData()
            }
        },
        computed: {
            //
        },
        mounted() {
            this.$store.dispatch('fetchMission', {missionID: this.$route.params.id}).then(mission => {
                this.mission = mission;
            }).catch(error => {
                this.$message.error('Error, can not get records details !');
            })
        },
        methods: {
            submitTask(task) {
                task.mission_id = this.$route.params.id;
                console.log(task);

                this.$store.dispatch('saveTask', {task: task})
                    .then((task) => {
                        this.$message.success('Success, task' + task.label + ' created.');

                        // reinitialize task
                        this.task = initialTaskData();

                        // refresh mission
                        this.$store.dispatch('fetchMission', {missionID: this.$route.params.id}).then(mission => {
                            this.mission = mission;
                            console.log(this.mission)
                        }).catch(error => {
                            this.$message.error('Error, can not get records details !');
                            this.task.id = -1
                        });
                    })
                    .catch(error => {
                        this.$message.error('Error, Record already exit!');
                    })
            }
        }
    }
</script>
