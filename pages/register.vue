<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <h1 id="schedule" class="text-center">{{ $t("register.title") }}</h1>

        <v-row justify="center" align="center">
          <v-col cols="12" lg="6">
            <v-timeline dense>
              <v-timeline-item
                v-for="item in $t('register.steps')"
                :key="item.hour"
                fill-dot
                v-bind="item"
              >
                <v-card class="elevation-2">
                  <v-card-title align="justify">
                    {{ item.event }}
                  </v-card-title>
                  <v-card-subtitle align="start">{{
                    item.date
                  }}</v-card-subtitle>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-col>
        </v-row>

        <h2 class="text-center timer-desc">{{ $t("register.openin") }}</h2>
        <div align="center" class="timer-container">
          <table>
            <tr class="timer">
              <td>12</td>
              <td>26</td>
              <td>07</td>
              <td>12</td>
            </tr>
            <tr class="timer-desc">
              <td>{{ $t("register.days") }}</td>
              <td>{{ $t("register.hours") }}</td>
              <td>{{ $t("register.minutes") }}</td>
              <td>{{ $t("register.seconds") }}</td>
            </tr>
          </table>
        </div>
      </template>
    </v-col>
  </v-row>
</template>

<script>
const registrations = [
  {
    id: "333",
    name: "3x3x3",
    registered: false,
  },
  {
    id: "333bf",
    name: "3BLD",
    registered: false,
  },
  {
    id: "333fm",
    name: "FMC",
    registered: false,
  },
  {
    id: "222",
    name: "2x2x2",
    registered: false,
  },
  {
    id: "444",
    name: "4x4x4",
    registered: false,
  },
  {
    id: "",
    name: "3x3x3",
    registered: false,
  },
  {
    id: "333",
    name: "3x3x3",
    registered: false,
  },
  {
    id: "333",
    name: "3x3x3",
    registered: false,
  },
  {
    id: "333",
    name: "3x3x3",
    registered: false,
  },
];
export default {
  head() {
    return {
      title: this.$t("register.title"),
    };
  },
};
</script>

<style scoped>
.timer {
  border: 1px solid white;
  font-size: 96px;
  font-weight: 700;
}

.timer td {
  border: 8px solid #00aa82;
  padding-left: 10px;
  padding-right: 10px;
  padding: 0 10px;
}

.timer-desc {
  text-align: center;
  font-size: 22px;
}

.timer-desc {
  margin-top: 50px;
}

.timer-container {
  margin-top: 20px;
}
</style>