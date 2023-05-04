<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <div></div>
            <v-btn color="primary">
             <v-icon >mdi-plus</v-icon>  Add Hospital 
            </v-btn>
        </v-subheader>
        <br>
        <v-row>
            <v-col lg="12" cols="12">
                <v-alert dense text  >
                  <span style="font-size: 19px; font-weight:normal; color:black">TUT eHealthcare Hospitals</span>
                </v-alert>
            </v-col>
           
            <v-col>
                <v-card>
                    <v-data-table
                            caption="Hospital List"
                            :headers="headers"
                            :items="patients"
                            :items-per-page="5"
                            class="elevation-1"
                    >
                        <template v-slot:item.action="">
                          <v-btn color="primary" outlined small>View</v-btn>
                         </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Hospitals",
        data() {
            return {
                activityLog: [
                    {title: 'Total Patients', amount: 590, icon: 'mdi-account', color: 'cyan lighten-1'},
                    {title: 'Active Doctors', amount: 154, icon: 'mdi-account-group-outline', color: 'green darken-2'},
                    {title: 'Emergency Cases', amount: 9, icon: 'mdi-account-group-outline', color: 'blue-grey darken-1'},
                    {
                        title: 'Nearby Hospitals',
                        amount: 13,
                        icon: 'mdi-building',
                        color: 'deep-orange darken-1'
                    },
                ],
                headers: [
                    {
                        text: 'Name of Hospital',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    {text: 'Province', value: 'province'},
                    {text: 'Region', value: 'region'},
                    {text: 'Address', value: 'address'},
                    {text: 'Status', value: 'status'},
                    {text: 'Hours', value: 'hours'},
                    {text: 'Emergency Department', value: 'action'},
                ],
                patients: [
                    {
                        name: 'Jacob Sibisi',
                        province: 'Female',
                        region: '18-Jan-1994',
                        address: 24,
                        status: 'Opened',
                        hours: '15 Mar 2023',
                    },
                    {
                        name: 'Sibisi Jacob',
                        province: 'Male',
                        region: '18-Jan-1994',
                        address: 37,
                        status: 'Consulted',
                        hours: '1%',
                    },
                    {
                        name: 'Antonie Miller',
                        province: 'Male',
                        region: '18-Jan-1994',
                        address: 23,
                        status: 'Consulted',
                        hours: '7 May 2023',
                    },
                    {
                        name: 'Baloyi Ntsako',
                        province: 'Male',
                        region: '13-Mar-1943',
                        address: 'Active',
                        status: 'Completed',
                        hours: '12 Feb 2023',
                    },
                    {
                        name: 'Radebe Misa',
                        province: 'Male',
                        region: '18-Jan-1994',
                        address: 49,
                        status: 'Opened',
                        hours: '16 Feb 2023',
                    },
                    {
                        name: 'Java Bean',
                        province: 'Male',
                        region: '18-Jan-1994',
                        address: 94,
                        status: 0.0,
                        hours: 'Completed',
                    },
                    {
                        name: 'George Maki',
                        province: 'Female',
                        region: '18-Jan-1994',
                        address: 98,
                        status: 0,
                        hours: '2%',
                    },
                    {
                        name: 'Malone Post',
                        province: 'Female',
                        region: 3.2,
                        address: 87,
                        status: 6.5,
                        hours: '45%',
                    },
                    {
                        name: 'Katty Hilda',
                        province: 'Male',
                        region: 25.0,
                        address: 51,
                        status: 4.9,
                        hours: '22%',
                    },
                    {
                        name: 'Hello World',
                        province: 'Male',
                        region: 26.0,
                        address: 65,
                        status: 7,
                        hours: '6%',
                    },
                ],
            }
        },
        methods: {
            onButtonClick(item) {
                console.log('click on ' + item.no)
            }
        }

    }
</script>

<style scoped>
    .overlap-icon {
        position: absolute;
        top: -33px;
        text-align: center;
        padding-top: 12px;
    }
</style>