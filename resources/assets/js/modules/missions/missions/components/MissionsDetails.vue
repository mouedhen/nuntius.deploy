<template>
    <div class="container">
        <div class="box-card">
            <div>
                <h2 style="margin-bottom: 0">Mission - {{mission.label}}</h2>
                <small>{{formatStatus(mission.status)}}</small>

                <div style="text-align: right">
                    <el-row :gutters="20">
                        <el-col :span="8">
                            <div v-if="mission.customer"><b>ID Client : </b>{{mission.customer.label}}</div>
                            <div v-if="mission.customer"><b>Client : </b>{{mission.customer.name}}</div>
                        </el-col>
                        <el-col :span="8">
                            <div v-if="mission.estimated_start_date"><b>Date estimée de début : </b>{{formatDate(mission.estimated_start_date)}}</div>
                            <div v-if="mission.estimated_end_date"><b>Date estimée de fin : </b>{{formatDate(mission.estimated_end_date)}}</div>
                        </el-col>
                        <el-col :span="8">
                            <div v-if="mission.start_date"><b>Date effective de début : </b>{{formatDate(mission.start_date)}}</div>
                            <div v-if="mission.end_date"><b>Date effective de fin : </b>{{formatDate(mission.end_date)}}</div>
                        </el-col>
                    </el-row>
                    <el-row class="margin-top">

                        <el-col :span="16">
                            <div v-if="mission.fuel_unit_price"><b>Prix unitaire de carbrant : </b>{{mission.fuel_unit_price}}</div>
                        </el-col>

                        <el-col :span="8">
                            <div v-if="mission.start_counter"><b>Compteur de début : </b>{{mission.start_counter}}</div>
                            <div v-if="mission.end_counter"><b>Compteur de fin : </b>{{mission.end_counter}}</div>
                        </el-col>

                    </el-row>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    import TasksSummary from './../../tasks/components/TasksSummary.vue'
    import TasksTable from './../../tasks/components/TasksTableDetails.vue'

    export default {
        components: {TasksSummary, TasksTable},
        props: ['mission'],
        methods: {
            formatDate(date) {
                return moment(date).format('DD/MM/YYYY')
            },
            formatStatus(status) {
                switch(status) {
                    case 'planned': return 'Planifiée';
                    case 'canceled': return 'Annulée';
                    case 'validated': return 'Validée';
                    case 'in_progress': return 'En cours';
                    case 'finished': return 'Terminée';
                    default: return 'Non définie'
                }
            }
        }
    }
</script>
