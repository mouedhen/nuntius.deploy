<template>
    <div class="container">
        <h4>Raison de l'annulation</h4>
        <p>{{mission.cancellation_cause}}</p>
    </div>
</template>
<script>
    export default {
        props: ['mission']
    }
</script>