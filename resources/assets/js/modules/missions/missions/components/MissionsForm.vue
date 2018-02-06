<template>
    <el-form :model="mission" :rules="rules" ref="missionForm">

        <el-form-item label="Date de début" prop="estimated_start_date">
            <el-date-picker type="date" placeholder="choisir une date"
                            v-model="mission.estimated_start_date" style="width: 100%;"/>
        </el-form-item>

        <el-form-item label="Date de fin" prop="estimated_end_date">
            <el-date-picker type="date" placeholder="choisir une date"
                            v-model="mission.estimated_end_date" style="width: 100%;"/>
        </el-form-item>

        <el-form-item label="Client" prop="customer_id">
            <el-select v-model="mission.customer_id" style="width: 100%;"
                       filterable placeholder="merci de sélectionner le client">
                <el-option
                        v-for="customer in customers"
                        :key="customer.id"
                        :label="customer.name"
                        :value="customer.id">
                </el-option>
            </el-select>
        </el-form-item>

        <el-form-item label="Compteur arrivé" prop="start_counter">
            <div class="el-input">
                <input class="el-input__inner" id="start_counter" name="start_counter"
                       data-inputmask="'mask': '9999:99'"
                       v-model="mission.start_counter"/>
            </div>
        </el-form-item>

        <el-form-item label="Compteur fin" prop="end_counter">
            <div class="el-input">
                <input class="el-input__inner" id="end_counter" name="end_counter"
                       data-inputmask="'mask': '9999:99'"
                       v-model="mission.end_counter"/>
            </div>
        </el-form-item>

        <el-form-item label="Prix unitaire du carburant" prop="fuel_unit_price">
            <el-input placeholder="merci de spécifier le prix unitaire de carburant" v-model="mission.fuel_unit_price" type="number"
                      clearable/>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit('missionForm')">Ajouter</el-button>
            <el-button @click="resetForm('missionForm')">Annuler</el-button>
        </el-form-item>
    </el-form>
</template>

<script>

    import ElFormItem from "../../../../../../../node_modules/element-ui/packages/form/src/form-item.vue";

    import Inputmask from "inputmask";
    import moment from 'moment'

    export default {
        components: {ElFormItem},
        props: ['mission', 'customers'],
        data() {
            return {
                start_counter_time: null,
                end_counter_time: null,
                rules: {
                    estimated_start_date: [{ required: true, message: 'Le champ est obligatoire.', trigger: 'blur' },],
                    estimated_end_date: [{ required: true, message: 'Le champ est obligatoire.', trigger: 'blur' },],
                    customer_id: [{ required: true, message: 'Le champ est obligatoire.', trigger: 'blur' },],
                    start_counter: [{ required: true, message: 'Le champ est obligatoire.', trigger: 'blur' },],
                    end_counter: [{ required: true, message: 'Le champ est obligatoire.', trigger: 'blur' },],
                    fuel_unit_price: [{ required: true, message: 'Le champ est obligatoire.', trigger: 'blur' },],
                },
            }
        },
        methods: {
            onSubmit(formName) {
                let start_counter = this.mission.start_counter;
                let end_counter = this.mission.end_counter;
                console.log(this.mission.end_counter);
                console.log(moment.duration(this.mission.end_counter, 'minutes').asMinutes());
                this.mission.start_counter = moment.duration(this.mission.start_counter, 'minutes').asMinutes();
                this.mission.end_counter = moment.duration(this.mission.end_counter, 'minutes').asMinutes();
                // [HH]:mm
                // return
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
        mounted(){
            Inputmask().mask(document.querySelectorAll("input"));
        }
    }
</script>
