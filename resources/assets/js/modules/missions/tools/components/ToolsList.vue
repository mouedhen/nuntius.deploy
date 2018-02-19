<template>
    <data-tables
            :data="tools"
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
        props: ['tools'],
        data() {
            return {
                titles: [
                    {prop: 'designation', label: 'Désignation'},
                ],
                tableProps: {
                    defaultSort: {
                        prop: 'name',
                    }
                },
                actionColDef: {
                    label: 'Actions',
                    width: 250,
                    tableColProps: {
                        align: 'center'
                    },
                    def: [
                        // {
                        //     name: 'Details',
                        //     handler: row => {
                        //         // this.$router.push({name: 'missions:details', params: {id: row.id}})
                        //     }
                        // },
                        {
                            name: 'Supprimer',
                            handler: row => {

                                this.$confirm('Etes-vous sûr de vouloir supprimer le tracteur '+ row.designation + '. Continuer?', 'Warning', {
                                    confirmButtonText: 'Valider',
                                    cancelButtonText: 'Annuler',
                                    type: 'warning'
                                }).then(() => {

                                    this.$store.dispatch('deleteTool', {toolID: row.id})
                                        .then(() => {
                                            this.$store.dispatch('fetchConductors');
                                            this.$message({
                                                type: 'success',
                                                message: 'Suppression effectuée avec succès.'
                                            });
                                        })
                                        .catch(() => {
                                            this.$message({
                                                type: 'error',
                                                message: 'Une erreur innattendue est survenue, veuillez réessayer.'
                                            });
                                        })
                                }).catch(() => {
                                    this.$message({
                                        type: 'info',
                                        message: 'Suppression annulée.'
                                    });
                                });
                            }
                        }]
                }
            }
        },

    }
</script>
