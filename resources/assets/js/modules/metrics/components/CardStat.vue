<template>
    <el-card class="card">
        <div>{{ statValue }}</div>
        <div>{{ statTitle }}</div>
    </el-card>
</template>

<script>
    export default {
        props: ['statValue', 'statTitle']
    }
</script>