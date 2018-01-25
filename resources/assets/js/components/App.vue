<template>
    <div>
        <top-menu class="noprint"></top-menu>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
    import TopMenu from './pages/shared/TopMenu.vue'

    export default {
        name: 'app',
        components: {
            TopMenu
        },
        mounted() {
            this.$store.dispatch('fetchCustomers')
                .catch(error => {
                    this.$notify.error({
                        title: 'Error',
                        message: 'Error when reading records'
                    });
                });

            this.$store.dispatch('fetchMissions')
                .catch(error => {
                    this.$notify.error({
                        title: 'Error',
                        message: 'Error when reading records'
                    });
                });
        }
    }
</script>
