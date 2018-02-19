<template>
    <el-row>
        <el-col :span="4">
            <customers-side-bar :index="index"/>
        </el-col>
        <el-col :span="20" class="container">
            customer dashboard
        </el-col>
    </el-row>
</template>

<script>
    import {Row as ElRow, Col as ElCol} from 'element-ui'
    import CustomersSideBar from './../components/CustomersSideBar.vue'

    export default {
        components: {ElRow, ElCol, CustomersSideBar},
        data() {
            return {
                index: '0-0'
            }
        }
    }
</script>
