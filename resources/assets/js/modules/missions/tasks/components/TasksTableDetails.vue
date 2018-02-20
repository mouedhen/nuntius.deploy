<template>
    <div>

        <table class="el-table el-table--border" style="table-layout: fixed">
            <tr>
                <th style="padding: 10px">Chauffeurs</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.conductor.name}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Pauses</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.break_time}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Heure de début</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{formatDate(task.start_date_time)}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Heure de fin</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{formatDate(task.end_date_time)}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Temps de travail</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.work_time}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Tracteur</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.tractor.designation}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Outils</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.tool.designation}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Configuration de l'outil</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.tool_configuration}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Profondeur en CM</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.depth_in_cm}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Largeur en M</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.width_in_m}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Vitesse moyenne indiquée</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.average_speed}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Surface travaillée</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.worked_area}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Consommation moyenne</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.average_consumption}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Consommation totale en carburant</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.fuel_consumption}}</td>
            </tr>
            <tr>
                <th style="padding: 10px">Observations</th>
                <td style="padding: 10px" v-for="task in tableTasks" :key="task.id">{{task.observation}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    const moment = require('moment');
    const momentDurationFormatSetup = require("moment-duration-format");
    momentDurationFormatSetup(moment);
    moment.locale('fr');

    export default {
        props: ['tasks'],
        computed: {
            tableTasks: function () {
                return this.tasks.map((task, index, tasks) => {
                    if (index === 0) {
                        task.break_time = moment
                            .duration(0)
                            .format({template: 'hh[h]: mm[m]', forceLength: true, trim: false});
                    } else {
                        task.break_time = moment
                            .duration(new Date(task.start_date_time) - new Date(tasks[index - 1].end_date_time))
                            .format({template: 'hh[h]: mm[m]', forceLength: true, trim: false})
                    }
                    task.work_time = moment
                        .duration(new Date(task.end_date_time) - new Date(task.start_date_time))
                        .format({template: 'hh[h]: mm[m]', forceLength: true, trim: false});
                    return task
                })
            }
        },
        methods: {
            formatDate(stringDate) {
                return moment(new Date(stringDate)).format('HH:mm')
            }
        }
    }
</script>