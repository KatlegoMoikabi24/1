<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-img height="90" class="pa-2" src="../assets/logo.png">
      <div class="text-center">

      </div>
    </v-img>
    <v-divider></v-divider>
    <v-list>
      <v-list-item v-for="[icon, text, to] in links" :key="icon" link>
        <v-list-item-icon @click="redirect(to)">
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content @click="redirect(to)">
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {

    const whoami = 'doctor';

    return {
      links: this.mySideMenu(whoami)
    };
  },
  methods: {
    setIcon(type) {
      let icon = '';
      if (type == 'dashboard')
        icon = 'mdi-microsoft-windows';
      if (type == 'user')
        icon = 'mdi-account';
      if (type == 'appointment')
        icon = 'mdi-book-edit';
      if (type == 'chat')
        icon = 'mdi-chat'
      if (type == 'consultation')
        icon = 'mdi-note-plus';
      if (type == 'patients')
        icon = 'mdi-account-group';
      if (type == 'hospital')
        icon = 'mdi-hospital-building';
      if (type == 'settings')
        icon == 'mdi-cog';

      return icon;
    },
    setLinks(page) {
      let to = null;
      if (page == 'Dashboard')
        to = 'home';
      if (page == 'Chats')
        to = 'chats';
      if (page == 'hospital')
        to = 'hospitals'
      if (page == 'Patients')
        to = 'patients'
      if (page == 'Login')
        to = 'login';
      if(page == 'Appointments')
        to = 'appointment'
      
      return to;
    },
    redirect(to) {
      this.$router.push(to);
    },
    mySideMenu(whoami) {
      if (whoami == 'doctor') {
        return [
          [this.setIcon('dashboard'), "Dashboard", this.setLinks('Dashboard')],
          [this.setIcon('chat'), "Chats (2)"],
          [this.setIcon('appointment'), "Appointments (9)", this.setLinks('Appointments')],
          [this.setIcon('consultation'), "Consultations (3)"],
          [this.setIcon('patients'), "My Patients (45)", this.setLinks('Patients')],
          [this.setIcon('hospital'), "Hospitals (16)", this.setLinks('hospital')],
          [this.setIcon('settings'), "System Settings"],
        ];
      } else if (whoami != 'doctor' && whoami != 'patient' & whoami != 'admin') {
        return [
          [this.setIcon('user'), "Login (16)", this.setLinks('Login')],
          [this.setIcon('hospital'), "Hospitals (16)", this.setLinks('hospital')],
        ];
      } else if (whoami == 'admin') {
        return [
          ["mdi-microsoft-windows", "Dashboard"],
          ["mdi-account", "My Profile"],
          ["mdi-clipboard-list-outline", "Manage Doctors"],
          ["mdi-account-plus-outline", "Manage Patients"],
          ["mdi-card-account-details-outline", "Manage Hospitals (16)"],
          ["mdi-cog", "System Setting"],
        ];
      }
    }
  }
};
</script>

<style scoped></style>
