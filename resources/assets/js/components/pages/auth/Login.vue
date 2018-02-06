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
                        <el-button type="primary" @click="onSubmit">Se connecter</el-button>
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
                        <p>Vous êtes déjà connecté</p>
                        <el-button type="primary" @click="logout">Se déconnecter</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>
    import Authentication from './../../../helpers/Authentication'

    export default {
        data() {
            return {
                auth: new Authentication(),
                isLoggedIn: false,
                user: {
                    email: '',
                    password: ''
                },
                hasLoginError: false,
            }
        },
        mounted() {
            this.isLoggedIn = Authentication.isLoggedIn()
        },
        methods: {
            onSubmit() {
                this.auth.bearerLogIn(this.user.email, this.user.password)
                    .then(data => {
                        this.isLoggedIn = Authentication.isLoggedIn();
                        this.hasLoginError = false;
                        this.loadData();
                        this.$router.push({name: 'index'});
                    })
                    .catch(errors => {
                        this.hasLoginError = true
                    });
            },
            logout() {
                this.auth.bearerLogOut()
                    .then(response => {
                        this.isLoggedIn = Authentication.isLoggedIn();
                        this.reinitData();
                        this.hasLoginError = false
                    })
                    .catch(error => {
                        this.hasLoginError = true
                    })
            },
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