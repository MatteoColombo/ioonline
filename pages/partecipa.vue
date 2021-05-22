<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <template>
        <v-col cols="12" align="center">
          <h1>{{ $t("compete.title") }}</h1>
          <div v-if="rounds.length > 0">
            <v-select
              v-if="rounds.length > 0"
              :items="rounds"
              :menu-props="{ bottom: true, offsetY: true }"
              :label="roundName"
              :placeholder="$t('compete.select')"
              @change="roundChanged"
            ></v-select>
            <ScrambleViewer
              :scrambles="scrambles"
              :message="$t('compete.scrambles')"
            />
            <ScrambleViewer
              :scrambles="extras"
              :message="$t('compete.extras')"
            />
            <v-row style="margin-top: 20px">
              <v-col cols="12" lg="7">
                <CompeteInstructions :round="roundId" />
              </v-col>
              <v-col cols="12" lg="5" v-if="roundId !== '333fm_r1'">
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

                <v-dialog
                  v-if="roundId"
                  transition="dialog-bottom-transition"
                  v-model="dialog"
                  max-width="300px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      x-large
                      color="primary"
                      style="margin-top: 20px"
                      :width="$vuetify.breakpoint.xsOnly ? '100%' : '200px'"
                      >{{ $t("compete.submit") }}</v-btn
                    >
                  </template>
                  <template>
                    <v-card>
                      <v-card-title class="headline">
                        {{ $t("compete.confirmSubmit") }}
                      </v-card-title>
                      <v-card-text>
                        {{ $t("compete.submitMessage") }}
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="hideDialog">
                          {{ $t("compete.cancel") }}
                        </v-btn>
                        <v-btn color="green darken-1" text @click="submit">
                          {{ $t("compete.submit") }}
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>
              <v-col cols="12" v-else>
                <SolutionInput
                  :label="$t('compete.solution')"
                  spellcheck="false"
                  v-model="fmsolve"
                />
                <v-textarea
                  outlined
                  spellcheck="false"
                  :label="$t('compete.comment')"
                  auto-grow
                  v-model="fmcomment"
                  maxlength="1000"
                ></v-textarea>
                <v-dialog
                  v-if="fmsolve && fmsolve.length > 0"
                  transition="dialog-bottom-transition"
                  v-model="dialog"
                  max-width="300px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      x-large
                      color="primary"
                      style="margin-top: 20px"
                      :width="$vuetify.breakpoint.xsOnly ? '100%' : '200px'"
                      >{{ $t("compete.submit") }}</v-btn
                    >
                  </template>
                  <template>
                    <v-card>
                      <v-card-title class="headline">
                        {{ $t("compete.confirmSubmit") }}
                      </v-card-title>
                      <v-card-text>
                        {{ $t("compete.submitMessage") }}
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" text @click="hideDialog">
                          {{ $t("compete.cancel") }}
                        </v-btn>
                        <v-btn color="green darken-1" text @click="submit">
                          {{ $t("compete.submit") }}
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-col>
            </v-row>
          </div>
          <div v-else>
            <h2>{{ $t("compete.alldone") }}</h2>
            <AllDone />
          </div>
          <div>
            <v-alert
              :value="success"
              color="green"
              type="success"
              outlined
              prominent
              text
            >
              <v-row align="center" no-gutters>
                <v-col class="grow">
                  {{ $t("compete.success") }}
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="shrink">
                  <v-btn color="info" @click="success = false"> Okay </v-btn>
                </v-col>
              </v-row>
            </v-alert>
            <v-alert
              :value="error"
              color="red"
              type="error"
              outlined
              text
              prominent
            >
              <v-row align="center" no-gutters>
                <v-col class="grow">
                  {{ $t("compete.error") }}
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="shrink">
                  <v-btn color="info" @click="error = false"> Okay </v-btn>
                </v-col>
              </v-row>
            </v-alert>
          </div>
        </v-col>
      </template>
    </v-col>
    <StandBy :isVisible="loading" />
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
      success: false,
      error: false,
      rounds: [],
      roundId: null,
      scrambles: [],
      extras: [],
      results: [],
      dialog: false,
      loading: false,
      fmsolve: "",
      fmcomment: "",
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
        this.roundId = r;
        let scrambles = await this.$axios.$get(
          `/api/results/${this.roundId}/scrambles`
        );
        this.scrambles = scrambles.scrambles;
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
    async submit() {
      try {
        this.success = false;
        this.error = false;
        this.dialog = false;
        this.loader = true;
        if (this.roundId == "333fm_r1") {
          await this.$axios.$post(`/api/results/${this.roundId}`, {
            solution: this.fmsolve,
            comment: this.fmcomment,
          });
        } else {
          const subres = this.results.map((m) =>
            m.dnf
              ? -1
              : m.value == "" || m.value == null
              ? -2
              : this.getValueInSeconds(m.value)
          );
          await this.$axios.$post(`/api/results/${this.roundId}`, {
            raw: this.results,
            times: subres,
          });
        }
        this.success = true;

        try {
          this.resetAll();
          this.rounds = [];
          await this.fetchEvents();
          this.loader = false;
        } catch (e) {
          this.resetAll();
          this.loader = false;
        }
      } catch (e) {
        this.error = true;
      }
    },
    resetAll() {
      this.roundId = "";
      this.scrambles = [];
      this.extras = [];
      this.results = [];
      this.fmsolve = "";
      this.fmcomment = "";
      this.rounds = [];
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