<template>
    <div>
        <nav-bar class="noprint"/>
        <transition name="fade">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    const NavBar = () => import('./components/NavBar')

    export default {
        name: 'app',
        components: {
            NavBar
        },
    }
</script>
