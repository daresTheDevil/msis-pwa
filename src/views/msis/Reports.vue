<template>
<v-app class="cyan darken-3">
<v-container>
        <v-breadcrumbs divider="-">
          <v-breadcrumbs-item v-for="item in items" :key="item.text" :disabled="item.disabled">
            {{ item.text }}
          </v-breadcrumbs-item>
        </v-breadcrumbs>
              <v-card>
          <v-card-title>
            Students
            <v-spacer></v-spacer>
            <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="students" :search="search">
            <template slot="items" slot-scope="props">
              <td class="text-xs-right">{{ props.item.msis_number }}</td>
              <td class="text-xs-right">{{ props.item.last_name }}</td>
              <td class="text-xs-right">{{ props.item.first_name }}</td>
              <td class="text-xs-right">{{ props.item.middle_name }}</td>
              <td class="text-xs-right">{{ props.item.district_number }}</td>
              <td class="text-xs-right">{{ props.item.school_number }}</td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </v-card>
</v-container>
</v-app>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          { text: 'MSIS #', value: 'msis_number' },
          { text: 'Last Name', value: 'last_name' },
          { text: 'First Name', value: 'first_name' },
          { text: 'Middle Name', value: 'middle_name' },
          { text: 'District', value: 'district_number' },
          { text: 'School', value: 'school_number' }
        ],
        students: [
          { msis_number: 6015, first_name: 'Marja', last_name: 'Shillitoe', middle_name: 'Léonie', district_number: 212, school_number: 9825 },
          { msis_number: 1435, first_name: 'Jade', last_name: 'Vlahos', middle_name: 'Garçon', district_number: 215, school_number: 4503 },
          { msis_number: 8057, first_name: 'Rex', last_name: 'Robertsen', middle_name: 'Laurélie', district_number: 369, school_number: 2784 },
          { msis_number: 8447, first_name: 'Brietta', last_name: 'Fellow', middle_name: 'Léana', district_number: 874, school_number: 7130 },
          { msis_number: 5334, first_name: 'Britni', last_name: 'Rizzotto', middle_name: 'Léa', district_number: 175, school_number: 6782 },
          { msis_number: 7340, first_name: 'Jamil', last_name: 'Jellicorse', middle_name: 'Miléna', district_number: 394, school_number: 9511 },
          { msis_number: 8688, first_name: 'Carmencita', last_name: 'Martineau', middle_name: 'Maïlys', district_number: 753, school_number: 6007 },
          { msis_number: 7196, first_name: 'Cristina', last_name: 'Howlings', middle_name: 'Maï', district_number: 340, school_number: 5896 },
          { msis_number: 7208, first_name: 'Dorice', last_name: 'Oleksiak', middle_name: 'Yú', district_number: 822, school_number: 9470 },
          { msis_number: 8345, first_name: 'Ira', last_name: 'Kerley', middle_name: 'Léa', district_number: 179, school_number: 1139 },
          { msis_number: 7124, first_name: 'Merill', last_name: 'Sumsion', middle_name: 'Marlène', district_number: 805, school_number: 5069 },
          { msis_number: 2870, first_name: 'Boony', last_name: 'Clowley', middle_name: 'Géraldine', district_number: 252, school_number: 8137 },
          { msis_number: 5892, first_name: 'Tim', last_name: 'Baudins', middle_name: 'Vérane', district_number: 510, school_number: 3759 },
          { msis_number: 8470, first_name: 'Talbot', last_name: 'Hackelton', middle_name: 'Cécilia', district_number: 371, school_number: 3514 },
          { msis_number: 7885, first_name: 'Caroljean', last_name: 'Fildes', middle_name: 'Béatrice', district_number: 160, school_number: 1357 },
          { msis_number: 6742, first_name: 'Thorin', last_name: 'Dumphries', middle_name: 'Almérinda', district_number: 704, school_number: 1712 },
          { msis_number: 7826, first_name: 'Mortie', last_name: 'Ilyinykh', middle_name: 'Erwéi', district_number: 111, school_number: 8769 },
          { msis_number: 6376, first_name: 'Kristo', last_name: 'Gadman', middle_name: 'Célestine', district_number: 185, school_number: 4997 },
          { msis_number: 1664, first_name: 'Val', last_name: 'Haszard', middle_name: 'Méghane', district_number: 560, school_number: 9193 },
          { msis_number: 7277, first_name: 'Ramsey', last_name: 'Woolliams', middle_name: 'Pénélope', district_number: 890, school_number: 6190 },
          { msis_number: 6117, first_name: 'Waylen', last_name: 'Habeshaw', middle_name: 'Gösta', district_number: 428, school_number: 8826 },
          { msis_number: 4367, first_name: 'Sheeree', last_name: 'Jee', middle_name: 'Léane', district_number: 905, school_number: 1239 },
          { msis_number: 5348, first_name: 'Sayer', last_name: 'Whitters', middle_name: 'Noëlla', district_number: 388, school_number: 6908 },
          { msis_number: 8847, first_name: 'Cece', last_name: 'Rendbaek', middle_name: 'Pélagie', district_number: 907, school_number: 6594 },
          { msis_number: 4988, first_name: 'Danila', last_name: 'Pullan', middle_name: 'Ruì', district_number: 197, school_number: 1127 },
          { msis_number: 3682, first_name: 'Bernhard', last_name: 'Merrgan', middle_name: 'Wá', district_number: 658, school_number: 1713 },
          { msis_number: 2050, first_name: 'Dionysus', last_name: 'Beardsworth', middle_name: 'Gisèle', district_number: 217, school_number: 1378 },
          { msis_number: 2913, first_name: 'Ginelle', last_name: 'Huby', middle_name: 'Adélaïde', district_number: 965, school_number: 5910 },
          { msis_number: 1161, first_name: 'Christiano', last_name: 'Wagge', middle_name: 'Maïlys', district_number: 986, school_number: 2627 },
          { msis_number: 4666, first_name: 'Florina', last_name: 'Van der Velden', middle_name: 'Marylène', district_number: 572, school_number: 4436 },
          { msis_number: 5400, first_name: 'Allyn', last_name: 'Rodrigues', middle_name: 'Sélène', district_number: 746, school_number: 6602 },
          { msis_number: 5163, first_name: 'Danya', last_name: 'Backen', middle_name: 'Méghane', district_number: 582, school_number: 1545 },
          { msis_number: 1408, first_name: 'Nana', last_name: 'Sizzey', middle_name: 'Mårten', district_number: 311, school_number: 4303 },
          { msis_number: 7416, first_name: 'Nil', last_name: 'Folliss', middle_name: 'Loïc', district_number: 374, school_number: 9227 },
          { msis_number: 8767, first_name: 'Bessy', last_name: 'Galiford', middle_name: 'Kù', district_number: 252, school_number: 1611 },
          { msis_number: 3595, first_name: 'Kary', last_name: 'Teulier', middle_name: 'Médiamass', district_number: 512, school_number: 7125 },
          { msis_number: 4360, first_name: 'Ebba', last_name: 'Goodband', middle_name: 'Adèle', district_number: 133, school_number: 8620 },
          { msis_number: 4222, first_name: 'Helenka', last_name: 'Vigne', middle_name: 'Anaé', district_number: 333, school_number: 6315 },
          { msis_number: 2032, first_name: 'Doris', last_name: 'Seer', middle_name: 'Noémie', district_number: 237, school_number: 8902 },
          { msis_number: 7346, first_name: 'Dietrich', last_name: 'Faulconbridge', middle_name: 'Adèle', district_number: 164, school_number: 6744 },
          { msis_number: 6953, first_name: 'Giacinta', last_name: 'Harmond', middle_name: 'Aí', district_number: 923, school_number: 3771 },
          { msis_number: 5420, first_name: 'Ian', last_name: 'Lubman', middle_name: 'Kù', district_number: 160, school_number: 9203 },
          { msis_number: 4409, first_name: 'Erminie', last_name: 'Kik', middle_name: 'Maëlys', district_number: 287, school_number: 1246 },
          { msis_number: 7449, first_name: 'Oberon', last_name: 'Sawer', middle_name: 'Marylène', district_number: 977, school_number: 5552 },
          { msis_number: 2702, first_name: 'Astra', last_name: 'McCoish', middle_name: 'Andréa', district_number: 192, school_number: 4127 },
          { msis_number: 1644, first_name: 'Krystalle', last_name: 'Hawse', middle_name: 'Dafnée', district_number: 697, school_number: 4054 },
          { msis_number: 2216, first_name: 'Meredithe', last_name: 'Meenan', middle_name: 'Mén', district_number: 971, school_number: 8908 },
          { msis_number: 3163, first_name: 'Dinah', last_name: 'Liebermann', middle_name: 'Clémence', district_number: 173, school_number: 7793 },
          { msis_number: 2675, first_name: 'Lynnea', last_name: 'Enrich', middle_name: 'Judicaël', district_number: 847, school_number: 6656 },
          { msis_number: 7652, first_name: 'Lowe', last_name: 'Durling', middle_name: 'Mélodie', district_number: 260, school_number: 5438 },
          { msis_number: 1725, first_name: 'Janene', last_name: 'Grabert', middle_name: 'Yè', district_number: 450, school_number: 1557 },
          { msis_number: 6187, first_name: 'Deva', last_name: 'Shillingford', middle_name: 'Véronique', district_number: 893, school_number: 3730 },
          { msis_number: 9143, first_name: 'Jess', last_name: 'Le Barr', middle_name: 'Méng', district_number: 512, school_number: 2385 },
          { msis_number: 7704, first_name: 'Jill', last_name: 'Marskell', middle_name: 'Clélia', district_number: 621, school_number: 7112 },
          { msis_number: 4715, first_name: 'Allie', last_name: 'Oxteby', middle_name: 'Judicaël', district_number: 857, school_number: 7302 },
          { msis_number: 9278, first_name: 'Hanny', last_name: 'Wiley', middle_name: 'Almérinda', district_number: 598, school_number: 9812 },
          { msis_number: 3745, first_name: 'Sophia', last_name: 'Crowch', middle_name: 'Gérald', district_number: 959, school_number: 6312 },
          { msis_number: 9914, first_name: 'Herold', last_name: 'Crawforth', middle_name: 'Mà', district_number: 436, school_number: 7369 },
          { msis_number: 7166, first_name: 'Giff', last_name: 'Smeed', middle_name: 'Marie-térèse', district_number: 707, school_number: 7698 },
          { msis_number: 7507, first_name: 'Maurits', last_name: 'de Vaen', middle_name: 'Laurène', district_number: 804, school_number: 5769 },
          { msis_number: 2976, first_name: 'Othello', last_name: 'McCook', middle_name: 'Mélia', district_number: 294, school_number: 1332 },
          { msis_number: 5196, first_name: 'Leigha', last_name: 'Thurstan', middle_name: 'Örjan', district_number: 898, school_number: 6505 },
          { msis_number: 3133, first_name: 'Sunshine', last_name: 'Drayton', middle_name: 'Léana', district_number: 555, school_number: 3516 },
          { msis_number: 5050, first_name: 'Stace', last_name: 'Senton', middle_name: 'Marylène', district_number: 595, school_number: 2087 },
          { msis_number: 9664, first_name: 'Lammond', last_name: 'Emilien', middle_name: 'Inès', district_number: 648, school_number: 3929 },
          { msis_number: 8450, first_name: 'Brigitte', last_name: 'Finding', middle_name: 'Lauréna', district_number: 888, school_number: 7168 },
          { msis_number: 1389, first_name: 'Luella', last_name: 'Gladeche', middle_name: 'Personnalisée', district_number: 185, school_number: 1887 },
          { msis_number: 1603, first_name: 'Morgan', last_name: 'Rule', middle_name: 'Erwéi', district_number: 133, school_number: 4046 },
          { msis_number: 6655, first_name: 'Liliane', last_name: 'Lemanu', middle_name: 'Joséphine', district_number: 580, school_number: 2738 },
          { msis_number: 8148, first_name: 'Sylvan', last_name: 'Petrussi', middle_name: 'Aurélie', district_number: 308, school_number: 5032 },
          { msis_number: 8226, first_name: 'Ciel', last_name: 'Elloy', middle_name: 'Mélinda', district_number: 172, school_number: 4948 },
          { msis_number: 3624, first_name: 'Lev', last_name: 'Hovington', middle_name: 'Célestine', district_number: 521, school_number: 1260 },
          { msis_number: 3672, first_name: 'Kory', last_name: 'Dykas', middle_name: 'Laïla', district_number: 659, school_number: 5228 },
          { msis_number: 6648, first_name: 'Gordon', last_name: 'Boundey', middle_name: 'Anaël', district_number: 842, school_number: 8213 },
          { msis_number: 5018, first_name: 'Leta', last_name: 'Schukraft', middle_name: 'Örjan', district_number: 697, school_number: 2617 },
          { msis_number: 1477, first_name: 'Durant', last_name: 'Carles', middle_name: 'Loïca', district_number: 421, school_number: 5503 },
          { msis_number: 2826, first_name: 'Joeann', last_name: 'Poleye', middle_name: 'Lucrèce', district_number: 555, school_number: 1895 },
          { msis_number: 7998, first_name: 'Iago', last_name: 'Wabersich', middle_name: 'Salomé', district_number: 953, school_number: 6435 },
          { msis_number: 6231, first_name: 'Deborah', last_name: 'Roocroft', middle_name: 'Edmée', district_number: 833, school_number: 3517 },
          { msis_number: 7213, first_name: 'Esma', last_name: 'Friese', middle_name: 'Angèle', district_number: 162, school_number: 5905 },
          { msis_number: 2696, first_name: 'Dame', last_name: 'Satterthwaite', middle_name: 'Aí', district_number: 331, school_number: 7680 },
          { msis_number: 3377, first_name: 'Kerk', last_name: 'Alessandone', middle_name: 'Lóng', district_number: 664, school_number: 5409 },
          { msis_number: 5072, first_name: 'Boy', last_name: 'Kerrigan', middle_name: 'Jú', district_number: 420, school_number: 1527 },
          { msis_number: 8523, first_name: 'Kennan', last_name: 'Greenstreet', middle_name: 'Bérengère', district_number: 141, school_number: 7255 },
          { msis_number: 4445, first_name: 'Lissa', last_name: 'Baudichon', middle_name: 'Ráo', district_number: 536, school_number: 2339 },
          { msis_number: 5642, first_name: 'Benedicto', last_name: 'Dunk', middle_name: 'Méghane', district_number: 813, school_number: 6164 },
          { msis_number: 7065, first_name: 'Burton', last_name: 'Kliemchen', middle_name: 'Miléna', district_number: 237, school_number: 1841 },
          { msis_number: 2411, first_name: 'Prescott', last_name: 'Nind', middle_name: 'Pò', district_number: 531, school_number: 5020 },
          { msis_number: 1985, first_name: 'Gabie', last_name: 'Elderfield', middle_name: 'Andréa', district_number: 696, school_number: 1302 },
          { msis_number: 6978, first_name: 'Pavia', last_name: 'Sally', middle_name: 'Naéva', district_number: 118, school_number: 5467 },
          { msis_number: 7904, first_name: 'Audrie', last_name: 'Townes', middle_name: 'Annotée', district_number: 580, school_number: 2262 },
          { msis_number: 1082, first_name: 'Marianne', last_name: 'Atkinson', middle_name: 'Kuí', district_number: 324, school_number: 7080 },
          { msis_number: 4531, first_name: 'Tod', last_name: 'Basindale', middle_name: 'Kévina', district_number: 175, school_number: 2367 },
          { msis_number: 8432, first_name: 'Reeva', last_name: 'Lawless', middle_name: 'Miléna', district_number: 970, school_number: 7470 },
          { msis_number: 9774, first_name: 'Shani', last_name: 'Vallintine', middle_name: 'Mélanie', district_number: 349, school_number: 5858 },
          { msis_number: 2863, first_name: 'Bev', last_name: 'Darnody', middle_name: 'Thérèsa', district_number: 589, school_number: 9705 },
          { msis_number: 5667, first_name: 'Sigfried', last_name: 'Lovegrove', middle_name: 'Séréna', district_number: 457, school_number: 3583 },
          { msis_number: 8090, first_name: 'Sax', last_name: 'Jamot', middle_name: 'Yáo', district_number: 624, school_number: 2098 },
          { msis_number: 1098, first_name: 'Katlin', last_name: 'Scanlin', middle_name: 'Maëlyss', district_number: 666, school_number: 9833 },
          { msis_number: 2521, first_name: 'Archambault', last_name: 'Donkersley', middle_name: 'Maëlyss', district_number: 386, school_number: 4359 }
        ]
      }
    }
  }
</script>
