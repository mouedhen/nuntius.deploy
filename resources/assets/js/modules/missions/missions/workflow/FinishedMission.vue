<template>
    <div>
        <tasks-summary :tasks="mission.tasks" :fuel-unit-price="mission.fuel_unit_price" />
        <tasks-table-details :tasks="mission.tasks" />
    </div>
</template>

<script>
    import TasksSummary from '../../tasks/components/TasksSummary'
    import TasksTableDetails from '../../tasks/components/TasksTableDetails'

    export default {
        components: {TasksSummary, TasksTableDetails},
        props: ['mission'],
    }
</script>