<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <v-img class="intro" aspect-ratio="1.428" src="/logo.svg" />

        <h3 class="text-center">{{ $t("home.desc") }}</h3>
        <p class="text-center">{{ $t("home.subdesc") }}</p>
      </template>
      <v-row class="action-buttons">
        <v-col v-if="!isRegistrationClosed" cols="12" md="6">
           <SecondaryButton 
          :text="$t('home.register')"
          sendTo="/registrazione"/>
          </v-col>
        <v-col v-if="isRegistrationClosed" cols="12" md="6">
          <SecondaryButton 
          :text="$t('home.compete')"
          sendTo="/partecipa"/>
        </v-col>
        <v-col cols="12" md="6">
          <PrimaryButton 
          :text="$t('home.info')"
          sendTo="/informazioni"/>
        </v-col>
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
  mounted() {
    this.isRegistrationClosed = this.checkIsRegistrationClosed();
    if (!this.isRegistrationClosed)
      window.setInterval(() => {
        this.isRegistrationClosed = this.checkIsRegistrationClosed();
        if (this.isRegistrationClosed) window.clearInterval();
      }, 1000);
  },
  data() {
    return {
      isRegistrationClosed: true,
      registrationCloses: process.env.registrationCloses,
    };
  },
  methods: {
    checkIsRegistrationClosed() {
      var now = Date.now();
      return now >= this.registrationCloses;
    },
  },
};
</script>


<style scoped>
.intro {
  margin: 0 auto;
  width: 70%;
}

h3,
.intro .action-buttons {
  margin-top: 30px;
}
</style>