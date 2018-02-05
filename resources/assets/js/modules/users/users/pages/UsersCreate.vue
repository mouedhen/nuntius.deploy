<template>
    <el-container>
        <el-aside>
            <users-side-bar :index="index"/>
        </el-aside>
        <el-main>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ name: 'dashboard:users:index' }">Gestion des utilisateurs</el-breadcrumb-item>
                <el-breadcrumb-item>Créer un utilisateur</el-breadcrumb-item>
            </el-breadcrumb>
            <users-form
                    v-on:submitForm="addUser"
                    v-on:resetForm="resetUser"
                    :validationError="validationError"
                    :user="user"/>
        </el-main>
    </el-container>
</template>

<script>
    import {initialUserDetails} from './../config'

    import UsersSideBar from './../components/UsersSideBar'
    import UsersForm from './../components/UsersForm'

    const initialValidation = function () {
        return {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    };

    export default {
        components: {UsersSideBar, UsersForm},
        data() {
            return {
                index: '0-1',
                user: initialUserDetails(),
                validationError: initialValidation(),
            }
        },
        methods: {
            addUser() {
                this.validationError = initialValidation();
                this.$store.dispatch('saveUser', {user: this.user})
                    .then(user => {
                        this.$message.success('Utilisateur ' + user.name + 'créé avec succès.');
                        this.user = initialUserDetails();
                    })
                    .catch((error) => {
                        this.$message.error('Erreur lors de l\'ajout d\'un nouvel utilisateur, merci de vérifier vos paramètres.');
                        if (error.response !== undefined) {
                            if (error.response.status === 422) {
                                let errorData = error.response.data[1];
                                if (errorData['name'] !== undefined) {this.validationError.name = errorData['name'][0]}
                                if (errorData['email'] !== undefined) {this.validationError.email = errorData['email'][0]}
                                if (errorData['password'] !== undefined) {this.validationError.password = errorData['password'][0]}
                                if (errorData['password_confirmation'] !== undefined) {this.validationError.password_confirmation = errorData['password_confirmation'][0]}
                            }
                        }
                    })
            },
            resetUser() {
                this.user = initialUserDetails();
            }
        }
    }
</script>