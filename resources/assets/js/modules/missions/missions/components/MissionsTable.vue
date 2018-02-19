<template>
    <data-tables
            :data="missions"
            :table-props="tableProps"
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
        props: ['missions'],
        data() {
            return {
                titles: [
                    {prop: 'label', label: 'ID'},
                    {prop: 'customer.name', label: 'Client'},
                    {prop: 'status', label: 'Status'},
                ],
                tableProps: {
                    defaultSort: {
                        prop: 'label',
                    }
                },
                actionColDef: {
                    label: 'Actions',
                    tableColProps: {
                        align: 'center'
                    },
                    def: [{
                        name: 'Details',
                        handler: row => {
                            this.$router.push({name: 'missions:details', params: {id: row.id}})
                        }
                    },{
                        name: 'Supprimer',
                        handler: row => {
                            this.$store.dispatch('deleteMission', {missionID: row.id}).then(() => {
                                this.$store.dispatch('fetchMissions');
                            })
                        }
                    }]
                }
            }
        },

    }
</script>
