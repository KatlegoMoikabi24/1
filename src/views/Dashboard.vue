<template>
    <div class="text-center">
      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        location="end"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            color="indigo"
            v-bind="props"
          >
            Menu as Popover
          </v-btn>
        </template>
  
        <v-card min-width="300">
          <v-list>
            <v-list-item
              prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
              title="John Leider"
              subtitle="Founder of Vuetify"
            >
              <template v-slot:append>
                <v-btn
                  variant="text"
                  :class="fav ? 'text-red' : ''"
                  icon="mdi-heart"
                  @click="fav = !fav"
                ></v-btn>
              </template>
            </v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list>
            <v-list-item>
              <v-switch
                v-model="message"
                color="purple"
                label="Enable messages"
                hide-details
              ></v-switch>
            </v-list-item>
  
            <v-list-item>
              <v-switch
                v-model="hints"
                color="purple"
                label="Enable hints"
                hide-details
              ></v-switch>
            </v-list-item>
          </v-list>
  
          <v-card-actions>
            <v-spacer></v-spacer>
  
            <v-btn
              variant="text"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              color="primary"
              variant="text"
              @click="menu = false"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </div>
  </template>
<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h1>TUT Dashboard</h1>
            <v-btn color="primary">
                Turn Auto
            </v-btn>
        </v-subheader>
        <br>
        <v-row>
            <v-col lg="7" cols="12">
                <v-alert dense text type="success">
                    Login Successfully! Welcome to <span style="font-weight:bolder; color:blue">TUT eHealthcare</span>
                </v-alert>
                <v-row>
                    <v-col lg="6" cols="12" v-for="(item,index) in activityLog" :key="index">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>{{ item.title }}</strong> <br>
                                    <span>Last 3 weeks</span>
                                </div>
                                <v-avatar size="60" :color="item.color" style="border: 3px solid #444">
                                    <span style="color: white">{{item.amount}} +</span>
                                </v-avatar>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">


                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" lg="5">
                <v-card>
                    <v-card-title>Recent Activities</v-card-title>
                    <v-card-text class="py-0">
                        <v-timeline align-top dense>
                            <v-timeline-item color="indigo" small>
                                <strong>45 Minutes ago</strong>
                                <div class="text-caption">
                                   Ms Lerato Mosala Requests For Emergency Help
                                </div>
                            </v-timeline-item>
                            <v-timeline-item color="green" small>
                                <strong>35 Minutes ago</strong>
                                <div class="text-caption mb-2">
                                    DR Ntsako is consulting attended Ms Lerato Miller's
                                </div>
                            </v-timeline-item>

                            <v-timeline-item color="indigo" small>
                                <strong>24 Minutes ago</strong>
                                <div class="text-caption">
                                    Ms Lerato received medical prescription
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-data-table
                            caption="Patients Requests"
                            :headers="headers"
                            :items="patients"
                            :items-per-page="5"
                            class="elevation-1"
                    >
                        <template v-slot:item.action="">
                            <v-btn color="primary" outlined small  >View</v-btn>
                         </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",
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
                        text: 'Patient Name (All)',
                        align: 'start',
                        sortable: false,
                        value: 'name',
                    },
                    {text: 'Gender', value: 'calories'},
                    {text: 'Date of birth ', value: 'fat'},
                    {text: 'Address', value: 'carbs'},
                    {text: 'Status', value: 'protein'},
                    {text: 'Consiltation Date', value: 'iron'},
                    {text: 'Actions', value: 'action'},
                ],
                patients: [
                    {
                        name: 'Jacob Sibisi',
                        calories: 'Female',
                        fat: '18-Jan-1994',
                        carbs: 24,
                        protein: 'Pending',
                        iron: '15 Mar 2023',
                    },
                    {
                        name: 'Sibisi Jacob',
                        calories: 'Male',
                        fat: '18-Jan-1994',
                        carbs: 37,
                        protein: 'Consulted',
                        iron: '1%',
                    },
                    {
                        name: 'Antonie Miller',
                        calories: 'Male',
                        fat: '18-Jan-1994',
                        carbs: 23,
                        protein: 'Consulted',
                        iron: '7 May 2023',
                    },
                    {
                        name: 'Baloyi Ntsako',
                        calories: 'Male',
                        fat: '13-Mar-1943',
                        carbs: 'Active',
                        protein: 'Completed',
                        iron: '12 Feb 2023',
                    },
                    {
                        name: 'Radebe Misa',
                        calories: 'Male',
                        fat: '18-Jan-1994',
                        carbs: 49,
                        protein: 'Pending',
                        iron: '16 Feb 2023',
                    },
                    {
                        name: 'Java Bean',
                        calories: 'Male',
                        fat: '18-Jan-1994',
                        carbs: 94,
                        protein: 0.0,
                        iron: 'Completed',
                    },
                    {
                        name: 'George Maki',
                        calories: 'Female',
                        fat: '18-Jan-1994',
                        carbs: 98,
                        protein: 0,
                        iron: '2%',
                    },
                    {
                        name: 'Malone Post',
                        calories: 'Female',
                        fat: 3.2,
                        carbs: 87,
                        protein: 6.5,
                        iron: '45%',
                    },
                    {
                        name: 'Katty Hilda',
                        calories: 'Male',
                        fat: 25.0,
                        carbs: 51,
                        protein: 4.9,
                        iron: '22%',
                    },
                    {
                        name: 'Hello World',
                        calories: 'Male',
                        fat: 26.0,
                        carbs: 65,
                        protein: 7,
                        iron: '6%',
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