<template>
    <el-row>
        <el-col :span="4">
            <missions-side-bar :index="index"></missions-side-bar>
        </el-col>
        <el-col :span="20" class="container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'missions:index' }">Missions Management</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'missions:create' }">Missions create</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="container">
                <missions-form :mission="mission" :customers="customers" v-on:submit="submitMission"></missions-form>
            </div>
        </el-col>
    </el-row>
</template>

<script>
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
                this.$store.dispatch('saveMission', {mission: mission})
                    .then((mission) => {
                        this.$message.success('Success, mission' + mission.name + ' created.');
                        this.mission = initialMissionData();
                        this.$router.push({name: 'missions:tasks', params: {id: mission.id}})
                    })
                    .catch(error => {
                        this.$message.error('Error, Record already exit!');
                    })
            }
        }
    }
</script>
