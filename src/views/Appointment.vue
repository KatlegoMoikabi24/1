<template>
  <div class="dashboard">
    <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
      <div></div>
      <v-btn color="primary">
        <v-icon>mdi-plus</v-icon> Book Appointment
      </v-btn>
    </v-subheader>
    <br>
    <v-row>
      <v-col lg="12" cols="12">
        <v-alert dense text>
          <span style="font-size: 19px; font-weight:normal; color:black">Appointments List</span>
        </v-alert>
      </v-col>

      <v-col>
        <v-card>
          <v-data-table :headers="headers" :items="patients" :items-per-page="5"
            class="elevation-1">
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
  name: "Appointment",
  data() {
    return {

      headers: [
        {text: 'Patient Name', align: 'center',  value: 'name',},
        {text: 'Name of Doctor', value: 'province' },
        {text: 'Date Created', value: 'region' },
        {text: 'Appointment Date', value: 'address' },
        {text: 'Status', value: 'status' },
        {text: 'Start Time', value: 'hours' },
        {text: 'End Time', value: 'hours' },
        {text: 'Action', align: 'center', value: 'action' },
      ],
      patients: [
        {
          name: 'Jacob Sibisi',
          province: 'Female',
          region: '8-Apr-2023',
          address: '14-Apr-2023',
          status: 'Pending',
          hours: '15:30',
        },
        {
          name: 'Sibisi Jacob',
          province: 'Male',
          region: '18-Jan-2023',
          address: '23-Jan-2023',
          status: 'Completed',
          hours: '13:30',
        },
        {
          name: 'Antonie Miller',
          province: 'Male',
          region: '23-May-2023',
          address: '29-May-2023',
          status: 'Completed',
          hours: '11:15',
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