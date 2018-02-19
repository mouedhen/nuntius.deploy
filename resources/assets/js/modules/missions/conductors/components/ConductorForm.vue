<template>
    <el-form :model="conductor" :rules="rules" ref="conductorForm">

        <el-form-item label="Nom" prop="name">
            <el-input type="text" v-model="conductor.name"/>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">Sauvegarder</el-button>
            <el-button @click="resetForm">Annuler</el-button>
        </el-form-item>

    </el-form>
</template>

<script>

    export default {
        props: ['conductor'],
        data() {
            return {
                rules: {
                    name: [
                        {required: true, message: 'Le nom est obligatoire', trigger: 'blur'},
                        {min: 3, max: 100, message: 'Length should be 3 to 5', trigger: 'blur'}
                    ],
                },
            }
        },
        methods: {
            onSubmit(formName) {
                this.$refs['conductorForm'].validate((valid) => {
                    if (valid) {
                        this.$emit('submit', this.conductor);
                        return true
                    } else {
                        this.$message.error('Merci de vérifier les données saisies.');
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs['conductorForm'].resetFields();
            },
        },
    }
</script>
