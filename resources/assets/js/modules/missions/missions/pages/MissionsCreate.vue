<template>
    <el-row>
        <el-col :span="4">
            <missions-side-bar :index="index"/>
        </el-col>
        <el-col :span="20" class="container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'missions:index' }">Gestion des Missions</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'missions:create' }">Nouvelle Mission</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="container">
                <missions-form :mission="mission" :customers="customers" v-on:submit="submitMission"/>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import moment from 'moment'
    import {mapGetters, mapActions} from 'vuex'
    import {Row as ElRow, Col as ElCol} from 'element-ui'
    import MissionsSideBar from './../components/MissionsSideBar.vue'
    import MissionsForm from './../components/MissionsForm.vue'

    import {initialMissionData} from './../config'

    export default {
        components: {ElRow, ElCol, MissionsSideBar, MissionsForm},
        data() {
            return {
                index: '0-1',
                mission: initialMissionData(),
            }
        },
        computed: {
            ...mapGetters({
                customers: 'getCustomers',
            }),
        },
        methods: {
            submitMission(mission) {
                // let start_counter = this.mission.start_counter;
                // let end_counter = this.mission.end_counter;
                // this.mission.start_counter = moment.duration(this.mission.start_counter, 'minutes').asMinutes();
                // this.mission.end_counter = moment.duration(this.mission.end_counter, 'minutes').asMinutes();
                this.$store.dispatch('saveMission', {mission: mission})
                    .then((mission) => {
                        this.$message.success('Success, mission' + mission.name + ' created.');
                        this.mission = initialMissionData();
                        this.$router.push({name: 'missions:tasks', params: {id: mission.id}})
                    })
                    .catch(error => {
                        console.log(error)
                        this.$message.error('Error, Record already exit!');
                        this.mission.start_counter = start_counter;
                        this.mission.end_counter = end_counter;
                    })
            }
        }
    }
</script>
