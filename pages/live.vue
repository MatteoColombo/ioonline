<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <iframe
        src="https://player.twitch.tv/?channel=gmhikaru&parent=ioodemo.herokuapp.com&muted=true&autoplay=true"
        height="600"
        width="100%"
        allowfullscreen="true"
      >
      </iframe>
      <template>
        <h1 href="#schedule" id="schedule" class="text-center">
          {{ title }}
        </h1>
        <p class="text-center">{{ desc }}</p>
      </template>

      <v-row justify="center" align="start">
        <v-col cols="12" md="6" align="center">
          <h2 align="center">{{ day1 }}</h2>
          <v-timeline dense>
            <v-timeline-item
              v-for="item in saturday"
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
        <v-col cols="12" md="6" align="center">
          <h2 align="center">{{ day1 }}</h2>
          <v-timeline dense>
            <v-timeline-item
              v-for="item in sunday"
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
      </v-row>
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
  data() {
    return {
      title: this.$t("live.title"),
      desc: this.$t("live.desc"),
      day1: this.$t("live.day1"),
      day2: this.$t("live.day2"),
      saturday: [
        {
          hour: "14:00",
          activity: "Discord",
          icon: "mdi-discord",
          color: "#8A9CFE",
        },
        {
          hour: "15:00",
          activity: "Attività 1",
          icon: "mdi-microphone",
          color: "red",
        },
        {
          hour: "16:00",
          activity: "Attività 2",
          icon: "mdi-puzzle",
          color: "orange",
        },
        {
          hour: "17:00",
          activity: "Discord",
          icon: "mdi-discord",
          color: "#8A9CFE",
        },
        {
          hour: "18:00",
          activity: "Chi vuol essere milionario?",
          icon: "mdi-chess-king",
          color: "primary",
        },
        {
          hour: "20:00",
          activity: "Cena",
          icon: "mdi-silverware-fork-knife",
          color: "brown",
        },
        {
          hour: "21:00",
          activity: "Qualcosa insieme?",
          icon: "mdi-brain",
          color: "blue",
        },
      ],
      sunday: [
        {
          hour: "15:00",
          activity: "Finale Clock",
          icon: "event-222",
          color: "primary",
        },
        {
          hour: "15:30",
          activity: "Finale 4x4x4",
          icon: "",
          color: "secondary",
        },
        {
          hour: "16:00",
          activity: "Finale 3BLD",
          icon: "",
          color: "red",
        },
        {
          hour: "16:30",
          activity: "Finale Pyraminx",
          icon: "",
          color: "purple",
        },
        {
          hour: "17:00",
          activity: "Finale 2x2x2",
          icon: "",
          color: "red",
        },
        {
          hour: "17:30",
          activity: "Finale Square-1",
          icon: "",
          color: "secondary",
        },
        {
          hour: "18:00",
          activity: "Finale 3x3x3",
          icon: "",
          color: "primary",
        },
        {
          hour: "19:00",
          activity: "Premiazioni",
          icon: "mdi-trophy",
          color: "amber",
        },
      ],
    };
  },
};
</script>