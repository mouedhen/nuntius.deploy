<template>
    <div class="margin-top">

        <el-form :model="mission" :rules="rules" ref="endMissionForm">

            <el-form-item label="Compteur retour" prop="end_counter">
                <div class="el-input">
                    <input class="el-input__inner" id="end_counter" name="end_counter"
                           data-inputmask="'mask': '9999:99'"
                           v-model="mission.end_counter"/>
                </div>
            </el-form-item>

            <el-form-item label="Date de fin" prop="end_date">
                <el-date-picker
                        style="width: 100%"
                        v-model="mission.end_date"
                        type="date"
                        placeholder="Merci de choisir une date">
                </el-date-picker>
            </el-form-item>

            <el-form-item style="text-align: right">

                <el-button type="default" @click="tasksDialogVisible = true">Nouvelle tâche</el-button>
                <!-- <el-button type="default" @click="">Nouveaux transport</el-button> -->
                <el-button type="warning" @click="submit('endMissionForm')">Terminer la mission</el-button>

            </el-form-item>

        </el-form>

        <tasks-table :tasks="mission.tasks"/>

        <el-dialog
                style="text-align: left"
                title="Nouvelle tâche"
                :visible.sync="tasksDialogVisible"
                width="70%"
                :before-close="handleCloseTasksDialog">
            <tasks-form :task="task" @submit="submitTask" @cancel="cancelTask" />
        </el-dialog>

    </div>
</template>

<script>
    import Inputmask from "inputmask";
    import {initialTaskData} from '../../tasks/config'
    import TasksForm from '../../tasks/components/TasksForm'
    import TasksTable from '../../tasks/components/TasksTable'

    export default {
        props: ['mission'],
        components: {TasksForm, TasksTable},
        data() {
            return {
                tasksDialogVisible: false,
                task: initialTaskData(),
                rules: {
                    end_counter: [
                        {required: true, message: 'Le compteur retour est obligatoire', trigger: 'blur'},
                    ],
                    end_date: [
                        {required: true, message: 'La date de fin est obligatoire', trigger: 'blur'},
                    ],
                },
            }
        },
        methods: {
            submit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$emit('submit', 'finish');
                        return true
                    } else {
                        this.$message.error('Merci de vérifier vos paramètres.');
                        return false
                    }
                })
            },
            handleCloseTasksDialog(done) {
                this.task = initialTaskData();
                done()
            },
            submitTask() {
                this.task.mission_id = this.mission.id;
                this.$store.dispatch('saveTask', {task: this.task});
                this.asksDialogVisible = false;
                this.$emit('newTask')
            },
            cancelTask() {
                this.task = initialTaskData();
                this.asksDialogVisible = false;
            }
        },
        mounted() {
            Inputmask().mask(document.querySelectorAll("input"));
        },
    }
</script>