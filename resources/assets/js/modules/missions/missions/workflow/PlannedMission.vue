<template>
    <div>
        <el-button type="default" @click="cancelDialogVisible = true">Annuler la mission</el-button>
        <el-button type="primary" @click="validateDialogVisible = true">Valider la mission</el-button>

        <el-dialog
                style="text-align: left"
                title="Annuler la mission"
                :visible.sync="cancelDialogVisible"
                width="70%"
                :before-close="handleCloseCancelForm">

            <el-form :model="mission" :rules="cancelRules" ref="cancelMissionForm">

                <el-form-item label="Raison de l'annulation" prop="cancellation_cause">
                    <el-input type="textarea" :rows="5" v-model="mission.cancellation_cause"/>
                </el-form-item>

            </el-form>

            <span slot="footer" class="dialog-footer">
            <el-button @click="cancel('cancelMissionForm')">Annuler</el-button>
            <el-button type="primary" @click="submit('cancelMissionForm')">Valider</el-button>
          </span>
        </el-dialog>

        <el-dialog
                style="text-align: left"
                title="Valider la mission"
                :visible.sync="validateDialogVisible"
                width="70%"
                :before-close="handleCloseValidateForm">

            <el-form :model="mission" :rules="validateRules" ref="validateMissionForm">

                <el-form-item label="Date effective de début" prop="start_date">
                    <el-date-picker
                            style="width: 100%"
                            v-model="mission.start_date"
                            type="date"
                            placeholder="Merci de choisir une date">
                    </el-date-picker>
                </el-form-item>

            </el-form>

            <span slot="footer" class="dialog-footer">
            <el-button @click="cancel('validateMissionForm')">Annuler</el-button>
            <el-button type="primary" @click="submit('validateMissionForm')">Valider</el-button>
          </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        props: ['mission'],
        data() {
            return {
                cancelDialogVisible: false,
                cancelRules: {
                    cancellation_cause: [
                        {required: true, message: 'Le raison est obligatoire', trigger: 'blur'},
                        {min: 5, message: 'Length should be 3 to 5', trigger: 'blur'}
                    ],
                },
                validateDialogVisible: false,
                validateRules: {
                    start_date: [
                        {required: true, message: 'Le date de début est obligatoire', trigger: 'blur'},
                    ],
                }
            }
        },
        methods: {
            cancel(formName) {
                this.$refs[formName].resetFields();
                if (formName === 'cancelMissionForm')
                    this.cancelDialogVisible = false;
                else
                    this.validateDialogVisible = false;
            },
            submit(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if (formName === 'cancelMissionForm') {
                            this.$emit('submit', 'cancel');
                            this.cancelDialogVisible = false;
                        }
                        else {
                            this.$emit('submit', 'validate');
                            this.validateDialogVisible = false;
                        }
                        return true
                    } else {
                        this.$message.error('Merci de vérifier vos paramètres.');
                        return false
                    }
                })
            },
            handleCloseCancelForm(done) {
                this.$refs['cancelMissionForm'].resetFields();
                done();
            },
            handleCloseValidateForm(done) {
                this.$refs['validateMissionForm'].resetFields();
                done();
            }
        }
    }
</script>