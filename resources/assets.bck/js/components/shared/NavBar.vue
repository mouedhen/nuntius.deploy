<template>
    <el-menu
            class="el-menu-demo"
            background-color="#B71C1C"
            text-color="#fff"
            active-text-color="#f2f2f2"
            :router="true"
            :default-active="activeIndex"
            mode="horizontal">
        <el-menu-item index="0" :route="{name: 'index'}">Accueil</el-menu-item>
        <el-menu-item index="1" :route="{name: 'users:index'}">Utilisateurs</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        props: ['activeIndex']
    }
</script>
