<template>
    <el-form :model="contact" :rules="rules" ref="contactForm">

        <el-form-item label="Nom" prop="name">
            <el-input type="text" v-model="contact.name"/>
        </el-form-item>

        <el-form-item label="Email" prop="email">
            <el-input type="email" v-model="contact.email"/>
        </el-form-item>

        <el-form-item label="Numéro de téléphone" prop="phone_number">
            <el-input type="text" v-model="contact.phone_number"/>
        </el-form-item>

        <el-form-item label="Adresse postale" prop="address">
            <el-input type="textarea" v-model="contact.address"/>
        </el-form-item>
    </el-form>
</template>

<script>

    export default {
        props: ['contact'],
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
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('submit', this.contact);
                        return true
                    } else {
                        this.$message.error('Errors, please check your form input.');
                        return false
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        },
    }
</script>
