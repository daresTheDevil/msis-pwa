<template>
    <v-container fill-height>
      <v-layout justify-start align-start column>
        <v-flex>
    <v-breadcrumbs divider="-">
      <v-breadcrumbs-item
        v-for="item in items"
        :key="item.text"
        :disabled="item.disabled"
      >
        {{ item.text }}
      </v-breadcrumbs-item>
    </v-breadcrumbs>
        </v-flex>
        <v-flex>
      <v-layout justify-center align-center>
        <v-flex>
          <v-card>
            <v-card-text class="pa-0">
              <v-container class="pa-0">
                <v-layout row ma-0>
                  <v-flex>
                    <v-layout ma-0 justify-center align-center>
                      <v-icon size="42px" color="orange">search</v-icon>
                    </v-layout>
                  </v-flex>
                  <v-flex sm6 xs6 class="text-sm-center py-3 white--text cyan">
                    <div class="headline">Dashboard Page</div>
                    <span class="caption">Subtitle</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<!-- <script>
  export default {
    props: {
      icon: String,
      title: String,
      subTitle: String,
      color: String
    }
  }
</script> -->

<script>
  export default {
    data: () => ({
      items: [
        {
          text: 'Dashboard',
          disabled: false
        },
        {
          text: 'Link 1',
          disabled: false
        },
        {
          text: 'Link 2',
          disabled: true
        }
      ]
    })
  }
</script>
