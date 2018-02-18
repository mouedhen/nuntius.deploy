<template>
    <div></div>
</template>

<script>
    import { Loading } from 'element-ui';

    export default {
        mounted() {
            Loading.service({text: 'chargement...'})
        }
    }
</script>