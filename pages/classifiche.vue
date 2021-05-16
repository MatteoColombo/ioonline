<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <v-col cols="12" align="center">
          <h1>{{ $t("standings.title") }}</h1>
          <div v-if="rounds.length > 0">
            <v-select
              :items="mappedRounds"
              :menu-props="{ bottom: true, offsetY: true }"
              :label="roundName"
              @change="roundChanged($event)"
            ></v-select>
              <v-row v-if="toNext >3" class="desc" align="center" justify="center">
              <div class="square"/>
              {{ $t('standings.proceed')}}
              </v-row>

            <v-data-table
              :headers="[
                {
                  text: $t('standings.position'),
                  value: 'position',
                  width: '50px',
                },
                {
                  text: $t('competitors.name'),
                  value: 'user',
                },
                {
                  text: $t('standings.best'),
                  value: 'best',
                },
                {
                  text: $t('standings.avg'),
                  value: 'avg',
                },
                { 
                  text: 'Solve', 
                  value: 'times'
                },
              ]"
              disable-sort
              :items="results"
              disable-pagination
              hide-default-footer
              :mobile-breakpoint="0"
              class="elevation-1"
            >
             <template v-slot:item="{ item, index }">
               <tr>
                 <td class="position" :class="itemRowBackground(item)"><label>{{ item.position }}</label></td>
                 <td>
                    <label class="unbreakablelabel" v-if="!item.user.wca_id">{{ item.user.name }}</label>
                    <a class="unbreakablelable"
                      v-else
                      :href="'https://www.worldcubeassociation.org/persons/' + item.user.wca_id"
                      target="_blank">{{ item.user.name }}</a>
                  </td>
                 <td>
                   <label v-if="roundId === '333fm_r1'">{{ formatFMC(item.best) }}</label>
                   <label v-else>{{ formatTime(item.best) }}</label></td>
                 <td>
                <label>{{ formatTime(item.average) }}</label>
                </td>
                 <td>
                   <label
                  v-if="roundId === '333bf_r1' || roundId === '333bf_r2'"
                  class="unbreakablelabel"
                  >{{ formatTime(item.value1) }} {{ formatTime(item.value2) }}
                  {{ formatTime(item.value3) }}</label>
                <a
                  v-else-if="roundId === '333fm_r1'"
                  target="_blank"
                  :href="formatSolution(item.solution)"
                  class="unbreakablelabel"
                  >Alg.cubing.net</a>

                <label v-else class="unbreakablelabel"
                  >{{ formatTime(item.value1) }} {{ formatTime(item.value2) }}
                  {{ formatTime(item.value3) }} {{ formatTime(item.value4) }}
                  {{ formatTime(item.value5) }}</label>
                </td>
               </tr>
             </template>
            </v-data-table>
          </div>
          <div v-else>
            <h2>{{$t('standings.nothing')}}</h2>
            <img aspect-ratio="1" width="100%" class="nothing-img" src="/nothing.gif" />
          </div>
        </v-col>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("standings.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("standings.desc"),
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("standings.title"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("standings.desc"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("standings.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("standings.desc"),
        },
      ],
    };
  },
  data() {
    return {
      headers: [
        {
          text: "Name",
          value: "user.name",
        },
      ],
      roundName: "",
      roundId: false,
      toNext: 0,
      rounds: [],
      mappedRounds: [],
      results: [],
    };
  },
  async fetch() {
    try {
      this.rounds = await this.$axios.$get("/api/results/done");
      this.mappedRounds = this.rounds.map((r) => ({
        value: r.id,
        text: r.event.name + " Round " + r.roundNumber,
      }));
      if (this.rounds && this.rounds.length > 0) {
        const round = this.rounds[0];
        this.roundId = round.id;
        this.toNext = round.peopleToNext;
        if(this.toNext === 0)
          this.toNext = 3;
        this.roundName = round.event.name + " Round " + round.roundNumber;
        this.results = await this.$axios.$get(
          `/api/results/done/${this.roundId}`
        );
      }
    } catch (e) {
      console.log(e);
      this.rounds = [];
      this.results = [];
    }
  },
  methods: {
    formatTime(value) {
      if (value === null) return "";
      if (value === -1) return "DNF";
      if (value === -2) return "DNS";
      const cents = value % 100;
      const secondsUnparsed = Math.floor(value / 100);
      const seconds = secondsUnparsed % 60;
      const minutes = Math.floor(secondsUnparsed / 60);
      var strcents = cents > 9 ? `${cents}` : `0${cents}`;
      var strseconds = seconds > 9 ? `${seconds}` : `0${seconds}`;
      if (minutes > 0) {
        return `${minutes}:${strseconds}.${strcents}`;
      } else {
        if (strseconds.startsWith("0")) strseconds = strseconds.substring(1);
        return `${strseconds}.${strcents}`;
      }
    },
    formatFMC(value) {
      if (value === -1) return "DNF";
      return value;
    },
    formatSolution(solution) {
      if (solution == null) return "";
      let sol =
        "https://alg.cubing.net/?setup=R-_U-_F_D-_B-_D2_U2_L_U2_R_D2_B_L_F_U_B_L2_U2_R2_B_R-_U-_F&alg=";
      let filSol= solution.replace(/\s/g, '_');
      filSol = filSol.replace(/\'/g, '-');
      return sol + filSol;
    },
    async roundChanged(event) {
      try {
        let round = this.rounds.find((r) => r.id === event);
        this.rounds = await this.$axios.$get("/api/results/done");
        this.roundId = round.id;
        this.toNext = round.peopleToNext;
        if(this.toNext === 0)
          this.toNext =3;
        this.roundName = round.event.name + " Round " + round.roundNumber;
        this.results = await this.$axios.$get(
          `/api/results/done/${this.roundId}`
        );
      } catch (e) {
        console.log(e);
        this.rounds = [];
        this.results = [];
      }
    },
    itemRowBackground: function (item) {
      console.log(item.position);
      return item.position <= this.toNext ? "toNext" : "ded";
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: 600;
}

.unbreakablelabel {
  white-space: nowrap;
}

.nothing-img{
  max-width: 512px;
}

.toNext {
  background-color: #ec95b9;
  color: #000;
  font-size: 18px;
  font-weight: 700;
}

.ded{
  font-size: 18px;
  font-weight: 700;
}

.square{
  width: 20px;
  height: 20px;
  background-color: #ec95b9;
  margin-right: 20px;
 }

 .desc{
   margin-top: 20px;
   margin-bottom: 20px;
 }

</style>

<style>
a {
  text-decoration: none;
}

</style>