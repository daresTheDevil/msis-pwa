<template>
  <div>
    <v-toolbar color="cyan darken-3" dark tabs>
      <v-text-field
        append-icon="mic"
        class="mx-3"
        flat
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>

      <v-tabs
        slot="extension"
        v-model="tab"
        color="cyan darken-3"
        centered
      >
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab v-for="tab in tabs" :key="tab">
          {{ tab }}
        </v-tab>
      </v-tabs>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="tab in tabs" :key="tab">
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>


<script>
  export default {
    data () {
      return {
        tabs: [ 'Student', 'Personnel', 'District/School', 'Calendar', 'SPED', 'VocEd', 'FETS' ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
      }
    }
  }
</script>
