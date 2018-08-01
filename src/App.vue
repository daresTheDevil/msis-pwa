<template>
  <v-app
    dark
  >
    <!-- <v-navigation-drawer
      :mini-variant.sync="mini"
      v-model="drawer"
      fixed
      clipped
      app
      hide-overlay
      stateless
    > -->
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
      hide-overlay
      stateless
    >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/13.jpg">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>David Kay</v-list-tile-title>
            </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
      <v-list class="pt-0" dense>
<v-divider></v-divider>
        <v-subheader class="mt-3 grey--text text--darken-1">APPLICATIONS</v-subheader>
        <v-list-tile ripple v-for="item in items" :key="item.text" @click="">
          <v-list-tile-avatar>
            <v-avatar size="32" :color="item.color">
            <v-icon>{{ item.icon }}</v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="teal"
      dense
      fixed
      clipped-left
      app
      v-bind:extended="isExtended"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon> <!-- @click.stop="mini = !mini" -->
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">MSIS</span>
      </v-toolbar-title>
      <v-autocomplete
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      slot="extension"
      v-if="isExtended"
      hide-details
      item-text="name"
      item-value="symbol"
      label="I want to..."
      color="white"
      autofocus
      flat
    >
      </v-autocomplete>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="isExtended = !isExtended">
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-layout>

        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      mini: true,
      isExtended: false,
      items: [
        { icon: 'school', text: 'MSIS Core', color: 'teal' },
        { icon: 'library_books', text: 'Textbooks', color: 'yellow darken-3' },
        { icon: 'how_to_reg', text: 'Licensure', color: 'teal' },
        { icon: 'poll', text: 'Data', color: 'deep-orange darken-1' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ],
      menuItems: [
        { title: 'Home', path: '/home', icon: 'home' },
        { title: 'Sign Up', path: '/signup', icon: 'face' },
        { title: 'Sign In', path: '/signin', icon: 'lock_open' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>
