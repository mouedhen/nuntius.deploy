<template>
    <el-menu :router="true"
             background-color="#27ae60"
             text-color="#fff"
             active-text-color="#f2f2f2"
             mode="horizontal" :default-active="activeIndex">
        <el-menu-item :route="{name: 'index'}" index="0">NUNTIUS</el-menu-item>

        <!--
        <el-menu-item v-if="isLoggedIn" :route="{name: 'missions:list'}" index="1">Missions</el-menu-item>
        <el-menu-item v-if="isLoggedIn" :route="{name: 'customers:list'}" index="2">Clients</el-menu-item>

        <el-menu-item v-if="isLoggedIn" :route="{name: 'dashboard:users:index'}" index="96">Utilisateurs</el-menu-item>
        -->

        <el-menu-item index="98" :route="{name: 'auth:login'}" v-on:click="logout" v-if="logInStatus"
                      class="right-nav-item">Se déconnecter
        </el-menu-item>
        <el-menu-item :route="{name: 'auth:login'}" index="99" v-if="!logInStatus"
                      class="right-nav-item">Se connecter
        </el-menu-item>
    </el-menu>
</template>

<script>
    import {mapGetters} from 'vuex'
    import * as Cookies from "tiny-cookie";
    import User from "../../../models/User";

    export default {
        name: 'nav-bar',
        data() {
            return {
                activeIndex: '0',
                user: new User(),
            }
        },
        methods: {
            logout() {
                if (this.logInStatus) {
                    this.user.logOut()
                        .then(data => {
                            if (Cookies.get('token') !== undefined)
                                Cookies.remove('token');
                            this.$store.dispatch('logout');
                        })
                }
            },
            getLoggedInUser() {
                if (this.logInStatus) {
                    this.user.getProfile()
                        .then(user => {
                            this.$store.dispatch('setLoginInfos', {user: user, status: true})
                        })
                        .catch(error => {
                            if (error.response.status === 401) {
                                if (Cookies.get('token') !== undefined)
                                    Cookies.remove('token');
                                this.$store.dispatch('logout')
                            }
                        });
                } else {
                    this.$store.dispatch('logout')
                }
            }
        },
        computed: {
            ...mapGetters({
                logInStatus: 'getLogInStatus',
            }),
        },
        mounted() {
            this.getLoggedInUser();
        }
    }
</script>
