<template>
    <el-menu :router="true"
             background-color="#ffa801"
             text-color="#fff"
             active-text-color="#222"
             mode="horizontal" :default-active="activeIndex">
        <el-menu-item :route="{name: 'index'}" index="0">NUNTIUS</el-menu-item>
        <el-menu-item v-if="isLoggedIn" :route="{name: 'missions:index'}" index="1">Missions</el-menu-item>
        <el-menu-item v-if="isLoggedIn" :route="{name: 'customers:list'}" index="2">Clients</el-menu-item>
        <!-- <el-menu-item v-if="isLoggedIn" :route="{name: 'locations:index'}" index="3">Locations</el-menu-item> -->

        <el-menu-item v-if="isLoggedIn" :route="{name: 'dashboard:users:index'}" index="96">Utilisateurs</el-menu-item>

        <el-menu-item index="98" v-if="isLoggedIn" v-on:click="logout"
                      class="right-nav-item">Se déconnecter</el-menu-item>
        <el-menu-item :route="{name: 'auth:login'}" index="99" v-if="!isLoggedIn"
                      class="right-nav-item">Se connecter</el-menu-item>
    </el-menu>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {siteName} from './../../../config'
    import Authentication from "../../../helpers/Authentication";

    export default {
        name: 'top-menu',
        data() {
            return {
                activeIndex: '0',
                siteName: siteName
            }
        },
        computed: {
            ...mapGetters({
                isLoggedIn: 'getLoginStatus',
            }),
        },
        methods: {
            logout() {
                (new Authentication).bearerLogOut().then(() => {
                    this.$store.dispatch('logout');
                    this.$router.push({name: 'auth:login'});
                });
            }
        }
    }
</script>