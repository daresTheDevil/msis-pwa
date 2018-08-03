<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed clipped app>
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
        <v-list-group prepend-icon="school" no-action>
          <v-list-tile slot="activator">
            <v-list-tile-title>MSIS Core</v-list-tile-title>
          </v-list-tile>

          <v-list-tile to="/msismodules" class="secondary">
            <v-list-tile-title>Modules</v-list-tile-title>
          </v-list-tile>

          <v-list-tile to="/msisreports" class="secondary">
            <v-list-tile-title>Reports</v-list-tile-title>
          </v-list-tile>
        </v-list-group>
        <v-divider></v-divider>
        <v-list-group prepend-icon="library_books" no-action>
          <v-list-tile slot="activator">
            <v-list-tile-title>Textbooks</v-list-tile-title>
          </v-list-tile>

          <v-list-tile class="secondary">
            <v-list-tile-title>Modules</v-list-tile-title>
          </v-list-tile>

          <v-list-tile class="secondary">
            <v-list-tile-title>Reports</v-list-tile-title>
          </v-list-tile>
        </v-list-group>
        <v-divider></v-divider>
        <v-list-group prepend-icon="how_to_reg" no-action>
          <v-list-tile slot="activator">
            <v-list-tile-title>Licensure</v-list-tile-title>
          </v-list-tile>

          <v-list-tile class="secondary">
            <v-list-tile-title>Modules</v-list-tile-title>
          </v-list-tile>

          <v-list-tile class="secondary">
            <v-list-tile-title>Reports</v-list-tile-title>
          </v-list-tile>
        </v-list-group>
        <v-divider></v-divider>

        <v-list-group prepend-icon="poll" no-action>
          <v-list-tile slot="activator">
            <v-list-tile-title>Data</v-list-tile-title>
          </v-list-tile>

          <v-list-tile class="secondary">
            <v-list-tile-title>Modules</v-list-tile-title>
          </v-list-tile>

          <v-list-tile class="secondary">
            <v-list-tile-title>Reports</v-list-tile-title>
          </v-list-tile>

        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" fixed clipped-left app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
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
      <v-btn light color="warning" to="pages/login">Login</v-btn>
      <v-btn icon>
        <!--  @click.stop="isExtended = !isExtended"> -->
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    computed: {
      name () {
        return this.$route.name
      }
    },
    list () {
      return this.$route.matched.filter((route) => route.name || route.meta.label)
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
