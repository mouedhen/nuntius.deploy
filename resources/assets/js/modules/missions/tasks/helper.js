const moment = require('moment');
const momentDurationFormatSetup = require("moment-duration-format");
momentDurationFormatSetup(moment);
moment.locale('en');

export class MissionMetrics {

    constructor({tasks, fuelUnitPrice}) {
        this.tasks = tasks.map((task, index, tasks) => {
            if (index === 0) {
                task.break_time = 0;
            } else {
                task.break_time = new Date(task.start_date_time) - new Date(tasks[index - 1].end_date_time)
            }
            task.work_time = new Date(task.end_date_time) - new Date(task.start_date_time);
            return task
        });
        this.totalTasks = this.tasks.length;
        this.workTime = moment.duration(this.tasks.reduce((sum, task) => sum + task.work_time, 0));
        this.breakTime = moment.duration(this.tasks.reduce((sum, task) => sum + task.break_time, 0));
        this.workedArea = this.tasks.reduce((sum, task) => sum + task.worked_area, 0);
        this.fuelConsumption = this.tasks.reduce((sum, task) => sum + task.fuel_consumption, 0);
        this.averageSpeed = this.tasks.reduce((sum, task) => sum + task.average_speed, 0) / this.totalTasks;
        this.averageConsumption = this.tasks.reduce((sum, task) => sum + task.average_consumption, 0) / this.totalTasks;
        this.fuelCost = this.fuelConsumption * fuelUnitPrice;
    }

}
