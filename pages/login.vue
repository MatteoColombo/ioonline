<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8" justify="center" align="center">
      <template>
        <v-img width="300px" src="/WCAlogo_notext.svg"></v-img>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("login.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("login.desc"),
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("login.title"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("login.desc"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("login.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("login.desc"),
        },
      ],
    };
  },
};
</script>