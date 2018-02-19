<template>
    <div class="container">
        <el-form ref="taskForm" :model="task" :rules="rules">

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="Date et heure de début" prop="start_date_time">
                        <div class="el-input">
                            <input class="el-input__inner" id="start_date_time" name="start_date_time"
                                   type="datetime-local" v-model="task.start_date_time"/>
                        </div>
                    </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-form-item label="Date et heure de fin" prop="end_date_time">
                        <div class="el-input">
                            <input class="el-input__inner" id="end_date_time" name="end_date_time"
                                   type="datetime-local" v-model="task.end_date_time"/>
                        </div>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="Chauffeur" prop="conductor">

                        <el-select v-model="task.conductor_id"
                                   style="width: 100%"
                                   placeholder="Veuillez choisir la catégorie du client">
                            <el-option
                                    v-for="conductors in conductors"
                                    :key="conductors.id"
                                    :label="conductors.name"
                                    :value="conductors.id">
                            </el-option>
                        </el-select>

                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Tracteur" prop="tractor">

                        <el-select v-model="task.tractor_id"
                                   style="width: 100%"
                                   placeholder="Veuillez choisir la catégorie du client">
                            <el-option
                                    v-for="tractor in tractors"
                                    :key="tractor.id"
                                    :label="tractor.designation"
                                    :value="tractor.id">
                            </el-option>
                        </el-select>

                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="Outil" prop="tool">
                        <el-select v-model="task.tool_id"
                                   style="width: 100%"
                                   placeholder="Veuillez choisir la catégorie du client">
                            <el-option
                                    v-for="tool in tools"
                                    :key="tool.id"
                                    :label="tool.designation"
                                    :value="tool.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Configuration de l'outil" prop="tool_configuration">
                        <el-input type="number" :min="0" v-model="task.tool_configuration"/>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="Profondeur en CM" prop="depth_in_cm">
                        <el-input type="number" :min="0" v-model="task.depth_in_cm"/>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Largeur en M" prop="width_in_m">
                        <el-input type="number" :min="0" v-model="task.width_in_m"/>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="Vitesse moyenne" prop="average_speed">
                        <el-input type="number" :min="0" v-model="task.average_speed"/>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Surface travaillé" prop="worked_area">
                        <el-input type="number" :min="0" v-model="task.worked_area"/>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="Consommation moyenne" prop="average_consumption">
                        <el-input type="number" :min="0" v-model="task.average_consumption"/>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Consommation en carburant" prop="fuel_consumption">
                        <el-input type="number" :min="0" v-model="task.fuel_consumption"/>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-form-item label="Observation" prop="observation">
                <el-input type="textarea" v-model="task.observation"/>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitTask('groundWorkTaskForm')">Ajouter</el-button>
                <el-button @click="resetForm('groundWorkTaskForm')">Annuler</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import {Row as ElRow, Col as ElCol} from 'element-ui'

    export default {
        components: {ElRow, ElCol},
        props: ['task'],
        data() {
            return {
                rules: {}
            }
        },
        computed: {
            now: function () {
                return new Date()
            },
            ...mapGetters({
                conductors: 'getConductors',
                tractors: 'getTractors',
                tools: 'getTools',
            }),
        },
        methods: {
            submitTask(formName) {
                this.$emit('submit', this.task);
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
                this.$emit('cancel', this.task);
            },
        },
        mounted() {
            this.$store.dispatch('fetchConductors');
            this.$store.dispatch('fetchTractors');
            this.$store.dispatch('fetchTools');
        }
    }
</script>