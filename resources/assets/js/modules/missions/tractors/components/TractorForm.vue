<template>
    <el-form :model="tractor" :rules="rules" ref="tractorForm">

        <el-form-item label="Désignation" prop="designation">
            <el-input type="text" v-model="tractor.designation"/>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">Sauvegarder</el-button>
            <el-button @click="resetForm">Annuler</el-button>
        </el-form-item>

    </el-form>
</template>

<script>

    export default {
        props: ['tractor'],
        data() {
            return {
                rules: {
                    name: [
                        {required: true, message: 'La désignation est obligatoire', trigger: 'blur'},
                        {min: 3, max: 100, message: 'Length should be 3 to 5', trigger: 'blur'}
                    ],
                },
            }
        },
        methods: {
            onSubmit(formName) {
                this.$refs['tractorForm'].validate((valid) => {
                    if (valid) {
                        this.$emit('submit', this.tractor);
                        return true
                    } else {
                        this.$message.error('Merci de vérifier les données saisies.');
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs['tractorForm'].resetFields();
            },
        },
    }
</script>
