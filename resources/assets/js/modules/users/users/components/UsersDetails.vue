<template>
    <div>
        <h1>{{user.name}}</h1>
        <dl>
            <dt>Adresse e-mail</dt>
            <dd>{{user.email}}</dd>

            <dt>Ajouté le</dt>
            <dd>{{user.created_at}}</dd>
        </dl>
    </div>
</template>
<script>
    export default {
        props: ['user']
    }
</script>
