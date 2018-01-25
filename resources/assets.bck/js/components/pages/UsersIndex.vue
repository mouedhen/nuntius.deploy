<template>
    <div>
        <nav-bar activeIndex="1"/>
        <div class="container">
            <data-tables :data="users.models">
                <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.prop" sortable="custom">
                </el-table-column>
            </data-tables>
        </div>
    </div>
</template>

<script>
    import NavBar from './../shared/NavBar'
    import { Users } from './../../models/Users'

    export default {
        components: {NavBar},
        data() {
            return {
                users: new Users(),
                titles: [{
                    prop: "id",
                    label: "ID"
                }, {
                    prop: "name",
                    label: "Nom"
                }, {
                    prop: "email",
                    label: "Adresse email"
                }]
            }
        },
        mounted() {
            this.users.fetch();
            console.log(this.users)
        }
    }
</script>
