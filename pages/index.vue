<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <v-img class="intro" aspect-ratio="2.5293" src="/ioo-logo.svg" />

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
            to="/informazioni"
            color="primary"
            >{{ $t("home.info") }}</v-btn
          ></v-col
        >
        <v-col cols="12" md="6"
          ><v-btn
            width="100%"
            height="70px"
            elevation="2"
            x-large
            to="/registrazione"
            color="secondary"
            >{{ $t("home.register") }}</v-btn
          ></v-col
        >
      </v-row>
      <div class="contacts">
        <v-row>
          <v-col cols="12" align="center">
            <v-btn
              href="https://www.facebook.com/cubingitaly"
              target="_blank"
              fab
              :x-large="$vuetify.breakpoint.mdAndUp"
              :x-small="$vuetify.breakpoint.smAndDown"
              :small="$vuetify.breakpoint.xsOnly"
              color="transparent"
              elevation="0"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn
              href="https://www.youtube.com/user/CubingItaly"
              target="_blank"
              fab
              :x-large="$vuetify.breakpoint.mdAndUp"
              :x-small="$vuetify.breakpoint.smAndDown"
              :small="$vuetify.breakpoint.xsOnly"
              color="transparent"
              elevation="0"
            >
              <v-icon>mdi-youtube</v-icon>
            </v-btn>
            <v-btn
              href="https://www.twitch.tv/cubingitaly"
              target="_blank"
              fab
              :x-large="$vuetify.breakpoint.mdAndUp"
              :x-small="$vuetify.breakpoint.smAndDown"
              :small="$vuetify.breakpoint.xsOnly"
              color="transparent"
              elevation="0"
            >
              <v-icon>mdi-twitch</v-icon>
            </v-btn>
            <v-btn
              href="https://www.instagram.com/cubingitaly"
              target="_blank"
              fab
              :x-large="$vuetify.breakpoint.mdAndUp"
              :x-small="$vuetify.breakpoint.smAndDown"
              :small="$vuetify.breakpoint.xsOnly"
              color="transparent"
              elevation="0"
            >
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn
              href="https://discord.gg/azuYQHYmTP"
              target="_blank"
              fab
              :x-large="$vuetify.breakpoint.mdAndUp"
              :x-small="$vuetify.breakpoint.smAndDown"
              :small="$vuetify.breakpoint.xsOnly"
              color="transparent"
              elevation="0"
            >
              <v-icon>mdi-discord</v-icon>
            </v-btn>
            <v-btn
              href="https://t.me/cubingitaly"
              target="_blank"
              fab
              :x-large="$vuetify.breakpoint.mdAndUp"
              :x-small="$vuetify.breakpoint.smAndDown"
              :small="$vuetify.breakpoint.xsOnly"
              color="transparent"
              elevation="0"
            >
              <v-icon>mdi-telegram</v-icon>
            </v-btn>
            <v-btn
              href="https://www.cubingitaly.org"
              target="_blank"
              fab
              :x-large="$vuetify.breakpoint.mdAndUp"
              :x-small="$vuetify.breakpoint.smAndDown"
              :small="$vuetify.breakpoint.xsOnly"
              color="transparent"
              elevation="0"
            >
              <v-icon>mdi-web</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </div>
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
h3,
.intro,
.contacts,
.action-buttons {
  margin-top: 30px;
}

.social-icon {
  margin-left: 10px;
  margin-right: 10px;
}

.cubing-italy {
  background-color: orange;
  background-image: url("http://localhost:3000/logo.png");
}
</style>