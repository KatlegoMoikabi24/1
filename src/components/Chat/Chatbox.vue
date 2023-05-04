<template>
    <v-container>
      <h2> Hello World </h2>
    </v-container>
  </template>
  <script>
  export default {
    name: "Chatbox",
    
    data() {
      return {
          messages: [],
          drafts: [],
          sent: [],
          dialogCompose: false,
          activeMessage: {},
          composeMessage: {},
          valid: true,
          rules: {
            required: value => !!value || "This field is required",
            email: v => /.+@.+\..+/.test(v) || "Must be a valid email"
          }
      }
    },
    methods: {
       
    },
   }
  </script>