<template>
    <el-row>
        <el-col :span="4">
            <customers-side-bar :index="index"/>
        </el-col>
        <el-col :span="20" class="container scrollableY">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'customers:index' }">Gestion des clients</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'customers:create' }">Nouveau client</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="container">
                <customers-form :customer="customer" v-on:submit="submitCustomer"/>
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import {Row as ElRow, Col as ElCol} from 'element-ui'
    import CustomersSideBar from './../components/CustomersSideBar.vue'
    import CustomersForm from './../components/CustomersForm.vue'

    import {initialCustomerData} from './../config'

    export default {
        components: {ElRow, ElCol, CustomersSideBar, CustomersForm},
        data() {
            return {
                index: '0-1',
                customer: initialCustomerData(),
            }
        },
        methods: {
            submitCustomer(customer) {
                this.$store.dispatch('saveCustomer', {customer: this.customer})
                    .then((customer) => {
                        this.$message.success('Success, customer' + customer.name + ' created.');
                        this.customer = initialCustomerData()
                    })
                    .catch(error => {
                        this.$message.error('Error, Record already exit!');
                    })
            }
        }
    }
</script>
