<template>
    <el-menu :router="true"
             background-color="#ffa801"
             text-color="#fff"
             active-text-color="#222"
             mode="horizontal" :default-active="activeIndex">
        <el-menu-item :route="{name: 'index'}" index="0">NUNTIUS</el-menu-item>
        <el-menu-item :route="{name: 'missions:index'}" index="1">Missions</el-menu-item>
        <el-menu-item :route="{name: 'customers:index'}" index="2">Customers</el-menu-item>
        <el-menu-item :route="{name: 'locations:index'}" index="3">Locations</el-menu-item>
    </el-menu>
</template>

<script>
    import {siteName} from './../../../config'
    import {mapState} from 'vuex'

    export default {
        name: 'top-menu',
        data() {
            return {
                activeIndex: '0',
                siteName: siteName
            }
        },
        computed: {
            //@todo auth
        },
        methods: {
            logout() {
                //@todo logout
            }
        }
    }
</script>