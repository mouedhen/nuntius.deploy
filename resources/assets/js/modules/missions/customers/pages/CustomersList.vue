<template>
    <el-row>
        <el-col :span="4">
            <customers-side-bar :index="index"/>
        </el-col>
        <el-col :span="20" class="container scrollableY">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'customers:index' }">Customers Management</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'customers:create' }">Customers list</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="container" style="margin-top: 30px">
                <customers-table :customers="customers"/>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import {mapGetters} from 'vuex'
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
        mounted() {
            this.$store.dispatch('fetchCustomers')
                .catch(error => {
                    this.$notify.error({
                        title: 'Error',
                        message: 'Error when reading records'
                    });
                });
        },
        beforeRouteLeave(to, from, next) {
            this.$store.dispatch('reinitCustomers')
                .catch(error => {
                    this.$notify.error({
                        title: 'Error',
                        message: 'Error when reading records'
                    });
                });
            next()
        }
    }
</script>
