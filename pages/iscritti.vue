<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <h1 class="text-center">{{ $t("competitors.title") }}</h1>
        <p class="text-center">{{ $t("competitors.desc") }}</p>

        <v-data-table
          :headers="headers"
          :items="people"
          disable-pagination
          hide-default-footer
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
            <v-icon v-for="icon in item.events" :key="icon"
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
      headers: [
        { text: "Nome", value: "name" },
        { text: "Eventi", value: "events" },
      ],
    };
  },
  async fetch() {
    this.people = await this.$axios.$get("/api/register/list");
  },
};
</script>

<style scoped>
a{
    text-decoration: none;
}
</style>