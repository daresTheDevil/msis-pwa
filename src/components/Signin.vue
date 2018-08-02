<template>
<v-app light>
  <v-container fluid fill-height class="green lighten-4">
    <v-layout row wrap justify-center align-center>
<v-flex xs12 sm3>
      <v-card raised>
        <v-card-text>
      <v-flex class="text-xs-center" ma-3>
        <h1>Sign In</h1>
      </v-flex>
      <v-flex>
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field
                name="email"
                label="Email"
                id="email"
                type="email"
                required
                box></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                name="password"
                label="Password"
                id="password"
                type="password"
                required
                box></v-text-field>
            </v-flex>
            <v-flex>
              <v-btn color="cyan" large block type="submit">Sign In</v-btn>
              <v-btn color="teal" large block @click="setLayout('simple-layout')">Simple Layout</v-btn>
              <v-btn color="deep-orange" large block @click="setLayout('app-layout')">App Layout</v-btn>
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
  methods: {
    setLayout (layout) {
      this.$store.commit('SET_LAYOUT', layout)
    }
  }
}
</script>
