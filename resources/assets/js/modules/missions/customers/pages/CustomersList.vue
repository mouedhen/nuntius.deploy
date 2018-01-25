<template>
    <el-row>
        <el-col :span="4">
            <customers-side-bar :index="index"></customers-side-bar>
        </el-col>
        <el-col :span="20" class="container scrollableY">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'customers:index' }">Customers Management</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'customers:create' }">Customers list</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="container">
                <customers-table :customers="customers"></customers-table>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import {Row as ElRow, Col as ElCol} from 'element-ui'
    import CustomersSideBar from './../components/CustomersSideBar.vue'
    import CustomersTable from './../components/CustomersTable.vue'

    export default {
        components: {ElRow, ElCol, CustomersSideBar, CustomersTable},
        data() {
            return {
                index: '0-2'
            }
        },
        computed: {
            ...mapGetters({
                customers: 'getCustomers',
            }),
        },
    }
</script>
