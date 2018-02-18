<template>
    <div>
        <top-menu class="noprint"/>
        <transition name="fade">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import TopMenu from './pages/shared/TopMenu.vue'
    import Authentication from "../helpers/Authentication";

    export default {
        name: 'app',
        components: {
            TopMenu
        },
        mounted() {
            if (Authentication.isLoggedIn()) {
                this.$store.dispatch('login', Authentication.isLoggedIn());
                if (Authentication.isLoggedIn()) {
                    this.loadData();
                } else {
                    this.reinitData()
                }
            }
        },
        methods: {
            loadData() {
                this.$store.dispatch('login', Authentication.isLoggedIn());
            },
            reinitData() {
                this.$store.dispatch('login', Authentication.isLoggedIn());
            }
        }
    }
</script>
