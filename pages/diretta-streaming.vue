<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <div class="container">
        <iframe
          src="https://player.twitch.tv/?channel=cubingitalyu&parent=www.online.cubingitaly.org&muted=true&autoplay=true"
          class="responsive-iframe"
          allowfullscreen="true"
        >
        </iframe>
      </div>
      <template>
        <h1 href="#schedule" id="schedule" class="text-center">
          {{ $t("live.title") }}
        </h1>
        <p class="text-center" v-html="$t('live.desc')"></p>
      </template>

      <!-- <v-row justify="center" align="start">
        <v-col
          cols="12"
          md="6"
          align="center"
          v-for="day in $t('live.days')"
          :key="day.day"
        >
          <h2 align="center">{{ day.day }}</h2>
          <v-timeline dense>
            <v-timeline-item
              v-for="item in day.schedule"
              :key="item.hour"
              fill-dot
              v-bind="item"
            >
              <v-card class="elevation-2">
                <v-card-title align="justify">
                  {{ item.activity }}
                </v-card-title>
                <v-card-subtitle align="start">{{ item.hour }}</v-card-subtitle>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row> -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("live.title"),
    };
  },
};
</script>

<style>
.v-card__text,
.v-card__title {
  word-break: normal !important;
}

a {
  text-decoration: none;
}
</style>

<style scoped>
#schedule{
  margin-top: 20px;
}

.container {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}
.responsive-iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

</style>