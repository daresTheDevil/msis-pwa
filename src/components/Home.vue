<template>
  <v-container grid-list-xl fluid>
    <v-layout row align-center>
      <v-flex xs1>
        <h3 class="pr-3">MSIS Home</h3>
      </v-flex>
      <v-flex>
        <v-breadcrumbs divider="-">
          <v-breadcrumbs-item>
            <v-icon larg>home</v-icon>
          </v-breadcrumbs-item>
          <v-breadcrumbs-item>
            Dashboard
          </v-breadcrumbs-item>
        </v-breadcrumbs>
      </v-flex>


      <v-flex xs1>
        <v-btn icon>
          <v-icon class="text--secondary">refresh</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {}
</script>
