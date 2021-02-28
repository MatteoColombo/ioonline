<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="10" xl="8" align="center" justify="center">
      <template>
        <h1 class="text-center">{{ $t("register.title") }}</h1>

        <RegForm
          v-if="$auth.loggedIn && isRegistrationOpened"
          :regClosed="isRegistrationClosed"
        />

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
      isRegistrationOpened: false,
      isRegistrationClosed: true,
      registrationOpens: 1614507600000,
      registrationCloses: 1614508200000,
      // registrationOpens: 1614517200000,
      //registrationCloses: 1615503600000,
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
  },
};
</script>

