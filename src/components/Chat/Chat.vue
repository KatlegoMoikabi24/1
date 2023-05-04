<template>
  <v-container>
    <v-row>
      <v-col col="12">
        <v-row justify="center">
          <v-btn color="primary" style="position:absolute; margin-right:10px; right:0; bottom:0; margin-bottom:15px;" dark @click="compose({})">Chat With Us</v-btn>
          <v-dialog
            v-model="dialogCompose"
            width="500">
            <v-card>
                <v-card-title class="headline " primary-title>
                  Compose Message
                </v-card-title>
                <v-card-text class="pa-5">
                    <v-form ref="sendForm" v-model="valid" lazy-validation>
                        <v-text-field v-model="composeMessage.from" label="From" :rules="[rules.required, rules.email]"></v-text-field>
                        <v-text-field v-model="composeMessage.to" label="To" :rules="[rules.required]"></v-text-field>
                        <v-text-field v-model="composeMessage.subject" label="Subject" :rules="[rules.required]"></v-text-field>
                        <div v-html="composeMessage.originalBody"></div>
                        <v-textarea v-model="composeMessage.body" label="Message"></v-textarea>
                    </v-form>
                </v-card-text>
                <v-card-actions class="pa-5">
                  <v-btn class="ml-auto" @click="saveDraft()" rounded width="100px" outlined color="primary">Cancel</v-btn>
                  <v-btn class="" @click="saveDraft()" width="80px" rounded color="primary">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Chat",
  
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
    compose() {
        this.dialogCompose = true
    },
    saveDraft() {
        this.dialogCompose = false
    },
  },
  el: '#app'
}
</script>