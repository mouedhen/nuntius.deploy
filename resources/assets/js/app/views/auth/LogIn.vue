<template>
    <div class="container login-container full-height">
        <el-card class="box-card">
            <div>
                <h1>Espace d'administration</h1>
                <el-form ref="loginForm" :model="user" v-if="!isLoggedIn">

                    <el-form-item v-if="hasLoginError">
                        <el-alert
                                title="Merci de vérifier vos paramètres de connection"
                                type="error"
                                :closable="false">
                        </el-alert>
                    </el-form-item>

                    <el-form-item label="Adresse email">
                        <el-input v-model="user.email"/>
                    </el-form-item>

                    <el-form-item label="Mot de passe">
                        <el-input type="password" v-model="user.password" auto-complete="off"/>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="login">Se connecter</el-button>
                        <el-button>Cancel</el-button>
                    </el-form-item>

                </el-form>

                <el-form v-if="isLoggedIn">
                    <el-form-item>
                        <el-form-item v-if="hasLoginError">
                            <el-alert
                                    title="Une erreur inattendue s'est produite lors de la déconnection, merci de réessayer"
                                    type="error"
                                    :closable="false">
                            </el-alert>
                        </el-form-item>
                        <p>Vous êtes déjà connecté en tant que <b>{{ user.name }}</b></p>
                        <el-button type="primary" @click="logout">Se déconnecter</el-button>
                    </el-form-item>
                </el-form>

            </div>
        </el-card>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import * as Cookies from "tiny-cookie";

    export default {
        data() {
            return {
                hasLoginError: false,
            }
        },
        computed: {
            isLoggedIn: function () {
                return this.user.isLoggedIn()
            },
            ...mapGetters({
                // isLoggedIn: 'getLogInStatus',
                user: 'getLoggedUser'
            }),
        },
        methods: {
            login() {
                this.user.logIn()
                    .then(user => {
                        this.hasLoginError = false;
                        this.user.getProfile()
                            .then(user => {
                                this.$store.dispatch('setLoginInfos', {user: this.user, status: true});
                            })
                    })
                    .catch(error => {
                        this.hasLoginError = true;
                    })
            },
            logout() {
                this.user.logOut()
                    .then(data => {
                        this.hasLoginError = false;
                        this.$store.dispatch('setLoginInfos', {user: this.user, status: false});
                    })
                    .catch(error => {
                        if (Cookies.get('token') !== undefined)
                            Cookies.remove('token');
                    })
            }
        },
        mounted() {
            this.user.getProfile()
        }
    }
</script>