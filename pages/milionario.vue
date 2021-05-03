<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8" align="center">
      <template>
        <h1 class="text-center">{{ $t("millionaire.title") }}</h1>
        <img src="/milionario.png" width="800"/>

        <div class="text-justify" style="max-width:800px;">
          <h2>{{ $t("millionaire.what") }}</h2>
          <p
            v-for="(item, index) in $t('millionaire.whatdesc')"
            :key="'desc' + index"
            v-html="item"
          ></p>

          <h2>{{ $t("millionaire.when") }}</h2>
          <p v-html="$t('millionaire.whendesc')"></p>

          <h2>{{ $t("millionaire.how") }}</h2>
          <p
            v-for="(item, index) in $t('millionaire.howdesc')"
            :key="'how' + index"
            v-html="item"
          ></p>

          <h2>{{ $t("millionaire.prizes") }}</h2>
          <p v-html="$t('millionaire.prizedesc')"></p>
        </div>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("millionaire.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("millionaire.desc"),
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("millionaire.title"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("millionaire.desc"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("millionaire.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("millionaire.desc"),
        },
      ],
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
}
</style>