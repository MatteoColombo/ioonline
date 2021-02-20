<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" xl="8">
      <template>
        <h1 id="schedule" class="text-center">{{ $t("info.title") }}</h1>

        <h3>{{ $t("info.intro.regtitle") }}</h3>
        <div>
          <v-icon large>mdi-account-plus</v-icon>
          <span
            ><strong>{{ $t("info.intro.regwhen") }}</strong></span
          >
        </div>
        <p v-html="$t('info.intro.regdesc')" class="text-justify"></p>

        <h3>{{ $t("info.intro.whentitle") }}</h3>
        <div>
          <v-icon large>mdi-calendar</v-icon>
          <span
            ><strong>{{ $t("info.intro.when") }}</strong></span
          >
        </div>
        <p v-html="$t('info.intro.whendesc')" class="text-justify"></p>
        <p v-html="$t('info.intro.whendesc1')" class="text-justify"></p>

        <h3>{{ $t("info.intro.resulttitle") }}</h3>
        <div>
          <v-icon large>mdi-trophy</v-icon> <strong>{{ $t("info.intro.result") }}</strong>
        </div>
        <p v-html="$t('info.intro.resultdesc')" class="text-justify"></p>
        <ul>
          <li v-for="item in $t('info.intro.resulthours')" :key="item">{{ item }}</li>
        </ul>
        <p v-html="$t('info.intro.resultdesc1')" class="text-justify"></p>
        <p v-html="$t('info.intro.resultdesc2')" class="text-justify"></p>

        <h2>{{ $t('info.events.title') }}</h2>
        <v-data-table
          :headers="headers"
          :items="$t('info.events.events')"
          class="elevation-1"
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

        <h2>{{ $t('info.live.title') }}</h2>

        <div>
          <v-icon large>mdi-twitch</v-icon>
          <span
            ><strong>{{ $t('info.live.twitch') }}</strong></span
          >
        </div>
        <p v-html="$t('info.live.twitchdesc')" class="text-justify"></p>

        <div>
          <v-icon large>mdi-discord</v-icon>
          <span
            ><strong>{{ $t('info.live.discord') }}</strong></span
          >
        </div>
        <p v-html="$t('info.live.discorddesc')" class="text-justify"></p>

        <h2>{{ $t('info.rules.title') }}</h2>
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
    };
  }
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
