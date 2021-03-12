<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="10" xl="8" align="center" justify="center">
      <template>
        <h1 class="text-center">{{ $t("register.title") }}</h1>

        <RegForm
          v-if="$auth.loggedIn && isRegistrationOpened"
          :regClosed="isRegistrationClosed"
        />

        <v-btn
          v-else-if="!$auth.loggedIn"
          @click="login"
          color="secondary"
          x-large
          elevation="1"
          ><v-img width="30px" src="/WCAlogo_notext.svg"></v-img>
          <span style="margin: 20px">{{ $t("generic.login") }}</span></v-btn
        >

        <HowToRegister />

        <div v-if="!isRegistrationOpened && !isRegistrationClosed">
          <RegSchedule :startAt="0" />
          <h2 class="text-center timer-desc">{{ $t("register.openin") }}</h2>
          <RegTimer :dateInMilliseconds="registrationOpens / 1000" />
        </div>
        <div v-else>
          <h2 class="text-center timer-desc">{{ $t("register.closein") }}</h2>
          <RegTimer :dateInMilliseconds="registrationCloses / 1000" />
        </div>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  mounted() {
    this.isRegistrationOpened = this.checkIsRegistrationOpened();
    this.isRegistrationClosed = this.checkIsRegistrationClosed();
    window.setInterval(() => {
      this.isRegistrationOpened = this.checkIsRegistrationOpened();
      this.isRegistrationClosed = this.checkIsRegistrationClosed();
    }, 1000);
  },
  head() {
    return {
      title: this.$t("register.title"),
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("register.desc"),
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("register.title"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("register.desc"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("register.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("register.desc"),
        },
      ],
    };
  },
  data() {
    return {
      isRegistrationOpened: true,
      isRegistrationClosed: true,
      registrationOpens: process.env.registrationOpens,
      registrationCloses: process.env.registrationCloses,
    };
  },
  methods: {
    checkIsRegistrationOpened() {
      var now = Date.now();
      return now >= this.registrationOpens;
    },
    checkIsRegistrationClosed() {
      var now = Date.now();
      return now >= this.registrationCloses;
    },
    login() {
      this.$auth.loginWith("social");
    },
  },
};
</script>

