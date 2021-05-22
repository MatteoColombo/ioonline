<template>
  <v-expansion-panels v-if="scrambles.length > 0" class="scramble-container">
    <v-expansion-panel>
      <v-expansion-panel-header>
        <h2>{{ message }}</h2>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div v-if="scrambles.length > 0">
          <v-col cols="12">
            <v-row
              v-for="(item, index) in scrambles"
              :key="message + index"
              spacing="0"
            >
              <v-col cols="1">
                <v-icon>mdi-numeric-{{ index + 1 }}-box</v-icon>
              </v-col>
              <v-col cols="11" md="7" class="scramble">{{
                item.scramble
              }}</v-col>
              <v-col cols="12" md="4"><img :src="item.image" /></v-col>
              <v-col cols="12"><v-divider></v-divider></v-col>
            </v-row>
          </v-col>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: {
    scrambles: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
};
</script>

<style scoped>
.scramble-container {
  background-color: #272727;
  text-align: left;
  margin-top: 20px;
}

.v-col {
  text-align: start;
}

@font-face {
  font-family: ScrambleFont;
  src: url("/fonts/cnr.woff");
}

.scramble {
  white-space: normal;
  font-size: 20px;
  line-height: 28px;
  font-family: ScrambleFont;
  text-align: justify;
}

img {
  width: 100%;
  max-width: 300px;
}
</style>
