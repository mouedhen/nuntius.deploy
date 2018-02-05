<template>
    <data-tables
            :data="users"
            :search-def="searchDef"
            :checkbox-filter-def="checkboxFilterDef"
            :actions-def="actionsDef"
            :action-col-def="actionColDef">
        <el-table-column
                v-for="title in titles"
                :prop="title.prop"
                :label="title.label"
                :key="title.prop"
                :width="title.width"
                sortable="custom">
        </el-table-column>
    </data-tables>
</template>

<script>
    export default {
        props: ['users'],
        data() {
            return {
                titles: [
                    {prop: 'id', label: '#', width:'100'},
                    {prop: 'name', label: 'Nom & Prénom'},
                    {prop: 'email', label: 'Adresse e-mail'},
                ],
                checkboxFilterDef: {colProps: {span: 0}},
                actionsDef: {colProps: {span: 0}},
                searchDef: {colProps: {span: 24}},
                actionColDef: {
                    label: 'Actions',
                    width: '250',
                    tableColProps: {
                        align: 'center'
                    },
                    def: [{
                        name: 'Détails',
                        handler: row => {
                            this.$router.push({name: 'dashboard:users:details', params: {id: row.id}})
                        }
                    }, {
                        name: 'Supprimer',
                        handler: row => {
                            this.$confirm('Voulez-vous vraiment supprimer l\'utilisateur ' +
                                row.name + '. Continuer ?', 'Attention', {
                                confirmButtonText: 'Oui',
                                cancelButtonText: 'Annuler',
                                type: 'warning'
                            }).then(() => {
                                this.$store.dispatch('deleteUser', {userID: row.id}).then(() => {
                                    this.$message({
                                        type: 'success',
                                        message: 'Utilisateur supprimé avec succèss'
                                    });
                                }).catch((e) => {
                                    this.$message({
                                        type: 'warning',
                                        message: 'Une erreur inattendue est survenue. Merci de réessayer...'
                                    });
                                })
                            }).catch(() => {
                                this.$message({
                                    type: 'info',
                                    message: 'Suppression annulée...'
                                });
                            });
                        }
                    }]
                }
            }
        },
    }
</script>
