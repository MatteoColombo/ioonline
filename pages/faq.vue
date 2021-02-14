<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10">
      <template>
        <h1 id="schedule" class="text-center">{{ $t("faq.title") }}</h1>
        <p class="text-justify">{{ $t("faq.desc") }}</p>
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
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
  head: {
    title: "F.A.Q.",
  },
};
</script>

<style>
 a{
   text-decoration: none;
 }
</style>