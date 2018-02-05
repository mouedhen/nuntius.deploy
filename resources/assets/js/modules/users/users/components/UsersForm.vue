<template>
    <el-form :model="user" :rules="rules" class="margin-top" ref="userForm">

        <el-form-item prop="name" :error="validationError.name" label="Nom & prénom">
            <el-input placeholder="nom & prénom" v-model="user.name" />
        </el-form-item>

        <el-form-item prop="email" :error="validationError.email" label="Adresse e-mail">
            <el-input type="email" placeholder="adresse e-mail" v-model="user.email" />
        </el-form-item>

        <el-form-item prop="password" :error="validationError.password" label="Mot de passe">
            <el-input type="password" placeholder="mot de passe" v-model="user.password" auto-complete="new-password" />
        </el-form-item>

        <el-form-item prop="password_confirmation" :error="validationError.password_confirmation" label="Confirmer le mot de passe">
            <el-input type="password" placeholder="confirmer mot de passe" v-model="user.password_confirmation" auto-complete="new-password" />
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">Sauvegarder</el-button>
            <el-button @click="resetForm">Annuler</el-button>
        </el-form-item>

    </el-form>
</template>

<script>

    export default {
        props: ['user', 'validationError'],
        components: {},
        data() {
            let validatePasswordConfirmation = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Merci de resaisir le mot de passe.'));
                } else if (value !== this.user.password) {
                    callback(new Error('Les deux mots de passe ne correspondent pas.'));
                } else {
                    callback();
                }
            };

            return {
                rules: {
                    name: [
                        { required: true, message: 'Le champ est obligatoire.', trigger: 'blur' },
                        { min: 4, max: 100, message: 'La longueur du champ doit être comprise entre 4 et 100.', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: 'Le champ est obligatoire.', trigger: 'blur' },
                        { type: 'email', message: 'Le champ doit être une adresse courriel valide.', trigger: 'blur' },
                        { min: 4, max: 100, message: 'La longueur du champ doit être comprise entre 4 et 100.', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Le champ est obligatoire.', trigger: 'blur' },
                        { min: 4, max: 100, message: 'La longueur du champ doit être comprise entre 4 et 100.', trigger: 'blur' }
                    ],
                    password_confirmation: [
                        { required: true, message: 'Le champ est obligatoire.', trigger: 'blur' },
                        { validator: validatePasswordConfirmation, trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            onSubmit() {
                this.$refs['userForm'].validate((valid) => {
                    if (valid) {
                        this.$emit('submitForm');
                        return true
                    } else {
                        return false
                    }
                })
            },
            resetForm() {
                this.$refs.userForm.resetFields();
                this.$emit('resetForm')
            }
        }
    }
</script>
