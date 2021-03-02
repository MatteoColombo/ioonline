<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <v-select
          :items="items"
          :values="values"
          :menu-props="{ bottom: true, offsetY: true }"
          :label="$t('compete.select')"
        ></v-select>
        <h3>Scramble:</h3>
        <v-list>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-numeric-1-box</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                D' B R D2 R F2 L F2 D2 L2 U2 R U2 B R' D2 F D' U' R' Fw2 U2 Fw2
                D Rw2 Fw2 F U D R2 F' Rw Uw2 U F' R B Rw B2 R' Fw' Rw' Uw' D' Rw
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-numeric-2-box</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                R2 U2 D2 B U' R' B' R2 D B2 L D2 L F2 L2 U2 F2 R' U2 L Rw2 Uw2 F' Rw2 U Rw2 R2 D' B U2 B Uw2 R2 Rw' F2 Rw' L2 B' Fw Uw2 Rw Fw Uw D F2 Uw
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-numeric-3-box</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                D2 L2 D L2 F2 D' B2 U2 F2 U B2 D' F' D U B F2 L D2 F' L Uw2 F R2 B L Fw2 D2 B' Rw2 L F D2 L Uw U R F2 L' Uw Fw Rw L Uw D2 Fw Uw
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-numeric-4-box</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                F' R F D2 U2 F2 L2 B D2 F' U2 F2 R2 U' R' F2 R2 F' L2 R Rw2 U' D Rw2 B' D Fw2 B' Rw2 B' Rw2 U' B Rw Uw2 Rw F' R B2 Fw' Rw' Uw D' Rw2 U B2
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-numeric-5-box</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
               B' L2 R2 F R2 B' L2 F' D2 L2 R2 F L D B2 L2 R' F' D U2 F' Fw2 Uw2 L' F Uw2 U2 L R Uw2 R' B R2 Fw2 Uw' L Fw2 R Rw' F2 B Rw' D' R' F'
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <h3>Extra:</h3>
        <v-list>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-alpha-e-box</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                D' B R D2 R F2 L F2 D2 L2 U2 R U2 B R' D2 F D' U' R' Fw2 U2 Fw2
                D Rw2 Fw2 F U D R2 F' Rw Uw2 U F' R B Rw B2 R' Fw' Rw' Uw' D' Rw
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon><v-icon>mdi-alpha-e-box</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                D' B R D2 R F2 L F2 D2 L2 U2 R U2 B R' D2 F D' U' R' Fw2 U2 Fw2
                D Rw2 Fw2 F U D R2 F' Rw Uw2 U F' R B Rw B2 R' Fw' Rw' Uw' D' Rw
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("compete.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("compete.desc"),
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("compete.title"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("compete.desc"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("compete.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("compete.desc"),
        },
      ],
    };
  },
  data() {
    return {
      icons: [
        "mdi-numeric-1",
        "mdi-numeric-2",
        "mdi-numeric-3",
        "mdi-numeric-4",
        "mdi-numeric-5",
      ],
      values: [
        "333",
        "222",
        "444",
        "333bf",
        "333fm",
        "sq1",
        "clock",
        "pyram",
        "skewb",
      ],
      items: [
        "3x3x3",
        "2x2x2",
        "4x4x4",
        "3x3 BLD",
        "3x3 FMC",
        "Square-1",
        "Clock",
        "Pyraminx",
        "Skewb",
      ],
    };
  },
};
</script>

<style scoped>
.v-list-item__title {
  white-space: normal;
  font-size: 20px;
  line-height: 28px;
  word-spacing: 8px;
  font-family: 'Code new Roman';
  text-align: justify;
}
</style>