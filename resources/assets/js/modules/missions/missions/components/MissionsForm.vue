<template>
    <el-form :model="mission" :rules="rules" ref="missionForm">

        <el-form-item label="Estimated start date" prop="estimated_start_date">
            <el-date-picker type="date" placeholder="Pick a date"
                            v-model="mission.estimated_start_date" style="width: 100%;"></el-date-picker>
        </el-form-item>

        <el-form-item label="Estimated end date" prop="estimated_end_date">
            <el-date-picker type="date" placeholder="Pick a date"
                            v-model="mission.estimated_end_date" style="width: 100%;"></el-date-picker>
        </el-form-item>

        <el-form-item label="Customer" prop="customer_id">
            <el-select v-model="mission.customer_id" style="width: 100%;" placeholder="please select the customer">
                <el-option
                        v-for="customer in customers"
                        :key="customer.id"
                        :label="customer.name"
                        :value="customer.id">
                </el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="Fuel unit price" prop="fuel_unit_price">
            <el-input placeholder="Please input fuel unit price" v-model="mission.fuel_unit_price" type="number" clearable></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit('missionForm')">Ajouter</el-button>
            <el-button @click="resetForm('missionForm')">Annuler</el-button>
        </el-form-item>
    </el-form>
</template>

<script>

    import ElFormItem from "../../../../../../../node_modules/element-ui/packages/form/src/form-item.vue";

    export default {
        components: {ElFormItem},
        props: ['mission', 'customers'],
        data() {
            return {
                rules: {
                    //
                },
            }
        },
        methods: {
            onSubmit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('submit', this.mission);
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
