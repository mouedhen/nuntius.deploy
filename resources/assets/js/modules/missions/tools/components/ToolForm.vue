<template>
    <el-form :model="tool" :rules="rules" ref="toolForm">

        <el-form-item label="Désignation" prop="designation">
            <el-input type="text" v-model="tool.designation"/>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">Sauvegarder</el-button>
            <el-button @click="resetForm">Annuler</el-button>
        </el-form-item>

    </el-form>
</template>

<script>

    export default {
        props: ['tool'],
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
                this.$refs['toolForm'].validate((valid) => {
                    if (valid) {
                        this.$emit('submit', this.tool);
                        return true
                    } else {
                        this.$message.error('Merci de vérifier les données saisies.');
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs['toolForm'].resetFields();
            },
        },
    }
</script>
