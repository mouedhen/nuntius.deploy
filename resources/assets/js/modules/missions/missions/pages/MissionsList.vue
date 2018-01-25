<template>
    <el-row>
        <el-col :span="4">
            <missions-side-bar :index="index"></missions-side-bar>
        </el-col>
        <el-col :span="20" class="container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'missions:index' }">Missions Management</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'missions:create' }">Missions List</el-breadcrumb-item>
            </el-breadcrumb>
            <missions-table :missions="missions"></missions-table>
        </el-col>
    </el-row>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import {Row as ElRow, Col as ElCol} from 'element-ui'
    import MissionsSideBar from './../components/MissionsSideBar.vue'
    import MissionsTable from './../components/MissionsTable.vue'

    export default {
        components: {ElRow, ElCol, MissionsSideBar, MissionsTable},
        data() {
            return {
                index: '0-2'
            }
        },
        computed: {
            ...mapGetters({
                missions: 'getMissions',
            }),
        },
    }
</script>
