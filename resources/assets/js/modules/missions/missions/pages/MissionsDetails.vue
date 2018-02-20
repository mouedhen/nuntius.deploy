<template>
    <el-row>
        <el-col :span="4">
            <missions-side-bar class="noprint" :index="index"/>
        </el-col>
        <el-col :span="20" class="container scrollableY printcontent">
            <el-breadcrumb separator="/" class="noprint">
                <el-breadcrumb-item :to="{ name: 'missions:index' }">Gestion des Missions</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'missions:list' }">Liste des Mission</el-breadcrumb-item>
                <el-breadcrumb-item>Détails Mission</el-breadcrumb-item>
            </el-breadcrumb>

            <missions-details-component :mission="mission" class="printcontent" />

            <el-steps v-if="(mission.status !== 'canceled') && (mission.status !== 'finished')" class="margin-top" :active="step" align-center>
                <el-step title="Planifiée"/>
                <el-step title="Validée"/>
                <el-step title="En cours"/>
                <el-step title="Terminée"/>
            </el-steps>

            <el-steps v-if="mission.status === 'canceled'" class="margin-top" :active="2" align-center>
                <el-step title="Planifiée"/>
                <el-step title="Annulée"/>
            </el-steps>

            <planned-mission v-if="mission.status === 'planned'" class="margin-top" style="text-align: right" @submit="submit" :mission="mission"/>
            <canceled-mission v-if="mission.status === 'canceled'" :mission="mission"/>
            <validated-mission v-if="mission.status === 'validated'" :mission="mission" @submit="submit" />
            <in-progress-mission v-if="mission.status === 'in_progress'" @submit="submit" :mission="mission" @newTask="reload" />
            <finished-mission class="printcontent" v-if="mission.status === 'finished'" :mission="mission" />
        </el-col>
    </el-row>
</template>

<script>
    import {initialMissionData} from '../config'
    import MissionsSideBar from './../components/MissionsSideBar.vue'
    import MissionsDetailsComponent from './../components/MissionsDetails.vue'
    import PlannedMission from './../workflow/PlannedMission'
    import CanceledMission from './../workflow/CanceledMission'
    import ValidatedMission from './../workflow/ValidatedMission'
    import InProgressMission from './../workflow/InProgressMission'
    import FinishedMission from './../workflow/FinishedMission'

    export default {
        components: {
            MissionsSideBar,
            MissionsDetailsComponent,
            PlannedMission,
            CanceledMission,
            ValidatedMission,
            InProgressMission,
            FinishedMission,
        },
        data() {
            return {
                index: '0-3',
                mission: initialMissionData(),
            }
        },
        computed: {
            step: function () {
                switch(this.mission.status) {
                    case 'planned': return 1;
                    // case 'canceled': return 0;
                    case 'validated': return 2;
                    case 'in_progress': return 3;
                    case 'finished': return 4;
                    default: return 0
                }
            }
        },
        mounted() {
            this.$store.dispatch('fetchMission', {missionID: this.$route.params.id})
                .then(mission => {
                    this.mission = mission;
                }).catch(error => {
                this.$message.error('Error, can not get records details !');
            })
        },
        methods: {
            submit(action) {
                this.$store.dispatch('saveMission', { mission: this.mission, action });

                this.$store.dispatch('fetchMission', {missionID: this.$route.params.id})
                    .then(mission => {
                        this.mission = mission;
                    }).catch(error => {
                    this.$message.error('Error, can not get records details !');
                })

            },
            reload() {
                this.$store.dispatch('fetchMission', {missionID: this.$route.params.id})
                    .then(mission => {
                        this.mission = mission;
                    }).catch(error => {
                    this.$message.error('Error, can not get records details !');
                })
            }
        }
    }
</script>
