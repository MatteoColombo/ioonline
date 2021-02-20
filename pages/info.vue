<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <h1 id="schedule" class="text-center">{{ title }}</h1>

        <h3>{{ intro.regtitle }}</h3>
        <div>
          <v-icon large>mdi-account-plus</v-icon>
          <span
            ><strong>{{ intro.regwhen }}</strong></span
          >
        </div>
        <p v-html="intro.regdesc" class="text-justify"></p>
        <p v-html="intro.regdesc2" class="text-justify"></p>

        <h3>{{ intro.whentitle }}</h3>
        <div>
          <v-icon large>mdi-calendar</v-icon>
          <span
            ><strong>{{ intro.when }}</strong></span
          >
        </div>
        <p v-html="intro.whendesc" class="text-justify"></p>
        <p v-html="intro.whendesc1" class="text-justify"></p>

        <h3>{{ intro.resulttitle }}</h3>
        <div>
          <v-icon large>mdi-trophy</v-icon> <strong>{{ intro.result }}</strong>
        </div>
        <p v-html="intro.resultdesc" class="text-justify"></p>
        <ul>
          <li v-for="item in intro.resulthours" :key="item">{{ item }}</li>
        </ul>
        <p v-html="intro.resultdesc1" class="text-justify"></p>
        <p v-html="intro.resultdesc2" class="text-justify"></p>
        <p v-html="intro.resultdesc3" class="text-justify"></p>

        <h2>{{ events.title }}</h2>
        <v-data-table
          :headers="headers"
          :items="events.events"
          class="elevation-1"
          light
          :dense="$vuetify.breakpoint.xsOnly"
          :hide-default-header="$vuetify.breakpoint.smAndUp"
          disable-sort
          hide-default-footer
          disable-pagination
          disable-filtering
        >
          <template v-slot:item.icon="{ item }">
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </template>
        </v-data-table>

        <h2>{{ live.title }}</h2>

        <div>
          <v-icon large>mdi-twitch</v-icon>
          <span
            ><strong>{{ live.twitch }}</strong></span
          >
        </div>
        <p v-html="live.twitchdesc" class="text-justify"></p>


        <div>
          <v-icon large>mdi-discord</v-icon>
          <span
            ><strong>{{ live.discord }}</strong></span
          >
        </div>
        <p v-html="live.discorddesc" class="text-justify"></p>


        <h2>{{ rules.title }}</h2>
        <p v-for="item in rules.desc" :key="item" v-html="item" class="text-justify"></p>
        <ul>
          <li v-for="item in rules.rules" :key="item" v-html="item"  class="text-justify"></li>
        </ul>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  head() {
    return {
      title: this.$t("info.title"),
    };
  },
  data() {
    return {
      title: this.$t("info.title"),
      intro: this.$t("info.intro"),
      headers: [
        {
          text: "",
          value: "icon",
        },
        {
          text: "Evento",
          value: "name",
        },
        {
          text: "Formato",
          value: "format",
        },
        {
          text: "",
          value: "toNext",
        },
      ],
      events: this.$t("info.events"),
      live: this.$t("info.live"),
      rules: this.$t("info.rules"),
    };
  },
};
</script>



<style scoped>
p {
  margin: 0;
}

h2 {
  margin-top: 20px;
}

h3 {
  margin-top: 10px;
}

a {
  text-decoration: none;
}
</style>

<style>
a {
  text-decoration: none;
}
</style>
