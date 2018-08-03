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

      <v-subheader class="mt-3 grey--text text--darken-1">MODULES</v-subheader>

      <v-list>
        <v-list-tile v-for="module in modules" :key="module">
          <v-list-tile-title>{{ module.text }}</v-list-tile-title>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar color="primary" dark fixed clipped-left app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">MSIS</span>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat to="pages/login">Login</v-btn>

        <v-menu offset-y>
          <v-btn flat slot="activator">MSIS</v-btn>
          <v-list>
            <v-list-tile v-for="msislink in msislinks" :key="msislink" :to="msislink.link">
              <v-list-tile-title>{{ msislink.text }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>

        <v-btn flat>ELMS</v-btn>
      </v-toolbar-items>
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
      modules: [
        { text: 'Student', link: '' },
        { text: 'Personnel', link: '' },
        { text: 'District/School', link: '' },
        { text: 'Calendar', link: '' },
        { text: 'Career/Technical', link: '' },
        { text: 'SPED', link: '' },
        { text: 'Personnel Snapshot', link: '' },
        { text: 'FETS', link: '' },
        { text: 'Federal Programs', link: '' }
      ],
      msislinks: [
        { text: 'Dashboard', link: '' },
        { text: 'Modules', link: 'msismodules' },
        { text: 'Reports', link: 'msisreports' },
        { text: 'Maintenance', link: '' },
        { text: 'Security', link: '' },
        { text: 'Block', link: '' }
      ],
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
      ]
    }),
    props: {
      source: String
    }
  }
</script>
