<template>
    <el-row>
        <el-col :span="4">
            <customers-side-bar :index="index"/>
        </el-col>
        <el-col :span="20" class="container">

            <el-card class="box-card">
                <div>
                    <h2>{{customer.name}}</h2>
                    <p>{{customer.label}}</p>
                    <small>{{customer.category}}</small>

                    <div style="text-align: right">
                        <div v-if="customer.tax_registration_number">
                            <b>Matricule Fiscal : </b>{{customer.tax_registration_number}}
                        </div>

                        <div v-if="customer.cin_passport"><b>CIN / Passport : </b>{{customer.cin_passport}}</div>
                        <div v-if="customer.phone_number"><b>Téléphone : </b>{{customer.phone_number}}</div>
                        <div v-if="customer.address"><b>Adresse : </b>{{customer.address}}</div>
                    </div>

                </div>
            </el-card>

            <div>
                <div style="text-align: right; margin-top: 24px">
                    <el-button type="primary" @click="dialogVisible = true">Ajouter contacts</el-button>
                </div>
                <div>
                    <h3 style="text-align: center" v-if="contactsLength === 0">Ancun contact pour ce client</h3>
                    <contacts-table :contacts="contacts"/>
                </div>
            </div>

            <el-dialog
                    title="Ajouter contact"
                    :visible.sync="dialogVisible"
                    width="60%"
                    :before-close="handleClose">
                <contacts-form :contact="contact"/>
                <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">Annuler</el-button>
                <el-button type="primary" @click="addContact">Confirmer</el-button>
              </span>
            </el-dialog>
        </el-col>
    </el-row>
</template>

<script>
    import {Row as ElRow, Col as ElCol} from 'element-ui'
    import CustomersSideBar from './../components/CustomersSideBar.vue'
    import ContactsForm from '../components/ContactsForm'
    import ContactsTable from '../components/ContactsTable'

    import {initialContactData, initialCustomerData} from '../config'

    export default {
        components: {ElRow, ElCol, CustomersSideBar, ContactsForm, ContactsTable},
        data() {
            return {
                index: '0-3',
                dialogVisible: false,
                customer: initialCustomerData(),
                contact: initialContactData(),
                contacts: [],
            }
        },
        mounted() {
            this.$store.dispatch('fetchCustomer', {customerID: this.$route.params.id}).then(customer => {
                this.customer = customer;
                this.contacts = customer.contacts;
            })
        },
        methods: {
            handleClose() {
                this.contact = initialContactData();
            },
            addContact() {
                this.contact.customer_id = this.$route.params.id;
                this.$store.dispatch('saveContact', {contact: this.contact}).then(contact => {
                    this.contact = initialContactData();
                    this.$store.dispatch('fetchCustomer', {customerID: this.$route.params.id}).then(customer => {
                        this.customer = customer;
                        this.contacts = customer.contacts;
                    })

                    this.dialogVisible = false;
                })
            },
            loadData() {
                this.$store.dispatch('fetchCustomer', {customerID: this.$route.params.id}).then(customer => {
                    this.customer = customer;
                    this.contacts = customer.contacts;
                })
            }
        },
        computed: {
            contactsLength: function () {
                if (this.customer.contacts === undefined) return 0;
                return this.customer.contacts.length
            }
        }
    }
</script>
