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
                <span>Customers management</span>
            </template>
            <el-menu-item index="0-0" :route="{name: 'customers:index'}">Customers dashboard</el-menu-item>
            <el-menu-item index="0-1" :route="{name: 'customers:create'}">Customers create</el-menu-item>
            <el-menu-item index="0-2" :route="{name: 'customers:list'}">Customers list</el-menu-item>
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
