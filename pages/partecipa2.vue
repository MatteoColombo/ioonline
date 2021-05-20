<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <template>
        <v-col cols="12" align="center">
          <h1>{{ $t("compete.title") }}</h1>
          <div v-if="rounds.length > 0">
            <SelectRound :rounds="rounds" @change="roundChanged" />
            <ScrambleViewer
              :scrambles="scrambles"
              :message="$t('compete.scrambles')"
            />
            <ScrambleViewer
              :scrambles="extras"
              :message="$t('compete.extras')"
            />
            <v-row style="margin-top:20px">
              <v-col cols="12" md="8">
                <CompeteInstructions :round="roundId" />
              </v-col>
              <v-col cols="12" md="4">
                <v-row
                  v-for="(item, index) in results"
                  :key="'m' + index"
                  style="width: fit-content"
                >
                  <v-col cols="8" align="center" justify="center"
                    ><v-text-field
                      reverse
                      :label="'Attempt #' + (index + 1)"
                      outlined
                      hide-details
                      :disabled="item.dnf"
                      clearable
                      v-model="item.value"
                      v-facade="mask"
                      placeholder="--:--.--"
                      class="result"
                    ></v-text-field
                  ></v-col>
                  <v-col>
                    <v-switch inset label="DNF" v-model="item.dnf"></v-switch>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
          <div v-else>
            <h2>{{ $t("compete.alldone") }}</h2>
            <AllDone />
          </div>
        </v-col>
      </template>
    </v-col>
  </v-row>
</template>

<script>
import { facade, filter } from "vue-input-facade";

export default {
  middleware: "auth",
  directives: { facade },
  filters: { facade: filter },
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
      mask: [
        "--:--.-#",
        "--:--.##",
        "--:-#.##",
        "--:##.##",
        "-#:##.##",
        "##:##.##",
      ],
      rounds: [],
      roundId: null,
      scrambles: [],
      extras: [],
      panel: 0,
      results: [],
    };
  },
  async fetch() {
    if (this.$auth.loggedIn) await this.fetchEvents();
  },
  methods: {
    hideDialog() {
      this.dialog = false;
    },
    async fetchEvents() {
      try {
        this.rounds = await this.$axios.$get("/api/results");
      } catch (e) {
        this.rounds = [];
      }
    },
    async roundChanged(r) {
      try {
        console.log(r);
        this.roundId = r;
        let scrambles = await this.$axios.$get(
          `/api/results/${this.roundId}/scrambles`
        );
        this.scrambles = scrambles.scrambles;
        console.log(this.scrambles);
        this.extras = scrambles.extras;
        this.panel = 0;
        this.results = [];
        for (let i = 0; i < this.scrambles.length; i++) {
          this.results.push({ value: null, dnf: false });
        }
      } catch (e) {}
    },
    getValueInSeconds(value) {
      const temp = value.split(":");
      const minutes = Number("0" + temp[0].replaceAll("-", ""));
      const seconds = Number("0" + temp[1].split(".")[0].replaceAll("-", ""));
      const cents = Number("0" + temp[1].split(".")[1].replaceAll("-", ""));
      const time = (minutes * 60 + seconds) * 100 + cents;
      return time > 0 || isNaN(time) ? time : -2;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: ScrambleFont;
  src: url("/fonts/cnr.woff");
}

.done-img {
  max-width: 512px;
  margin: 0 auto;
}

.v-list-item__title {
  white-space: normal;
  font-size: 20px;
  line-height: 28px;
  font-family: ScrambleFont;
  text-align: justify;
}
h3 {
  margin-top: 20px;
}

.result {
  font-size: 28px;
}

p {
  margin-top: 0px;
  margin-bottom: 0px;
}

.instructions {
  max-width: 800px;
}
.instr-wrapper {
  text-align: le;
  width: fit-content;
  margin: 0 auto;
}

a {
  text-decoration: none;
}
</style>

<style>
p {
  margin-top: 0px;
}
a {
  text-decoration: none;
}
</style>