<template>
    <div class="container">
        <el-form ref="taskForm" :model="task">

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="Start date and time" prop="start_date_time">
                        <el-date-picker
                                v-model="task.start_date_time"
                                :editable="true"
                                type="datetime"
                                style="width: 100%"
                                :default-value="now"
                                placeholder="Select date and time">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="End date and time" prop="end_date_time">
                        <el-date-picker
                                :editable="true"
                                v-model="task.end_date_time"
                                type="datetime"
                                style="width: 100%"
                                :default-value="now"
                                placeholder="Select date and time">
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="Conductor" prop="conductor">
                        <el-input type="text" v-model="task.conductor"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Tractor" prop="tractor">
                        <el-input type="text" v-model="task.tractor"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="Tool" prop="tool">
                        <el-input type="text" v-model="task.tool"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Tool Config" prop="tool_configuration">
                        <el-input type="number" v-model="task.tool_configuration"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="Depth in CM" prop="depth_in_cm">
                        <el-input type="number" v-model="task.depth_in_cm"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Width in M" prop="width_in_m">
                        <el-input type="number" v-model="task.width_in_m"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="Average speed" prop="average_speed">
                        <el-input type="number" v-model="task.average_speed"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Worked area" prop="worked_area">
                        <el-input type="number" v-model="task.worked_area"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="Average consumption" prop="average_consumption">
                        <el-input type="number" v-model="task.average_consumption"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Fuel consumption" prop="fuel_consumption">
                        <el-input type="number" v-model="task.fuel_consumption"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-form-item label="Observation" prop="observation">
                <el-input type="textarea" v-model="task.observation"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitTask('groundWorkTaskForm')">Create</el-button>
                <el-button @click="resetForm('groundWorkTaskForm')">Reset</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>
<script>
    import {Row as ElRow, Col as ElCol} from 'element-ui'

    export default {
        components: {ElRow, ElCol},
        props: ['task'],
        data() {
            return {}
        },
        computed: {
            now: function () {
                return new Date()
            }
        },
        methods: {
            submitTask(formName) {
                this.$emit('submit', this.task);
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }
    }
</script>