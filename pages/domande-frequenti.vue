<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <h1 class="text-center">{{ $t("faq.title") }}</h1>
        <p class="text-center">{{ $t("faq.desc") }}</p>
      </template>

      <v-expansion-panels>
        <v-expansion-panel
          v-for="item in $t('faq.entries')"
          :key="item.question"
        >
          <v-expansion-panel-header>{{
            item.question
          }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <p v-for="answer in item.answer" :key="answer" v-html="answer"></p>
            <ul>
              <li v-for="step in item.steps" :key="step" v-html="step"></li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("faq.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("faq.desc"),
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("faq.title"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("faq.desc"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("faq.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("faq.desc"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-expansion-panel-header {
  font-weight: 500;
  font-size: 17px;
}

.action-buttons {
  margin-top: 50px;
}
</style>

<style>
a {
  text-decoration: none;
}
</style>