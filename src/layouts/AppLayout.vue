<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      :mini-variant.sync="mini"
      v-model="drawer"
      fixed
      clipped
      app
      hide-overlay
      stateless
    > -->
    <v-navigation-drawer v-model="drawer" fixed clipped app hide-overlay stateless>
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

      <v-subheader class="mt-3 grey--text text--darken-1">APPLICATIONS</v-subheader>

      <v-list>
        <v-list-group prepend-icon="school" no-action class="cyan">
          <v-list-tile slot="activator">
            <v-list-tile-title>MSIS Core</v-list-tile-title>
          </v-list-tile>

          <v-list-group no-action sub-group class="cyan lighten-3">
            <v-list-tile slot="activator">
              <v-list-tile-title>Modules</v-list-tile-title>
            </v-list-tile>

            <v-list-tile v-for="(admin, i) in admins" :key="i" @click="" class="cyan lighten-4">
              <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group sub-group no-action class="cyan darken-3">
            <v-list-tile slot="activator">
              <v-list-tile-title>Reports</v-list-tile-title>
            </v-list-tile>

            <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="" class="cyan darken-2">
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>

        <v-list-group prepend-icon="library_books" no-action class="purple darken-4">
          <v-list-tile slot="activator">
            <v-list-tile-title>Textbooks</v-list-tile-title>
          </v-list-tile>

          <v-list-group no-action sub-group class="purple darken-3">
            <v-list-tile slot="activator">
              <v-list-tile-title>Modules</v-list-tile-title>
            </v-list-tile>

            <v-list-tile v-for="(admin, i) in admins" :key="i" @click="" class="purple darken-2">
              <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group sub-group no-action class="purple darken-3">
            <v-list-tile slot="activator">
              <v-list-tile-title>Reports</v-list-tile-title>
            </v-list-tile>

            <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="" class="purple darken-2">
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
        <v-list-group prepend-icon="library_books" no-action class="indigo darken-4">
          <v-list-tile slot="activator">
            <v-list-tile-title>Licensure</v-list-tile-title>
          </v-list-tile>

          <v-list-group no-action sub-group class="indigo darken-3">
            <v-list-tile slot="activator">
              <v-list-tile-title>Modules</v-list-tile-title>
            </v-list-tile>

            <v-list-tile v-for="(admin, i) in admins" :key="i" @click="" class="indigo darken-2">
              <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group sub-group no-action class="indigo darken-3">
            <v-list-tile slot="activator">
              <v-list-tile-title>Reports</v-list-tile-title>
            </v-list-tile>

            <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="" class="indigo darken-2">
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
        <v-list-group prepend-icon="library_books" no-action class="deep-orange darken-4">
          <v-list-tile slot="activator">
            <v-list-tile-title>Data</v-list-tile-title>
          </v-list-tile>

          <v-list-group no-action sub-group class="deep-orange darken-3">
            <v-list-tile slot="activator">
              <v-list-tile-title>Modules</v-list-tile-title>
            </v-list-tile>

            <v-list-tile v-for="(admin, i) in admins" :key="i" @click="" class="deep-orange darken-2">
              <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="admin[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>

          <v-list-group sub-group no-action class="deep-orange darken-3">
            <v-list-tile slot="activator">
              <v-list-tile-title>Reports</v-list-tile-title>
            </v-list-tile>

            <v-list-tile v-for="(crud, i) in cruds" :key="i" @click="" class="deep-orange darken-2">
              <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
              <v-list-tile-action>
                <v-icon v-text="crud[1]"></v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
      </v-list>
      <v-list class="pt-0" dense>
        <v-subheader class="mt-3 grey--text text--darken-1">APPLICATIONS</v-subheader>
        <v-list-tile ripple v-for="item in items" :key="item.text" @click="">
          <v-list-tile-avatar>
            <v-avatar size="32" :color="item.color">
              <v-icon>{{ item.icon }}</v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link to="/msis">{{ item.text }}</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="teal" fixed clipped-left app dense>
      <!-- v-bind:extended="isExtended" -->
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- @click.stop="mini = !mini" -->
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">MSIS</span>
      </v-toolbar-title>
      <!-- <v-autocomplete
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
      </v-autocomplete> -->
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="setLayout('simple-layout')">Simple Layout</v-btn>
      <v-btn color="secondary" @click="setLayout('app-layout')">App Layout</v-btn>
      <v-btn icon>
        <!--  @click.stop="isExtended = !isExtended"> -->
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
    methods: {
      setLayout (layout) {
        this.$store.commit('SET_LAYOUT', layout)
      }
    },
    data: () => ({
      drawer: true,
      items: [{
        icon: 'school',
        text: 'MSIS Core',
        color: 'teal'
      },
      {
        icon: 'library_books',
        text: 'Textbooks',
        color: 'yellow darken-3'
      },
      {
        icon: 'how_to_reg',
        text: 'Licensure',
        color: 'teal'
      },
      {
        icon: 'poll',
        text: 'Data',
        color: 'deep-orange darken-1'
      }
      ],
      admins: [
        ['Management', 'people_outline'],
        ['Settings', 'settings']
      ],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete']
      ],
      items2: [{
        picture: 28,
        text: 'Joseph'
      },
      {
        picture: 38,
        text: 'Apple'
      },
      {
        picture: 48,
        text: 'Xbox Ahoy'
      },
      {
        picture: 58,
        text: 'Nokia'
      },
      {
        picture: 78,
        text: 'MKBHD'
      }
      ],
      menuItems: [{
        title: 'Home',
        path: '/home',
        icon: 'home'
      },
      {
        title: 'Sign Up',
        path: '/signup',
        icon: 'face'
      },
      {
        title: 'Sign In',
        path: '/signin',
        icon: 'lock_open'
      }
      ]
    }),
    props: {
      source: String
    }
  }
</script>
