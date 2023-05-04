<template>
    <v-app id="inspire">
       Patient Requests
    </v-app>
  </template>

  <script> 
  export default {
    name: "requests",
    data: () => ({
      cards: ["Today", "Yesterday"],
      drawer: null,
    }),
    methods: {},
  };
  </script>
  