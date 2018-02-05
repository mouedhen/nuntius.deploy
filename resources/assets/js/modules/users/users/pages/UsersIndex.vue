<template>
    <el-container>
        <el-aside>
            <users-side-bar/>
        </el-aside>
        <el-main>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'dashboard:users:index' }">Gestion des utilisateurs</el-breadcrumb-item>
                <el-breadcrumb-item>Tableau de bord</el-breadcrumb-item>
            </el-breadcrumb>

            <div>users index</div>
        </el-main>
    </el-container>
</template>

<script>
    import UsersSideBar from './../components/UsersSideBar'

    export default {
        components: {UsersSideBar}
    }
</script>