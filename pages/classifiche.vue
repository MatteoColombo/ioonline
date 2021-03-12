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
            ></v-select>
            <v-data-table
              :headers="[
                { text: $t('standings.position'), value: 'position', width:'70px' },
                {
                  text: $t('competitors.name'),
                  value: 'user',
                  sortable: false,
                },
              ]"
              disable-sort
              :items="results"
              disable-pagination
              hide-default-footer
              class="elevation-1"
            >
              <template v-slot:item.user="{ item }">
                <label v-if="!item.user.wca_id">{{ item.user.name }}</label>
                <a
                  v-else
                  :href="
                    'https://www.worldcubeassociation.org/persons/' +
                    item.user.wca_idd
                  "
                  target="_blank"
                >
                  {{ item.user.name }}</a
                >
              </template>
            </v-data-table>
          </div>
          <div v-else>
            <v-img v-if="this.$i18n.locale === 'it'" src="/nothing.png"></v-img>
            <v-img v-else src="/eng-nothing.png"></v-img>
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
        this.roundName = round.event.name + " Round " + round.roundNumber;
        this.results = await this.$axios.$get(
          `/api/results/done/${this.roundId}`
        );
        console.log(this.results);
      }
    } catch (e) {
      console.log(e);
      this.rounds = [];
      this.results = [];
    }
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: 600;
}
</style>

<style>
a {
  text-decoration: none;
}
</style>