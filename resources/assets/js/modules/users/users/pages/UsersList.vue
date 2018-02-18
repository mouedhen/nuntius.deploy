<template>
    <el-container>
        <el-aside>
            <users-side-bar :index="index"/>
        </el-aside>
        <el-main>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'dashboard:users:index' }">Gestion des utilisateurs
                </el-breadcrumb-item>
                <el-breadcrumb-item>Liste des utilisateurs</el-breadcrumb-item>
            </el-breadcrumb>
            <user-table class="margin-top" :users="users"/>
        </el-main>
    </el-container>
</template>

<script>
    import {mapGetters} from 'vuex'

    import Authentication from './../../../../helpers/Authentication'

    import UsersSideBar from './../components/UsersSideBar'
    import UserTable from './../components/UsersTable'

    export default {
        components: {UsersSideBar, UserTable},
        data() {
            return {
                index: '0-2'
            }
        },
        computed: {
            ...mapGetters({
                users: 'getUsers',
            }),
        },
        mounted() {
            if (Authentication.isLoggedIn()) {
                this.$store.dispatch('fetchUsers')
                    .catch(error => {
                        this.$notify.error({
                            title: 'Erreur',
                            message: 'Erreur lors de lecture des données...'
                        });
                    });
            }
        },
        beforeRouteLeave(to, from, next) {
            this.$store.dispatch('reinitUsers')
                .catch(error => {
                    this.$notify.error({
                        title: 'Erreur',
                        message: 'Une erreur inattendue est survenue, merci de contacter votre administrateur...'
                    });
                });
            next()
        }
    }
</script>