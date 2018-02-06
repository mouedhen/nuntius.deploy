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
                this.$store.dispatch('fetchUsers').catch(e => console.log(e));

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
            },
            reinitData() {
                this.$store.dispatch('login', Authentication.isLoggedIn());
                this.$store.dispatch('reinitUsers').catch(e => console.log(e));

                this.$store.dispatch('reinitCustomers')
                    .catch(error => {
                        this.$notify.error({
                            title: 'Error',
                            message: 'Error when reading records'
                        });
                    });

                this.$store.dispatch('reinitMissions')
                    .catch(error => {
                        this.$notify.error({
                            title: 'Error',
                            message: 'Error when reading records'
                        });
                    });
            }
        }
    }
</script>
