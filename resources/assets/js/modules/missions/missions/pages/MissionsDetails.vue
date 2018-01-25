<template>
    <el-row>
        <el-col :span="4">
            <missions-side-bar class="noprint" :index="index"></missions-side-bar>
        </el-col>
        <el-col :span="20" class="container scrollableY printcontent">
            <el-breadcrumb separator="/" class="noprint">
                <el-breadcrumb-item :to="{ name: 'missions:index' }">Missions Management</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'missions:create' }">Missions List</el-breadcrumb-item>
                <el-breadcrumb-item>Missions Details</el-breadcrumb-item>
            </el-breadcrumb>
            <missions-details-component :mission="mission"></missions-details-component>
        </el-col>
    </el-row>
</template>

<script>
    import moment from 'moment'

    import {Row as ElRow, Col as ElCol} from 'element-ui'
    import {missionDetails} from '../config'
    import MissionsSideBar from './../components/MissionsSideBar.vue'
    import MissionsDetailsComponent from './../components/MissionsDetails.vue'

    export default {
        components: {ElRow, ElCol, MissionsSideBar, MissionsDetailsComponent},
        data() {
            return {
                index: '0-3',
                mission: missionDetails(),
            }
        },
        mounted() {
            this.$store.dispatch('fetchMission', {missionID: this.$route.params.id})
                .then(mission => {
                    this.mission = mission;
                }).catch(error => {
                this.$message.error('Error, can not get records details !');
            })
        }
    }
</script>
