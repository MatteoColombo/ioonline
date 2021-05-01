<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <v-img width="70%" class="intro" aspect-ratio="1.428" src="/logo.svg" />

        <h3 class="text-center">{{ $t("home.desc") }}</h3>
        <p class="text-center">{{ $t("home.subdesc") }}</p>
      </template>
      <v-row class="action-buttons">
        <v-col cols="12" md="6"
          ><v-btn
            width="100%"
            height="70px"
            elevation="2"
            x-large
            to="/registrazione"
            color="secondary"
            >{{ $t("home.register") }}</v-btn
          ></v-col>
          <v-col cols="12" md="6"
          ><v-btn
            width="100%"
            height="70px"
            elevation="2"
            x-large
            to="/informazioni"
            color="primary"
            >{{ $t("home.info") }}</v-btn
          ></v-col
        >
      </v-row>
     
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("home.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("home.desc"),
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("home.title"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("home.desc"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("home.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("home.desc"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.intro{
  margin: 0 auto;
}

h3,
.intro
.action-buttons {
  margin-top: 30px;
}

</style>