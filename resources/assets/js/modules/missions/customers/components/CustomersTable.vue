<template>
    <data-tables
            :data="customers"
            :table-props="tableProps"
            :checkbox-filter-def="checkboxFilterDef"
            :action-col-def="actionColDef">
        <el-table-column
                v-for="title in titles"
                :prop="title.prop"
                :label="title.label"
                :key="title.prop"
                sortable="custom">
        </el-table-column>
    </data-tables>
</template>

<script>
    export default {
        props: ['customers'],
        data() {
            return {
                titles: [
                    {prop: 'name', label: 'Name'},
                    {prop: 'email', label: 'Email'},
                    {prop: 'phone_number', label: 'phone_number'},
                    {prop: 'category', label: 'Category'},
                ],
                tableProps: {
                    defaultSort: {
                        prop: 'name',
                    }
                },
                checkboxFilterDef: {
                    colProps: {
                        span: 19
                    },
                    props: 'category',
                    def: [{
                        'code': 'particular',
                        'name': 'Particulars'
                    }, {
                        'code': 'company',
                        'name': 'Companies'
                    }]
                },
                actionColDef: {
                    label: 'Actions',
                    tableColProps: {
                        align: 'center'
                    },
                    def: [{
                        name: 'Details',
                        handler: row => {
                            this.$router.push({name: 'customers:details', params: {id: row.id}})
                        }
                    }, {
                        name: 'Delete',
                        handler: row => {
                            this.$store.dispatch('deleteCustomer', {customerID: row.id}).then(() => {
                                this.fetchCustomers();
                            })
                        }
                    }]
                }
            }
        }
    }
</script>
