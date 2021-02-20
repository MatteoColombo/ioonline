<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <h1 id="schedule" class="text-center">{{ $t("faq.title") }}</h1>
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

      <h3 class="text-center">{{ $t("faq.questions") }}</h3>
      <v-row class="contacts">
        <v-col cols="12" align="center">
          <v-btn
            href="https://www.facebook.com/cubingitaly"
            target="_blank"
            fab
            x-large
            color="transparent"
            elevation="0"
          >
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn
            href="https://www.youtube.com/user/CubingItaly"
            target="_blank"
            fab
            x-large
            color="transparent"
            elevation="0"
          >
            <v-icon>mdi-youtube</v-icon>
          </v-btn>
          <v-btn
            href="https://www.twitch.tv/cubingitaly"
            target="_blank"
            fab
            x-large
            color="transparent"
            elevation="0"
          >
            <v-icon>mdi-twitch</v-icon>
          </v-btn>
          <v-btn
            href="https://www.instagram.com/cubingitaly"
            target="_blank"
            fab
            x-large
            color="transparent"
            elevation="0"
          >
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn
            href="https://discord.gg/azuYQHYmTP"
            target="_blank"
            fab
            x-large
            color="transparent"
            elevation="0"
          >
            <v-icon>mdi-discord</v-icon>
          </v-btn>
          <v-btn
            href="https://t.me/cubingitaly"
            target="_blank"
            fab
            x-large
            color="transparent"
            elevation="0"
          >
            <v-icon>mdi-telegram</v-icon>
          </v-btn>
          <v-btn
            href="https://www.cubingitaly.org"
            target="_blank"
            fab
            x-large
            color="transparent"
            elevation="0"
          >
            <v-icon>mdi-web</v-icon>
          </v-btn>
        </v-col>
      </v-row>
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
};
</script>

<style scoped>

.v-expansion-panel-header{
  font-weight: 500;
  font-size: 17px;
}

h3 {
  margin-top: 50px;
}

.action-buttons {
  margin-top: 50px;
}
.social-icon {
  margin-left: 10px;
  margin-right: 10px;
}
</style>

<style>
a {
  text-decoration: none;
}
</style>