<template>
    <el-row>
        <el-col :span="4">
            <missions-side-bar :index="index"></missions-side-bar>
        </el-col>
        <el-col :span="20" class="container">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'missions:index' }">Missions Management</el-breadcrumb-item>
                <el-breadcrumb-item>Missions Dashboard</el-breadcrumb-item>
            </el-breadcrumb>
        </el-col>
    </el-row>
</template>

<script>
    import {Row as ElRow, Col as ElCol} from 'element-ui'
    import MissionsSideBar from './../components/MissionsSideBar.vue'

    export default {
        components: {ElRow, ElCol, MissionsSideBar},
        data() {
            return {
                index: '0-0'
            }
        }
    }
</script>
