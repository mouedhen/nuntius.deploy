<template>
    <el-row>
        <el-col :span="4">
            <missions-side-bar :index="index"/>
        </el-col>
        <el-col :span="20" class="scrollableY container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'missions:index' }">Gestion des Missions</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'missions:list' }">Liste des Missions</el-breadcrumb-item>
                <el-breadcrumb-item>Liste des Tâches de la Mission</el-breadcrumb-item>
            </el-breadcrumb>

            <div class="container">
                <h1 style="text-align: center">Mission - {{mission.label}}</h1>
                <div style="text-align: center">{{start_date}}</div>
                <div>
                    <tasks-form :task="task" v-on:submit="submitTask"/>
                    <tasks-table :tasks="mission.tasks"/>
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

    import moment from 'moment'

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
            start_date: function () {
                return moment(this.mission.estimated_start_date).format('DD/MM/YYYY')
            }
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
