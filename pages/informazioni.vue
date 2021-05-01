<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <h1 class="text-center">{{ $t("info.title") }}</h1>

        <div
          v-for="(item, index) in $t('info.intro.sections')"
          :key="'section' + index"
        >
          <h3>{{ item.title }}</h3>
          <div>
            <v-icon large>{{ item.icon }}</v-icon>
            <span>
              <strong>{{ item.desc }}</strong>
            </span>
          </div>
          <p
            v-for="(message, mindex) in item.messages"
            :key="index + 'message' + mindex"
            v-html="message"
            class="text-justify"
          ></p>

          <ul>
            <li
              v-for="(litem, lindex) in item.list"
              :key="index + 'list' + lindex"
            >
              {{ litem }}
            </li>
          </ul>

          <p
            v-for="(message, mindex) in item.postmessages"
            :key="index + 'postmessage' + mindex"
            v-html="message"
            class="text-justify"
          ></p>
        </div>


        <h2>{{ $t("info.events.title") }}</h2>
        <v-data-table
          :headers="headers"
          :items="$t('info.events.events')"
          class="elevation-1"
          :dense="$vuetify.breakpoint.xsOnly"
          hide-default-header
          disable-sort
          hide-default-footer
          disable-pagination
          disable-filtering
          mobile-breakpoint="0"
        >
          <template v-slot:item.icon="{ item }">
            <v-icon>
              {{ item.icon }}
            </v-icon>
          </template>
        </v-data-table>

        <h2>{{ $t("info.live.title") }}</h2>

        <div>
          <v-icon large>mdi-twitch</v-icon>
          <span
            ><strong>{{ $t("info.live.twitch") }}</strong></span
          >
        </div>
        <p v-html="$t('info.live.twitchdesc')" class="text-justify"></p>

        <div>
          <v-icon large>mdi-discord</v-icon>
          <span
            ><strong>{{ $t("info.live.discord") }}</strong></span
          >
        </div>
        <p v-html="$t('info.live.discorddesc')" class="text-justify"></p>

        <h2>{{ $t("info.rules.title") }}</h2>
        <p
          v-for="item in $t('info.rules.desc')"
          :key="item"
          v-html="item"
          class="text-justify"
        ></p>
        <ul>
          <li
            v-for="item in $t('info.rules.rules')"
            :key="item"
            v-html="item"
            class="text-justify"
          ></li>
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
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.$t("info.desc"),
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.$t("info.title"),
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.$t("info.desc"),
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.$t("info.title"),
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.$t("info.desc"),
        },
      ],
    };
  },
  data() {
    return {
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
  color: #ec95b9;
}

h3 {
  margin-top: 10px;
  color: #ec95b9;
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
