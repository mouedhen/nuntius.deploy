<template>
    <div>
        <div v-if="!isLoggedIn">
            <label for="email">Email address</label>
            <input type="text" name="email" id="email"/>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" autocomplete="new-password"/>
            <button v-on:click="login">Submit</button>
            <button>Reset</button>
        </div>
        <div v-if="isLoggedIn">
            <button v-on:click="logout">Logout</button>
        </div>
    </div>
</template>

<script>
    import Authentication from './../../helpers/Authentication'

    export default {
        data() {
            return {
                auth: new Authentication(),
                isLoggedIn: false,
            }
        },
        mounted() {
            this.isLoggedIn = Authentication.isLoggedIn()
        },
        methods: {
            login() {
                this.auth.bearerLogIn('admin@test.dev', 'admin')
                    .then(data => {
                        this.isLoggedIn = Authentication.isLoggedIn()
                    })
                    .catch(errors => {
                        console.log('can not connect')
                    })
            },
            logout() {
                this.auth.bearerLogOut()
                    .then(response => {
                        this.isLoggedIn = Authentication.isLoggedIn()
                    })
                    .catch(error => {
                        console.log('error occur')
                    })
            }
        }
    }
</script>