<template>
    <el-container>
        <el-aside>
            <users-side-bar/>
        </el-aside>
        <el-main>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'dashboard:users:index' }">Gestion des utilisateurs</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ name: 'dashboard:users:list' }">Liste des utilisateurs</el-breadcrumb-item>
                <el-breadcrumb-item>Details utilisateur</el-breadcrumb-item>
            </el-breadcrumb>
            <users-details :user="user" />
        </el-main>
    </el-container>
</template>

<script>
    import {initialUserDetails} from './../config'

    import UsersSideBar from './../components/UsersSideBar'
    import UsersDetails from './../components/UsersDetails'

    export default {
        components: {UsersSideBar, UsersDetails},
        data() {
            return {
                user: initialUserDetails()
            }
        },
        mounted() {
            this.$store.dispatch('fetchUser', {userID: this.$route.params.id})
                .then(user => {
                    this.user = user;
                    console.log(this.user)
                })
                .catch(error => {
                    this.$message.error('Erreur lors de la lecture des détails utilisateur...')
                    console.log(error)
                })
        }
    }
</script>