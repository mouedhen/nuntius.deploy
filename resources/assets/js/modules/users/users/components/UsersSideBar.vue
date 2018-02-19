<template>
    <el-menu :router="true"
             background-color="#F5F5F5"
             text-color="#222222"
             class="viewport-height"
             @select="navigateEvent"
             :default-active="index"
             :default-openeds="['0']">

        <el-submenu index="0" >
            <template slot="title">
                <span>Gestion des utilisateurs</span>
            </template>
            <el-menu-item index="0-0" :route="{name: 'dashboard:users:index'}">Tableau de bord</el-menu-item>
            <el-menu-item index="0-1" :route="{name: 'dashboard:users:create'}">Ajouter un utilisateur</el-menu-item>
            <el-menu-item index="0-2" :route="{name: 'dashboard:users:list'}">Liste des utilisateurs</el-menu-item>
        </el-submenu>

    </el-menu>
</template>

<script>
    export default {
        props: ['index'],
        methods: {
            navigateEvent(index) {
                this.$emit('select', index)
            }
        }
    }
</script>
