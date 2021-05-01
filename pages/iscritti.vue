<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <h1 class="text-center">{{ $t("competitors.title") }}</h1>
        <p class="text-center">{{ $t("competitors.desc") }}</p>

        <v-alert color="accent" dark icon="mdi-counter">
          {{ $t("competitors.count") }}
          <label class="count" color="primary">{{ people.length }}</label>
          {{ $t("competitors.count2") }}
        </v-alert>

        <v-data-table
          :headers="[
            { text: $t('competitors.name'), value: 'name' },
            {
              text: $t('competitors.events'),
              value: 'events',
              sortable: false,
            },
          ]"
          :items="people"
          disable-pagination
          hide-default-footer
          :sort-by.sync="sortBy"
          :sort-desc.sync="isDescending"
          class="elevation-1"
        >
          <template v-slot:item.name="{ item }">
            <label v-if="!item.wcaId">{{ item.name }}</label>
            <a
              v-else
              :href="
                'https://www.worldcubeassociation.org/persons/' + item.wcaId
              "
              target="_blank"
            >
              {{ item.name }}</a
            >
          </template>

          <template v-slot:item.events="{ item }">
            <v-icon
              v-for="icon in events"
              :key="icon"
              :dense="$vuetify.breakpoint.smAndDown"
              :color="item.events.includes(icon) ? '#fff' : '#303030'"
              >cubing-icon event-{{ icon }}</v-icon
            >
          </template>
        </v-data-table>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("competitors.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("competitors.desc"),
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("competitors.title"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("competitors.desc"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("competitors.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("competitors.desc"),
        },
      ],
    };
  },
  data() {
    return {
      people: [],
      sortBy: "name",
      isDescending: false,
      events: [
        "333",
        "222",
        "444",
        "333bf",
        "333fm",
        "clock",
        "pyram",
        "skewb",
        "sq1",
      ],
    };
  },
  async fetch() {
    this.people = (await this.$axios.$get("/api/register/list")).sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  font-weight: 600;
}

.v-icon {
  margin-right: 5px;
}

.count {
  color: #ec95b9;
  font-weight: 600;
  font-size: 24;
}
</style>