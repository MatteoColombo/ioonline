<template>
  <div>
    <h3 class="text-center">{{ $t("faq.questions") }}</h3>
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
  </div>
</template>

<style scoped>
h3 {
  margin-top: 50px;
}

.social-icon {
  margin-left: 10px;
  margin-right: 10px;
}
</style>