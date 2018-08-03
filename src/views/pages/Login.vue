<template>
  <v-app light>
    <v-container fluid fill-height class="green lighten-4"  grid-list-xl>
      <v-layout row wrap justify-center align-center>
        <v-flex xs12 sm4>
          <v-card class="elevation-18">
            <v-card-text>
              <v-flex class="text-xs-center" ma-3>
                <h1 class="display-2">MSIS Login</h1>
              </v-flex>
              <v-flex>
                <form>
                  <v-layout column>
                    <v-flex>
                      <v-text-field name="email" label="Email" id="email" type="email" box :rules="[rules.required, rules.email]"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field name="password" label="Password" id="password" type="password" box :rules="[rules.requrired, rules.counter]"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-btn dark color="primary" large block to="/dashboard">
                        <v-icon dark left>school</v-icon>Login with MSIS</v-btn>
                    </v-flex>
                    <v-flex>
                      <v-btn dark color="indigo" large block to="/dashboard">
                        <v-icon dark left>fab fa-google</v-icon>Login with G-Suite</v-btn>
                      <v-btn dark color="deep-orange" large block to="/dashboard">
                        <v-icon dark left>fab fa-windows</v-icon>Login with O365</v-btn>
                    </v-flex>
                  </v-layout>
                </form>
              </v-flex>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          counter: value => value.length >= 8 || 'At least 8 characters please.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Not an Email.'
          }
        }
      }
    }
  }
</script>
