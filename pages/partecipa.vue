<template>
  <div>
    <v-row v-if="!$auth.loggedIn" justify="center" align="center">
      <v-btn
        @click="login"
        color="secondary"
        style="margin-top: 20px"
        x-large
        elevation="1"
        ><img width="30" src="/WCAlogo_notext.svg"/>
        <span style="margin: 20px">{{ $t("generic.login") }}</span></v-btn
      >
    </v-row>
    <v-row v-if="$auth.loggedIn" justify="center" align="start">
      <v-col cols="12" align="center">
        <h1>{{ $t("compete.title") }}</h1>
      </v-col>
      <v-col
        cols="12"
        lg="8"
        width="100%"
        class="text-center"
        v-if="rounds.length == null || rounds.length === 0"
      >
        <h2>{{ $t("compete.alldone") }}</h2>
        <img class="done-img" src="/done.gif"/>
      </v-col>
      <v-col
        v-if="$auth.loggedIn && roundId !== '333fm_r1'"
        cols="12"
        lg="6"
        align="center"
        order="1"
        order-lg="3"
      >
        <div class="instr-wrapper" v-if="rounds.length > 0">
          <h2>{{ $t("compete.instr") }}</h2>
          <ul>
            <li
              class="text-justify instructions"
              v-for="(item, index) of $t('compete.instructions')"
              :key="'instr' + index"
              v-html="item"
            ></li>
          </ul>
        </div>
      </v-col>

      <v-col cols="12" lg="10" align="center" order="2" order-lg="1">
        <template>
          <v-select
            v-if="rounds.length > 0"
            :items="rounds"
            :menu-props="{ bottom: true, offsetY: true }"
            :label="roundName"
            @change="roundChanged"
          ></v-select>
          <v-expansion-panels v-model="panel">
            <v-expansion-panel v-if="scrambles.length > 0">
              <v-expansion-panel-header
                >{{ $t("compete.scrambles") }}:</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in scrambles"
                    :key="'scramble' + index"
                  >
                    <v-list-item-icon
                      ><v-icon
                        >mdi-numeric-{{ index + 1 }}-box</v-icon
                      ></v-list-item-icon
                    >
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ item }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel v-if="extras.length > 0">
              <v-expansion-panel-header
                >{{ $t("compete.extras") }}:</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <v-list>
                  <v-list-item
                    v-for="(item, index) in extras"
                    :key="'extra' + index"
                  >
                    <v-list-item-icon
                      ><v-icon>mdi-alpha-e-box</v-icon></v-list-item-icon
                    >
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ item }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </template></v-col
      >
      <v-col
        v-if="$auth.loggedIn && roundId !== '333fm_r1'"
        cols="12"
        lg="4"
        align="center"
        order="3"
        order-lg="2"
      >
        <template>
          <div style="margin-top: 20px">
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
          </div>

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

          <v-dialog v-model="loader" hide-overlay persistent width="300">
            <v-card color="primary" dark>
              <v-card-text>
                {{ $t("compete.standby") }}
                <v-progress-linear
                  indeterminate
                  color="white"
                  class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
        </template>
      </v-col>

      <v-col cols="12" order="4"></v-col>
    </v-row>
    <v-row
      v-if="$auth.loggedIn && roundId === '333fm_r1'"
      justify="center"
      align="start"
    >
      <v-col cols="12" lg="4" align="center">
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
      <v-col cols="12" lg="6">
        <h2>{{ $t("compete.instr") }}</h2>
        <ul>
          <li
            class="text-justify instructions"
            v-for="(item, index) of $t('compete.fmc')"
            :key="'instr' + index"
            v-html="item"
          ></li>
        </ul>
      </v-col>
    </v-row>
    <v-dialog v-model="errordialog" max-width="290">
      <v-card>
        <v-card-title class="headline">
          {{ $t("generic.error") }}
        </v-card-title>

        <v-card-text>
          {{ $t("generic.errordesc") }}
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="red darken-1" text @click="errordialog = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
      errordialog: false,
      panel: 0,
      roundId: false,
      roundName: "",
      dialog: false,
      loader: false,
      mask: [
        "--:--.-#",
        "--:--.##",
        "--:-#.##",
        "--:##.##",
        "-#:##.##",
        "##:##.##",
      ],
      rounds: [],
      scrambles: [],
      extras: [],
      results: [],
      fmsolve: "",
      fmcomment: "",
    };
  },
  async fetch() {
    if (this.$auth.loggedIn) await this.fetchEvents();
  },
  methods: {
    async submit() {
      this.dialog = false;
      this.loader = true;
      if (this.roundId === "333fm_r1") {
        try {
          await this.$axios.$post(`/api/results/${this.roundId}`, {
            solution: this.fmsolve,
            comment: this.fmcomment,
          });
          try {
            await this.fetchEvents();
            this.loader = false;
          } catch (e) {
            this.loader = false;
            this.resetAll();
          }
        } catch (e) {
          this.errordialog = true;
          this.loader = false;
          console.log("error while submitting results");
        }
      } else {
        const subres = this.results.map((m) =>
          m.dnf
            ? -1
            : m.value == "" || m.value == null
            ? -2
            : this.getValueInSeconds(m.value)
        );
        try {
          await this.$axios.$post(`/api/results/${this.roundId}`, {
            raw: this.results,
            times: subres,
          });
          try {
            await this.fetchEvents();
            this.loader = false;
          } catch (e) {
            this.loader = false;
            this.resetAll();
          }
        } catch (e) {
          this.errordialog = true;
          this.loader = false;
          console.log("error while submitting results");
        }
      }
    },
    hideDialog() {
      this.dialog = false;
    },
    async fetchEvents() {
      try {
        this.rounds = await this.$axios.$get("/api/results");
        if (this.rounds.length > 0) {
          this.roundId = this.rounds[0].value;
          this.roundName = this.rounds[0].text;
          let scrambles = await this.$axios.$get(
            `/api/results/${this.roundId}/scrambles`
          );
          this.scrambles = scrambles.scrambles;
          this.extras = scrambles.extras;
          this.results = [];
          for (let i = 0; i < this.scrambles.length; i++) {
            this.results.push({ value: null, dnf: false });
          }
        } else {
          this.resetAll();
        }
      } catch (e) {
        console.log(e);
        this.resetAll();
      }
    },
    async roundChanged(event) {
      try {
        this.rounds = await this.$axios.$get("/api/results");
        if (this.rounds.map((r) => r.value).includes(event)) {
          this.roundId = event;
          this.roundName = this.rounds.find((r) => r.value === event).text;
          let scrambles = await this.$axios.$get(
            `/api/results/${this.roundId}/scrambles`
          );
          this.scrambles = scrambles.scrambles;
          this.panel = 0;
          this.extras = scrambles.extras;
          this.results = [];
          for (let i = 0; i < this.scrambles.length; i++) {
            this.results.push({ value: null, dnf: false });
          }
        } else {
          await this.fetchEvents();
        }
      } catch (e) {
        this.resetAll();
      }
    },
    resetAll() {
      this.roundId = false;
      this.roundName = "";
      this.rounds = [];
      this.scrambles = [];
      this.extras = [];
      this.results = [];
      this.fmsolve = "";
      this.fmcomment = "";
    },
    getValueInSeconds(value) {
      const temp = value.split(":");
      const minutes = Number("0" + temp[0].replaceAll("-", ""));
      const seconds = Number("0" + temp[1].split(".")[0].replaceAll("-", ""));
      const cents = Number("0" + temp[1].split(".")[1].replaceAll("-", ""));
      const time = (minutes * 60 + seconds) * 100 + cents;
      return time > 0 || isNaN(time) ? time : -2;
    },
    login() {
      this.$auth.loginWith("social");
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