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
                <span>Missions management</span>
            </template>
            <el-menu-item index="0-0" :route="{name: 'missions:index'}">Missions dashboard</el-menu-item>
            <el-menu-item index="0-1" :route="{name: 'missions:create'}">Missions create</el-menu-item>
            <el-menu-item index="0-2" :route="{name: 'missions:list'}">Missions list</el-menu-item>
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
