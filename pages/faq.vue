<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <h1 id="schedule" class="text-center">{{ title }}</h1>
        <p class="text-center">{{ desc }}</p>
      </template>

      <v-expansion-panels>
        <v-expansion-panel
          v-for="item in entries"
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
    };
  },
  data() {
    return {
      title: this.$t("faq.title"),
      desc: this.$t("faq.desc"),
      entries: this.$t('faq.entries')
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>