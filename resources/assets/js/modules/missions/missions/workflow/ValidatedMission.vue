<template>
    <div class="margin-top">
        <el-form :model="mission" :rules="rules" ref="launchMissionForm">

            <el-form-item label="Compteur arrivé" prop="start_counter">
                <div class="el-input">
                    <input class="el-input__inner" id="start_counter" name="start_counter"
                           data-inputmask="'mask': '9999:99'"
                           v-model="mission.start_counter"/>
                </div>
            </el-form-item>

            <el-form-item label="Prix unitaire du carburant" prop="fuel_unit_price">
                <el-input placeholder="merci de spécifier le prix unitaire de carburant"
                          v-model="mission.fuel_unit_price" type="number"
                          min="0"
                          clearable/>
            </el-form-item>

            <el-form-item style="text-align: right">
                <el-button type="primary" @click="submit('launchMissionForm')">Lancer la mission</el-button>
                <el-button @click="cancel('launchMissionForm')">Annuler</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    import Inputmask from "inputmask";

    export default {
        props: ['mission'],
        data() {
            return {
                rules: {
                    start_counter: [
                        {required: true, message: 'Le compteur est obligatoire', trigger: 'blur'},
                    ],
                    fuel_unit_price: [
                        {required: true, message: 'Le prix unitaire du carburant est obligatoire', trigger: 'blur'},
                    ],
                },
            }
        },
        methods: {
            cancel(formName) {
                this.$refs[formName].resetFields();
            },
            submit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('submit', 'launch');
                        return true
                    } else {
                        this.$message.error('Merci de vérifier vos paramètres.');
                        return false
                    }
                })
            },
        },
        mounted() {
            Inputmask().mask(document.querySelectorAll("input"));
        },
    }
</script>