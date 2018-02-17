<template>
    <data-tables
            :data="contacts"
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
        props: ['contacts'],
        data() {
            return {
                titles: [
                    {prop: 'name', label: 'Nom'},
                    {prop: 'email', label: 'Email'},
                    {prop: 'phone_number', label: 'Numéro de téléphone'},
                    {prop: 'address', label: 'Adresse'},
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
                },
                actionColDef: {
                    label: 'Actions',
                    tableColProps: {
                        align: 'center'
                    },
                    def: [{
                        name: 'Details',
                        handler: row => {
                            // this.$router.push({name: 'contacts:details', params: {id: row.id}})
                        }
                    }, {
                        name: 'Delete',
                        handler: row => {
                            this.$store.dispatch('deleteCustomer', {contactID: row.id}).then(() => {
                                this.fetchCustomers();
                            })
                        }
                    }]
                }
            }
        }
    }
</script>
