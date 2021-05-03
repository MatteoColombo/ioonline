<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8" justify="center" align="center">
      <template>
        <h2>{{ $t("login.title") }}</h2>
        <div style="margin-top: 20px" v-if="!isLoading">
          <div class="instructions">
            <p
              v-for="(item, index) in $t('login.desc')"
              :key="index"
              class="text-justify"
              v-html="item"
            />
          </div>
          <v-btn
            @click="login"
            color="secondary"
            x-large
            elevation="1"
            class="black--text"
            ><img width="30" src="/WCAlogo_notext.svg"/>
            <span style="margin: 20px">{{ $t("generic.login") }}</span></v-btn
          >
        </div>
        <div v-else>
        <img src="/loading.gif" width="250" aspect-ratio="1"/>
        </div>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    login() {
      this.isLoading = true;
      this.$auth.loginWith("social");
    },
  },
  created() {
    this.isLoading = true;
  },
  mounted() {
    let url = window.location.href.split("?");
    this.isLoading = url != null && url.length > 1;
  },
  data() {
    return {
      isLoading: true,
    };
  },
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

<style>
a {
  text-decoration: none;
}
</style>

<style scoped>
p {
  margin-top: 0px;
  margin-bottom: 0px;
}

.instructions {
  max-width: 700px;
  margin: 0 auto;
}

a {
  text-decoration: none;
}
.v-btn {
  margin-top: 20px;
}
</style>