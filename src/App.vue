<template>
  <v-app id="inspire" v-if="(4 > 2)">
    <Sidebar :drawer="drawer" style="background: white" />
    <Topbar @drawerEvent="drawer = !drawer" style="background: white" />
    <v-main style="background: white ">
      <v-container class="py-8 px-6" fluid>
        <router-view></router-view>
          <Chat />
          <Chatbox />
</v-container>
    </v-main>
  </v-app>
  <v-app id="inspire" v-else>
    <Login />
    <v-main style="background: #f5f5f540">
      <v-container class="py-8 px-6" fluid>
       </v-container>
    </v-main>

  </v-app>

</template>
<script>
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Login from "./views/auth/Login";
import Chat from "./components/Chat/Chat";
import Chatbox from "./components/Chat/Chatbox"
 
 export default {
  name: "App",
  components: { Topbar, Sidebar, Login, Chat, Chatbox},
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
  }),
  methods: {},
};
</script>
