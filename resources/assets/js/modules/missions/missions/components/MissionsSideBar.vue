<template>
    <el-menu :router="true"
             background-color="#F5F5F5"
             text-color="#222222"
             class="viewport-height"
             @select="navigateEvent"
             :default-active="index"
             :default-openeds="['0', '1']">

        <el-submenu index="0" >
            <template slot="title">
                <span>Gestion des Missions</span>
            </template>
            <el-menu-item index="0-0" :route="{name: 'missions:index'}">Tableau de bord</el-menu-item>
            <el-menu-item index="0-1" :route="{name: 'missions:create'}">Nouvelle Mission</el-menu-item>
            <el-menu-item index="0-2" :route="{name: 'missions:list'}">Liste des Missions</el-menu-item>
        </el-submenu>

        <el-submenu index="1" >
            <template slot="title">
                <span>Configuration</span>
            </template>
            <el-menu-item index="1-0" :route="{name: 'conductors:index'}">Chauffeurs</el-menu-item>
            <el-menu-item index="1-1" :route="{name: 'tractors:index'}">Tracteurs</el-menu-item>
            <el-menu-item index="1-2" :route="{name: 'tools:index'}">Outils</el-menu-item>
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
